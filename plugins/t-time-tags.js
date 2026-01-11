(() => {
  "use strict"

  const times = document.querySelectorAll("time")
  if (!times.length) return

  function formatDate(dateStr, formatStr, locale) {
    const date = new Date(dateStr)

    const getPart = (options) => new Intl.DateTimeFormat(locale, options).format(date)

    const day = date.getDate()
    const month = date.getMonth()
    const hours = date.getHours()

    const map = {
      'd': () => String(day).padStart(2, '0'),
      'j': () => String(day),
      'S': () => ['th','st','nd','rd'][(day % 100 > 10 && day % 100 < 14) ? 0 : day % 10] || 'th',
      'm': () => String(month + 1).padStart(2, '0'),
      'M': () => getPart({ month: 'short' }),
      'F': () => getPart({ month: 'long' }),
      'Y': () => getPart({ year: 'numeric' }),
      'y': () => getPart({ year: '2-digit' }),
      'D': () => getPart({ weekday: 'short' }),
      'l': () => getPart({ weekday: 'long' }),
      'H': () => String(hours).padStart(2, '0'),
      'h': () => String(hours % 12 || 12).padStart(2, '0'),
      'g': () => String(hours % 12 || 12),
      'i': () => String(date.getMinutes()).padStart(2, '0'),
      'a': () => hours < 12 ? 'am' : 'pm',
      'A': () => hours < 12 ? 'AM' : 'PM',
    }

    return [...formatStr].map(c => map[c]?.() ?? c).join('')
  }

  const lang = document.documentElement.lang ?? navigator.language

  times.forEach(t => {
    t.textContent = formatDate(t.dateTime, "d M, Y", lang)
  })
})()