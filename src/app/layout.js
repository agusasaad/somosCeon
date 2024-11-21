import './globals.css'

export const metadata = {
  metadataBase: new URL('https://somosceon.vercel.app/'),
  title: 'Somos Ceon - Soluciones de Internet y Conectividad para Empresas',
  description:
    'En Somos Ceon ofrecemos soluciones integrales de conectividad y servicios de internet, garantizando eficiencia y tecnología avanzada para tu negocio.',
  keywords:
    'Somos Ceon, internet, conectividad, soluciones de internet, infraestructura de red, servicios de telecomunicaciones, fibra óptica, conectividad empresarial, redes privadas, soporte IT, servicios digitales, internet para empresas, soluciones de red, optimización de conectividad, servicios de telecomunicaciones empresariales, innovación en internet',
  author: 'Somos Ceon',
  openGraph: {
    title: 'Somos Ceon - Conectividad de Alta Velocidad para Empresas Modernas',
    description:
      'Desde soluciones de fibra óptica hasta redes privadas, en Somos Ceon optimizamos la conectividad de tu empresa con tecnología de última generación.',
    // images: 'https://somosceon.vercel.app/imagen.jpg',
    url: 'https://somosceon.vercel.app/',
    type: 'website',
    site_name: 'Somos Ceon',
  },
  alternates: {
    canonical: '/',
  },
  twitter: {
    card: 'summary_large_image',
    title:
      'Somos Ceon - Innovación en Soluciones de Conectividad para Empresas',
    description:
      'Expertos en infraestructura de red y servicios de internet. Potencia la conectividad de tu empresa con nuestras soluciones personalizadas.',
    // images: 'https://somosceon.vercel.app/imagen.jpg',
  },
}

export default function RootLayout({ children }) {
  return (
    <html lang='en'>
      <body>{children}</body>
    </html>
  )
}
