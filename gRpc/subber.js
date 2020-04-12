'use strict'
const debug = require('debug')('subber:subber')

const { CstBoundaries, CstChanges, CstTxt } = require('./Cst')
const { CheckBoundaries } = require('./common')

module.exports = class Subber {
  constructor() {
    this.Air = 100
    this.Depth = 0
    this.Balast = 0

    this.BalastNeutral = 50

    this.AirChargingInterval = null
    this.BlowInterval = null
    this.FillInterval = null

    this.ExtraStatusTxt = ''
  }
  //#region Conn
  Status() {
    this.ExtraStatusTxt = this.ExtraStatusTxt ? `\n--> ${this.ExtraStatusTxt}\n` : ''
    return `${this.ExtraStatusTxt}
Depth = ${ this.Depth.toFixed(0)} meters
Air = ${ this.Air.toFixed(0)} %
Balasttank = ${ this.Balast.toFixed(0)} % `
  }
  ClearExtraStatus() {
    this.ExtraStatusTxt = ''
  }
  Setup(air, depth, balast) {
    this.Air = air
    this.Depth = depth,
      this.Balast = balast
  }
  Reset() {
    this.Air = 100
    this.Depth = 0
    this.Balast = 0

    this.AirChargingInterval = null
    this.BlowInterval = null
    this.FillInterval = null
  }

  //#endregion

  //#region Air
  SetAir(o2) {
    const Checked = CheckBoundaries(CstBoundaries.Air.Min, CstBoundaries.Air.Max, o2)
    debug('SET air to ' + Checked)
    this.Air = Checked
  }
  ChangeAir(change) {
    if (change > 0 && this.Depth !== 0) {
      this.ExtraStatusTxt += CstTxt.Air.OnlyChargeOnSurface
      this.StopChargeAir()
      return
    }
    this.Air += change
    const Checked = CheckBoundaries(CstBoundaries.Air.Min, CstBoundaries.Air.Max, this.Air)
    debug(`CHANGE air by ${change} to ${Checked}`)
    this.Air = Checked
  }

  StartChargeAir() {
    this.ExtraStatusTxt += CstTxt.Air.StartCharging
    this.AirChargingInterval = setInterval(() => {
      this.ChangeAir(CstChanges.Air.Charging)
      if (this.Air === CstBoundaries.Air.Max) {
        this.ExtraStatusTxt += CstTxt.Air.ChargingDone
        this.StopChargeAir()
      }
    }, CstChanges.Interval)
  }
  StopChargeAir() {
    if (this.AirChargingInterval) {
      // this.ExtraStatusTxt +=CstTxt.Air.StopCharging
      clearInterval(this.AirChargingInterval)
      this.AirChargingInterval = null
    }
  }
  IsAirCharging() {
    return this.AirChargingInterval !== null
  }
  //#endregion

  //#region Depth
  SetDepth(depth) {
    const Checked = CheckBoundaries(CstBoundaries.Depth.Min, CstBoundaries.Depth.Max, depth)
    // this.ExtraStatusTxt='SET depth to ' + Checked
    this.Depth = Checked
  }

  UpdateDepth() {
    // balast > neutral = negative buoyancy 
    // balast < neutral = positive buoyancy
    const buoyancy = this.BalastNeutral - this.Balast

    // neg buoyancy = depth increasing
    const newDepth = this.Depth - buoyancy * CstChanges.Depth.BuoyancyFactor
    if (buoyancy !== 0) {
      debug(`Buoyancy = ${buoyancy} -> new depth = ${newDepth}`)
      this.SetDepth(newDepth)
    }
  }


  //#endregion

  //#region Balast
  SetBalast(balast) {
    const Checked = CheckBoundaries(CstBoundaries.Balast.Min, CstBoundaries.Balast.Max, balast)
    debug('SET balast to ' + Checked.toFixed(0))
    this.Balast = Checked
  }
  ChangeBalast(delta) {
    debug(`Want to change balast ${this.Balast.toFixed(0)}% by ${delta} `)
    let newBalast
    if (delta < 0) {
      // BLOWING
      // Air in supply ?
      if (this.Air === 0) {
        this.ExtraStatusTxt += CstTxt.Balast.NoAirNoBlow
        this.BlowStop()
        return
      }
      // check if enough air is stored to make the balast change
      const neededAir = delta * CstChanges.Balast.NeededAir
      debug(`- need ${neededAir} air needed, have ${this.Air}  = ${this.Air + neededAir < CstBoundaries.Air.Min ? 'NOK' : 'ok'} `)

      const useAir = (this.Air + neededAir) < CstBoundaries.Air.Min ?
        -this.Air : neededAir
      // remove air from storage
      this.ChangeAir(useAir)
      // change depth by blowing tank
      newBalast = this.Balast + (useAir / CstChanges.Balast.NeededAir)
    }
    else {
      // FILLING
      newBalast = this.Balast + delta
    }

    this.SetBalast(newBalast)
  }

  BlowStart() {
    this.ExtraStatusTxt += CstTxt.Balast.StartBlowing
    this.BlowInterval = setInterval(() => {
      this.ChangeBalast(CstChanges.Balast.Blowing)
      if (this.Balast === CstBoundaries.Balast.Min) {
        this.ExtraStatusTxt += CstTxt.Balast.BlowingDone
        this.BlowStop()
      }
    }, CstChanges.Interval)
  }
  BlowStop() {
    if (this.BlowInterval) {
      // this.ExtraStatusTxt += CstTxt.Balast.StopBlowing
      clearInterval(this.BlowInterval)
      this.BlowInterval = null
    }
  }
  IsBalastBlowing() {
    return this.BlowInterval !== null
  }

  FillStart() {
    this.ExtraStatusTxt += CstTxt.Balast.FillingStart
    this.FillInterval = setInterval(() => {
      this.ChangeBalast(CstChanges.Balast.Filling)
      if (this.Balast === CstBoundaries.Balast.Max) {
        this.ExtraStatusTxt += CstTxt.Balast.FillingDone
        this.FillStop()
      }
    }, CstChanges.Interval)
  }
  FillStop() {
    if (this.FillInterval) {
      // this.ExtraStatusTxt += CstTxt.Balast.FillingStop
      clearInterval(this.FillInterval)
      this.FillInterval = null
    }
  }
  IsBalastFilling() {
    return this.FillInterval !== null
  }
  //#endregion
}
