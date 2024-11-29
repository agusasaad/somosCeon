import gsap from 'gsap'
import ScrollTrigger from 'gsap/ScrollTrigger'

export const animateSectionThree = () => {
  gsap.registerPlugin(ScrollTrigger)

  //   gsap.fromTo(
  //     '#section_three',
  //     { scale: 0.9 },
  //     {
  //       scale: 1,
  //       ease: 'none',
  //       scrollTrigger: {
  //         trigger: '#section_three',
  //         start: 'top 100%',
  //         end: 'bottom bottom',
  //         scrub: 1,
  //       },
  //     }
  //   )
}
