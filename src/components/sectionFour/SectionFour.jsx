import Check from '@/assets/icons/Check'
import { planesInternet } from './data'
import styles from './SectionFour.module.css'
import Button from '../button/Button'

const SectionFour = () => {
  return (
    <div className={styles.container}>
      <div className={styles.content}>
        <div className={styles.title}>
          <h2>Conozca nuestros planes y precios</h2>
          <p>Selecciona el plan que mas se ajuste a tus necesidades</p>
        </div>
        <div className={styles.planes_container}>
          {planesInternet.map((item, index) => (
            <div className={styles.card} key={index}>
              <div className={styles.info}>
                <div className={styles.text}>
                  <h5>{item.nombre}</h5>
                  <span>A partir de</span>
                </div>
                <div className={styles.number}>
                  <h3>{item.precio}</h3>
                  <span>Mensuales</span>
                </div>
              </div>
              <div className={styles.check_container}>
                {item.incluye.map((incluye, index) => (
                  <div className={styles.get} key={index}>
                    <span className={styles.icon}>
                      <Check width='20px' height='20px' />
                    </span>
                    <p>{incluye}</p>
                  </div>
                ))}
              </div>
              <div className={styles.button}>
                <button>Mas Información</button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}

export default SectionFour
