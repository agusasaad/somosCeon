import gsap from 'gsap'
import ScrollTrigger from 'gsap/ScrollTrigger'

export const animateInicio = (container, button) => {
  const h1 = document.querySelector('.title')
  const p = document.querySelector('.text')

  if (h1) {
    // Verifica si ya contiene spans
    if (!h1.querySelector('span')) {
      const words = h1.textContent.split(' ')
      h1.innerHTML = ''

      words.forEach((word) => {
        const span = document.createElement('span')
        span.textContent = word
        span.style.display = 'inline-block'
        span.style.marginRight = window.innerWidth < 1024 ? '10px' : '15px'
        h1.appendChild(span)
      })
    }
  }

  if (p) {
    // Verifica si ya contiene spans
    if (!p.querySelector('span')) {
      const words_p = p.textContent.split(' ')
      p.innerHTML = ''

      words_p.forEach((word) => {
        const span = document.createElement('span')
        span.textContent = word
        span.style.display = 'inline-block'
        span.style.marginRight = '8px'
        p.appendChild(span)
      })
    }
  }

  const spans = h1.querySelectorAll('span')
  const spans_p = p.querySelectorAll('span')

  const tl = gsap.timeline()

  tl.fromTo(
    spans,
    {
      y: 10,
      opacity: 0,
      filter: 'blur(10px)',
    },
    {
      y: 0,
      opacity: 1,
      filter: 'blur(0px)',
      duration: 0.7,
      delay: 0.3,
      stagger: 0.1,
      ease: 'power1',
    }
  )

  tl.fromTo(
    spans_p,
    {
      opacity: 0,
      filter: 'blur(10px)',
    },
    {
      opacity: 1,
      filter: 'blur(0px)',
      duration: 0.5,
      stagger: 0.1,
      ease: 'power1',
    },
    '-=0.5'
  )
  tl.fromTo(
    button,
    {
      opacity: 0,
      filter: 'blur(10px)',
    },
    {
      opacity: 1,
      filter: 'blur(0px)',
      duration: 0.5,
      ease: 'power1',
    },
    '-=0.5'
  )
}
