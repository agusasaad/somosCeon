import Image from 'next/image'
import styles from './SectionOne.module.css'
import image from '@/assets/images/image_section_one.png'
import { data } from './data'
const SectionOne = () => {
  return (
    <section className={styles.container}>
      <div className={styles.content}>
        <Image
          src={image}
          alt='imagen_representativa'
          width={700}
          height={700}
          className={styles.img}
        />

        <div className={styles.info}>
          <div className={styles.text}>
            <h2>Conectividad sin límites</h2>
            <p>
              Con nuestra tecnología de fibra óptica, vas a disfrutar de una
              experiencia online fluida y sin interrupciones, ya sea para
              trabajar, estudiar o entretenerte.
            </p>
          </div>
          <div className={styles.container_cards}>
            {data.map((item, index) => (
              <div className={styles.card} key={index}>
                <Image
                  src={item.gif}
                  alt={item.title}
                  width={80}
                  height={80}
                  className={styles.gif}
                />
                <div className={styles.text}>
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
