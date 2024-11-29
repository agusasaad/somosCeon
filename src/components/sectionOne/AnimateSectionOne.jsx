import gsap from 'gsap'
import ScrollTrigger from 'gsap/ScrollTrigger'

export const animateSectionOne = (img, text, paragraph, card) => {
  gsap.registerPlugin(ScrollTrigger)

  gsap.fromTo(
    img,
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
        trigger: '#section_one',
        start: 'top 70%',
        end: 'bottom center',
      },
    }
  )

  gsap.fromTo(
    [text, paragraph, card],
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
        trigger: '#section_one',
        start: 'top 60%',
        end: 'bottom center',
      },
    }
  )
}
