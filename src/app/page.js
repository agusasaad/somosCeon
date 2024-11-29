import Inicio from '@/components/inicio/Inicio'
import styles from './page.module.css'
import NavBar from '@/components/navbar/NavBar'
import Footer from '@/components/footer/Footer'
import dynamic from 'next/dynamic'

export default function Home() {
  const SectionOne = dynamic(() => import('@/components/sectionOne/SectionOne'))
  const SectionTwo = dynamic(() => import('@/components/sectionTwo/SectionTwo'))
  const SectionFour = dynamic(() =>
    import('@/components/sectionFour/SectionFour')
  )
  const SectionThree = dynamic(() =>
    import('@/components/sectionThree/SectionThree')
  )
  const SectionSix = dynamic(() => import('@/components/sectionSix/SectionSix'))
  return (
    <div className={styles.page}>
      <NavBar />
      <main className={styles.main}>
        <Inicio />
        <SectionOne />
        <SectionTwo />
        <SectionFour />
        <SectionThree />
        <SectionSix />
      </main>
      <Footer />
    </div>
  )
}
