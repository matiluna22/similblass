const BASE_URL = import.meta.env.BASE_URL.endsWith('/')
  ? import.meta.env.BASE_URL
  : `${import.meta.env.BASE_URL}/`;
const IMAGE_BASE = `${BASE_URL}images`;

export const imageUrl = (fileName: string) =>
  `${IMAGE_BASE}/${encodeURIComponent(fileName)}`;

export const PRESS_ITEMS = [
  {
    outlet: 'El Litoral',
    category: 'Educación & Ciencia',
    title:
      'De Santa Fe a Sudáfrica: la bióloga de la UNL que preserva la fauna salvaje',
    description:
      'Victoria Rosso comparte su camino formativo en la Universidad Nacional del Litoral y cómo dio el salto para radicarse en Sudáfrica, trabajando en la conservación de especies protegidas, el cuidado de fauna silvestre y la educación comunitaria.',
    image: 'IMG_7232.jpg',
    alt: 'Victoria Rosso en Sudáfrica, en la nota de El Litoral',
    url: 'https://www.ellitoral.com/educacion/sudafrica-biodiversidad-faunasalvaje-victoriarosso-unl-santafe_0_gQ4AHZKAPo.html',
  },
  {
    outlet: 'Radio EME',
    category: 'Entrevista Radial',
    title:
      'De mirar documentales de animales a trabajar en Sudáfrica: el sueño cumplido',
    description:
      'Una charla sobre cómo la fascinación por la vida silvestre se transformó en un proyecto real en África: el trabajo diario con animales, la vida en la naturaleza y la misión de conectar a viajeros con experiencias inolvidables.',
    image: 'IMG_7222.JPG',
    alt: 'Victoria Rosso en Radio EME, hablando sobre experiencias en Sudáfrica',
    url: 'https://www.radioeme.com/2026/10/de-mirar-documentales-de-animales-a-trabajar-en-sudafrica-el-sueno-que-cumplio-una-santafesina/',
  },
  {
    outlet: 'Villa María Educativa',
    category: 'Educación & Comunidad',
    title:
      'Sueños que florecen en la sabana: experiencias en África junto a voluntarios',
    description:
      'El impacto de acompañar a grupos en iniciativas de voluntariado ambiental y educación comunitaria en Sudáfrica, uniendo ciencia y empatía social.',
    image: 'DAKTARIEXPROP.jpeg',
    alt: 'Experiencia de voluntariado ambiental y educación en Sudáfrica',
    url: 'https://villamariaeducativa.ar/suenos-que-florecen-en-la-sabana-experiencias-de-una-biologa-y-un-grupo-de-villamarienses-en-africa/',
  },
];

