import type { Expedition, Testimonial } from '../types/expedition';

const BASE_IMG_URL = 'https://matiluna22.github.io/Victoria-Rosso-Web/imagenes%20jpg';

export const EXPEDITIONS: Expedition[] = [
  {
    id: 'kruger-big-five',
    title: 'Kruger Big Five: Inmersión en la Sabana',
    subtitle: 'Safari All-Inclusive con criterio biológico y lodges de lujo Mantis Collection',
    category: 'safari',
    destination: 'Parque Nacional Kruger & Reservas Privadas',
    country: 'Sudáfrica',
    duration: '8 Días / 7 Noches',
    dates: 'Salidas 2025 / 2026',
    spotsTotal: 10,
    spotsLeft: 3,
    statusBadge: 'ÚLTIMOS 3 CUPOS',
    image: `${BASE_IMG_URL}/posible%20banner%201.jpg`,
    highlightPill: 'Safari de Autor',
    description: 'Viví el verdadero Kruger lejos de las rutas turísticas habituales. Rastreá a los Cinco Grandes (León, Leopardo, Elefante, Rinoceronte y Búfalo) guiado por Victoria Rosso, comprendiendo la ecología del comportamiento y la conservación activa de los ecosistemas sudafricanos.',
    highlights: [
      'Game drives diarios en vehículos 4x4 abiertos al amanecer y atardecer',
      'Lectura de huellas y comportamiento animal explicada por bióloga en vivo',
      'Alojamiento de primer nivel en Mantis Collection con pensión completa',
      'Grupo reducido de máximo 10 personas para una experiencia íntima',
    ],
    includes: [
      'Alojamiento All-Inclusive en reserva privada',
      'Todos los safaris y entradas a parques nacionales',
      'Acompañamiento y mentoría continua de Victoria Rosso',
      'Traslados internos en Sudáfrica',
    ],
    whatsAppText: 'Hola Vicky! Me interesa sumarme a la expedición Kruger Big Five Safari. ¿Me podrías compartir más detalles sobre fechas y cupos?',
  },
  {
    id: 'voluntariado-fauna-silvestre',
    title: 'Voluntariado: Conservación de Rinocerontes y Chitas',
    subtitle: 'Manos a la obra en centros de rescate y rehabilitación de especies amenazadas',
    category: 'volunteering',
    destination: 'Hoedspruit & Gran Kruger',
    country: 'Sudáfrica',
    duration: '14 a 28 Días',
    dates: 'Convocatoria Abierta',
    spotsTotal: 8,
    spotsLeft: 2,
    statusBadge: 'CONVOCATORIA ACTIVA',
    image: `${BASE_IMG_URL}/RINO2.jpg`,
    highlightPill: 'Impacto Real & Ciencia',
    description: 'Una experiencia transformadora para trabajar en el corazón de la conservación. Participá en alimentación, enriquecimiento ambiental, monitoreo médico y cuidados intensivos de fauna silvestre rescatada junto a equipos veterinarios internacionales.',
    highlights: [
      'Trabajo diario directo con rinocerontes huérfanos, chitas y carnívoros salvajes',
      'Talleres prácticos de medicina veterinaria de fauna y manejo biológico',
      'Certificación internacional de participación en conservación',
      'Acompañamiento personalizado en la preparación y postulación previa',
    ],
    includes: [
      'Alojamiento en campamento de conservación y todas las comidas',
      'Entrenamiento práctico y supervisión por especialistas',
      'Asesoría técnica y pre-viaje personalizada 1 a 1',
      'Certificado de voluntariado internacional',
    ],
    whatsAppText: 'Hola Vicky! Quiero información para postularme al Voluntariado de Conservación de Rinos y Chitas en Sudáfrica. ¿Cómo es el proceso de selección?',
  },
  {
    id: 'cape-town-costa-oceanica',
    title: 'Ciudad del Cabo, Pingüinos & Costa Oceánica',
    subtitle: 'Biodiversidad marina, fauna pelágica y la magia del fin del continente africano',
    category: 'safari',
    destination: 'Cape Town & Península del Cabo',
    country: 'Sudáfrica',
    duration: '6 Días / 5 Noches',
    dates: 'Primavera / Verano 2025-2026',
    spotsTotal: 10,
    spotsLeft: 4,
    statusBadge: 'CUPOS DISPONIBLES',
    image: `${BASE_IMG_URL}/IMG_7217.JPG`,
    highlightPill: 'Inmersión Oceánica',
    description: 'Explorá la convergencia única de los océanos Atlántico e Índico. Desde las colonias de pingüinos africanos en Boulders Beach hasta la reserva de Cape Point y el avistaje de fauna marina, combinando ciencia con la energía cosmopolita de Ciudad del Cabo.',
    highlights: [
      'Visita guiada a colonias de pingüinos de El Cabo y centro de rehabilitación SANCCOB',
      'Ascenso a Table Mountain y exploración botánica del Reino Floral del Cabo',
      'Recorrido de la Península del Cabo y avistaje de lobos marinos y aves pelágicas',
      'Gastronomía local y viñedos de la región vitivinícola sudafricana',
    ],
    includes: [
      'Hotelería boutique en Ciudad del Cabo',
      'Excursiones y entradas a reservas naturales',
      'Guía biológica y logística integral coordinada por Victoria',
      'Desayunos y cenas seleccionadas',
    ],
    whatsAppText: 'Hola Vicky! Me encantaría recibir el itinerario de Ciudad del Cabo y Costa Oceánica con Rosso Trips.',
  },
];

