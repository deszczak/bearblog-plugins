(() => {
  'use strict'

  if (!document.body.classList.contains("post")) return
  const time = Math.ceil(
    document.querySelector("main").innerText.trim().split(/\s+/).length
    / parseInt(document.currentScript.getAttribute("data-wpm") ?? 255)
  )
  const plForms = { one: "minuta", few: "minuty", many: "minut", other: "minuty" }
  const pr = new Intl.PluralRules("pl-PL")
  document.querySelector("main p:first-of-type").append(
    document.body.appendChild(
      Object.assign(document.createElement("i"), {
        title: "Szacowany czas czytania:",
        ariaLabel: "Szacowany czas czytania:",
        className: "reading-time",
        innerHTML: time < 1 ? "<1 minuta" : `${time} ${plForms[pr.select(time)]}`
      })
    )
  )
})()