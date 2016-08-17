"use strict"

class SpaceAge {
  constructor(seconds) {
    this.seconds = seconds
  }

  onEarth() {
    return this.calculateEarthYears(31557600)
  }

  onMercury() {
    return this.calculateAge(0.2408467)
  }

  onVenus() {
    return this.calculateAge(0.61519726)
  }

  onMars() {
    return this.calculateAge(1.8808158)
  }

  onJupiter() {
    return this.calculateAge(11.862615)
  }

  onSaturn() {
    return this.calculateAge(29.447498)
  }

  onUranus() {
    return this.calculateAge(84.016846)
  }

  onNeptune() {
    return this.calculateAge(164.79132)
  }

  inEarthSeconds(earthYears) {
    return Math.round(earthYears * 31557600 * 100) / 100
  }

  calculateEarthYears(earthSeconds) {
    return Math.round(this.seconds / earthSeconds * 100) / 100
  }

  calculateAge(earthYears) {
    let earthSeconds = this.inEarthSeconds(earthYears)
    return Math.round(this.seconds / earthSeconds * 100) / 100
  }
}

module.exports = SpaceAge
