
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
  Status: 'status',
  Reset: 'reset'
}

const CstCmd = {
  Start: 'start',
  Stop: 'stop',
}


const CstTxt = {
  HelpTxt: `
  Control the submarine via the 'station' 'action' 'command'
      * Stations *        * Actions *             * Commands *
      ${CstService.Air}   ${CstActions.Charge}    ${CstCmd.Start} - ${CstCmd.Stop}
      
      ${CstService.Balast}   ${CstActions.Fill}    ${CstCmd.Start} - ${CstCmd.Stop}
      ${CstService.Balast}   ${CstActions.Blow}    ${CstCmd.Start} - ${CstCmd.Stop}
  
      ${CstService.Depth}           
  
      ${CstService.Conn}    ${CstActions.Status}    ${CstCmd.Start} - ${CstCmd.Stop}
      ${CstService.Conn}    ${CstActions.Reset}   
     
     
      General action for all stations: ${CstActions.Info}
      
      `,
  UnknownTxt: {
    Service: 'Unknown station',
    Action: 'Unknown action',
    Cmd: 'Unknown command',
    UseHelp: 'use \'cli  help\' for more information'
  },
  Air: {
    OnlyChargeOnSurface: 'Cannot charge air supply will not on the surface',
    StartCharging: 'Start charging air',
    ChargingDone: 'Air supply is full, stop charging',
    StopCharging: 'Stop charging air'
  },
  Balast: {
    NoAirNoBlow: 'Air supply is empty, stop blowing balasttank',
    StartBlowing: 'Start blowing balasttank',
    BlowingDone: 'Balastank is empty, stop blowing',
    StopBlowing: 'Stop blowing balasttank',

    FillingStart: 'Start Filling balasttank',
    FillingDone: 'balasttank is full, stop filling',
    FillingStop: 'Stop Filling balasttank'
  }
}

const CstBoundaries = {
  Air: { Max: 100, Min: 0 },
  Balast: { Max: 100, Min: 0 },
  Depth: { Max: 400, Min: 0 }
}

const CstChanges = {
  Interval: 1000,
  Balast: {
    Blowing: -5, // = 20 step for complete emptying balasttank
    NeededAir: 0.8, // = 80% air needed for full blow
    Filling: 10
  },
  Air: {
    Charging: 5
  }
}

module.exports = {
  CstCmd, CstService,
  CstServerIP, CstServerPort, CstBoundaries,
  CstChanges, CstActions, CstTxt
}