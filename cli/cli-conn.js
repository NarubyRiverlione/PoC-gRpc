const { CstCmd, CstActions, CstUnknown } = require('../gRpc/Cst.js')
const Client = require('./Client')

const showStatusUpdates = (status) => {
  console.log(`Air = ${status.air}`)
  console.log(`Depth = ${status.depth} meters`)
  console.log(`Balast = ${status.balast} %`)

}
const showError = (error) => console.error(error)


const StatusCmd = (rpcCmd, rpcAction) => {
  const client = new Client()
  switch (rpcCmd) {
    case CstCmd.Start:
      client.ConnStatus(
        status => showStatusUpdates(status),
        error => showError(error),
        endStatus => showStatusUpdates(endStatus)
      )
      break

    case CstCmd.Stop:
      client.EndStatusUpdates()
        .then(status => console.log(status))
        .catch(err => console.error(err.message))
      break

    default:
      console.error(`${CstUnknown.Cmd} for Conn station and action ${rpcAction} - '${rpcCmd}'
      ${CstUnknown.UseHelp}`)
  }
}

const ConnActions = (rpcAction, rpcCmd) => {
  switch (rpcAction) {
    case CstActions.Status:
      StatusCmd(rpcCmd, rpcAction)
      break

    default:
      console.error(`${CstUnknown.Action} for Coon station: ${rpcAction}
          ${CstUnknown.UseHelp}`)
  }
}

module.exports = ConnActions