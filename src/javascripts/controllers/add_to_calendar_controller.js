import { Controller } from "@hotwired/stimulus"

/**
 * Build and download an .ics file for the current event.
 * Values:
 *   title, description, location, start (ISO), end (ISO), url
 */
export default class extends Controller {
  static values = {
    title: String,
    description: String,
    location: String,
    start: String,
    end: String,
    url: String,
  }

  download(event) {
    if (event) event.preventDefault()
    const start = this._toICS(this.startValue)
    const end = this._toICS(this.endValue || this._addOneHour(this.startValue))
    if (!start) return
    const uid = `${Date.now()}-${Math.random().toString(36).slice(2)}@baklib-events`
    const ics = [
      "BEGIN:VCALENDAR",
      "VERSION:2.0",
      "PRODID:-//Baklib Events//EN",
      "CALSCALE:GREGORIAN",
      "METHOD:PUBLISH",
      "BEGIN:VEVENT",
      `UID:${uid}`,
      `DTSTAMP:${this._toICS(new Date().toISOString())}`,
      `DTSTART:${start}`,
      `DTEND:${end}`,
      `SUMMARY:${this._escape(this.titleValue)}`,
      `DESCRIPTION:${this._escape(this.descriptionValue)}`,
      `LOCATION:${this._escape(this.locationValue)}`,
      `URL:${this.urlValue}`,
      "END:VEVENT",
      "END:VCALENDAR",
    ].join("\r\n")

    const blob = new Blob([ics], { type: "text/calendar;charset=utf-8" })
    const link = document.createElement("a")
    link.href = URL.createObjectURL(blob)
    const safeName = (this.titleValue || "event")
      .toLowerCase()
      .replace(/[^a-z0-9]+/g, "-")
      .replace(/^-+|-+$/g, "")
    link.download = `${safeName || "event"}.ics`
    document.body.appendChild(link)
    link.click()
    setTimeout(() => {
      URL.revokeObjectURL(link.href)
      link.remove()
    }, 200)
  }

  _toICS(value) {
    if (!value) return null
    const t = Date.parse(value)
    if (!Number.isFinite(t)) return null
    return new Date(t)
      .toISOString()
      .replace(/[-:]/g, "")
      .replace(/\.\d{3}/, "")
  }

  _addOneHour(value) {
    const t = Date.parse(value)
    if (!Number.isFinite(t)) return null
    return new Date(t + 3600 * 1000).toISOString()
  }

  _escape(s) {
    return String(s || "")
      .replace(/\\/g, "\\\\")
      .replace(/\r?\n/g, "\\n")
      .replace(/,/g, "\\,")
      .replace(/;/g, "\\;")
  }
}
