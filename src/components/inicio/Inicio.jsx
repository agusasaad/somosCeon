'use client'
import styles from './Inicio.module.css'
import { useEffect, useRef } from 'react'
import { animateInicio } from './animateInicio'
import NavBar from '../navbar/NavBar'

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
              <button className={styles.cssbuttons_io_button}>
                Contratar servicio
                <div className={styles.icon}>
                  <svg
                    height={24}
                    width={24}
                    viewBox='0 0 24 24'
                    xmlns='http://www.w3.org/2000/svg'
                  >
                    <path d='M0 0h24v24H0z' fill='none' />
                    <path
                      d='M16.172 11l-5.364-5.364 1.414-1.414L20 12l-7.778 7.778-1.414-1.414L16.172 13H4v-2z'
                      fill='currentColor'
                    />
                  </svg>
                </div>
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Inicio
