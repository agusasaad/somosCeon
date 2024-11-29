import gsap from 'gsap'
import ScrollTrigger from 'gsap/ScrollTrigger'

export const animateSectionSix = (image, title, preguntas) => {
  gsap.registerPlugin(ScrollTrigger)
  console.log(title, preguntas)
  gsap.fromTo(
    image,
    {
      opacity: 0,
      scale: 0,
    },
    {
      opacity: 1,
      scale: 1,
      duration: 0.9,
      ease: 'power3',
      scrollTrigger: {
        trigger: '#section_six',
        start: 'top 70%',
        end: 'bottom ',
      },
    }
  )

  gsap.fromTo(
    [title, preguntas],
    {
      opacity: 0,
      x: 100,
    },
    {
      opacity: 1,
      x: 0,
      duration: 0.6,
      ease: 'power1',
      stagger: 0.1,
      scrollTrigger: {
        trigger: '#section_six',
        start: 'top 70%',
        end: 'bottom ',
      },
    }
  )
}
