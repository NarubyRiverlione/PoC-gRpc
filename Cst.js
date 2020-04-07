
const CstServerIP = '127.0.0.1'
const CstServerPort = 50051

const CstCmd = {
  Start: 'start',
  Stop: 'stop',
  Info: 'info',
  Help: 'help',
  Get: 'get',
  Set: 'set',
  Change: 'change',
}

const CstService = {
  Oxygen: 'oxygen',

}

const CstHelpTxt = `Deze gRpc client is te gebruiken via 'service' 'commando'
    * Service's *
    oxygen

    * Commando's *
    get   : get value  
    set   : set value 
    change: change by 

    * Voorbeeld *
    oxygen get
    oxygen set 75
    oxygen change -10
    `

const CstUnknown = 'Unknown service or command, use \'help\' to see services'

const CstBoundaries = {
  Oxygen: { Max: 100, Min: 0 }
}

module.exports = {
  CstCmd, CstService, CstHelpTxt, CstUnknown,
  CstServerIP, CstServerPort, CstBoundaries
}