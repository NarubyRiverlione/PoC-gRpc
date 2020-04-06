'use strict'

const { CstCmd } = require('./Cst')
const gRpcClient = require('./Client/gRpcClient')

const Args = process.argv
// console.log(Args)
const rpcCmd = Args[2] ? Args[2].toLowerCase() : console.error('Geen gRpc functie opgegeven')

const Client = new gRpcClient('server naam')

switch (rpcCmd) {
  case CstCmd.Start:
    Client.Start()
    break

  case CstCmd.Stop:
    Client.Stop()
    break

  case CstCmd.Info:
    console.log(Client.Info())
    break

  case CstCmd.Help:
    console.log(`Deze gRpc client heeft de volgende commando's :
    start : 
    stop  : 
    info  : 
    `)
    break

  default:
    console.error(`Onbekende gRpc functie : ${rpcCmd}
    Bekijk de geldige commando's via 'client help'`)
}