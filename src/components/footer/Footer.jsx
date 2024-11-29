'use client'
import Image from 'next/image'
import styles from './Footer.module.css'
import Phone from '@/assets/icons/Phone'
import Email from '@/assets/icons/Email'
import Location from '@/assets/icons/Location'
import Facebook from '@/assets/icons/Facebook'
import Instagram from '@/assets/icons/Instagram'
import logo from '@/assets/images/logo/logo.svg'
import { useEffect, useRef } from 'react'
import { animateFooter } from './AnimateFooter'

const Footer = () => {
  const image = useRef(null)
  const list = useRef(null)
  const social = useRef(null)
  const line = useRef(null)
  const copyrigth = useRef(null)
  useEffect(() => {
    animateFooter(
      image.current,
      list.current,
      social.current,
      line.current,
      copyrigth.current
    )
  })
  return (
    <footer className={styles.container} id='footer'>
      <div className={styles.content}>
        <div className={styles.info}>
          <Image src={logo} alt='Logo' width={200} height={200} ref={image} />
          <ul ref={list}>
            <li>
              <span>
                <Phone />
              </span>
              <p>0810-222-0419</p>
            </li>
            <li>
              <span>
                <Email />
              </span>
              <p>info@somosceon.com.ar</p>
            </li>
            <li>
              <span>
                <Location />
              </span>
              <p>Av. De la Unión 2095 Pontevedra (1761) Merlo, Bs.As.</p>
            </li>
          </ul>
          <div className={styles.social} ref={social}>
            <span>
              <Facebook />
            </span>
            <span>
              <Instagram />
            </span>
          </div>
        </div>
        <div className={styles.line} ref={line}></div>
        <div className={styles.copyrigth} ref={copyrigth}>
          <p>© 2024 Somos Ceon. Todos los derechos reservados.</p>
        </div>
      </div>
    </footer>
  )
}

export default Footer
