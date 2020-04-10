
const CstServerIP = '0.0.0.0'
const CstServerPort = 9090

const CstService = {
  Air: 'air',
  Depth: 'depth',
  Balast: 'balast',
  Help: 'help',
  Conn: 'conn',
}

const CstActions = {
  Fill: 'fill',
  Charge: 'charge',
  Blow: 'blow',
  Info: 'info',
  Status: 'status'
}

const CstCmd = {
  Start: 'start',
  Stop: 'stop',
}

const CstHelpTxt = `
Control the submarine via the 'station' 'action' 'command'
    * Stations *        * Actions *             * Commands *
    ${CstService.Air}   ${CstActions.Charge}    ${CstCmd.Start} - ${CstCmd.Stop}
    
    ${CstService.Balast}   ${CstActions.Fill}    ${CstCmd.Start} - ${CstCmd.Stop}
    ${CstService.Balast}   ${CstActions.Blow}    ${CstCmd.Start} - ${CstCmd.Stop}

    ${CstService.Depth}           

    ${CstService.Conn}    ${CstActions.Status}    ${CstCmd.Start} - ${CstCmd.Stop}
    General action for all stations: ${CstActions.Info}

    
    `

const CstUnknown = {
  Service: 'Unknown station',
  Action: 'Unknown action',
  Cmd: 'Unknown command',
  UseHelp: 'use \'cli  help\' for more information'
}

const CstBoundaries = {
  Air: { Max: 100, Min: 0 },
  Balast: { Max: 100, Min: 0 },
  Depth: { Max: 400, Min: 0 }
}

const CstChanges = {
  Interval: 1000,
  Balast: {
    NeededAir: 0.8, // = 80 air needed for full blow
    Blowing: -5, // = 20 step
    Filling: 10
  },
  Air: {
    Charging: 5
  }
}

module.exports = {
  CstCmd, CstService, CstHelpTxt, CstUnknown,
  CstServerIP, CstServerPort, CstBoundaries,
  CstChanges, CstActions
}