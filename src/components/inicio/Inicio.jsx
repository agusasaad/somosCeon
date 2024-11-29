'use client'
import styles from './Inicio.module.css'
import { useEffect, useRef } from 'react'
import { animateInicio } from './animateInicio'
import Link from 'next/link'
import Button from '../button/Button'

const Inicio = () => {
  const containerRef = useRef(null)
  const button = useRef(null)
  useEffect(() => {
    animateInicio(containerRef.current, button.current)
  })
  return (
    <section className={styles.inicio} ref={containerRef}>
      <div className={styles.container}>
        <div className={styles.content}>
          <div className={styles.title}>
            <h1 className='title'>Conectividad Rapida & Confiable</h1>
            <p className='text'>Internet diseñado para acompañarte siempre</p>
            <div className={styles.container_button} ref={button}>
              <Button text='Contratar Servicios' href='/nosotros' />
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Inicio
