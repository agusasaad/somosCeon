import gsap from 'gsap'
import ScrollTrigger from 'gsap/ScrollTrigger'

export const animateSectionThree = (title, cards, titleMobile) => {
  gsap.registerPlugin(ScrollTrigger)

  const tl = gsap.timeline({
    scrollTrigger: {
      trigger: '#section_three',
      start: 'top 100%',
      end: 'bottom bottom',
    },
  })

  if (title) {
    if (!title.querySelector('span')) {
      const words = title.textContent.split(' ')
      title.innerHTML = ''

      words.forEach((word) => {
        const span = document.createElement('span')
        span.textContent = word
        span.style.display = 'inline-block'
        span.style.marginRight = window.innerWidth < 1024 ? '5px' : '10px'
        title.appendChild(span)
      })
    }
  }

  const spans = title.querySelectorAll('span')

  if (titleMobile) {
    if (!titleMobile.querySelector('span')) {
      const words = titleMobile.textContent.split(' ')
      titleMobile.innerHTML = ''

      words.forEach((word) => {
        const span = document.createElement('span')
        span.textContent = word
        span.style.display = 'inline-block'
        span.style.marginRight = window.innerWidth < 1024 ? '10px' : '10px'
        titleMobile.appendChild(span)
      })
    }
  }

  if (window.innerWidth > 768) {
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
  } else {
    const spansMobile = titleMobile.querySelectorAll('span')
    tl.fromTo(
      spansMobile,
      {
        y: 10,
        opacity: 0,
        filter: 'blur(10px)',
      },
      {
        y: 0,
        opacity: 1,
        filter: 'blur(0px)',
        duration: 1,
        delay: 0.3,
        stagger: 0.1,
        ease: 'power1',
      }
    )
  }

  tl.fromTo(
    cards,
    {
      y: 100,
      opacity: 0,
    },
    {
      y: 0,
      opacity: 1,
      duration: 0.7,
      stagger: 0.2,
      ease: 'power1',
    },
    '-=0.5'
  )
}
