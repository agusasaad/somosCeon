import Inicio from '@/components/inicio/Inicio'
import styles from './page.module.css'
import SectionOne from '@/components/sectionOne/SectionOne'
import SectionTwo from '@/components/sectionTwo/SectionTwo'
import NavBar from '@/components/navbar/NavBar'
import SectionThree from '@/components/sectionThree/SectionThree'

export default function Home() {
  return (
    <div className={styles.page}>
      <NavBar />
      <main className={styles.main}>
        <Inicio />
        <SectionOne />
        <SectionTwo />
        <SectionThree />
      </main>
    </div>
  )
}
