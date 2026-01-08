(() => {
  'use strict'

  const btn = document.getElementById('go-top')
  if (!btn) return
  const updateBtn = () => {
    const scrolled = document.documentElement.scrollTop
    const bodySize = document.body.scrollHeight
    btn.classList.toggle('active', scrolled > bodySize
      / parseInt(document.currentScript.getAttribute("data-fraction") ?? 5)
    )
  }
  document.addEventListener('scroll', updateBtn)
  btn.addEventListener('click', () => window.scrollTo({ top: 0, behavior: 'smooth' }))
})()