export const EXPERIENCE_GROUPS = [
  {
    id: 'conservacion',
    label: 'Experiencias con Propósito',
    items: [
      {
        tag: 'HESC',
        title: 'Conservación de Rinocerontes y Chitas',
        description:
          'Participá en un proyecto de conservación en plena sabana africana junto a rinocerontes, chitas y otras especies en peligro de extinción.',
        image: 'RINO2.jpg',
        alt: 'Rinoceronte en el centro de conservación HESC',
        highlights: [
          'Cuidado y alimentación de los animales del centro.',
          'Excursiones y avistamientos semanales de animales en libertad.',
          'Actividades de inmersión e intercambio cultural.',
        ],
        inquiry:
          'Hola Vicky! Quiero saber más sobre el voluntariado de conservación de rinocerontes y chitas en HESC.',
      },
      {
        tag: 'HESC',
        title: 'Programa Internacional para Veterinarios',
        description:
          'Programa internacional de salud y cuidado de fauna silvestre dirigido a estudiantes de veterinaria y profesionales veterinarios.',
        image: 'CHITABB.jpeg',
        alt: 'Guepardo en HESC',
        highlights: [],
        inquiry:
          'Hola Vicky! Quiero información sobre el Programa Internacional de Salud y Cuidado de Fauna Silvestre.',
      },
      {
        tag: 'Daktari Bush School',
        title: 'Proyecto educativo en relación a la conservación',
        description:
          'Sumergite en una experiencia de intercambio cultural y aprendizaje, participando en iniciativas con comunidades locales y colaborando en el cuidado de animales rescatados.',
        image: 'DAKTARIEXPROP.jpeg',
        alt: 'Victoria con un grupo de niños de Daktari',
        highlights: [
          'Alimentación, limpieza de recintos, enriquecimiento ambiental y cuidado de animales rescatados.',
          'Actividades educativas con niños y adolescentes de comunidades locales.',
          'Participación en excursiones y safaris.',
        ],
        inquiry:
          'Hola Vicky! Quiero saber más sobre el proyecto educativo y de conservación de Daktari.',
      },
    ],
    advisoryTitle: '¿Cómo te ayudo a hacer realidad tu voluntariado?',
    advisoryDescription:
      'No necesitás ser biólogo ni veterinario para postularte. Diseño proyectos y preparación personalizada para que viaje cualquier persona que ame los animales y quiera vivir una experiencia con propósito.',
    advisorySteps: [
      'Diagnóstico vocacional: evaluamos qué centro (marino, felinos, orfanato o comunitario) se adapta mejor a tus deseos y fechas.',
      'Gestión de cupos y admisión: tramitación de tu lugar oficial directamente con los coordinadores donde trabajé.',
      'Preparación pre-vuelo: guía de vacunas, visados, indumentaria adecuada para el bush, normas éticas y logística completa.',
    ],
  },
  {
    id: 'mantis',
    label: 'Experiencia Mantis',
    items: [
      {
        tag: 'Kruger National Park',
        title: 'Kruger Big Five All-Inclusive',
        description:
          'La experiencia cumbre de África salvaje. Safaris privados dos veces al día en vehículos 4x4 abiertos en busca de leones, leopardos, elefantes, rinocerontes y búfalos, alojándote en lodges ecológicos.',
        image: 'RINO.JPG',
        alt: 'Rinoceronte en el Parque Kruger',
        highlights: [
          'Lodges boutique con pensión completa gourmet.',
          'Vinos sudafricanos y bebidas seleccionadas.',
          'Rangers y rastreadores certificados por Mantis.',
        ],
        inquiry:
          'Hola Vicky! Quiero cotizar el safari Kruger Big Five All-Inclusive con Mantis.',
      },
      {
        tag: 'Cape Town & Viñedos',
        title: 'Ciudad del Cabo & Costa Oceánica',
        description:
          'La ciudad más vibrante y escénica de África. Hoteles y residencias Mantis frente al mar o Table Mountain, playas con colonias de pingüinos de Boulders Beach y excursiones privadas a los viñedos de Stellenbosch.',
        image: 'posible banner 1.jpg',
        alt: 'Paisaje de Sudáfrica para experiencias Mantis',
        highlights: [
          'Alojamientos de la colección Mantis.',
          'Ruta gastronómica y degustación de vinos.',
          'Tours guiados por la Península del Cabo.',
        ],
        inquiry:
          'Hola Vicky! Quiero cotizar una experiencia Mantis en Ciudad del Cabo y la costa oceánica.',
      },
      {
        tag: 'Garden Route & Reservas',
        title: 'Botlierskop: Conservación Activa',
        description:
          'Una reserva libre de malaria en la famosa Garden Route donde participé junto a National Geographic y Mantis en intervenciones veterinarias de búfalos africanos y monitoreo de fauna en libertad.',
        image: 'IMG_7234.jpg',
        alt: 'Fauna africana al atardecer en una reserva privada',
        highlights: [
          'Experiencias de conservación in situ.',
          'Glamping y suites sobre el río.',
          'Ideal para familias y lunas de miel.',
        ],
        inquiry:
          'Hola Vicky! Quiero conocer las opciones Mantis de Botlierskop y Garden Route.',
      },
    ],
    advisoryTitle: '¿Por qué viajar con Mantis y Victoria Rosso?',
    advisoryDescription:
      'Mantis Collection es pionera en hospitalidad sustentable: cada reserva y lodge que visitás destina fondos a la protección de los ecosistemas locales y el empoderamiento comunitario.',
    advisorySteps: [
      'Asesoría de bióloga en territorio: itinerario curado por alguien que conoce cada rincón y temporada de fauna.',
      'Experiencia All-Inclusive: traslados coordinados, comidas, safaris guiados por expertos y asistencia.',
      'Combinaciones: posibilidad de combinar voluntariado con una estadía en un lodge de Kruger o Cape Town.',
    ],
  },
];

