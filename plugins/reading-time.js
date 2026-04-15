(() => {
  "use strict"

  if (!document.body.classList.contains("post")) return
  const time = Math.ceil(
    document.querySelector("main").innerText.match(/\S+/g).length
    / +document.currentScript.getAttribute("data-wpm") || 255
  )
  const lang = document.documentElement.lang ?? navigator.language
  const plForms = { one: "minuta", few: "minuty", many: "minut", other: "minuty" }
  const enForms = { one: "minute", few: "minutes", many: "minutes", other: "minutes" }
  const forms = lang === "pl" ? plForms : enForms
  const prPL = new Intl.PluralRules("pl-PL")
  const prEN = new Intl.PluralRules("en-US")
  const pr = lang === "pl" ? prPL : prEN
  const label = lang === "pl" ? "Szacowany czas czytania" : "Estimated reading time"

  document.querySelector("main p").insertAdjacentHTML("beforeend",
    `<i id="reading-time" title="${label}" aria-label="${label}">
        ${time < 1 ? "<1 "+forms.one : `${time} ${forms[pr.select(time)] || forms.many}`}</i>`)
})()