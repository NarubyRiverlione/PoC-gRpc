'use strict'
const fs = require('fs')
const debug = require('debug')('subber:client')
const grpc = require('grpc')
const protoLoader = require('@grpc/proto-loader')

const { CstServerIP, CstServerPort } = require('../gRpc/Cst')


const PROTO_PATH = __dirname + '/../gRpc/protoc/Subber.proto'

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


module.exports = class Client {
  constructor(serverIP = CstServerIP, serverPort = CstServerPort) {
    console.log(`connecting to ${serverIP} on port ${serverPort}`)
    const certPath = './Certs/'
    const CA = fs.readFileSync(certPath + 'ca.crt')
    const clientCert = fs.readFileSync(certPath + 'client.crt')
    const privateKey = fs.readFileSync(certPath + 'client.key')

    const ssl_credentials = grpc.credentials.createSsl(CA, privateKey, clientCert)

    this.airClient = new proto.Air(`${serverIP}:${serverPort}`, ssl_credentials)
    // grpc.credentials.createInsecure())

    this.depthClient = new proto.Depth(`${serverIP}:${serverPort}`, ssl_credentials)
    // grpc.credentials.createInsecure())

    this.balastClient = new proto.Balast(`${serverIP}:${serverPort}`, ssl_credentials)
    // grpc.credentials.createInsecure())

    this.connClient = new proto.Conn(`${serverIP}:${serverPort}`, ssl_credentials)
    // grpc.credentials.createInsecure())

  }

  //#region  CONN
  ConnStatus(cb, errorCb, endCb) {
    const statusStream = this.connClient.StartStatusUpdates({})
    statusStream.on('data', (data) => {
      if (cb) cb(data)
    })
    statusStream.on('error', (error) => {
      if (errorCb) errorCb(error)
    })
    statusStream.on('end', (status) => {
      if (endCb) endCb('Status updates ended because: ' + status)
    })
  }

  EndStatusUpdates() {
    return new Promise((resolve, reject) => {
      this.connClient.EndStatusUpdates({}, (err, respone) => {
        if (err) {
          return reject(err)
        }
        return resolve(respone.status)
      })
    })
  }
  Setup({ air, depth, balast }) {
    return new Promise((resolve, reject) => {
      this.connClient.Setup({ air, depth, balast }, (err, respone) => {
        if (err) {
          return reject(err)
        }
        return resolve(respone)
      })
    })
  }
  //#endregion

  //#region AIR
  GetAir() {
    return new Promise((resolve, reject) => {
      this.airClient.Info({}, (err, respone) => {
        if (err) {
          return reject(err)
        }
        return resolve(respone.value)
      })
    })
  }

  StartChargeAir() {
    return new Promise((resolve, reject) => {
      this.airClient.ChargeStart({}, (err, respone) => {
        if (err) {
          return reject(err)
        }
        return resolve(respone)
      })
    })
  }

  StopChargeAir() {
    return new Promise((resolve, reject) => {
      this.airClient.ChargeStop({}, (err, respone) => {
        if (err) {
          return reject(err)
        }
        return resolve(respone)
      })

    })
  }
  //#endregion


  //#region DEPTH
  GetDepth() {
    return new Promise((resolve, reject) => {
      this.depthClient.Info({}, (err, respone) => {
        if (err) {
          return reject(err)
        }
        return resolve(respone.value)
      })
    })
  }
  //#endregion

  //#region BALAST
  GetBalast() {
    return new Promise((resolve, reject) => {
      this.balastClient.Info({}, (err, respone) => {
        if (err) {
          return reject(err)
        }
        return resolve(respone.value)
      })
    })
  }

  BlowStart() {
    return new Promise((resolve, reject) => {
      this.balastClient.BlowStart({}, (err, respone) => {
        if (err) {
          return reject(err)
        }
        return resolve(respone)
      })
    })
  }

  BlowStop() {
    return new Promise((resolve, reject) => {
      this.balastClient.BlowStop({}, (err, respone) => {
        if (err) {
          return reject(err)
        }
        return resolve(respone)
      })
    })
  }

  FillStart() {
    return new Promise((resolve, reject) => {
      this.balastClient.FillStart({}, (err, respone) => {
        if (err) {
          return reject(err)
        }
        return resolve(respone)
      })
    })
  }

  FillStop() {
    return new Promise((resolve, reject) => {
      this.balastClient.FillStop({}, (err, respone) => {
        if (err) {
          return reject(err)
        }
        return resolve(respone)
      })
    })
  }
  //#endregion

}
