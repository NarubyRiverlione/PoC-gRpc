const { CstCmd, CstActions, CstUnknown } = require('../gRpc/Cst.js')
const Client = require('./Client')

const CmdAirCharge = (rpcCmd, rpcAction) => {
  const client = new Client()
  switch (rpcCmd) {
    case CstCmd.Start:
      client.StartChargeAir()
        .then(resp => console.log(`${resp.status ? 'start charging' : 'NOT charging'}, message : ${resp.message}`))
        .catch(err => console.error(err.message))
      break

    case CstCmd.Stop:
      client.StopChargeAir()
        .then(resp => console.log(`Charging: ${resp.status}, message : ${resp.message}`))
        .catch(err => console.error(err.message))
      break
    default:
      console.error(`${CstUnknown.Cmd} for Air station and action ${rpcAction} - '${rpcCmd}'
      ${CstUnknown.UseHelp}`)
  }
}

const ActionsAir = (rpcAction, rpcCmd) => {
  const client = new Client()
  switch (rpcAction) {
    case CstActions.Info:
      client.GetAir()
        .then(o2 => console.log(`AIR at ${o2}%`))
        .catch(err => console.error(err.message))
      break

    case CstActions.Charge:
      CmdAirCharge(rpcCmd, rpcAction)
      break

    default:
      console.error(`${CstUnknown.Action} for Air station: '${rpcAction}'
      ${CstUnknown.UseHelp}`)
  }
}

module.exports = ActionsAir