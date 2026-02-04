(() => {
  "use strict"

  if (!document.body.classList.contains("post")) return
  const time = Math.ceil(
    document.querySelector("main").innerText.match(/\S+/g).length
    / +document.currentScript.getAttribute("data-wpm") || 255
  )
  const plForms = { one: "minuta", few: "minuty", many: "minut", other: "minuty" }
  const pr = new Intl.PluralRules("pl-PL")
  const label = "Szacowany czas czytania"

  document.querySelector("main p").insertAdjacentHTML("beforeend",
    `<i id="reading-time" title="${label}" aria-label="${label}">
        ${time < 1 ? "<1 minuta" : `${time} ${plForms[pr.select(time)] || "minut"}`}</i>`)
})()