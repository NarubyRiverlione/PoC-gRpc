'use strict'
const debug = require('debug')('subber:subber')

const { CstBoundaries, CstChanges } = require('../Cst')
const { CheckBoundaries } = require('./common')

module.exports = class Subber {
  constructor() {
    this.Air = 50
    this.Depth = 0
    this.Balast = 80

    this.AirChargingInterval = null
    this.BlowInterval = null
    this.FillInterval = null
  }

  //#region Air
  SetAir(o2) {
    if (this.Depth !== 0) {
      debug('Cannot charge O2 with not on the surface')
      return
    }
    const Checked = CheckBoundaries(CstBoundaries.Air.Min, CstBoundaries.Air.Max, o2)
    debug('SET air to ' + Checked)
    this.Air = Checked
  }
  ChangeAir(change) {
    if (change > 0 && this.Depth !== 0) {
      debug('Cannot charge O2 with not on the surface')
      return
    }
    this.Air += change
    const Checked = CheckBoundaries(CstBoundaries.Air.Min, CstBoundaries.Air.Max, this.Air)
    debug('SET air to ' + Checked)
    this.Air = Checked
  }
  StartChargeAir() {
    debug('Start charging air')
    this.AirChargingInterval = setInterval(() => {
      this.ChangeAir(CstChanges.Air.Charging)
      if (this.Air === CstBoundaries.Air.Max) {
        debug('Air supply is full, stop charging')
        this.StopChargeAir()
      }
    }, CstChanges.Interval)
  }
  StopChargeAir() {
    if (this.AirChargingInterval) {
      debug('Stop charging air')
      clearInterval(this.AirChargingInterval)
    }
  }
  //#endregion

  //#region Depth
  SetDepth(depth) {
    const Checked = CheckBoundaries(CstBoundaries.Depth.Min, CstBoundaries.Depth.Max, depth)
    debug('SET depth to ' + Checked)
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
    debug(`Want to change balast ${this.Balast.toFixed(0)}% by ${delta}`)
    let newBalast
    if (delta < 0) {
      // BLOWING
      // Air in supply ?
      if (this.Air === 0) {
        debug('No air, stop blowing')
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
    debug('Start blowing balasttank')
    this.BlowInterval = setInterval(() => {
      this.ChangeBalast(CstChanges.Balast.Blowing)
      if (this.Balast === CstBoundaries.Balast.Min) {
        debug('balastank is empty, stop blowing')
        this.BlowStop()
      }
    }, CstChanges.Interval)
  }
  BlowStop() {
    if (this.BlowInterval) {
      debug('Stop blowing balasttank')
      clearInterval(this.BlowInterval)
    }
  }

  FillStart() {
    debug('Start Filling balasttank')
    this.FillInterval = setInterval(() => {
      this.ChangeBalast(CstChanges.Balast.Filling)
      if (this.Balast === CstBoundaries.Balast.Max) {
        debug('balasttank is full, stop filling')
        this.FillStop()
      }
    }, CstChanges.Interval)
  }

  FillStop() {
    if (this.FillInterval) {
      debug('Stop Filling balasttank')
      clearInterval(this.FillInterval)
    }
  }
  //#endregion
}
