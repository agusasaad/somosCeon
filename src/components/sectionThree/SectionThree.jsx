'use client'
import { useRef } from 'react'
import { data } from './data'
import styles from './SectionThree.module.css'
import ArrowLeftCarrucel from '@/assets/icons/ArrowLeftCarrucel'
import ArrowRigthCarrucel from '@/assets/icons/ArrowRigthCarrucel'
import Link from 'next/link'

const SectionThree = () => {
  const carrucelRef = useRef(null)
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
    <div className={styles.container}>
      <div className={styles.content}>
        <div className={styles.title}>
          <h2 className={styles.title_desktop}>
            Contacta con Nosotros de la Forma que Prefieras.
          </h2>
          <h2 className={styles.title_mobile}>Contactanos</h2>
        </div>
        <div className={styles.container_cards}>
          <div className={styles.containerButtonLeft}>
            <button onClick={handleleftClick}>
              <ArrowLeftCarrucel />
            </button>
          </div>

          <div className={styles.carrucel_card} ref={carrucelRef}>
            {data.map((item, index) => (
              <div className={styles.card} key={index}>
                <div className={styles.icon}>{item.icon}</div>
                <h3>{item.title}</h3>
                <p>{item.description}</p>
                <p>{item.horario}</p>
                <Link href={'/'} className={styles.link}>
                  <button>Click aquí</button>
                </Link>
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
    </div>
  )
}

export default SectionThree
