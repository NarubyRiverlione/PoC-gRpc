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

const main = () => {
  const client = new protoDescriptor.Greeter('localhost:50051',
    grpc.credentials.createInsecure())

  let user
  if (process.argv.length >= 3) {
    user = process.argv[2]
  }
  else {
    user = 'world'
  }

  client.sayHello({ name: user }, function (err, response) {
    if (err) {
      console.error(err.message)
      return
    }

    console.log('Greeting:', response.reply)

  })
}

main()