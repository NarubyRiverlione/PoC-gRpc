import { EmptyRequest } from './Subber_pb'
import { AirClient } from './Subber_grpc_web_pb'
import './index.css'

const GetAirSupply = () => {
  const envoyProxy = 'http://localhost:8080'
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

window.GetAirSupply = GetAirSupply