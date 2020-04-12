const { CstCmd, CstActions, CstTxt } = require('../gRpc/Cst.js')
const { UnknownTxt } = CstTxt
const Client = require('./Client')

const CmdBlowBalast = (rpcCmd, rpcAction) => {
  const client = new Client()
  switch (rpcCmd) {
    case CstCmd.Start:
      client.BlowStart()
        .then(resp => console.log(`${resp.status ? 'start blowing' : 'NOT blowing'}, message : ${resp.message}`))
        .catch(err => console.error(err.message))
      break

    case CstCmd.Stop:
      client.BlowStop()
        .then(status => console.log(status.message))
        .catch(err => console.error(err.message))
      break
    default:
      console.error(`${UnknownTxt.Cmd} for Balast station and action ${rpcAction} - '${rpcCmd}'
      ${UnknownTxt.UseHelp}`)
  }
}

const CmdFillBalast = (rpcCmd, rpcAction) => {
  const client = new Client()
  switch (rpcCmd) {

    case CstCmd.Start:
      client.FillStart()
        .then(resp => console.log(`${resp.status ? 'start filling' : 'NOT filling'}, message : ${resp.message}`))
        .catch(err => console.error(err.message))
      break

    case CstCmd.Stop:
      client.FillStop()
        .then(status => console.log(status.message))
        .catch(err => console.error(err.message))
      break

    default:
      console.error(`${UnknownTxt.Cmd} for Balast station and action ${rpcAction} - '${rpcCmd}'
        ${UnknownTxt.UseHelp}`)
  }
}

const ActionsBalast = (rpcAction, rpcCmd) => {
  const client = new Client()
  switch (rpcAction) {
    case CstActions.Info:
      client.GetBalast()
        .then(balast => console.log(`Balasttank ${balast}% filled`))
        .catch(err => console.error(err.message))
      break

    case CstActions.Blow:
      CmdBlowBalast(rpcCmd, rpcAction)
      break

    case CstActions.Fill:
      CmdFillBalast(rpcCmd, rpcAction)
      break


    default:
      console.error(`${UnknownTxt.Action} for Balast station: ${rpcAction}
      ${UnknownTxt.UseHelp}`)
  }
}

module.exports = ActionsBalast