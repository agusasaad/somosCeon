import gsap from 'gsap'
import ScrollTrigger from 'gsap/ScrollTrigger'

export const animateFooter = (image, list, social, line, copyrigth) => {
  gsap.registerPlugin(ScrollTrigger)

  gsap.fromTo(
    [image, list, social, line, copyrigth],
    { x: 100, opacity: 0 },
    {
      x: 0,
      opacity: 1,
      ease: 'power1',
      duration: 0.6,
      stagger: 0.1,
      scrollTrigger: {
        trigger: '#footer',
        start: 'top 70%',
        end: 'center',
      },
    }
  )
}
