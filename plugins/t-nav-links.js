(() => {
  "use strict"

  const p = document.querySelector(".previous-post")
  const n = document.querySelector(".next-post")
  if (p) p.firstChild.nodeValue = "Poprzedni"
  if (n) n.firstChild.nodeValue = "Następny"
})()