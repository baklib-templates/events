import * as Turbo from "@hotwired/turbo"
import { Application } from "@hotwired/stimulus"
import Alpine from "alpinejs"
import collapse from "@alpinejs/collapse"
import { createIcons, icons } from "lucide"

import VideoPlayerController from "./controllers/video_player_controller.js"
import CountdownController from "./controllers/countdown_controller.js"
import AddToCalendarController from "./controllers/add_to_calendar_controller.js"

window.Turbo = Turbo

const stimulus = Application.start()
window.Stimulus = stimulus
stimulus.register("video-player", VideoPlayerController)
stimulus.register("countdown", CountdownController)
stimulus.register("add-to-calendar", AddToCalendarController)

window.Alpine = Alpine
Alpine.plugin(collapse)
Alpine.start()

const initLucideIcons = () => {
  createIcons({ icons })
}

document.addEventListener("turbo:load", initLucideIcons)

document.addEventListener("turbo:frame-load", (event) => {
  initLucideIcons()
  const frame = event.target
  if (!(frame instanceof HTMLElement)) return
  if (frame.id !== "main-content-frame") return
  requestAnimationFrame(() => {
    window.scrollTo({ top: 0, left: 0, behavior: "auto" })
  })
})

if (document.readyState === "loading") {
  document.addEventListener("DOMContentLoaded", initLucideIcons)
} else {
  initLucideIcons()
}
