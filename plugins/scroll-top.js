(() => {
  "use strict"

  const btn = document.getElementById("go-top")
  if (!btn) return
  const fraction = document.currentScript.getAttribute("data-fraction")
  document.addEventListener("scroll", () => {
    const scrolled = document.documentElement.scrollTop
    const bodySize = document.body.scrollHeight
    btn.classList.toggle("active", scrolled > bodySize / (fraction ?? 5))
  })
  btn.addEventListener("click", () => window.scrollTo({ top: 0, behavior: "smooth" }))
})()