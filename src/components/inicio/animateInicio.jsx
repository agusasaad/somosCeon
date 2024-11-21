import gsap from 'gsap'

export const animateInicio = (button) => {
  const h1 = document.querySelector('.title')
  const p = document.querySelector('.text')

  if (h1) {
    const words = h1.textContent.split(' ')
    h1.innerHTML = ''

    words.forEach((word) => {
      const span = document.createElement('span')
      span.textContent = word
      span.style.display = 'inline-block'
      if (window.innerWidth < 1024) {
        span.style.marginRight = '10px'
      } else {
        span.style.marginRight = '25px'
      }
      h1.appendChild(span)
    })

    const spans = h1.querySelectorAll('span')

    gsap.fromTo(
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
        delay: 0.5,
        duration: 0.7,
        stagger: 0.1,
        ease: 'power1',
      }
    )
  }

  if (p) {
    const words_p = p.textContent.split(' ')
    p.innerHTML = ''

    words_p.forEach((word) => {
      const span = document.createElement('span')
      span.textContent = word
      span.style.display = 'inline-block'
      span.style.marginRight = '5px'
      p.appendChild(span)
    })

    const spans_p = p.querySelectorAll('span')

    gsap.fromTo(
      spans_p,
      {
        y: 5,
        opacity: 0,
        filter: 'blur(10px)',
      },
      {
        y: 0,
        opacity: 1,
        filter: 'blur(0px)',
        delay: 0.7, // Puedes variar el delay si quieres animaciones escalonadas
        duration: 0.6,
        stagger: 0.1,
        ease: 'power1',
      }
    )
  }

  gsap.fromTo(
    button,
    {
      y: 100,
      opacity: 0,
    },
    {
      y: 0,
      opacity: 1,
      delay: 1, // Puedes variar el delay si quieres animaciones escalonadas
      duration: 0.7,
      ease: 'power1',
    }
  )
}
