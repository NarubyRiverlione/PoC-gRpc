const { CstCmd, CstActions, CstUnknown } = require('../Cst.js')
const Client = require('../gRpc/Client')

const CmdBlowBalast = (rpcCmd, rpcAction) => {
  const client = new Client()
  switch (rpcCmd) {
    case CstCmd.Start:
      client.BlowStart()
        .then(status => console.log(status))
        .catch(err => console.error(err.message))
      break

    case CstCmd.Stop:
      client.BlowStop()
        .then(status => console.log(status))
        .catch(err => console.error(err.message))
      break
    default:
      console.error(`${CstUnknown.Cmd} for Balast station and action ${rpcAction} - '${rpcCmd}'
      ${CstUnknown.UseHelp}`)
  }
}

const CmdFillBalast = (rpcCmd, rpcAction) => {
  const client = new Client()
  switch (rpcCmd) {

    case CstCmd.Start:
      client.FillStart()
        .then(status => console.log(status))
        .catch(err => console.error(err.message))
      break

    case CstCmd.Stop:
      client.FillStop()
        .then(status => console.log(status))
        .catch(err => console.error(err.message))
      break

    default:
      console.error(`${CstUnknown.Cmd} for Balast station and action ${rpcAction} - '${rpcCmd}'
        ${CstUnknown.UseHelp}`)
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
      console.error(`${CstUnknown.Action} for Balast station: ${rpcAction}
      ${CstUnknown.UseHelp}`)
  }
}

module.exports = ActionsBalast