const grpc = require('grpc')
const protoLoader = require('@grpc/proto-loader')

const PROTO_PATH = __dirname + '/protos/helloworld.proto'

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
const protoDescriptor = grpc.loadPackageDefinition(packageDefinition)
// const hello_proto = protoDescriptor.hello_proto

//  Implements the SayHello RPC method.
const sayHello = (call, callback) => {
  const { request: { name } } = call
  if (name === 'error') {
    callback(new Error('simulated error'), null)
    return
  }

  callback(null, { reply: 'Hello ' + name })
}

/**
 * Starts an RPC server that receives requests for the Greeter service at the
 * sample server port
 */
const main = () => {
  const server = new grpc.Server()
  server.addService(protoDescriptor.Greeter.service, { sayHello: sayHello })
  server.bind('0.0.0.0:50051', grpc.ServerCredentials.createInsecure())
  server.start()
}

main()