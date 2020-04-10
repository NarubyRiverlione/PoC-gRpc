'use strict'
const debug = require('debug')('subber:server')
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
  statusUpdates = call
  setInterval(() => {
    statusUpdates.write({ air: subber.Air, depth: subber.Depth, balast: subber.balast })
    if (subber.ExtraStatusTxt) subber.ClearExtraStatus() // only show extra status message one time
  }, CstChanges.Interval)
}

const EndStatusUpdates = () => {
  if (statusUpdates) statusUpdates.end()
  return ({ status: 'Status updates stopped' })
}
//#endregion

//#region Air 
const getAir = (call, callback) => {
  debug('GET air: ' + subber.Air)
  callback(null, { value: subber.Air })
}
// const SetAir = (call, callback) => {
//   const { request: { newValue } } = call
//   subber.SetAir(newValue)
//   return getAir(call, callback)
// }
const StartChargeAir = (call, callback) => {
  subber.StartChargeAir()
  callback(null, { status: 'Charging air supply' })
}
const StopChargeAir = (call, callback) => {
  subber.StopChargeAir()
  callback(null, { status: 'Stopped charging air supply' })
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
  callback(null, { status: 'Blowing' })
}
const BlowStop = (call, callback) => {
  subber.BlowStop()
  callback(null, { status: 'Stop blowing' })
}
const FillStart = (call, callback) => {
  subber.FillStart()
  callback(null, { status: 'Filling' })
}
const FillStop = (call, callback) => {
  subber.FillStop()
  callback(null, { status: 'Stop Filling' })
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
  server.addService(proto.Conn.service, { StartStatusUpdates: StatusUpdates, EndStatusUpdates })
  server.addService(proto.Air.service, { Info: getAir, ChargeStart: StartChargeAir, ChargeStop: StopChargeAir })
  server.addService(proto.Depth.service, { Info: getDepth })
  server.addService(proto.Balast.service, { Info: getBalast, BlowStart, BlowStop, FillStart, FillStop })
  server.bind(`${serverIP}:${serverPort}`, grpc.ServerCredentials.createInsecure())
  server.start()
}

server()