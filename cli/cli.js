'use strict'
const ActionsAir = require('./cli-air')
const ActionsBalast = require('./cli-balast')
const ActionsDepth = require('./cli-depth')
const ConnActions = require('./cli-conn')

const { CstService, CstTxt } = require('../gRpc/Cst')
const { UnknownTxt, HelpTxt } = CstTxt

const Args = process.argv
// console.log(Args)
const rpcService = Args[2] ? Args[2].toLowerCase() : null
const rpcAction = Args[3] ? Args[3].toLowerCase() : null
const rpcCmd = Args[4] ? Args[4].toLowerCase() : null
// const rpcValue = Args[5]


switch (rpcService) {
  case CstService.Air:
    ActionsAir(rpcAction, rpcCmd)
    break
  case CstService.Depth:
    ActionsDepth(rpcAction, rpcCmd)
    break
  case CstService.Balast:
    ActionsBalast(rpcAction, rpcCmd)
    break
  case CstService.Help:
    console.log(HelpTxt)
    break
  case CstService.Conn:
    ConnActions(rpcAction, rpcCmd)
    break

  default:
    console.error(`${UnknownTxt.Service}: ${rpcService}
    ${UnknownTxt.UseHelp}`)
}

