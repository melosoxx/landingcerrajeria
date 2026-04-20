export type QuizQuestion = {
  id: string;
  question: string;
  options: [string, string, string, string];
  correctIndex: 0 | 1 | 2 | 3;
  explanation: string;
};

export type ModuleQuiz = {
  moduleId: string;
  questions: QuizQuestion[];
};

// Las preguntas de cada quiz deben ser provistas por Roberto Pugliese.
// Estructura de ejemplo completa para módulo 01. Completar los demás módulos.
export const quizzes: ModuleQuiz[] = [
  {
    moduleId: "modulo-01",
    questions: [
      {
        id: "q-01-01",
        question: "¿Cuál es la función principal de un bombín en una cerradura?",
        options: [
          "Bloquear físicamente la puerta",
          "Convertir el movimiento de la llave en rotación para accionar el mecanismo",
          "Sujetar la cerradura al marco de la puerta",
          "Activar el sistema de alarma",
        ],
        correctIndex: 1,
        explanation:
          "El bombín recibe la llave y convierte su perfil en movimiento rotatorio para accionar el pestillo o los pernos de la cerradura.",
      },
      {
        id: "q-01-02",
        question: "¿Qué son los pines de seguridad en una cerradura de pernos?",
        options: [
          "Los tornillos que fijan la cerradura a la puerta",
          "Pernos adicionales que bloquean el marco",
          "Elementos internos que dificultan la apertura sin la llave correcta",
          "Las llaves duplicadas de seguridad",
        ],
        correctIndex: 2,
        explanation:
          "Los pines de seguridad son componentes internos del bombín que solo se alinean correctamente con la llave original, impidiendo la rotación con otras llaves.",
      },
      {
        id: "q-01-03",
        question: "¿Qué herramienta básica utiliza un cerrajero para abrir una cerradura sin la llave?",
        options: [
          "Destornillador plano",
          "Ganzúa y tensionador",
          "Alicate y martillo",
          "Taladro eléctrico",
        ],
        correctIndex: 1,
        explanation:
          "La ganzúa manipula los pines internos mientras el tensionador aplica una ligera presión de rotación al bombín, permitiendo la apertura sin dañar la cerradura.",
      },
      {
        id: "q-01-04",
        question: "¿Cuál de estas prácticas es fundamental en la cerrajería profesional?",
        options: [
          "Forzar siempre la cerradura para abrirla más rápido",
          "Documentar el trabajo realizado y solicitar autorización del propietario",
          "Cambiar la cerradura en todos los casos sin evaluarla primero",
          "Trabajar sin herramientas especializadas para reducir costos",
        ],
        correctIndex: 1,
        explanation:
          "El profesional cerrajero debe siempre verificar la autorización del propietario y documentar su trabajo para actuar dentro del marco legal y ético.",
      },
      {
        id: "q-01-05",
        question: "¿Qué diferencia a una cerradura de alta seguridad de una estándar?",
        options: [
          "El color y el material exterior",
          "El precio de venta al público",
          "Mayor cantidad de pines, materiales reforzados y resistencia al picking",
          "Que solo puede abrirse con llave electrónica",
        ],
        correctIndex: 2,
        explanation:
          "Las cerraduras de alta seguridad incorporan más pines, pines de seguridad especiales, materiales endurecidos y diseños que resisten técnicas como el picking y el taladrado.",
      },
    ],
  },
  {
    moduleId: "modulo-02",
    questions: [
      {
        id: "q-02-01",
        question: "¿Qué significa 'apertura sin daño' en cerrajería?",
        options: [
          "Abrir la cerradura usando un taladro sin dañar la puerta",
          "Abrir la cerradura preservando su funcionamiento para usarla de nuevo",
          "Reemplazar la cerradura sin dañar el marco",
          "Forzar el pestillo sin romper la madera",
        ],
        correctIndex: 1,
        explanation:
          "La apertura sin daño implica que tras el trabajo del cerrajero, la cerradura queda en condiciones de seguir funcionando normalmente.",
      },
      {
        id: "q-02-02",
        question: "¿Cuál es el primer paso al evaluar una cerradura para su apertura?",
        options: [
          "Aplicar lubricante inmediatamente",
          "Inspeccionar visualmente el tipo y estado de la cerradura",
          "Insertar la ganzúa directamente",
          "Llamar al fabricante",
        ],
        correctIndex: 1,
        explanation:
          "Antes de cualquier intervención, se debe identificar el tipo de cerradura, su estado y el método más adecuado para abrirla.",
      },
      {
        id: "q-02-03",
        question: "¿Qué técnica se usa para abrir cerraduras de pernos mediante manipulación de pines?",
        options: ["Bypassing", "Picking", "Bumping con tarjeta", "Corte de pernos"],
        correctIndex: 1,
        explanation:
          "El picking consiste en manipular los pines internos uno a uno con una ganzúa mientras se aplica tensión, hasta lograr que todos queden en la línea de corte.",
      },
      {
        id: "q-02-04",
        question: "¿Para qué sirve el tensionador en la técnica de picking?",
        options: [
          "Para lubricar el bombín",
          "Para aplicar presión de rotación al bombín mientras se manipulan los pines",
          "Para mover la manija de la puerta",
          "Para forzar el pestillo directamente",
        ],
        correctIndex: 1,
        explanation:
          "El tensionador aplica una leve presión de torsión al bombín, de modo que cuando un pin queda en posición correcta, se mantiene en su lugar hasta que todos estén alineados.",
      },
      {
        id: "q-02-05",
        question: "¿Cuándo se recomienda el método de 'raking' en lugar del picking clásico?",
        options: [
          "Solo en cerraduras de alta seguridad",
          "Cuando se necesita rapidez y la cerradura no tiene pines de seguridad",
          "Cuando el bombín está completamente bloqueado",
          "En cerraduras magnéticas",
        ],
        correctIndex: 1,
        explanation:
          "El raking usa movimientos rápidos con ganzúas de dientes para aleatorizar los pines, siendo más rápido aunque menos preciso que el picking pin por pin.",
      },
    ],
  },
  {
    moduleId: "modulo-03",
    questions: [
      {
        id: "q-03-01",
        question: "¿Qué caracteriza a una cerradura de doble paleta?",
        options: [
          "Tiene dos llaves diferentes para abrirse",
          "Usa paletas que rotan en ambos sentidos para accionar el pestillo",
          "Tiene dos bombines independientes",
          "Solo se puede abrir electrónicamente",
        ],
        correctIndex: 1,
        explanation:
          "Las cerraduras de doble paleta usan paletas que se posicionan al rotar la llave en ambas direcciones, accionando el mecanismo de cierre.",
      },
      {
        id: "q-03-02",
        question: "¿Qué herramienta especializada se usa principalmente para abrir cerraduras de doble paleta?",
        options: [
          "Ganzúa de diamante",
          "Ganzúa de paleta o llave maestra",
          "Destornillador de punta estrella",
          "Llave inglesa",
        ],
        correctIndex: 1,
        explanation:
          "Para las cerraduras de paleta se utilizan ganzúas específicas en forma de paleta o llaves maestras que simulan el perfil de la llave original.",
      },
      {
        id: "q-03-03",
        question: "¿Cuál es el principal desafío al reponer una cerradura de doble paleta?",
        options: [
          "Conseguir la herramienta adecuada",
          "Encontrar un repuesto compatible con el modelo exacto",
          "Lubricar correctamente el mecanismo",
          "Identificar el color correcto",
        ],
        correctIndex: 1,
        explanation:
          "Las cerraduras de paleta tienen muchas variantes y fabricantes, por lo que encontrar un repuesto compatible exacto es el mayor desafío en la reposición.",
      },
      {
        id: "q-03-04",
        question: "¿Qué indica el término 'combinación' en una cerradura de doble paleta?",
        options: [
          "Que tiene combinación numérica como una caja fuerte",
          "El conjunto de posiciones de las paletas que permiten la apertura",
          "Que combina tecnología mecánica y electrónica",
          "Que puede abrirse con varias llaves distintas",
        ],
        correctIndex: 1,
        explanation:
          "La combinación es el conjunto de alturas y posiciones de las paletas internas que deben alinearse con el perfil de la llave para que el mecanismo funcione.",
      },
      {
        id: "q-03-05",
        question: "¿Qué información es clave al documentar la reposición de una cerradura de doble paleta?",
        options: [
          "El color de la cerradura original",
          "Marca, modelo, número de paletas y tipo de mecanismo",
          "Solo el precio del repuesto",
          "El nombre del fabricante de la puerta",
        ],
        correctIndex: 1,
        explanation:
          "Para una correcta reposición se debe registrar la marca, modelo y características técnicas para asegurar la compatibilidad del repuesto.",
      },
    ],
  },
  {
    moduleId: "modulo-04",
    questions: [
      {
        id: "q-04-01",
        question: "¿Qué forma tiene la llave de una cerradura cruciforme?",
        options: [
          "Forma de L",
          "Sección transversal en forma de cruz",
          "Dientes en un solo lado",
          "Forma redonda sin dientes",
        ],
        correctIndex: 1,
        explanation:
          "La llave cruciforme tiene una sección transversal en forma de cruz con dientes en sus cuatro lados, lo que le da mayor resistencia al picking convencional.",
      },
      {
        id: "q-04-02",
        question: "¿Por qué las cerraduras cruciformes se consideran más seguras que las de pernos simples?",
        options: [
          "Son más baratas y fáciles de instalar",
          "Sus pines se distribuyen en cuatro planos, dificultando la manipulación",
          "Requieren dos llaves para abrirse",
          "No pueden ser copiadas",
        ],
        correctIndex: 1,
        explanation:
          "Al distribuir los pines en cuatro planos distintos, se hace exponencialmente más difícil manipularlos todos simultáneamente.",
      },
      {
        id: "q-04-03",
        question: "¿Qué herramienta especializada se necesita para abrir cerraduras cruciformes?",
        options: [
          "Ganzúa plana estándar",
          "Ganzúa cruciforme o herramienta de cuatro puntas",
          "Destornillador Phillips",
          "Alicate de presión",
        ],
        correctIndex: 1,
        explanation:
          "Se requieren herramientas diseñadas específicamente para manipular los cuatro planos de pines de la cerradura cruciforme.",
      },
      {
        id: "q-04-04",
        question: "¿Dónde se usan frecuentemente las cerraduras cruciformes?",
        options: [
          "Solo en puertas residenciales",
          "En muebles de oficina, vitrinas y armarios metálicos",
          "Exclusivamente en cajas fuertes",
          "Solo en automóviles",
        ],
        correctIndex: 1,
        explanation:
          "Las cerraduras cruciformes son comunes en muebles de oficina, armarios metálicos y otros objetos que requieren seguridad moderada-alta.",
      },
      {
        id: "q-04-05",
        question: "¿Qué diferencia a un cruciforme de 'achura' del convencional?",
        options: [
          "El material de fabricación",
          "La disposición y profundidad de los dientes en los planos de la cruz",
          "El color de la llave",
          "La cantidad de llaves incluidas",
        ],
        correctIndex: 1,
        explanation:
          "Los cruciformes de achura tienen dientes con variaciones angulares en la sección cruciforme, lo que añade una dimensión adicional de seguridad.",
      },
    ],
  },
  {
    moduleId: "modulo-05",
    questions: [
      {
        id: "q-05-01",
        question: "¿Qué máquina se usa para duplicar la mayoría de las llaves estándar?",
        options: [
          "Torno de precisión",
          "Duplicadora de llaves por pantógrafo o CNC",
          "Sierra de banda",
          "Fresadora industrial",
        ],
        correctIndex: 1,
        explanation:
          "Las duplicadoras de llaves usan un sistema de pantógrafo o CNC que reproduce el perfil de la llave original en el material virgen.",
      },
      {
        id: "q-05-02",
        question: "¿Qué información es necesaria para seleccionar el duplicado correcto?",
        options: [
          "Solo el color de la llave original",
          "La marca, modelo de cerradura y el tipo de perfil de la llave",
          "El año de fabricación de la puerta",
          "El nombre del propietario",
        ],
        correctIndex: 1,
        explanation:
          "Para duplicar correctamente se debe identificar el perfil de la llave (estándar, de seguridad, etc.) y el tipo de cerradura para seleccionar el duplicado en blanco adecuado.",
      },
      {
        id: "q-05-03",
        question: "¿Qué es una llave en blanco?",
        options: [
          "Una llave de color blanco",
          "Una llave sin cortes, lista para ser perfilada en la duplicadora",
          "Una llave maestra que abre todas las cerraduras",
          "Una llave electrónica sin programa",
        ],
        correctIndex: 1,
        explanation:
          "La llave en blanco es el material virgen con el perfil correcto pero sin los cortes específicos, que se mecaniza durante el proceso de duplicado.",
      },
      {
        id: "q-05-04",
        question: "¿Cuándo no es posible duplicar una llave por medios convencionales?",
        options: [
          "Cuando la llave es muy vieja",
          "Cuando la llave tiene una marca de 'no duplicar' o es de alta seguridad con patente",
          "Cuando la llave es de color dorado",
          "Cuando la llave es pequeña",
        ],
        correctIndex: 1,
        explanation:
          "Las llaves con marca 'no duplicar' o las de alta seguridad con patente registrada requieren autorización del fabricante y equipos especiales para su duplicado.",
      },
      {
        id: "q-05-05",
        question: "¿Qué verificación se debe hacer tras duplicar una llave?",
        options: [
          "Verificar que tenga el mismo peso que la original",
          "Probar que el duplicado funcione correctamente en la cerradura del cliente",
          "Comprobar que el color sea idéntico",
          "Verificar que tenga el mismo fabricante impreso",
        ],
        correctIndex: 1,
        explanation:
          "Siempre se debe probar el duplicado en la cerradura antes de entregárselo al cliente para confirmar que funciona correctamente.",
      },
    ],
  },
  {
    moduleId: "modulo-06",
    questions: [
      {
        id: "q-06-01",
        question: "¿Qué forma tiene el bombín de una cerradura tubular?",
        options: [
          "Rectangular",
          "Cilíndrica con pines distribuidos en círculo",
          "Triangular",
          "Cuadrada",
        ],
        correctIndex: 1,
        explanation:
          "El bombín tubular tiene forma cilíndrica y sus pines se distribuyen en círculo alrededor del eje central, lo que requiere llaves de tubo hueco.",
      },
      {
        id: "q-06-02",
        question: "¿En qué tipo de objeto se encuentran comúnmente las cerraduras tubulares?",
        options: [
          "Puertas principales de casas",
          "Máquinas expendedoras, ascensores y bicicletas",
          "Cajas fuertes bancarias",
          "Candados de alta seguridad",
        ],
        correctIndex: 1,
        explanation:
          "Las cerraduras tubulares son muy frecuentes en máquinas expendedoras, paneles de ascensores y algunos sistemas de bicicletas.",
      },
      {
        id: "q-06-03",
        question: "¿Qué herramienta específica se usa para abrir cerraduras tubulares?",
        options: [
          "Ganzúa plana estándar",
          "Decodificador tubular o ganzúa circular",
          "Llave Allen",
          "Tensionador de hoja",
        ],
        correctIndex: 1,
        explanation:
          "El decodificador tubular es una herramienta circular que manipula todos los pines simultáneamente, permitiendo la apertura de estas cerraduras.",
      },
      {
        id: "q-06-04",
        question: "¿Cuántos pines tiene típicamente una cerradura tubular estándar?",
        options: ["4", "6", "7", "10"],
        correctIndex: 2,
        explanation:
          "La mayoría de las cerraduras tubulares estándar tienen 7 pines distribuidos en círculo, aunque existen variantes con diferente cantidad.",
      },
      {
        id: "q-06-05",
        question: "¿Por qué las cerraduras tubulares ofrecen buena resistencia al picking convencional?",
        options: [
          "Porque son muy gruesas",
          "Porque sus pines rodean el eje en círculo, dificultando la manipulación lineal",
          "Porque están hechas de acero inoxidable",
          "Porque no tienen pines internos",
        ],
        correctIndex: 1,
        explanation:
          "La distribución circular de los pines hace que las técnicas de picking lineal convencionales no sean aplicables directamente.",
      },
    ],
  },
  {
    moduleId: "modulo-07",
    questions: [
      {
        id: "q-07-01",
        question: "¿Cómo funciona el mecanismo de una cerradura magnética?",
        options: [
          "Usa corriente eléctrica para mover los pernos",
          "Usa imanes para alinear elementos internos que permiten la rotación",
          "Usa una combinación numérica para abrirse",
          "Usa sensores biométricos",
        ],
        correctIndex: 1,
        explanation:
          "Las cerraduras magnéticas usan la atracción/repulsión de imanes integrados en la llave y el bombín para posicionar elementos internos que permiten la apertura.",
      },
      {
        id: "q-07-02",
        question: "¿Por qué las cerraduras magnéticas son difíciles de copiar?",
        options: [
          "Porque son muy costosas",
          "Porque la polaridad y posición exacta de los imanes es difícil de replicar",
          "Porque solo se fabrican en un país",
          "Porque requieren electricidad",
        ],
        correctIndex: 1,
        explanation:
          "La combinación específica de polaridades magnéticas en posiciones precisas hace que copiar la llave sin equipo especializado sea extremadamente difícil.",
      },
      {
        id: "q-07-03",
        question: "¿Qué puede interferir con el funcionamiento de una cerradura magnética?",
        options: [
          "La humedad ambiental",
          "Campos magnéticos fuertes externos o llaves de metal ferroso cerca",
          "La temperatura ambiente",
          "La cantidad de luz solar",
        ],
        correctIndex: 1,
        explanation:
          "Los campos magnéticos externos intensos o materiales ferrosos en contacto con la llave pueden alterar los imanes internos y afectar el funcionamiento.",
      },
      {
        id: "q-07-04",
        question: "¿Qué herramienta se necesita para diagnosticar una cerradura magnética con falla?",
        options: [
          "Multímetro eléctrico",
          "Detector de polaridad magnética o brújula de precisión",
          "Destornillador de punta estrella",
          "Lubricante especial",
        ],
        correctIndex: 1,
        explanation:
          "Para diagnosticar fallas en cerraduras magnéticas se utiliza un detector de polaridad para verificar que los imanes estén en la orientación correcta.",
      },
      {
        id: "q-07-05",
        question: "¿En qué tipo de aplicación se recomienda especialmente una cerradura magnética?",
        options: [
          "Puertas de galpones industriales",
          "Cerraduras de muebles y gabinetes donde se quiere discreción y seguridad",
          "Rejas y portones exteriores",
          "Cajas fuertes de alta seguridad",
        ],
        correctIndex: 1,
        explanation:
          "Las cerraduras magnéticas son ideales para muebles y gabinetes por su discreción (sin bocallave visible) y buena seguridad para ese tipo de aplicación.",
      },
    ],
  },
  {
    moduleId: "modulo-08",
    questions: [
      {
        id: "q-08-01",
        question: "¿Cuál de estas es una cerradura 'común' muy frecuente en Argentina?",
        options: [
          "Cerradura biométrica de huella",
          "Cerradura de doble paleta de embutir",
          "Cerradura de combinación digital",
          "Cerradura RFID de tarjeta",
        ],
        correctIndex: 1,
        explanation:
          "La cerradura de doble paleta de embutir es una de las más frecuentes en puertas residenciales y comerciales en Argentina.",
      },
      {
        id: "q-08-02",
        question: "¿Qué factor es más importante al seleccionar una cerradura de reemplazo?",
        options: [
          "El color y diseño estético",
          "La compatibilidad con el mortajado existente y el nivel de seguridad requerido",
          "El precio más bajo disponible",
          "La marca más conocida",
        ],
        correctIndex: 1,
        explanation:
          "Lo más crítico es que la nueva cerradura sea compatible con el mortajado (cavidad) de la puerta y que el nivel de seguridad sea adecuado para la aplicación.",
      },
      {
        id: "q-08-03",
        question: "¿Qué es el 'mortajado' de una cerradura?",
        options: [
          "El mecanismo interno de pines",
          "La cavidad o hueco en la puerta donde se aloja la caja de la cerradura",
          "El tipo de llave que usa la cerradura",
          "El acabado superficial de la cerradura",
        ],
        correctIndex: 1,
        explanation:
          "El mortajado es el espacio rectangular tallado en el canto de la puerta donde se instala la caja de la cerradura de embutir.",
      },
      {
        id: "q-08-04",
        question: "¿Qué problema causa una cerradura mal instalada en la puerta?",
        options: [
          "Solo estética deficiente",
          "Desalineación del pestillo con el marco, dificultando el cierre y reduciendo la seguridad",
          "Mayor consumo de energía",
          "Que la llave se desgaste más rápido",
        ],
        correctIndex: 1,
        explanation:
          "Una mala instalación genera desalineación que obliga a forzar el cierre, desgasta el mecanismo y puede dejar la puerta sin cierre efectivo.",
      },
      {
        id: "q-08-05",
        question: "¿Con qué frecuencia se recomienda el mantenimiento preventivo de cerraduras?",
        options: [
          "Solo cuando fallan",
          "Al menos una vez al año con lubricación y revisión del mecanismo",
          "Cada cinco años",
          "Solo en invierno",
        ],
        correctIndex: 1,
        explanation:
          "El mantenimiento anual con lubricación adecuada y revisión del mecanismo prolonga la vida útil de la cerradura y previene fallas inesperadas.",
      },
    ],
  },
  {
    moduleId: "modulo-09",
    questions: [
      {
        id: "q-09-01",
        question: "¿Qué tipo de mecanismo tiene una cerradura Yale típica?",
        options: [
          "Paletas de disco",
          "Bombín de pernos con muelle superior",
          "Sistema de combinación numérica",
          "Mecanismo magnético",
        ],
        correctIndex: 1,
        explanation:
          "Las cerraduras Yale usan un bombín de pernos (pin tumbler) donde los pines superiores con muelle bajan a bloquear la rotación cuando no se inserta la llave correcta.",
      },
      {
        id: "q-09-02",
        question: "¿Qué característica de la cerradura Yale la hace vulnerable al 'bumping'?",
        options: [
          "Su bajo precio",
          "El sistema de pernos con muelle que puede ser sacudido para alcanzar la línea de corte",
          "Su tamaño pequeño",
          "El material de la carcasa",
        ],
        correctIndex: 1,
        explanation:
          "El bump key aprovecha la inercia de los pines con muelle: al golpear, los pines superiores saltan momentáneamente, permitiendo la rotación si se aplica tensión en ese instante.",
      },
      {
        id: "q-09-03",
        question: "¿Qué mejora tienen las cerraduras Yale de alta seguridad para evitar el picking?",
        options: [
          "Mayor tamaño exterior",
          "Pines de seguridad en espiga, serrated o mushroom que crean falsas líneas de corte",
          "Uso de material plástico",
          "Menor cantidad de pines",
        ],
        correctIndex: 1,
        explanation:
          "Los pines de seguridad especiales crean puntos de resistencia falsos durante el picking, haciendo que el cerrajero deba identificar correctamente el pin verdadero en cada paso.",
      },
      {
        id: "q-09-04",
        question: "¿Qué es la 'línea de corte' en un bombín de pernos?",
        options: [
          "El borde afilado de la llave",
          "La interfaz entre el bombín y la carcasa donde los pines deben alinearse para permitir la rotación",
          "El corte decorativo de la llave",
          "La ranura donde se inserta la llave",
        ],
        correctIndex: 1,
        explanation:
          "La línea de corte es la interfaz entre el rotor (parte que gira) y el estátor (carcasa fija), donde todos los pines deben estar perfectamente alineados para permitir la rotación.",
      },
      {
        id: "q-09-05",
        question: "¿Qué herramienta se usa para 'cortar' o decodificar una llave Yale sin la original?",
        options: [
          "Regla milimetrada",
          "Calibre de profundidad y decodificador de llave",
          "Alicate estándar",
          "Destornillador de punta plana",
        ],
        correctIndex: 1,
        explanation:
          "El calibre de profundidad y el decodificador permiten medir las alturas de los pines a través del bombín y reproducir los cortes necesarios en una llave en blanco.",
      },
    ],
  },
  {
    moduleId: "modulo-10",
    questions: [
      {
        id: "q-10-01",
        question: "¿Qué tipo de cerradura es común en escritorios y archivadores de oficina?",
        options: [
          "Cerradura de doble paleta de embutir",
          "Cerradura de disco o de leva pequeña",
          "Cerradura biométrica",
          "Cerradura tubular de alta seguridad",
        ],
        correctIndex: 1,
        explanation:
          "Los muebles de oficina usan frecuentemente cerraduras de leva o de disco por su tamaño reducido y bajo perfil, adecuadas para cajones y archivadores.",
      },
      {
        id: "q-10-02",
        question: "¿Qué es la 'leva' en una cerradura de mueble?",
        options: [
          "La marca del fabricante",
          "El elemento rotativo que al girar bloquea o libera el cajón",
          "El muelle interno",
          "La cubierta exterior decorativa",
        ],
        correctIndex: 1,
        explanation:
          "La leva es una pieza en forma de palanca que al rotar con la llave, engancha o desengacha el cajón o puerta del mueble.",
      },
      {
        id: "q-10-03",
        question: "¿Cuál es la forma más común de abrir un mueble cuando se pierde la llave?",
        options: [
          "Romper el cajón",
          "Usar una ganzúa o llave maestra adecuada al tipo de cerradura",
          "Llamar al fabricante del mueble",
          "Desmontar todo el mueble",
        ],
        correctIndex: 1,
        explanation:
          "La intervención profesional con ganzúas o llaves maestras adecuadas permite abrir el mueble sin dañarlo ni destruir la cerradura.",
      },
      {
        id: "q-10-04",
        question: "¿Por qué las cerraduras de mueble tienen menor seguridad que las de puertas?",
        options: [
          "Porque son más pequeñas",
          "Porque tienen menos pines o discos y materiales más livianos",
          "Porque no tienen llave",
          "Porque solo se usan en interiores",
        ],
        correctIndex: 1,
        explanation:
          "Las cerraduras de mueble están diseñadas para uso liviano, con mecanismos simplificados que priorizan el tamaño compacto sobre la resistencia a la manipulación.",
      },
      {
        id: "q-10-05",
        question: "¿Qué información es útil para reponer la cerradura de un mueble?",
        options: [
          "El color del mueble",
          "El número de serie de la cerradura o la marca y modelo del mueble",
          "El año de compra del mueble",
          "El material del cajón",
        ],
        correctIndex: 1,
        explanation:
          "El número de serie de la cerradura o los datos del fabricante del mueble permiten identificar el modelo exacto de reemplazo compatible.",
      },
    ],
  },
  {
    moduleId: "modulo-11",
    questions: [
      {
        id: "q-11-01",
        question: "¿Cuál es la primera evaluación que hace un cerrajero ante una caja fuerte?",
        options: [
          "Taladrar inmediatamente",
          "Identificar la marca, modelo, tipo de mecanismo y estado de la caja",
          "Pedir la combinación al propietario",
          "Desmontar la caja de la pared",
        ],
        correctIndex: 1,
        explanation:
          "La evaluación inicial permite determinar el método menos destructivo y más eficiente para la apertura, evitando daños innecesarios.",
      },
      {
        id: "q-11-02",
        question: "¿Qué técnica no destructiva se puede intentar primero en una caja fuerte?",
        options: [
          "Taladrado del dial",
          "Manipulación escuchando el mecanismo o usando instrumentos de medición",
          "Uso de explosivos",
          "Corte con amoladora",
        ],
        correctIndex: 1,
        explanation:
          "La manipulación permite escuchar o sentir los clicks del mecanismo para determinar la combinación sin dañar la caja fuerte.",
      },
      {
        id: "q-11-03",
        question: "¿Qué herramienta especializada usa el cerrajero para taladrar una caja fuerte cuando no hay otra opción?",
        options: [
          "Taladro doméstico común",
          "Taladro con broca de carburo de tungsteno y guía magnética",
          "Sierra de disco",
          "Soplete de gas",
        ],
        correctIndex: 1,
        explanation:
          "Las cajas fuertes tienen planchas de acero endurecido y materiales anti-taladro, por lo que requieren brocas de carburo de tungsteno y técnica precisa.",
      },
      {
        id: "q-11-04",
        question: "¿Qué es el 'punto de taladrado' en una caja fuerte?",
        options: [
          "Cualquier punto de la caja donde se puede taladrar",
          "El punto específico calculado para acceder al mecanismo con el menor daño posible",
          "El punto más débil de la chapa exterior",
          "El número de serie de la caja",
        ],
        correctIndex: 1,
        explanation:
          "El punto de taladrado es calculado según el modelo de la caja para acceder al mecanismo de cierre de forma directa y minimizar el daño a la estructura.",
      },
      {
        id: "q-11-05",
        question: "¿Qué documentación debe solicitar el cerrajero antes de abrir una caja fuerte?",
        options: [
          "Solo el número de teléfono del cliente",
          "Acreditación de propiedad o autorización legal del titular",
          "La receta de instalación original",
          "El manual de usuario de la caja",
        ],
        correctIndex: 1,
        explanation:
          "Antes de cualquier intervención en una caja fuerte, el cerrajero debe verificar que quien solicita el servicio es el propietario o tiene autorización legal, por razones éticas y legales.",
      },
    ],
  },
  {
    moduleId: "modulo-12",
    questions: [
      {
        id: "q-12-01",
        question: "¿Qué diferencia a un candado de alta seguridad de uno estándar?",
        options: [
          "El color y el precio",
          "Arco de acero endurecido, mayor cantidad de pines y resistencia al corte",
          "El tamaño del arco",
          "La marca impresa",
        ],
        correctIndex: 1,
        explanation:
          "Los candados de alta seguridad usan arcos de acero endurecido resistentes al corte, mecanismos con más pines de seguridad y cuerpos de materiales reforzados.",
      },
      {
        id: "q-12-02",
        question: "¿Qué técnica se usa para abrir un candado de pernos sin la llave?",
        options: [
          "Golpear el arco con un martillo",
          "Picking del bombín del candado con ganzúas pequeñas",
          "Sumergirlo en agua",
          "Calentar el cuerpo del candado",
        ],
        correctIndex: 1,
        explanation:
          "El picking en candados funciona igual que en cerraduras de puerta: se manipulan los pines internos del bombín con ganzúas de tamaño apropiado.",
      },
      {
        id: "q-12-03",
        question: "¿Qué es el 'shimming' en candados?",
        options: [
          "Un tipo de lubricante para candados",
          "Técnica de insertar una lámina metálica para liberar el mecanismo de retención del arco",
          "Un proceso de duplicado de llave",
          "Un tipo de candado inteligente",
        ],
        correctIndex: 1,
        explanation:
          "El shimming consiste en insertar una lámina delgada (shim) por el arco para presionar el mecanismo de retención y liberarlo sin usar la llave.",
      },
      {
        id: "q-12-04",
        question: "¿Cuándo es apropiado cortar un candado en lugar de intentar abrirlo?",
        options: [
          "Siempre que sea más rápido",
          "Solo cuando el cliente lo autoriza y no hay otra solución viable",
          "Cuando se tiene una amoladora disponible",
          "Cuando el candado es viejo",
        ],
        correctIndex: 1,
        explanation:
          "El corte destruye el candado y es irreversible, por lo que solo debe hacerse cuando el cliente lo autoriza explícitamente y no existe otra alternativa técnica.",
      },
      {
        id: "q-12-05",
        question: "¿Qué tipo de candado resiste mejor los ataques de corte?",
        options: [
          "Candado de latón estándar",
          "Candado con arco de acero borado o de alta aleación endurecida",
          "Candado de combinación de plástico",
          "Candado de aluminio liviano",
        ],
        correctIndex: 1,
        explanation:
          "El acero borado (boro) o las aleaciones de alta dureza en el arco hacen que sea extremadamente difícil cortarlo con herramientas comunes.",
      },
    ],
  },
  {
    moduleId: "modulo-13",
    questions: [
      {
        id: "q-13-01",
        question: "¿Cuál es el primer paso para instalar una cerradura de embutir en una puerta?",
        options: [
          "Atornillar la tapa exterior",
          "Marcar y mortajar la cavidad en el canto de la puerta con medidas exactas",
          "Instalar el cilindro primero",
          "Pintar la puerta",
        ],
        correctIndex: 1,
        explanation:
          "El primer paso es marcar con precisión la posición de la cerradura y mortajar (tallar) la cavidad necesaria en el canto de la puerta para alojar la caja.",
      },
      {
        id: "q-13-02",
        question: "¿Cómo se verifica la correcta alineación de la cerradura con el marco?",
        options: [
          "A simple vista",
          "Probando el cierre y revisando que el pestillo entre limpiamente en la teja del marco",
          "Midiendo con una regla desde el suelo",
          "Usando un nivel láser",
        ],
        correctIndex: 1,
        explanation:
          "La prueba funcional de cierre y apertura verificando que el pestillo entre limpiamente en la teja (strike plate) confirma la correcta alineación.",
      },
      {
        id: "q-13-03",
        question: "¿Qué es la 'teja' en el contexto de instalación de cerraduras?",
        options: [
          "Un tipo de cerradura especial",
          "La pieza metálica en el marco donde entra el pestillo de la cerradura",
          "La cubierta decorativa de la cerradura",
          "El tornillo de fijación principal",
        ],
        correctIndex: 1,
        explanation:
          "La teja (strike plate) es la pieza metálica que se instala en el marco de la puerta y recibe el pestillo o los pernos cuando se cierra.",
      },
      {
        id: "q-13-04",
        question: "¿Qué herramientas básicas se necesitan para instalar una cerradura de embutir?",
        options: [
          "Solo un destornillador",
          "Formón, mazo, taladro y juego de destornilladores",
          "Solo el taladro eléctrico",
          "Soldadora y amoladora",
        ],
        correctIndex: 1,
        explanation:
          "La instalación requiere formón y mazo para el mortajado, taladro para los orificios del cilindro y destornilladores para el fijado final.",
      },
      {
        id: "q-13-05",
        question: "¿Qué verificación final es obligatoria tras instalar una cerradura?",
        options: [
          "Verificar el color de la cerradura instalada",
          "Probar el cierre y apertura desde ambos lados con todas las llaves entregadas",
          "Fotografiar el trabajo terminado",
          "Llamar al fabricante para registrar la instalación",
        ],
        correctIndex: 1,
        explanation:
          "Siempre se debe comprobar el funcionamiento correcto desde ambos lados de la puerta con todas las llaves, asegurando que el cliente recibe el servicio completo y operativo.",
      },
    ],
  },
];

export function getQuizForModule(moduleId: string): ModuleQuiz | undefined {
  return quizzes.find((q) => q.moduleId === moduleId);
}
