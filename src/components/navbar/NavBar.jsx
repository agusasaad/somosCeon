'use client'
import { useRef, useState } from 'react'
import styles from './NavBar.module.css'
import Link from 'next/link'
import Hamburguer from '@/assets/icons/Hamburguer'

const NavBar = () => {
  const [showMenu, setShowMenu] = useState(false)
  const containerRef = useRef(null)
  const logoRef = useRef(null)
  const list = useRef(null)
  const button = useRef(null)

  return (
    <header className={styles.containerNav} ref={containerRef}>
      <nav className={`${styles.nav} ${showMenu ? styles.show : ''}`}>
        <div className={styles.menu}>
          <ul ref={list}>
            <Link passHref href={'/#home'} onClick={() => setShowMenu(false)}>
              <li>Inicio</li>
            </Link>
            <Link
              passHref
              href={'/#solutions'}
              onClick={() => setShowMenu(false)}
            >
              <li>Servicios</li>
            </Link>
            <Link
              passHref
              href={'/#tech-stack'}
              onClick={() => setShowMenu(false)}
            >
              <li>FAQs</li>
            </Link>

            <li className={styles.redesMobile}>
              <ul>
                <li>Instagram</li>
                <li>facebook</li>
              </ul>
            </li>
          </ul>
        </div>
        <div className={styles.logo} ref={logoRef}>
          <h4 ref={logoRef}>LOGO</h4>
        </div>
        <div className={styles.button_container}>
          <Link
            passHref
            href={'/#contact'}
            target='_blank'
            rel='noopener noreferrer'
            onClick={() => setShowMenu(false)}
          >
            <button className={styles.button_contact} ref={button}>
              Autogestión
            </button>
          </Link>
          <div className={styles.hamburguer}>
            <button onClick={() => setShowMenu(!showMenu)}>
              <Hamburguer color='white' width='20px' height='20px' />
            </button>
          </div>
        </div>
      </nav>
    </header>
  )
}

export default NavBar
