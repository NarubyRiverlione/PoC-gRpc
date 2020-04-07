'use strict'

const { CstCmd } = require('./Cst')
const Client = require('./Client')

const Args = process.argv
// console.log(Args)
const rpcCmd = Args[2] ? Args[2].toLowerCase() : console.error('Geen gRpc functie opgegeven')

const client = new Client('server naam')

switch (rpcCmd) {
  case CstCmd.Start:
    client.StartInterval()
    break

  case CstCmd.Stop:
    client.StopInterval()
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