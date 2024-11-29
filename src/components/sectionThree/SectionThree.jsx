'use client'
import { useEffect, useRef } from 'react'
import { data } from './data'
import styles from './SectionThree.module.css'
import ArrowLeftCarrucel from '@/assets/icons/ArrowLeftCarrucel'
import ArrowRigthCarrucel from '@/assets/icons/ArrowRigthCarrucel'
import { animateSectionThree } from './AnimateSectionThree'

const SectionThree = () => {
  const carrucelRef = useRef(null)
  const title = useRef(null)
  const titleMobile = useRef(null)
  const cards = useRef([])

  useEffect(() => {
    animateSectionThree(title.current, cards.current, titleMobile.current)
  }, [])

  const handleleftClick = () => {
    if (window.innerWidth < 1500) {
      carrucelRef.current.scrollLeft -= 470
    } else {
      carrucelRef.current.scrollLeft -= 420
    }
  }

  const handleRightClick = () => {
    if (window.innerWidth < 1500) {
      carrucelRef.current.scrollLeft += 470
    } else {
      carrucelRef.current.scrollLeft += 420
    }
  }
  return (
    <section className={styles.container} id='section_three'>
      <div className={styles.content}>
        <div className={styles.title}>
          <h2 className={styles.title_desktop} ref={title}>
            Contacta con nosotros de la forma que prefieras.
          </h2>
          <h2 className={styles.title_mobile} ref={titleMobile}>
            Contacta con nosotros
          </h2>
        </div>
        <div className={styles.container_cards}>
          <div className={styles.containerButtonLeft}>
            <button onClick={handleleftClick}>
              <ArrowLeftCarrucel />
            </button>
          </div>

          <div className={styles.carrucel_card} ref={carrucelRef}>
            {data.map((item, index) => (
              <div
                className={styles.card}
                key={index}
                ref={(el) => (cards.current[index] = el)}
              >
                <div className={styles.icon}>{item.icon}</div>
                <h3>{item.title}</h3>
                <p>{item.description}</p>
                <p>{item.horario}</p>
              </div>
            ))}
          </div>
          <div className={styles.containerButtonRight}>
            <button onClick={handleRightClick}>
              <ArrowRigthCarrucel />
            </button>
          </div>
        </div>
      </div>
    </section>
  )
}

export default SectionThree
