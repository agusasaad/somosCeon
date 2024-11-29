'use client'
import Image from 'next/image'
import styles from './SectionTwo.module.css'
import { data } from './data'
import { useEffect, useRef } from 'react'
import { animateSectionTwo } from './AnimateSectionTwo'
const SectionTwo = () => {
  const title = useRef(null)
  const cards = useRef([])
  useEffect(() => {
    animateSectionTwo(title.current, cards.current)
  })
  return (
    <section className={styles.container} id='section_two'>
      <div className={styles.content}>
        <div className={styles.text} ref={title}>
          <h2>¿Cómo contratar nuestro servicio?</h2>
        </div>
        <div className={styles.card_container}>
          {data.map((item, index) => (
            <div
              className={styles.card}
              key={index}
              ref={(el) => (cards.current[index] = el)}
            >
              {item.gif && (
                <Image
                  className={styles.gif}
                  src={item.gif}
                  alt={item.title}
                  width={80}
                  height={80}
                  quality={50}
                  loading='lazy'
                  unoptimized
                />
              )}
              <h3>{item.title}</h3>
              <p>{item.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default SectionTwo
