'use strict'
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
    this.airClient = new proto.Air(`${serverIP}:${serverPort}`,
      grpc.credentials.createInsecure())

    this.depthClient = new proto.Depth(`${serverIP}:${serverPort}`,
      grpc.credentials.createInsecure())

    this.balastClient = new proto.Balast(`${serverIP}:${serverPort}`,
      grpc.credentials.createInsecure())

    this.connClient = new proto.Conn(`${serverIP}:${serverPort}`,
      grpc.credentials.createInsecure())
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