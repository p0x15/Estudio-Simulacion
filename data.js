const studyData = {
  topic1: {
    title: "Tema 1: Introducción a la simulación",
    concepts: [
      {
        term: "Modelo",
        definition: "Representación o abstracción de un sistema real que incluye los componentes más importantes y sus interacciones.",
        details: "Se utiliza para entender, analizar o predecir el comportamiento de un sistema."
      },
      {
        term: "Modelo Estático",
        definition: "No considera el tiempo (ej. ecuaciones lineales)."
      },
      {
        term: "Modelo Dinámico",
        definition: "Incorpora el tiempo en el comportamiento (ej. tráfico)."
      },
      {
        term: "Modelo Determinista",
        definition: "Parámetros fijos y conocidos."
      },
      {
        term: "Modelo Probabilístico (Estocástico)",
        definition: "Incluye incertidumbre mediante distribuciones de probabilidad."
      },
      {
        term: "Modelo Descriptivo",
        definition: "Describe el sistema y su comportamiento."
      },
      {
        term: "Modelo de Optimización",
        definition: "Busca la mejor solución bajo criterios dados."
      },
      {
        term: "Simulación",
        definition: "Proceso de imitar el comportamiento de un sistema real a través de un modelo computarizado y realizar experimentos con él."
      },
      {
        term: "Simulación Estática",
        definition: "Analiza el sistema en un momento específico sin considerar el paso del tiempo (ej. Monte Carlo)."
      },
      {
        term: "Simulación Dinámica",
        definition: "El sistema evoluciona con el tiempo y la simulación reproduce esa evolución."
      },
      {
        term: "Simulación Discreta",
        definition: "Los cambios en el sistema ocurren en eventos aislados y específicos en el tiempo."
      },
      {
        term: "Simulación Continua",
        definition: "El estado del sistema cambia de forma continua en el tiempo."
      },
      {
        term: "Simulación Estocástica de Evento Discreto",
        definition: "Modela un sistema cuyo estado cambia en puntos discretos en el tiempo debido a eventos aleatorios."
      },
      {
        term: "Entidades",
        definition: "Objetos de interés en la simulación (ej. clientes, piezas)."
      },
      {
        term: "Atributos",
        definition: "Características de las entidades."
      },
      {
        term: "Actividades",
        definition: "Acciones con duración (ej. atender, procesar)."
      },
      {
        term: "Recursos",
        definition: "Elementos necesarios para las actividades (ej. máquinas, personal)."
      },
      {
        term: "Eventos",
        definition: "Ocurrencias que cambian el estado del sistema (ej. llegada de un cliente)."
      }
    ],
    lists: [
      {
        title: "Beneficios de los modelos",
        items: [
          "Permiten tomar decisiones informadas",
          "Ayudan a predecir el desempeño futuro",
          "Facilitan comparar alternativas",
          "Evitan riesgos de experimentar con el sistema real",
          "Mejoran la comunicación"
        ]
      },
      {
        title: "Pasos de un estudio por simulación",
        ordered: true,
        items: [
          "Definir el problema y objetivos",
          "Construir el modelo conceptual",
          "Traducirlo a un modelo computacional",
          "Verificar y validar el modelo",
          "Diseñar experimentos (escenarios)",
          "Ejecutar corridas de simulación",
          "Analizar resultados y sacar conclusiones"
        ]
      }
    ]
  },
  topic2: {
    title: "Tema 2: Distribuciones y Procesos",
    concepts: [
      {
        term: "Variable Aleatoria (VA)",
        definition: "Función que asigna un valor numérico a cada resultado de un experimento aleatorio."
      },
      {
        term: "PMF (Probability Mass Function)",
        definition: "Función de probabilidad para variables discretas (probabilidad de un valor exacto)."
      },
      {
        term: "PDF (Probability Density Function)",
        definition: "Función de densidad para variables continuas (probabilidad en un intervalo)."
      },
      {
        term: "Distribución Bernoulli",
        definition: "Un solo experimento con dos resultados posibles (éxito / fracaso)."
      },
      {
        term: "Distribución Binomial",
        definition: "Número de éxitos en n ensayos Bernoulli independientes con probabilidad p."
      },
      {
        term: "Distribución Geométrica",
        definition: "Número de intentos hasta el primer éxito."
      },
      {
        term: "Distribución Poisson",
        definition: "Número de ocurrencias en un intervalo de tiempo/espacio con tasa λ constante."
      },
      {
        term: "Distribución Exponencial",
        definition: "Modela tiempos entre llegadas en un proceso Poisson."
      },
      {
        term: "Distribución Normal",
        definition: "Distribución simétrica en forma de campana, la más importante en estadística."
      },
      {
        term: "Distribución Triangular",
        definition: "Definida por mínimo, máximo y moda; útil cuando hay pocos datos."
      },
      {
        term: "Proceso de Poisson Homogéneo",
        definition: "La tasa de ocurrencia (λ) es constante en el tiempo y los incrementos son independientes."
      },
      {
        term: "Proceso de Poisson No Homogéneo",
        definition: "La tasa de ocurrencia λ(t) varía con el tiempo."
      }
    ]
  }
};
