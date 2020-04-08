'use strict'
const debug = require('debug')('subber:client')
const grpc = require('grpc')
const protoLoader = require('@grpc/proto-loader')

const { CstServerIP, CstServerPort } = require('../Cst')


const PROTO_PATH = __dirname + '/Subber.proto'

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
  }

  //#region OXYGEN
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
        return resolve(respone.status)
      })
    })
  }

  StopChargeAir() {
    return new Promise((resolve, reject) => {
      this.airClient.ChargeStop({}, (err, respone) => {
        if (err) {
          return reject(err)
        }
        return resolve(respone.status)
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
        return resolve(respone.status)
      })
    })
  }

  BlowStop() {
    return new Promise((resolve, reject) => {
      this.balastClient.BlowStop({}, (err, respone) => {
        if (err) {
          return reject(err)
        }
        return resolve(respone.status)
      })
    })
  }

  FillStart() {
    return new Promise((resolve, reject) => {
      this.balastClient.FillStart({}, (err, respone) => {
        if (err) {
          return reject(err)
        }
        return resolve(respone.status)
      })
    })
  }

  FillStop() {
    return new Promise((resolve, reject) => {
      this.balastClient.FillStop({}, (err, respone) => {
        if (err) {
          return reject(err)
        }
        return resolve(respone.status)
      })
    })
  }
  //#endregion

}