export const TESTIMONIALS: Testimonial[] = [
  {
    id: 'test-1',
    name: 'Camila Méndez',
    location: 'Buenos Aires, Argentina',
    quote: 'Viajar con Vicky fue un antes y un después. Ver a una leona cazar mientras ella te explica la dinámica de la manada no tiene comparación con ningún documental. No fue solo un viaje, fue una escuela de vida.',
    expedition: 'Kruger Safari de Autor',
  },
  {
    id: 'test-2',
    name: 'Lucas Ferrero',
    location: 'Córdoba, Argentina',
    quote: 'El voluntariado de rinocerontes te cambia la perspectiva. Llegás pensando en sacarte fotos y te vas con las manos en la tierra, habiendo alimentado crías y ayudando de verdad. Vicky te acompaña en cada detalle desde antes de subir al avión.',
    expedition: 'Voluntariado en Hoedspruit',
  },
  {
    id: 'test-3',
    name: 'Martina Benítez',
    location: 'Rosario, Argentina',
    quote: 'La energía de grupo que se genera es mágica, muy al estilo expedición de amigos. Éramos 8 personas de distintas partes unidas por el amor a los animales. Una experiencia 1000% recomendada.',
    expedition: 'Sudáfrica Integral',
  },
];

export const PILLARS = [
  {
    title: 'Criterio Biológico & Ético',
    description: 'Cero explotación animal ni atracciones de circo. Todas las experiencias respetan los protocolos éticos más estrictos de bienestar y conservación de fauna salvaje.',
    icon: 'ShieldCheck',
  },
  {
    title: 'Contacto 1 a 1 sin Intermediarios',
    description: 'Hablás y planificás directamente con Victoria. Asesoramiento honesto, humano y a la medida de tus expectativas, condición física y sueños.',
    icon: 'Users',
  },
  {
    title: 'Alianza Oficial Mantis Collection',
    description: 'Respaldo de una de las cadenas de ecoturismo y lodges de conservación más prestigiosas del continente africano.',
    icon: 'Award',
  },
  {
    title: 'Preparación Integral Pre-Viaje',
    description: 'Charlas previas, asesoramiento en vacunas, visados, indumentaria de campo y lectura de recomendaciones para llegar a África con total tranquilidad.',
    icon: 'Compass',
  },
];

export const MEDIA_COVERAGE = [
  {
    outlet: 'El Litoral',
    title: 'De Santa Fe a Sudáfrica: la bióloga de la UNL que preserva la fauna salvaje',
    url: 'https://www.ellitoral.com/educacion/sudafrica-biodiversidad-faunasalvaje-victoriarosso-unl-santafe_0_gQ4AHZKAPo.html',
  },
  {
    outlet: 'Radio Eme',
    title: 'De mirar documentales de animales a trabajar en Sudáfrica: el sueño cumplido',
    url: 'https://www.radioeme.com/2026/10/de-mirar-documentales-de-animales-a-trabajar-en-sudafrica-el-sueno-que-cumplio-una-santafesina/',
  },
  {
    outlet: 'Villa María Educativa',
    title: 'Sueños que florecen en la sabana: experiencias en África junto a voluntarios',
    url: 'https://villamariaeducativa.ar/suenos-que-florecen-en-la-sabana-experiencias-de-una-biologa-y-un-grupo-de-villamarienses-en-africa/',
  },
];
