import { Controller } from "@hotwired/stimulus"

/**
 * Countdown to a given target datetime (ISO 8601 string).
 * Targets: days / hours / minutes / seconds — text content updated each second.
 *
 * Usage:
 *   <div data-controller="countdown" data-countdown-target-time-value="2026-06-12T14:00:00">
 *     <span data-countdown-target="days"></span>
 *     <span data-countdown-target="hours"></span>
 *     <span data-countdown-target="minutes"></span>
 *     <span data-countdown-target="seconds"></span>
 *   </div>
 */
export default class extends Controller {
  static values = { time: String }
  static targets = ["days", "hours", "minutes", "seconds"]

  connect() {
    this._target = this._parseTarget(this.timeValue)
    if (!this._target) return
    this.update()
    this._timer = setInterval(() => this.update(), 1000)
  }

  disconnect() {
    if (this._timer) clearInterval(this._timer)
  }

  update() {
    const now = Date.now()
    const diff = Math.max(0, this._target - now)
    const totalSec = Math.floor(diff / 1000)
    const days = Math.floor(totalSec / 86400)
    const hours = Math.floor((totalSec % 86400) / 3600)
    const minutes = Math.floor((totalSec % 3600) / 60)
    const seconds = totalSec % 60
    this._set("days", days)
    this._set("hours", hours)
    this._set("minutes", minutes)
    this._set("seconds", seconds)
    if (diff <= 0 && this._timer) {
      clearInterval(this._timer)
      this._timer = null
      this.element.dispatchEvent(new CustomEvent("countdown:done"))
    }
  }

  _set(name, n) {
    const key = `has${name.charAt(0).toUpperCase() + name.slice(1)}Target`
    if (this[key]) {
      this[`${name}Target`].textContent = String(n).padStart(2, "0")
    }
  }

  _parseTarget(value) {
    if (!value) return null
    // Accept "2026-06-12T14:00", "2026-06-12T14:00:00", or full ISO with Z.
    const t = Date.parse(value)
    return Number.isFinite(t) ? t : null
  }
}