export const GALLERY_ITEMS = [
  {
    title: 'Cuidado y Monitoreo de Rinocerontes',
    caption: 'Santuario HESC · Greater Kruger',
    description:
      'Victoria Rosso en la batea de rescate alimentando y evaluando ejemplares de rinoceronte blanco en un santuario.',
    image: 'FOTO PRINCIPAL.jpg',
    alt: 'Victoria Rosso con rinocerontes en Sudáfrica',
    categories: ['vicky', 'rhino'],
    featured: true,
  },
  {
    title: 'Guepardo en Guardia',
    caption: 'Programa de protección de felinos',
    description:
      'Guepardo en una sesión de monitoreo y enriquecimiento ambiental en HESC.',
    image: 'IMG_7217.JPG',
    alt: 'Retrato de guepardo en reposo atento',
    categories: ['predator'],
  },
  {
    title: 'Rinoceronte en Reposo',
    caption: 'Comportamiento y bienestar animal',
    description:
      'Monitoreo de descanso diurno en un santuario para prevenir la caza furtiva.',
    image: 'IMG_7221.jpg',
    alt: 'Rinoceronte en un santuario sudafricano',
    categories: ['rhino'],
  },
  {
    title: 'Cálao Terrestre del Sur',
    caption: 'Biodiversidad aviar en peligro',
    description:
      'Victoria junto a un ejemplar de esta ave icónica y en peligro de extinción en Sudáfrica.',
    image: 'IMG_7246.jpg',
    alt: 'Victoria con un cálao terrestre del sur',
    categories: ['vicky', 'predator'],
  },
  {
    title: 'Serval Africano',
    caption: 'Orfanato y rescate de fauna silvestre',
    description:
      'Felino autóctono con orejas características adaptadas para detectar presas en pastizales.',
    image: 'IMG_7222.JPG',
    alt: 'Serval africano mirando al frente',
    categories: ['predator'],
  },
  {
    title: 'Hora Dorada en la Sabana',
    caption: 'Parque Kruger & Reservas Privadas',
    description:
      'Un rinoceronte se alimenta entre las acacias durante el atardecer.',
    image: 'IMG_7234.jpg',
    alt: 'Rinoceronte con luz dorada del atardecer',
    categories: ['rhino'],
  },
  {
    title: 'Alimentación de Manada',
    caption: 'Tareas habituales de voluntariado',
    description:
      'Suministro de forraje para ejemplares huérfanos o en proceso de recuperación.',
    image: 'IMG_7216.jpg',
    alt: 'Grupo de rinocerontes junto a una camioneta',
    categories: ['rhino'],
  },
  {
    title: 'Pórtico de Entrada a HESC',
    caption: 'Help to ensure our tomorrow',
    description:
      'El histórico centro de Hoedspruit Endangered Species Centre.',
    image: 'IMG_7257.jpg',
    alt: 'Pórtico y recepción del Hoedspruit Endangered Species Centre',
    categories: ['vicky'],
  },
  {
    title: 'Caminos de la Sabana',
    caption: 'Game Drive & Tracking',
    description:
      'Rinoceronte desplazándose por la reserva durante un safari matutino.',
    image: 'IMG_7232.jpg',
    alt: 'Rinoceronte caminando por un camino de tierra',
    categories: ['rhino'],
  },
  {
    title: 'Game Drive con Victoria',
    caption: 'Ecoturismo y safari consciente',
    description:
      'Victoria explora los ecosistemas del bush y comparte la fauna africana.',
    image: 'posible banner 1.jpg',
    alt: 'Victoria en una camioneta de safari',
    categories: ['vicky', 'rhino'],
  },
];

