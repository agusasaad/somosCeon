'use client'
import styles from './Inicio.module.css'
import { useEffect, useRef } from 'react'
import { animateInicio } from './animateInicio'
import NavBar from '../navbar/NavBar'
import Button from '../button/Button'

const Inicio = () => {
  const button = useRef(null)
  useEffect(() => {
    animateInicio(button.current)
  })
  return (
    <section className={styles.inicio}>
      <div className={styles.container}>
        <div className={styles.content}>
          <div className={styles.title}>
            {/* <span className={styles.subtitle}>Navega sin límites</span> */}
            <h1 className='title'>Conectividad continua & confible.</h1>
            <p className='text'>
              Ofrecemos una red de internet diseñada para mantenerte conectado
              sin interrupciones, brindando velocidad y estabilidad en todo
              momento.
            </p>
            <div className={styles.button} ref={button}>
              <Button text='Contratar Servicio' />
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Inicio
