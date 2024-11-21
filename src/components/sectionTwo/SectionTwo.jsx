import styles from './SectionTwo.module.css'
const SectionTwo = () => {
  return (
    <section className={styles.container}>
      <div className={styles.content}>
        <div className={styles.text}>
          <h2>¿Cómo contratar nuestro servicio?</h2>
        </div>
        <div className={styles.cards}>
          <div className={styles.card}>
            <h3>Contactanos hoy</h3>
            <p>Escribinos por WhatsApp, teléfono o nuestra web.</p>
          </div>
          <div className={styles.card}>
            <h3>Elegí tu plan ideal</h3>
            <p>Escribinos por WhatsApp, teléfono o nuestra web.</p>
          </div>
          <div className={styles.card}>
            <h3>Coordinamos la visita</h3>
            <p>Nos adaptamos al día y horario que prefieras.</p>
          </div>
        </div>
      </div>
    </section>
  )
}

export default SectionTwo
