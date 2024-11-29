'use client'
import Check from '@/assets/icons/Check'
import { planesInternet } from './data'
import styles from './SectionFour.module.css'
import { useEffect, useRef } from 'react'
import { animateSectionFour } from './AnimateSectionFour'

const SectionFour = () => {
  const title = useRef(null)
  const paragraph = useRef(null)
  const cards = useRef([])

  useEffect(() => {
    animateSectionFour(title.current, paragraph.current, cards.current)
  })
  return (
    <section className={styles.container} id='section_four'>
      <div className={styles.content}>
        <div className={styles.title}>
          <h2 ref={title}>Conozca nuestros planes y precios</h2>
          <p ref={paragraph}>
            Selecciona el plan que mas se ajuste a tus necesidades
          </p>
        </div>
        <div className={styles.planes_container}>
          {planesInternet.map((item, index) => (
            <div
              className={styles.card}
              key={index}
              ref={(el) => (cards.current[index] = el)}
            >
              <div className={styles.info}>
                <div className={styles.text}>
                  <h5>{item.nombre}</h5>
                  <span>A partir de</span>
                </div>
                <div className={styles.number}>
                  <h3>{item.precio}</h3>
                  <span>Mensuales</span>
                </div>
              </div>
              <div className={styles.check_container}>
                {item.incluye.map((incluye, index) => (
                  <div className={styles.get} key={index}>
                    <span className={styles.icon}>
                      <Check width='20px' height='20px' />
                    </span>
                    <p>{incluye}</p>
                  </div>
                ))}
              </div>
              <div className={styles.button}>
                <button>Mas Información</button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default SectionFour
