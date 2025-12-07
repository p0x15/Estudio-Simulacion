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
                term: "VA Discreta",
                definition: "Toma valores finitos o numerables (ej. número de clientes que llegan a un banco)."
            },
            {
                term: "VA Continua",
                definition: "Toma valores en intervalos de los reales (ej. presión arterial, temperatura)."
            },
            {
                term: "PMF (Probability Mass Function)",
                definition: "Función de probabilidad para variables discretas (probabilidad de un valor exacto)."
            },
            {
                term: "PDF (Probability Density Function)",
                definition: "Función de densidad para variables continuas (probabilidad de que la VA esté en un intervalo)."
            },
            {
                term: "CDF (Cumulative Distribution Function)",
                definition: "Probabilidad acumulada de que X ≤ x."
            },
            {
                term: "Esperanza (media)",
                definition: "Valor esperado de la VA, medida de tendencia central."
            },
            {
                term: "Varianza",
                definition: "Medida de dispersión, indica cuánto se alejan los valores respecto a la media."
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
                term: "Distribución Binomial Negativa (Pascal)",
                definition: "Número de intentos hasta alcanzar r éxitos."
            },
            {
                term: "Distribución Hipergeométrica",
                definition: "Número de éxitos en una muestra sin reemplazo de una población finita."
            },
            {
                term: "Distribución Poisson",
                definition: "Número de ocurrencias en un intervalo de tiempo/espacio con tasa λ constante."
            },
            {
                term: "Distribución Uniforme Discreta",
                definition: "Todos los valores enteros en el rango tienen la misma probabilidad."
            },
            {
                term: "Distribución Uniforme Continua",
                definition: "Todos los valores de un intervalo [a,b] son igualmente probables."
            },
            {
                term: "Distribución Exponencial",
                definition: "Modela tiempos entre llegadas en un proceso Poisson."
            },
            {
                term: "Distribución Gamma / Erlang",
                definition: "Generalización de la exponencial, usada en tiempos de espera."
            },
            {
                term: "Distribución Beta",
                definition: "Distribuye probabilidades en un rango fijo (0,1), muy flexible."
            },
            {
                term: "Distribución Weibull",
                definition: "Modela tiempos de vida de productos y fallas."
            },
            {
                term: "Distribución Triangular",
                definition: "Definida por mínimo, máximo y moda; útil cuando hay pocos datos."
            },
            {
                term: "Distribución Normal",
                definition: "Distribución más importante en estadística, simétrica en forma de campana."
            },
            {
                term: "Proceso de Poisson",
                definition: "Proceso estocástico que modela la llegada de eventos aleatorios en el tiempo (ej. llamadas a call center)."
            },
            {
                term: "Proceso de Poisson Homogéneo (Estacionario)",
                definition: "La tasa de ocurrencia (λ) es constante en el tiempo. Tiempos entre llegadas ~ Exponencial(λ).",
                details: "Ejemplo: λ=30 aviones por hora en un aeropuerto."
            },
            {
                term: "Proceso de Poisson No Homogéneo (No Estacionario)",
                definition: "La tasa de ocurrencia λ(t) varía con el tiempo.",
                details: "Ejemplo: llegadas a una gasolinera con λ(t) que crece en la mañana y decrece en la noche."
            }
        ]
    }
};
