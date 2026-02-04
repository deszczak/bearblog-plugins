(() => {
  "use strict"

  const btn = document.getElementById("go-top")
  if (!btn) return
  const fraction = 5
  document.addEventListener("scroll", () => {
    const threshold = document.body.scrollHeight / fraction
    btn.classList.toggle("active", window.scrollY > threshold)
  })
  btn.onclick = () => window.scrollTo({ top: 0, behavior: "smooth" })
})()