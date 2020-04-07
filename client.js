const grpc = require('grpc')
const protoLoader = require('@grpc/proto-loader')
const { CstServerIP, CstServerPort } = require('./Cst')

const PROTO_PATH = __dirname + '/protos/Subber.proto'

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
    this.serverIP = serverIP
    this.serverPort = serverPort
  }

  GetOxygen() {
    const oxygenClient = new proto.Oxygen(`${this.serverIP}:${this.serverPort}`,
      grpc.credentials.createInsecure())

    return new Promise((resolve, reject) => {
      oxygenClient.Get({}, (err, respone) => {
        if (err) {
          return reject(err)
        }
        return resolve(respone.value)
      })
    })
  }

  SetOxygen(newValue) {
    const oxygenClient = new proto.Oxygen(`${this.serverIP}:${this.serverPort}`,
      grpc.credentials.createInsecure())

    return new Promise((resolve, reject) => {
      oxygenClient.Set({ newValue }, (err, respone) => {
        if (err) {
          return reject(err)
        }
        return resolve(respone.value)
      })
    })
  }

  ChangeOxygen(delta) {
    const oxygenClient = new proto.Oxygen(`${this.serverIP}:${this.serverPort}`,
      grpc.credentials.createInsecure())

    return new Promise((resolve, reject) => {
      oxygenClient.ChangeByDelta({ delta }, (err, respone) => {
        if (err) {
          return reject(err)
        }
        return resolve(respone.value)
      })
    })
  }
}

