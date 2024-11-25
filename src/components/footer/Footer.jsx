import Image from 'next/image'
import styles from './Footer.module.css'
import Phone from '@/assets/icons/Phone'
import Email from '@/assets/icons/Email'
import Location from '@/assets/icons/Location'
import Facebook from '@/assets/icons/Facebook'
import Instagram from '@/assets/icons/Instagram'
import logo from '@/assets/images/logo/logo.svg'

const Footer = () => {
  return (
    <footer className={styles.container}>
      <div className={styles.content}>
        <div className={styles.info}>
          <Image src={logo} alt='Logo' width={200} height={200} />
          <ul>
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
          <div className={styles.social}>
            <span>
              <Facebook />
            </span>
            <span>
              <Instagram />
            </span>
          </div>
        </div>
        <div className={styles.line}></div>
        <div className={styles.copyrigth}>
          <p>© 2024 Somos Ceon. Todos los derechos reservados.</p>
        </div>
      </div>
    </footer>
  )
}

export default Footer
