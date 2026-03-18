export type ModuleItem = {
  id: string;
  moduleNumber: number;
  title: string;
  description: string;
  pdfPath: string;
  coverPath: string;
  category: "module";
};

export type SupplementaryItem = {
  id: string;
  title: string;
  description: string;
  pdfPath: string;
  coverPath: string;
  category: "supplementary";
  icon: "lock-keyhole" | "book-open" | "map";
};

export type VideoItem = {
  id: string;
  title: string;
  description: string;
  youtubeId: string;
  published: boolean;
  thumbnail?: string;
};

export type CourseItem = ModuleItem | SupplementaryItem;

export const videos: VideoItem[] = [
  // Videos publicados (disponibles en YouTube)
  {
    id: "video-01",
    title: "Apertura Fac S90",
    description: "Técnica de apertura de cerradura de seguridad Fac modelo S90 sin daño.",
    youtubeId: "psSkjUXg6VY",
    published: true,
  },
  {
    id: "video-02",
    title: "Candado Pitón",
    description: "Demostración de apertura de candado tipo pitón mediante técnicas especializadas.",
    youtubeId: "DEN7BDw1SPA",
    published: true,
  },
  {
    id: "video-03",
    title: "Cerradura de Borjas",
    description: "Apertura de cerradura Borjas de doble paleta con técnicas de manipulación.",
    youtubeId: "dDkvnKkWDV0",
    published: true,
  },
  {
    id: "video-04",
    title: "Cerradura RUSWIN 6 pins",
    description: "Manipulación de cerradura RUSWIN de 6 pernos con técnicas de picking avanzado.",
    youtubeId: "0e3nfgSC-9Y",
    published: true,
  },
  {
    id: "video-05",
    title: "Cerradura Tesa",
    description: "Apertura profesional de cerradura Tesa aplicando métodos no destructivos.",
    youtubeId: "aJ3hTMMzMZQ",
    published: true,
  },
  {
    id: "video-06",
    title: "Bombín Tubular",
    description: "Técnica de apertura de cerraduras tubulares de barras y columnas.",
    youtubeId: "VAx7bPKqy_g",
    published: true,
  },
  {
    id: "video-07",
    title: "Apertura de Bombín de Alta Seguridad Sidese",
    description: "Técnica de apertura de bombín de alta seguridad marca Sidese sin daño.",
    youtubeId: "RzrtSbSRXes",
    published: true,
  },
  {
    id: "video-08",
    title: "Apertura Cerrojo FAC 7 Pernos",
    description: "Demostración de apertura de cerrojo FAC de 7 pernos mediante manipulación.",
    youtubeId: "Og7WTlgfx_M",
    published: true,
  },
  {
    id: "video-09",
    title: "Apertura Cerradura Iseo Ambos Lados",
    description: "Técnica de apertura de cerradura Iseo con acceso desde ambos lados.",
    youtubeId: "veEh0u2MClk",
    published: true,
  },
  {
    id: "video-10",
    title: "Cerradura Tesa Abierta con Extractor en 15 Segundos",
    description: "Apertura rápida de cerradura Tesa utilizando extractor en solo 15 segundos.",
    youtubeId: "L_45rOSoka4",
    published: true,
  },

  {
    id: "video-11",
    title: "Dos Maneras de Sacar una Llave Rota",
    description: "Dos métodos efectivos para extraer una llave rota del interior de la cerradura.",
    youtubeId: "CKUULZnAdUk",
    published: true,
  },
  {
    id: "video-12",
    title: "Apertura de Puerta con Cerradura",
    description: "Demostración práctica de apertura de puerta con cerradura de seguridad.",
    youtubeId: "F1ZCVrawVMA",
    published: true,
  },
  {
    id: "video-13",
    title: "Cómo Sacar una Llave Rota de una Cerradura",
    description: "Técnica paso a paso para extraer una llave rota atascada en la cerradura.",
    youtubeId: "q9iyu7Rsz6I",
    published: true,
  },
  {
    id: "video-14",
    title: "Cómo Sacar una Llave Partida o Rota",
    description: "Método profesional para retirar una llave partida o rota del bombín.",
    youtubeId: "dgGYPKSsQX4",
    published: true,
  },
  {
    id: "video-15",
    title: "Cómo Romper un Candado",
    description: "Técnica de apertura destructiva de candado en situaciones de emergencia.",
    youtubeId: "TmhRzsbGwAs",
    published: true,
  },
  {
    id: "video-16",
    title: "Cómo Destruir Cerradura para Abrir Puerta",
    description: "Método de apertura destructiva de cerradura cuando no hay alternativa.",
    youtubeId: "Xsat9jaM0lg",
    published: true,
  },
  {
    id: "video-17",
    title: "Cómo Destrabar Cerradura en Puerta Interior",
    description: "Técnica para destrabar cerraduras bloqueadas en puertas interiores.",
    youtubeId: "Gi9tlniZez8",
    published: true,
  },
  {
    id: "video-18",
    title: "Cómo Abrir un Candado de Combinación sin la Clave",
    description: "Método para abrir candados de combinación cuando se desconoce la clave.",
    youtubeId: "kP0qKVX3llI",
    published: true,
  },

  {
    id: "video-19",
    title: "Truco para Abrir una Puerta con Cerradura Trabada",
    description: "Método práctico para abrir una puerta cuando la cerradura se encuentra trabada.",
    youtubeId: "Oz01juToxsY",
    published: true,
  },
  {
    id: "video-20",
    title: "Pompas CR - Apertura de Fran",
    description: "Demostración de apertura de cerradura de pompas CR con técnica especializada.",
    youtubeId: "2fS9PZVKbQs",
    published: true,
  },
  {
    id: "video-22",
    title: "Llave Nueva sin Cambiar la Cerradura",
    description: "Cómo generar una llave nueva sin necesidad de reemplazar la cerradura completa.",
    youtubeId: "PHsIt8Hu5jI",
    published: true,
  },
  {
    id: "video-23",
    title: "Impresión de Llave",
    description: "Técnica de impresión para crear una llave funcional a partir del bombín.",
    youtubeId: "m1TQ3eFQ3-0",
    published: true,
  },
  {
    id: "video-24",
    title: "Ganzúa Eléctrica Casera con Cortadora de Pelo",
    description: "Fabricación de una ganzúa eléctrica casera reutilizando una cortadora de pelo.",
    youtubeId: "D3SjZMAf_8w",
    published: true,
  },
  {
    id: "video-25",
    title: "Ganzúa para Cruciformes",
    description: "Uso de ganzúa especializada para apertura de cerraduras cruciformes.",
    youtubeId: "DqlFoOci9jE",
    published: true,
  },
  {
    id: "video-26",
    title: "Tutorial Abrir Cerraduras",
    description: "Tutorial completo con técnicas fundamentales para abrir cerraduras.",
    youtubeId: "nzz511c3hhQ",
    published: true,
  },
  {
    id: "video-27",
    title: "Tutorial para Multipuntos con Pernos Telescópicos",
    description: "Técnica de apertura de cerraduras multipunto con sistema de pernos telescópicos.",
    youtubeId: "i-7NFzMoSFg",
    published: true,
  },

  // Videos pendientes de publicación (agregar cuando se suban a YouTube)
  // {
  //   id: "video-28",
  //   title: "Título del próximo video",
  //   description: "Descripción del video",
  //   youtubeId: "ID_YOUTUBE",
  //   published: false,
  // },
];

