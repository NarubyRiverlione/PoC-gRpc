const { CstActions, CstUnknown } = require('../gRpc/Cst.js')
const Client = require('./Client')

const ActionsDepth = (rpcAction) => {
  const client = new Client()
  switch (rpcAction) {
    case CstActions.Info:
      client.GetDepth()
        .then(depth => console.log(`Depth is ${Math.abs(depth)} meters`))
        .catch(err => console.error(err.message))
      break

    default:
      console.error(`${CstUnknown.Action} for depth station - ${rpcAction}
      ${CstUnknown.UseHelp}`)
  }
}

module.exports = ActionsDepth