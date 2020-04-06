'use strict'
module.exports = class gRpcClient {
  constructor(server) {
    this.server = server
  }

  Start() {
    console.log('Starten ...')

  }

  Stop() {
    console.log('Stoppen ...')
  }

  Info() {
    return (`INFO: server = ${this.server}`)
  }

}