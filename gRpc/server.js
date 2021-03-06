'use strict'
const debug = require('debug')('subber:server')
const fs = require('fs')
const path = require('path')

const grpc = require('grpc')
const protoLoader = require('@grpc/proto-loader')

const { CstServerIP, CstServerPort, CstChanges } = require('./Cst')

const Subber = require('./subber')


const PROTO_PATH = __dirname + '/protoc/Subber.proto'

const packageDefinition = protoLoader.loadSync(
  PROTO_PATH,
  {
    keepCase: true,
    longs: String,
    enums: String,
    defaults: true,
    oneofs: true
  })

// The protoDescriptor object has the full package hierarchy
const proto = grpc.loadPackageDefinition(packageDefinition)

// initialize Subber
const subber = new Subber()

// status update stream
let statusUpdates = null

//#region  CONN
const StatusUpdates = (call) => {

  setInterval(() => {
    // update depth
    subber.UpdateDepth()

    // get sub status
    const connResponse = {
      air: subber.Air, depth: subber.Depth, balast: subber.Balast,
      message: subber.ExtraStatusTxt,
      airCharging: subber.IsAirCharging(),
      balastFilling: subber.IsBalastFilling(),
      balastBlowing: subber.IsBalastBlowing(),
    }
    call.write(connResponse)

    // remove status message when it's passed to the client
    subber.ClearExtraStatus()
  }, CstChanges.Interval)
}

const EndStatusUpdates = () => {
  if (statusUpdates) statusUpdates.end()
  return ({ message: 'Status updates stopped' })
}
const Setup = (call, cb) => {
  const { air, depth, balast } = call.request
  subber.Setup(air, depth, balast)

  const connResponse = {
    air: subber.Air, depth: subber.Depth, balast: subber.Balast,
    message: subber.ExtraStatusTxt,
    airCharging: subber.IsAirCharging(),
    balastFilling: subber.IsBalastFilling(),
    balastBlowing: subber.IsBalastBlowing(),
  }
  cb(null, connResponse)
}
//#endregion

//#region Air 
const getAir = (call, callback) => {
  debug('GET air: ' + subber.Air)
  callback(null, { value: subber.Air })
}

const StartChargeAir = (call, callback) => {
  subber.StartChargeAir()
  callback(null, { status: subber.IsAirCharging(), message: 'Charging air supply' })
}
const StopChargeAir = (call, callback) => {
  subber.StopChargeAir()
  callback(null, { status: false, message: 'Stopped charging air supply' })
}

//#endregion

//#region Depth
const getDepth = (call, callback) => {
  debug('GET Depth: ' + subber.Depth)
  callback(null, { value: subber.Depth })
}
//#endregion

//#region Balast
const getBalast = (call, callback) => {
  debug('GET Balast: ' + subber.Balast)
  callback(null, { value: subber.Balast })
}

const BlowStart = (call, callback) => {
  subber.BlowStart()
  callback(null, { status: subber.IsBalastBlowing(), message: 'Blowing' })
}
const BlowStop = (call, callback) => {
  subber.BlowStop()
  callback(null, { status: false, message: 'Stop blowing' })
}
const FillStart = (call, callback) => {
  subber.FillStart()
  callback(null, { status: subber.IsBalastFilling(), message: 'Filling' })
}
const FillStop = (call, callback) => {
  subber.FillStop()
  callback(null, { status: false, message: 'Stop Filling' })
}

//#endregion


/* Starts an RPC server that receives requests 
 first argument = server IP
 second argument = server port
 */
const server = () => {
  const Args = process.argv
  const serverIP = Args[2] || CstServerIP
  const serverPort = Args[3] || CstServerPort

  const server = new grpc.Server()
  server.addService(proto.Conn.service, { StartStatusUpdates: StatusUpdates, EndStatusUpdates, Setup })
  server.addService(proto.Air.service, { Info: getAir, ChargeStart: StartChargeAir, ChargeStop: StopChargeAir })
  server.addService(proto.Depth.service, { Info: getDepth })
  server.addService(proto.Balast.service, { Info: getBalast, BlowStart, BlowStop, FillStart, FillStop })

  const certPath = './Certs/'
  const CA = fs.readFileSync(certPath + 'ca.crt')
  const srvCert = fs.readFileSync(certPath + 'server.crt')
  const priv = fs.readFileSync(certPath + 'server.key')
  const keyPair = [{ private_key: priv, cert_chain: srvCert }]
  const ssl_credentials = grpc.ServerCredentials.createSsl(CA, keyPair, true)
  server.bind(`${serverIP}:${serverPort}`, ssl_credentials)
  // server.bind(`${serverIP}:${serverPort}`, grpc.ServerCredentials.createInsecure())
  server.start()
}

server()