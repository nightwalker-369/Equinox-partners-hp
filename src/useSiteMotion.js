// useSiteMotion.js — hero entrance, scroll-reveal, and nav-condense behaviors.
// Extracted from the original inline script; framework-agnostic DOM logic invoked
// once after mount. Respects prefers-reduced-motion.

const reduce = () =>
  window.matchMedia('(prefers-reduced-motion: reduce)').matches

export function runHeroEntrance(root) {
  const hero = root.querySelector('.ep-hero__inner')
  if (!hero || reduce()) return
  ;[...hero.children].forEach((el, i) => {
    el.classList.add('ep-anim')
    el.style.transitionDelay = i * 120 + 'ms'
  })
  const mark = root.querySelector('.ep-hero__mark')
  if (mark) {
    mark.classList.add('ep-anim')
    mark.style.transitionDelay = '480ms'
  }
  const showHero = () =>
    root
      .querySelectorAll('.ep-hero .ep-anim')
      .forEach((el) => el.classList.add('ep-in'))
  setTimeout(showHero, 60)
  setTimeout(showHero, 400) // safety if first paint was delayed
}

export function runScrollReveal(root) {
  if (reduce()) return () => {}
  const groups = [
    ['.ep-mission__inner > *'],
    ['.ep-section__head > *'],
    ['.ep-pain'],
    ['.ep-tabs', '.ep-tab-panel'],
    ['.ep-why__head > *', '.ep-why__row'],
    ['.ep-case'],
    ['.ep-profile__aside', '.ep-timeline__row'],
    ['.ep-company__row'],
    ['.ep-contact > div > *', '.ep-form'],
    ['.ep-footer__brandblock > *', '.ep-footer__cols > div', '.ep-footer__legal > *'],
  ]
  const targets = new Set()
  groups.forEach((sels) => {
    sels.forEach((sel) =>
      root.querySelectorAll(sel).forEach((el) => {
        if (el.closest('.ep-hero')) return
        targets.add(el)
      }),
    )
  })
  targets.forEach((el) => el.classList.add('ep-anim'))

  const show = (el) => {
    if (el.classList.contains('ep-in')) return
    const sibs = [...el.parentElement.children].filter((c) =>
      c.classList.contains('ep-anim'),
    )
    const step = el.classList.contains('ep-timeline__row') ? 45 : 120
    el.style.transitionDelay =
      Math.min(Math.max(0, sibs.indexOf(el)) * step, 520) + 'ms'
    el.classList.add('ep-in')
    targets.delete(el)
  }

  // Primary: IntersectionObserver — each section animates as it scrolls in
  let io = null
  if ('IntersectionObserver' in window) {
    io = new IntersectionObserver(
      (entries) => {
        entries.forEach((e) => {
          if (e.isIntersecting) {
            show(e.target)
            io.unobserve(e.target)
          }
        })
      },
      { threshold: 0.15, rootMargin: '0px 0px -10% 0px' },
    )
    targets.forEach((el) => io.observe(el))
  }

  // Fallback: scroll/resize reveal of in-view elements only (never a blanket reveal)
  function revealInView() {
    const vh = window.innerHeight || document.documentElement.clientHeight
    ;[...targets].forEach((el) => {
      const r = el.getBoundingClientRect()
      if (r.top < vh * 0.9 && r.bottom > 0) show(el)
    })
  }
  let ticking = false
  function onScroll() {
    if (ticking) return
    ticking = true
    requestAnimationFrame(() => {
      ticking = false
      revealInView()
    })
  }
  window.addEventListener('scroll', onScroll, { passive: true })
  window.addEventListener('resize', onScroll)
  revealInView() // reveal whatever is above the fold on load

  return () => {
    window.removeEventListener('scroll', onScroll)
    window.removeEventListener('resize', onScroll)
    if (io) io.disconnect()
  }
}

export function runNavCondense() {
  const nav = document.querySelector('.ep-nav')
  if (!nav) return () => {}
  let ticking = false
  const update = () => {
    nav.classList.toggle('is-scrolled', window.scrollY > 24)
    ticking = false
  }
  const onScroll = () => {
    if (ticking) return
    ticking = true
    requestAnimationFrame(update)
  }
  window.addEventListener('scroll', onScroll, { passive: true })
  update()
  return () => window.removeEventListener('scroll', onScroll)
}
