(() => {
  'use strict'

  const btn = document.getElementById('go-top')
  if (!btn) return
  const fraction = parseInt(document.currentScript.getAttribute("data-fraction")) ?? 5
  console.log(fraction)
  document.addEventListener('scroll', () => {
    console.log('scrolling')
    const scrolled = document.documentElement.scrollTop
    const bodySize = document.body.scrollHeight
    btn.classList.toggle('active', scrolled > bodySize / fraction)
  })
  btn.addEventListener('click', () => window.scrollTo({ top: 0, behavior: 'smooth' }))
})()