(() => {
  "use strict"

  const btn = document.getElementById("go-next")
  const headers = [...document.querySelectorAll("main > :is(h2,h3)")]
  const offset = +document.currentScript.getAttribute("data-offset") || 0

  if (!btn || !headers.length) return

  const getNext = () => headers.find(h => h.offsetTop - offset > window.scrollY + 1)
  const update = () => btn.classList.toggle("active", !!getNext())

  document.addEventListener("scroll", () => update)
  btn.onclick = () => getNext()?.scrollIntoView({ behavior: "smooth" })

  update()
})()