export const modules: ModuleItem[] = [
  {
    id: "modulo-01",
    moduleNumber: 1,
    title: "Introducción y Fundamentos",
    description:
      "Bases teóricas y conceptos fundamentales de la cerrajería profesional.",
    pdfPath: "/course/pdfs/modulo-01-introduccion.pdf",
    coverPath: "/course/covers/modulo-01-introduccion.webp",
    category: "module",
  },
  {
    id: "modulo-02",
    moduleNumber: 2,
    title: "Aperturas y Técnicas Básicas",
    description:
      "Técnicas esenciales para la apertura de cerraduras sin daño.",
    pdfPath: "/course/pdfs/modulo-02-aperturas.pdf",
    coverPath: "/course/covers/modulo-02-aperturas.webp",
    category: "module",
  },
  {
    id: "modulo-03",
    moduleNumber: 3,
    title: "Cerraduras de Doble Paleta",
    description:
      "Consejos, materiales, fotos, reposiciones, aperturas y métodos de combinación.",
    pdfPath: "/course/pdfs/modulo-03-doble-paleta.pdf",
    coverPath: "/course/covers/modulo-03-doble-paleta.webp",
    category: "module",
  },
  {
    id: "modulo-04",
    moduleNumber: 4,
    title: "Cerraduras Cruciformes",
    description:
      "Técnicas de manipulación avanzadas con diferentes cruciformes de achura y carabuí.",
    pdfPath: "/course/pdfs/modulo-04-cruciformes.pdf",
    coverPath: "/course/covers/modulo-04-cruciformes.webp",
    category: "module",
  },
  {
    id: "modulo-05",
    moduleNumber: 5,
    title: "Copia de Llaves",
    description:
      "Duplicación de llaves de todos los tipos, materiales y equipamiento.",
    pdfPath: "/course/pdfs/modulo-05-copia-llaves.pdf",
    coverPath: "/course/covers/modulo-05-copia-llaves.webp",
    category: "module",
  },
  {
    id: "modulo-06",
    moduleNumber: 6,
    title: "Cerraduras Tubulares",
    description:
      "Apertura de bombines de barras y columnas con técnicas especializadas.",
    pdfPath: "/course/pdfs/modulo-06-tubulares.pdf",
    coverPath: "/course/covers/modulo-06-tubulares.webp",
    category: "module",
  },
  {
    id: "modulo-07",
    moduleNumber: 7,
    title: "Cerraduras Magnéticas",
    description:
      "Funcionamiento y apertura de cerraduras con sistema magnético.",
    pdfPath: "/course/pdfs/modulo-07-magneticas.pdf",
    coverPath: "/course/covers/modulo-07-magneticas.webp",
    category: "module",
  },
  {
    id: "modulo-08",
    moduleNumber: 8,
    title: "Cerraduras Comunes",
    description:
      "Las cerraduras más frecuentes del mercado y sus métodos de apertura.",
    pdfPath: "/course/pdfs/modulo-08-comunes.pdf",
    coverPath: "/course/covers/modulo-08-comunes.webp",
    category: "module",
  },
  {
    id: "modulo-09",
    moduleNumber: 9,
    title: "Cerraduras Yale",
    description:
      "Técnicas de apertura para cerraduras de perno, doble paleta y cuadrantes.",
    pdfPath: "/course/pdfs/modulo-09-yale.pdf",
    coverPath: "/course/covers/modulo-09-yale.webp",
    category: "module",
  },
  {
    id: "modulo-10",
    moduleNumber: 10,
    title: "Cerraduras para Muebles",
    description:
      "Apertura de cerraduras de escritorios, vitrinas y mobiliario.",
    pdfPath: "/course/pdfs/modulo-10-muebles.pdf",
    coverPath: "/course/covers/modulo-10-muebles.webp",
    category: "module",
  },
  {
    id: "modulo-11",
    moduleNumber: 11,
    title: "Cajas Fuertes",
    description:
      "Métodos de apertura de cajas fuertes y bóvedas de seguridad.",
    pdfPath: "/course/pdfs/modulo-11-cajas-fuertes.pdf",
    coverPath: "/course/covers/modulo-11-cajas-fuertes.webp",
    category: "module",
  },
  {
    id: "modulo-12",
    moduleNumber: 12,
    title: "Candados",
    description:
      "Apertura de candados de distintos tipos y niveles de seguridad.",
    pdfPath: "/course/pdfs/modulo-12-candados.pdf",
    coverPath: "/course/covers/modulo-12-candados.webp",
    category: "module",
  },
  {
    id: "modulo-13",
    moduleNumber: 13,
    title: "Colocación de Cerraduras",
    description:
      "Instalación profesional de cerraduras en puertas y marcos.",
    pdfPath: "/course/pdfs/modulo-13-colocacion.pdf",
    coverPath: "/course/covers/modulo-13-colocacion.webp",
    category: "module",
  },
];

export const supplementary: SupplementaryItem[] = [
  {
    id: "guia-lock-picking",
    title: "Guía de Lock Picking",
    description: "Manual completo de técnicas de lock picking.",
    pdfPath: "/course/pdfs/guia-lock-picking.pdf",
    coverPath: "/course/covers/guia-lock-picking.webp",
    category: "supplementary",
    icon: "lock-keyhole",
  },
  {
    id: "enciclopedia-tomo-1",
    title: "Enciclopedia de Cerrajería",
    description: "Referencia enciclopédica completa del oficio - Tomo 1.",
    pdfPath: "/course/pdfs/enciclopedia-tomo-1.pdf",
    coverPath: "/course/covers/enciclopedia-tomo-1.webp",
    category: "supplementary",
    icon: "book-open",
  },
  {
    id: "atlas-cerrajeria",
    title: "Atlas de Cerrajería Completo",
    description: "Atlas visual con diagramas y esquemas técnicos.",
    pdfPath: "/course/pdfs/atlas-cerrajeria.pdf",
    coverPath: "/course/covers/atlas-cerrajeria.webp",
    category: "supplementary",
    icon: "map",
  },
];
