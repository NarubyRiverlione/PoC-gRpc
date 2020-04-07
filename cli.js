'use strict'

const { CstCmd, CstService, CstHelpTxt, CstUnknown } = require('./Cst.js')
const Client = require('./Client')

const Args = process.argv
// console.log(Args)
const rpcService = Args[2] ? Args[2].toLowerCase() : null
const rpcCmd = Args[3] ? Args[3].toLowerCase() : null

const client = new Client()

const CmdOxygen = () => {
  switch (rpcCmd) {
    case CstCmd.Get:
      client.GetOxygen()
        .then(o2 =>
          console.log(`OXYGEN at ${o2}%`))
        .catch(err =>
          console.error(err.message))
      break


    default:
      console.error(CstUnknown)
  }
}


switch (rpcService) {
  /*
    case CstCmd.Start:
    client.StartInterval()
    break
    
  case CstCmd.Stop:
    client.StopInterval()
    break

  case CstCmd.Info:
    console.log(Client.Info())
    break
*/
  case CstService.Oxygen:
    CmdOxygen()
    break

  case CstCmd.Help:
    console.log(CstHelpTxt)
    break

  default:
    console.error(CstUnknown)
}

