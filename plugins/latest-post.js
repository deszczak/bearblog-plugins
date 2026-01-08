(() => {
  'use strict'

  const el = document.querySelectorAll(".latest-post")[0]
  if (!el) return

  const diffInMs = new Date(el.querySelector("time").dateTime) - new Date()
  const diffInMins = Math.round(diffInMs / 6e4)
  const diffInHours = Math.round(diffInMs / 36e5)
  const diffInDays = Math.round(diffInMs / 864e5)

  const rtf = new Intl.RelativeTimeFormat('pl-PL', { numeric: 'auto' })
  let timeString

  if (Math.abs(diffInMins) < 15) {
    timeString = 'przed chwilą'
  } else if (Math.abs(diffInMins) < 60) {
    timeString = Math.abs(diffInMins) === 1 ? 'minutę temu' : rtf.format(diffInMins, 'minute')
  } else if (Math.abs(diffInHours) < 24) {
    timeString = Math.abs(diffInHours) === 1 ? 'godzinę temu' : rtf.format(diffInHours, 'hour')
  } else if (Math.abs(diffInHours) <= 48) {
    timeString = 'wczoraj'
  } else { timeString = rtf.format(diffInDays, 'day') }

  el.replaceWith(Object.assign(document.createElement("p"), {
    className: "latest-post", innerHTML: `
      ${el.getAttribute("data-pre") ?? 'Najnowszy wpis pojawił się'}
      <strong>${timeString}</strong>:
      <a href="${el.querySelector("a").href}">${el.querySelector("a").textContent}</a>
    `
  }))
})()