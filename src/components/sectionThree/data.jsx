import Form from '@/assets/icons/Form'
import HandPhone from '@/assets/icons/HandPhone'
import Support from '@/assets/icons/Support'
import Whastapp from '@/assets/icons/Whastapp'

export const data = [
  {
    title: 'WhatsApp Ventas',
    description:
      'Habla directamente con nuestro equipo de ventas en tiempo real durante el horario de atención. Resuelve tus dudas rapidamente con solo un click.',
    horario: 'Horario de atención: 09:00 a 18:00',
    number: '+54 11 2345-6789',
    icon: <Whastapp width='35px' height='35px' />,
  },

  {
    title: 'Lamada Directa',
    description:
      'Si prefieres una llamada, estas a un click de distancia. Comunicate directamente con nuetro equipo de ventas para recibir asesoramiento.',
    horario: 'Horario de atención: 09:00 a 18:00',
    number: '+54 11 2345-6789',
    icon: <Support width='35px' height='35px' />,
  },

  {
    title: 'WhatsApp Autogestión',
    description:
      'Si nos contactas fuera de horario comercial, puede dejar sus datos a traves de nuestro WhatsApp y de autogestión para que uno de nuestros vendedores te llame.',
    horario: 'Horario de atención: 24h',
    number: 'Contactanos',
    icon: <HandPhone width='35px' height='35px' />,
  },

  {
    title: 'Formulario de Contacto',
    description:
      'Prefieres dejarnos un mensaje? Deja tus datos en el formulario de contacto y nos pondremos en contacto contigo en el menor tiempo posible.',
    horario: 'Horario de atención: 09:00 a 18:00',
    number: 'Contactanos',
    icon: <Form width='35px' height='35px' />,
  },
]
