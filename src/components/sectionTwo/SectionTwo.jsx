import Image from 'next/image'
import styles from './SectionTwo.module.css'
import { data } from './data'
const SectionTwo = () => {
  return (
    <section className={styles.container}>
      <div className={styles.content}>
        <div className={styles.text}>
          <h2>¿Cómo contratar nuestro servicio?</h2>
        </div>
        <div className={styles.card_container}>
          {data.map((item, index) => (
            <div className={styles.card} key={index}>
              {item.gif && (
                <Image
                  src={item.gif}
                  alt={item.title}
                  width={80}
                  height={80}
                  className={styles.gif}
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
