(function() {
  'use strict'

  if (document.querySelector("body").classList.contains("post")) {
    const time = Math.ceil(
      document.querySelector("main").innerText.trim().split(/\s+/).length
      / parseInt(document.currentScript.getAttribute("data-wpm") ?? 255)
    )
    const plForms = { one: "minuta", few: "minuty", many: "minut", other: "minuty" }
    const pr = new Intl.PluralRules('pl-PL')
    document.querySelector("main p:first-of-type").append(
      document.body.appendChild(
        Object.assign(document.createElement("i"), {
          className: "reading-time",
          innerHTML: time < 1 ? '<1 minuta' : `${time} ${plForms[pr.select(time)]}`
        })
      )
    )
  }
})()