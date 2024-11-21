'use client'
import { useEffect, useRef, useState } from 'react'
import styles from './NavBar.module.css'
import Image from 'next/image'
import logo from '@/assets/images/logo/logo.svg'
import Link from 'next/link'
import Hamburguer from '@/assets/icons/Hamburguer'
import { AnimationNav } from './AnimationNav'

const NavBar = () => {
  // const whatsappNumber = '5493518031826'
  // const message = encodeURIComponent(
  //   'Hola, estoy interesado en los servicios de SymbioNet, como desarrollo web personalizado, consultoría IT y automatización de procesos. ¡Me gustaría recibir más información!'
  // )

  const [showMenu, setShowMenu] = useState(false)
  const containerRef = useRef(null)
  const navRef = useRef(null)
  const logoRef = useRef(null)
  const homeRef = useRef(null)
  const solutionsRef = useRef(null)
  const companyRef = useRef(null)
  const resourcesRef = useRef(null)
  const contactUsRef = useRef(null)
  const menuRef = useRef(null)

  // useEffect(() => {
  //   AnimationNav(
  //     containerRef.current,
  //     logoRef.current,
  //     homeRef.current,
  //     solutionsRef.current,
  //     resourcesRef.current,
  //     companyRef.current,
  //     contactUsRef.current,
  //     menuRef.current
  //   )
  // })
  return (
    <header className={styles.containerNav} ref={containerRef}>
      <nav className={`${styles.nav} ${showMenu ? styles.show : ''}`}>
        <div className={styles.logo} ref={logoRef}>
          <Image src={logo} alt='Logo' width={200} height={200} />
        </div>
        <div className={styles.menu}>
          <ul>
            <Link passHref href={'/#home'} onClick={() => setShowMenu(false)}>
              <li ref={homeRef}>Inicio</li>
            </Link>
            <Link
              passHref
              href={'/#solutions'}
              onClick={() => setShowMenu(false)}
            >
              <li ref={solutionsRef}>Servicios</li>
            </Link>
            <Link passHref href={'/#about'} onClick={() => setShowMenu(false)}>
              <li ref={resourcesRef}>Sobre Nosotros</li>
            </Link>
            <Link
              passHref
              href={'/#tech-stack'}
              onClick={() => setShowMenu(false)}
            >
              <li ref={companyRef}>FAQ&apos;s</li>
            </Link>

            <Link
              passHref
              href={'/#contact'}
              target='_blank'
              rel='noopener noreferrer'
              onClick={() => setShowMenu(false)}
            >
              <li ref={contactUsRef} className={styles.contact}>
                <button className={styles.button_contact}>Autogestión</button>
              </li>
            </Link>
          </ul>
        </div>
        <div className={styles.hamburguer} ref={menuRef}>
          <button onClick={() => setShowMenu(!showMenu)}>
            <Hamburguer color='white' width='32px' height='32px' />
          </button>
        </div>
      </nav>
    </header>
  )
}

export default NavBar
