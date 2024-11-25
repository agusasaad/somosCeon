'use client'
import ArrowDown from '@/assets/icons/ArrowDown'
import { internetServices } from './data'
import styles from './SectionFive.module.css'
import { useRef } from 'react'
import gsap from 'gsap'

const SectionFive = () => {
  const refs = useRef([])
  const buttonRefs = useRef([])

  const toggleParagraph = (index) => {
    const pElement = refs.current[index]
    const buttonElement = buttonRefs.current[index]
    const isHidden = pElement.style.height === '0px' || !pElement.style.height

    gsap.to(pElement, {
      height: isHidden ? 'auto' : 0,
      opacity: isHidden ? 1 : 0,
      duration: 0.5,
      ease: 'power2.out',
    })

    gsap.to(buttonElement, {
      rotation: isHidden ? 180 : 0,
      duration: 0.3,
      ease: 'power3',
    })
  }

  return (
    <div className={styles.container}>
      <div className={styles.content}>
        {internetServices.map((item, index) => (
          <div
            className={styles.card}
            key={index}
            style={{ backgroundImage: `url(${item.image.src})` }}
            onClick={() => toggleParagraph(index)}
          >
            <div className={styles.overlay}>
              <div className={styles.info}>
                <div className={styles.title_button}>
                  <h3>{item.name}</h3>
                  <button
                    ref={(el) => (buttonRefs.current[index] = el)}
                    onClick={() => toggleParagraph(index)}
                  >
                    <ArrowDown
                      width='30px'
                      height='30px'
                      color='rgba(255, 255, 255, 0.863)'
                    />
                  </button>
                </div>
                <div
                  className={styles.text_button}
                  ref={(el) => (refs.current[index] = el)}
                >
                  <p>{item.description}</p>
                  <div className={styles.button}>
                    <button>Contratar servicio</button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}

export default SectionFive
