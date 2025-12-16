import { Controller } from "@hotwired/stimulus"

export default class extends Controller {
  static values = { delay: Number }

  connect() {
    console.log("✅ auto-hide connected, hiding in", this.delayValue || 1000, "ms")
    setTimeout(() => {
      this.element.style.display = "none"
      console.log("✅ auto-hide hidden")
    }, this.delayValue || 1000)
  }
}