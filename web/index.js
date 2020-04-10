import { EmptyRequest } from './Subber_pb'
import { AirClient, ConnClient } from './Subber_grpc_web_pb'
import './index.css'

const envoyProxy = 'http://localhost:8080'

const GetAirSupply = () => {
  const airService = new AirClient(envoyProxy)

  // rpc Info doesn't have any arguments = new EmptyRequest
  airService.info(new EmptyRequest(), {}, (err, valueResp) => {
    if (err) {
      console.error(err.message); return
    }

    const airSupply = valueResp && valueResp.array && valueResp.array.length === 1
      ? valueResp.array[0]
      : 'NOTHING'

    const GetAirSupplyDiv = document.getElementById('AirSupply')

    // const airSupply = 'T E S T'
    const txtNode = document.createTextNode(`Air supply at ${airSupply} %`)
    GetAirSupplyDiv.appendChild(txtNode)
  })

}

const StatusUpdates = () => {
  const connService = new ConnClient(envoyProxy)

  const statusStream = connService.startStatusUpdates(new EmptyRequest(), null)
  statusStream.on('data', (data) => {

    console.log(`Air = ${data.getAir()}`)
    console.log(`Depth = ${data.getDepth()} meters`)
    console.log(`Balast = ${data.getBalast()} %`)
  })

  statusStream.on('error', (err) => {
    console.error(err.message)
  })

  statusStream.on('end', (status) => {
    console.warn(`Status updates ended because: ${status}`)
  })
}


window.GetAirSupply = GetAirSupply
window.StatusUpdates = StatusUpdates