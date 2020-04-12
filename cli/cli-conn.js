const { CstCmd, CstActions, CstTxt } = require('../gRpc/Cst.js')
const { UnknownTxt } = CstTxt
const Client = require('./Client')

const showStatusUpdates = (status) => {
  if (status.message) console.log(`Status = ${status.message}`)
  console.log(`Air = ${status.air}`)
  console.log(`Depth = ${status.depth} meters`)
  console.log(`Balast = ${status.balast} %`)
  if (status.airCharging) console.log('- Air is charging')
  if (status.balastFilling) console.log('- Balast is filling')
  if (status.balastBlowing) console.log('- Balast is blowing')
  console.log('')
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
      console.error(`${UnknownTxt.Cmd} for Conn station and action ${rpcAction} - '${rpcCmd}'
      ${UnknownTxt.UseHelp}`)
  }
}

const ResetCmd = () => {
  const client = new Client()
  client.Setup({ air: 100, depth: 0, balast: 0 })
    .then(resp => showStatusUpdates(resp))
    .catch(err => console.error(err.message))
}

const ConnActions = (rpcAction, rpcCmd) => {
  switch (rpcAction) {
    case CstActions.Status:
      StatusCmd(rpcCmd, rpcAction)
      break
    case CstActions.Reset:
      ResetCmd(rpcCmd, rpcAction)
      break

    default:
      console.error(`${UnknownTxt.Action} for Coon station: ${rpcAction}
          ${UnknownTxt.UseHelp}`)
  }
}

module.exports = ConnActions