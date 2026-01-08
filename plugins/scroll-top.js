(() => {
  'use strict'

  const btn = document.getElementById('go-top')
  if (!btn) return
  const updateBtn = () => {
    const scrolled = document.documentElement.scrollTop
    const bodySize = document.body.clientHeight
    btn.classList.toggle('active', scrolled > bodySize/5)
  }
  document.addEventListener('scroll', updateBtn)
  btn.addEventListener('click', () => window.scrollTo({ top: 0, behavior: 'smooth' }))
})()