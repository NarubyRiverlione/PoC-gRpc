/* eslint-disable no-case-declarations */
'use strict'

const { CstCmd, CstService, CstHelpTxt, CstUnknown } = require('./Cst.js')
const Client = require('./Client')

const Args = process.argv
// console.log(Args)
const rpcService = Args[2] ? Args[2].toLowerCase() : null
const rpcCmd = Args[3] ? Args[3].toLowerCase() : null
const rpcValue = Args[4]

const client = new Client()

const parseArgAsInt = (arg) => {
  if (!arg) {
    console.error('Set needs a value')
    return null
  }
  const intValue = parseInt(arg, 10)
  if (!intValue) {
    console.error('Value needs te be a integer')
    return null
  }
  return intValue
}

const CmdOxygen = () => {
  switch (rpcCmd) {
    case CstCmd.Get:
      client.GetOxygen()
        .then(o2 => console.log(`OXYGEN at ${o2}%`))
        .catch(err => console.error(err.message))
      break

    case CstCmd.Set:
      const newValue = parseArgAsInt(rpcValue)
      client.SetOxygen(newValue)
        .then(o2 => console.log(`OXYGEN now at ${o2}%`))
        .catch(err => console.error(err.message))
      break

    case CstCmd.Change:
      const delta = parseArgAsInt(rpcValue)
      client.ChangeOxygen(delta)
        .then(o2 => console.log(`OXYGEN now at ${o2}%`))
        .catch(err => console.error(err.message))
      break


    default:
      console.error(CstUnknown)
  }
}


switch (rpcService) {
  case CstService.Oxygen:
    CmdOxygen()
    break

  case CstCmd.Help:
    console.log(CstHelpTxt)
    break

  default:
    console.error(CstUnknown)
}

