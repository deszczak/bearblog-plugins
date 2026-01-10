(() => {
  "use strict"

  const toc = document.getElementById("table-of-contents")
  const headers = [...document.querySelectorAll("main h2")]

  if (!(toc && document.body.classList.contains("post") && headers.length)) return
  toc.innerHTML = `
    <div id="toc-content">
      <h2>Spis treści</h2>
      <ol>
      <li><a href="#">Początek</a></li>
      ${
        [...document.querySelectorAll("main h2")].map(h => `
          <li><a href="#${h.id}">${h.innerHTML}</a></li>
        `).join("")
      }</ol>
    </div>
    <button id="toc-btn" aria-expanded="false" aria-controls="toc-content" title="Spis treści">
      <svg fill="currentColor" viewBox="0 0 256 256" xmlns="http://www.w3.org/2000/svg">
        <path d="M72.01074,170.625,55.99219,192H68a8,8,0,0,1,0,16H40a8.00013,8.00013,0,0,1-6.40186-12.79785l25.46729-33.9834A6.00232,6.00232,0,1,0,48.46826,155.667a8,8,0,1,1-14.73633-6.23242,22.00229,22.00229,0,1,1,38.50635,20.87109Q72.12842,170.46826,72.01074,170.625ZM43.57764,67.15527,48,64.94434v43.0498a8,8,0,1,0,16,0V52a7.99928,7.99928,0,0,0-11.57764-7.15527l-16,8a7.99984,7.99984,0,1,0,7.15528,14.31054ZM104,72H215.999a8,8,0,0,0,0-16H104a8,8,0,0,0,0,16ZM215.999,184h-112a8,8,0,1,0,0,16h112a8,8,0,0,0,0-16Zm0-64H104a8,8,0,0,0,0,16H215.999a8,8,0,0,0,0-16Z"/>
      </svg> <!-- icon by svgrepo.com/author/phosphor -->
    </button>
  `
  document.querySelector("main").insertBefore(
    toc, document.querySelector("main p:first-of-type")
  )

  const btn = document.getElementById("toc-btn")
  const isOpen = toc.classList.contains("open")
  btn.addEventListener("click", () => {
    toc.classList.toggle("open")
    btn.setAttribute("aria-expanded", String(!isOpen))
  })

  document.addEventListener("click", e => {
    if (!e.target.closest('#table-of-contents')) toc.classList.remove("open")
  })
})()