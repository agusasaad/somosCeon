import gsap from 'gsap'
import ScrollTrigger from 'gsap/ScrollTrigger'

export const animateSectionTwo = (title, cards) => {
  gsap.registerPlugin(ScrollTrigger)

  gsap.fromTo(
    [title, cards],
    { y: 100, opacity: 0 },
    {
      y: 0,
      opacity: 1,
      ease: 'power1',
      duration: 0.6,
      stagger: 0.1,
      scrollTrigger: {
        trigger: '#section_two',
        start: 'top 70%',
        end: 'bottom bottom',
      },
    }
  )
}
