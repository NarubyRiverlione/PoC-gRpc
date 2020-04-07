const grpc = require('grpc')
const protoLoader = require('@grpc/proto-loader')

const { CstServerIP, CstServerPort, CstBoundaries } = require('../Cst')

const Subber = require('./subber')

const PROTO_PATH = __dirname + '/../protos/Subber.proto'

const packageDefinition = protoLoader.loadSync(
  PROTO_PATH,
  {
    keepCase: true,
    longs: String,
    enums: String,
    defaults: true,
    oneofs: true
  })

// The protoDescriptor object has the full package hierarchy
const proto = grpc.loadPackageDefinition(packageDefinition)

// initialize Subber
const subber = new Subber()

const CheckBoundaries = (Min, Max, Value) => (
  Value < Min ? Min
    : Value > Max ? Max
      : Value
)
/* Oxygen */
const getOxygen = (call, callback) => {
  console.log('GET oxygen: ' + subber.oxygen)
  callback(null, { value: subber.oxygen })
}
const SetOxygen = (call, callback) => {
  const { request: { newValue } } = call
  const Checked = CheckBoundaries(CstBoundaries.Oxygen.Min, CstBoundaries.Oxygen.Max, newValue)
  console.log('SET oxygen to ' + Checked)
  subber.SetOxygen(Checked)
  return getOxygen(call, callback)
}
const ChangeByDelta = (call, callback) => {
  console.log('CHANGE oxygen with ' + call.request.delta)
  return SetOxygen({ request: { newValue: (call.request.delta + subber.oxygen) } }, callback)
}



/* Starts an RPC server that receives requests 
 first argument = server IP
 second argument = server port
 */
const server = () => {
  const Args = process.argv
  // console.log(Args)
  const serverIP = Args[2] || CstServerIP
  const serverPort = Args[3] || CstServerPort

  const server = new grpc.Server()
  server.addService(proto.Oxygen.service, { Get: getOxygen, Set: SetOxygen, ChangeByDelta })
  server.bind(`${serverIP}:${serverPort}`, grpc.ServerCredentials.createInsecure())
  server.start()
}

server()