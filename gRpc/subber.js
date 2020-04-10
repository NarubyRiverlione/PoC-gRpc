'use strict'
const debug = require('debug')('subber:subber')

const { CstBoundaries, CstChanges } = require('./Cst')
const { CheckBoundaries } = require('./common')

module.exports = class Subber {
  constructor() {
    this.Air = 50
    this.Depth = 0
    this.Balast = 80

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
  //#endregion

  //#region Air
  SetAir(o2) {
    if (this.Depth !== 0) {
      this.ExtraStatusTxt += 'Cannot charge air supply will not on the surface'
      return
    }
    const Checked = CheckBoundaries(CstBoundaries.Air.Min, CstBoundaries.Air.Max, o2)
    debug('SET air to ' + Checked)
    this.Air = Checked
  }
  ChangeAir(change) {
    if (change > 0 && this.Depth !== 0) {
      this.ExtraStatusTxt += 'Cannot charge air supply will not on the surface'
      return
    }
    this.Air += change
    const Checked = CheckBoundaries(CstBoundaries.Air.Min, CstBoundaries.Air.Max, this.Air)
    this.Air = Checked
  }
  StartChargeAir() {
    this.ExtraStatusTxt += 'Start charging air'
    this.AirChargingInterval = setInterval(() => {
      this.ChangeAir(CstChanges.Air.Charging)
      if (this.Air === CstBoundaries.Air.Max) {
        this.ExtraStatusTxt += 'Air supply is full, stop charging'
        this.StopChargeAir()
      }
    }, CstChanges.Interval)
  }
  StopChargeAir() {
    if (this.AirChargingInterval) {
      this.ExtraStatusTxt += 'Stop charging air'
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
        this.ExtraStatusTxt += 'No air supply, stop blowing balasttank'
        this.BlowStop()
        return
      }
      // check if enough air is stored to make the balast change
      const neededAir = delta * CstChanges.Balast.NeededAir
      const useAir = (this.Air + neededAir) < CstBoundaries.Air.Min ?
        -this.Air : neededAir
      // remove air from storage
      this.ChangeAir(useAir)
      // change depth by blowing tank
      newBalast = this.Balast + useAir * CstChanges.Balast.NeededAir
    }
    else {
      // FILLING
      newBalast = this.Balast + delta
    }

    this.SetBalast(newBalast)
  }

  BlowStart() {
    this.ExtraStatusTxt += 'Start blowing balasttank'
    this.BlowInterval = setInterval(() => {
      this.ChangeBalast(CstChanges.Balast.Blowing)
      if (this.Balast === CstBoundaries.Balast.Min) {
        this.ExtraStatusTxt += 'balastank is empty, stop blowing'
        this.BlowStop()
      }
    }, CstChanges.Interval)
  }
  BlowStop() {
    if (this.BlowInterval) {
      this.ExtraStatusTxt += 'Stop blowing balasttank'
      clearInterval(this.BlowInterval)
      this.BlowInterval = null
    }
  }
  IsBalastBlowing() {
    return this.BlowStart !== null
  }

  FillStart() {
    this.ExtraStatusTxt += 'Start Filling balasttank'
    this.FillInterval = setInterval(() => {
      this.ChangeBalast(CstChanges.Balast.Filling)
      if (this.Balast === CstBoundaries.Balast.Max) {
        this.ExtraStatusTxt += 'balasttank is full, stop filling'
        this.FillStop()
      }
    }, CstChanges.Interval)
  }

  FillStop() {
    if (this.FillInterval) {
      this.ExtraStatusTxt += 'Stop Filling balasttank'
      clearInterval(this.FillInterval)
      this.FillInterval = null
    }
  }
  IsBalastFilling() {
    return this.FillInterval !== null
  }
  //#endregion
}