export const FAQ_GROUPS = [
  {
    id: 'faq-conservacion',
    label: 'Proyectos de Conservación',
    questions: [
      {
        question:
          '¿Necesito tener estudios en biología o veterinaria para participar?',
        answer:
          'No, no es necesario. Podés participar sin importar tu profesión o área de estudio, siempre que cumplas con los requisitos de cada programa y tengas ganas de aprender y vivir esta experiencia. La excepción es el Programa Internacional de Salud y Cuidado de Fauna Silvestre, dirigido específicamente a estudiantes de veterinaria y profesionales veterinarios.',
      },
      {
        question:
          '¿En qué proyectos de conservación y con qué especies puedo colaborar?',
        answer:
          'HESC (Hoedspruit Endangered Species Centre) se especializa en guepardos, rinocerontes y otras especies amenazadas. SANCCOB (Cape Town) trabaja en el rescate, rehabilitación y reinserción de pingüinos africanos y aves marinas. Daktari Bush School combina el cuidado de fauna huérfana rescatada con educación ambiental para niños de escuelas locales.',
      },
      {
        question:
          '¿Cómo es el día a día y qué tareas realiza un voluntario?',
        answer:
          'Las jornadas inician temprano con el ritmo de la sabana. Las tareas incluyen preparar dietas y alimentar a los animales, limpiar y mantener recintos, enriquecer el ambiente, asistir a cuidadores y veterinarios en chequeos rutinarios, monitorear el comportamiento y participar en patrullas y safaris educativos semanales.',
      },
      {
        question:
          '¿Cuánto tiempo de estadía se recomienda para los voluntariados?',
        answer:
          'El período mínimo sugerido es de 2 semanas. Muchos participantes eligen quedarse 3, 4 u 8 semanas, o combinar dos centros durante el mismo viaje.',
      },
      {
        question:
          '¿Qué incluye el programa de voluntariado y qué debo costear por mi cuenta?',
        answer:
          'Incluye asesoramiento y preparación personalizada, traslados internos coordinados, alojamiento dentro de las bases del proyecto, comidas diarias y supervisión del equipo en Sudáfrica. No incluye vuelos internacionales, seguro médico obligatorio ni gastos personales o excursiones opcionales.',
      },
    ],
  },
  {
    id: 'faq-mantis',
    label: 'Experiencias con Mantis',
    questions: [
      {
        question:
          '¿Qué incluye un viaje o safari All-Inclusive con Mantis Collection?',
        answer:
          'Incluye alojamiento en lodges ecológicos y hoteles boutique, pensión completa, dos safaris diarios en vehículos 4x4 abiertos guiados por rangers y rastreadores, y traslados coordinados entre aeropuertos y lodges.',
      },
      {
        question:
          '¿Puedo combinar días de voluntariado con un safari de descanso con Mantis?',
        answer:
          'Sí. Es posible combinar dos o tres semanas de voluntariado con unos días en un lodge de Mantis en Kruger o con gastronomía y viñedos de Cape Town. Victoria diseña el itinerario integrado.',
      },
      {
        question:
          '¿Cuánto tiempo de estadía se recomienda para una experiencia Mantis?',
        answer:
          'Para una experiencia completa recomendamos un itinerario de 7 a 10 días, por ejemplo, combinar 3 a 5 noches en Kruger con 4 noches en Ciudad del Cabo.',
      },
      {
        question:
          '¿Los lodges y safaris de Mantis son aptos para familias con niños o parejas?',
        answer:
          'Mantis cuenta con lodges y villas privadas para parejas y familias, incluyendo actividades educativas en la naturaleza y reservas libres de malaria en el Cabo Oriental.',
      },
      {
        question:
          '¿Por qué organizar mi viaje a través de Victoria Rosso como representante Mantis?',
        answer:
          'La representación oficial de Mantis y la experiencia de Victoria en Sudáfrica permiten acceder a tarifas oficiales, asesoramiento personalizado en español, itinerarios a medida y asistencia antes y durante el viaje.',
      },
    ],
  },
];
