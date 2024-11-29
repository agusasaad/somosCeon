'use client'
import Image from 'next/image'
import styles from './SectionOne.module.css'
import image from '@/assets/images/image_section_one.png'
import { data } from './data'
import { useEffect, useRef } from 'react'
import { animateSectionOne } from './AnimateSectionOne'
const SectionOne = () => {
  const img = useRef(null)
  const text = useRef(null)
  const paragraph = useRef(null)
  const card = useRef(null)
  useEffect(() => {
    animateSectionOne(
      img.current,
      text.current,
      paragraph.current,
      card.current
    )
  })
  return (
    <section className={styles.container} id='section_one'>
      <div className={styles.content}>
        <Image
          ref={img}
          src={image}
          alt='imagen_representativa'
          width={700}
          height={700}
          className={styles.img}
        />

        <div className={styles.info}>
          <div className={styles.text}>
            <h2 ref={text}>Conectividad sin límites</h2>
            <p ref={paragraph}>
              Con nuestra tecnología de fibra óptica, vas a disfrutar de una
              experiencia online fluida y sin interrupciones, ya sea para
              trabajar, estudiar o entretenerte.
            </p>
          </div>
          <div className={styles.container_cards} ref={card}>
            {data.map((item, index) => (
              <div className={styles.card} key={index}>
                <Image
                  src={item.gif}
                  alt={item.title}
                  width={80}
                  height={80}
                  className={styles.gif}
                />
                <div className={styles.text_card}>
                  <h3>{item.title}</h3>
                  <p>{item.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}

export default SectionOne
