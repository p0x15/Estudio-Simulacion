const studyData = {
    topic1: {
        title: "Tema 1: Introducción a la simulación",
        concepts: [
            {
                term: "Modelo",
                definition: "Representación (abstracción) de un sistema real y ayuda en la toma de decisiones.",
                details: "Se utiliza para entender, analizar o predecir el comportamiento de un sistema."
            },
            {
                term: "Modelo Estático",
                definition: "Dentro de los modelos matemáticos en simulación de sistemas, aquellos que consideran el comportamiento de un sistema sin tomar en cuenta el tiempo."
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
                term: "Simulación (Simular)",
                definition: "Proceso de reproducir aproximadamente un sistema real a través de un modelo computarizado y llevar a cabo experimentos con él. Es imitar el comportamiento de un sistema real con un modelo que se comporta de manera similar."
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
                definition: "La simulación de sistemas en los que la variable de estado cambia solo en un conjunto específico de puntos en el tiempo."
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
            },
            {
                term: "Simulación Monte Carlo",
                definition: "Procedimiento estadístico que usa números aleatorios para modelar sistemas con variables aleatorias, principalmente estáticos."
            },
            {
                term: "Ruta Crítica",
                definition: "Secuencia de actividades que determina el tiempo total de finalización de un proyecto (el proceso más lento)."
            },
            {
                term: "Ruta Crítica Probabilística",
                definition: "Los tiempos son aleatorios (distribuciones) y se requiere simulación para capturar la variabilidad."
            },
            {
                term: "Solución Analítica",
                definition: "Metodología de modelado que implica la generación de fórmulas o de un procedimiento computacional que calcule el valor exacto de una respuesta."
            },
            {
                term: "Parámetro de salida",
                definition: "Indica una medida de desempeño del sistema y es una parte integral de un modelo."
            },
            {
                term: "Simulación como herramienta (¿Cuándo NO usarla?)",
                definition: "Si un problema puede ser resuelto con sentido común y además se tiene poco tiempo, la simulación NO es la herramienta apropiada."
            },
            {
                term: "Componentes básicos de simulación estocástica",
                definition: "Entidades, Atributos, Actividades, Recursos, Estados, Eventos."
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
                title: "Ventajas de la Simulación",
                items: [
                    "Permite experimentar sin interrumpir el sistema real",
                    "Facilita analizar sistemas complejos",
                    "Ayuda a validar soluciones analíticas",
                    "Sirve como herramienta pedagógica y de diseño"
                ]
            },
            {
                title: "Desventajas de la Simulación",
                items: [
                    "Puede ser costosa en tiempo y recursos",
                    "Requiere datos suficientes y confiables",
                    "Si no se valida bien, los resultados pueden ser engañosos",
                    "No siempre es la mejor opción si existe solución analítica"
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
            },
            {
                title: "Aplicaciones de Simulación",
                items: [
                    "Aeropuertos: seguridad, transporte",
                    "Hospitales: asignación de personal, emergencias",
                    "Puertos: grúas, almacenamiento",
                    "Minería: transporte de materiales",
                    "Parques de diversiones: filas y atracciones"
                ]
            },
            {
                title: "Método de Monte Carlo para Ruta Crítica",
                ordered: true,
                items: [
                    "Representar proyecto como red de actividades",
                    "Definir distribución de probabilidad para cada actividad",
                    "Generar tiempos aleatorios",
                    "Calcular duración total y ruta crítica",
                    "Repetir muchas veces (corridas)",
                    "Analizar media, varianza y probabilidades"
                ]
            },
            {
                title: "6 Componentes básicos de la simulación de eventos estocásticos",
                items: [
                    "Entidades",
                    "Atributos",
                    "Actividades",
                    "Recursos",
                    "Estados",
                    "Eventos"
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
    },
    customQuestions: [
        {
            question: "Estás modelando el tráfico de una ciudad hora por hora para ver su evolución. ¿Qué tipo de modelo es?",
            answer: "Modelo Dinámico",
            options: ["Modelo Estático", "Simulación Monte Carlo", "Modelo de Optimización"]
        },
        {
            question: "Si lanzas una moneda 10 veces y cuentas el número total de 'caras' (éxitos), ¿qué distribución usas?",
            answer: "Distribución Binomial",
            options: ["Distribución Bernoulli", "Distribución Poisson", "Distribución Geométrica"]
        },
        {
            question: "Llegan clientes a un banco a una tasa constante de 5 por hora. ¿Qué distribución modela el NÚMERO de llegadas en una hora?",
            answer: "Distribución Poisson",
            options: ["Distribución Exponencial", "Distribución Normal", "Distribución Uniforme"]
        },
        {
            question: "En el mismo banco, ¿qué distribución modela el TIEMPO que pasa entre la llegada de un cliente y el siguiente?",
            answer: "Distribución Exponencial",
            options: ["Distribución Poisson", "Distribución Binomial", "Distribución Weibull"]
        },
        {
            question: "Necesitas simular el tiempo de vida de un componente electrónico hasta que falla por desgaste.",
            answer: "Distribución Weibull",
            options: ["Distribución Bernoulli", "Distribución Poisson", "Distribución Binomial"]
        },
        {
            question: "Estás calculando la ruta crítica de un proyecto donde los tiempos de cada tarea son inciertos (probabilísticos). ¿Qué método es indispensable?",
            answer: "Simulación Monte Carlo",
            options: ["Método de la Ruta Crítica (CPM) tradicional", "Simulación Discreta", "Modelo de Optimización"]
        },
        {
            question: "La tasa de llegada de pacientes a urgencias aumenta drásticamente en la noche y baja en la mañana. ¿Qué proceso describe esto?",
            answer: "Proceso de Poisson No Homogéneo",
            options: ["Proceso de Poisson Homogéneo", "Distribución Exponencial", "Distribución Normal"]
        },
        {
            question: "Quieres estimar el valor de PI lanzando miles de puntos al azar en un cuadrado. ¿Qué tipo de simulación es?",
            answer: "Simulación Estática (Monte Carlo)",
            options: ["Simulación Dinámica", "Simulación de Eventos Discretos", "Modelo Determinista"]
        },
        {
            question: "Buscas el número de intentos necesarios hasta conseguir el PRIMER éxito en una venta telefónica.",
            answer: "Distribución Geométrica",
            options: ["Distribución Binomial", "Distribución Poisson", "Distribución Hipergeométrica"]
        },
        {
            question: "Estás simulando una línea de producción donde el estado cambia solo cuando una pieza entra o sale de una máquina.",
            answer: "Simulación de Evento Discreto",
            options: ["Simulación Continua", "Simulación Monte Carlo", "Modelo Estático"]
        },
        {
            question: "¿Qué metodología implica generar fórmulas para calcular el valor exacto de una respuesta?",
            answer: "Solución Analítica",
            options: ["Simulación Estocástica", "Modelo Heurístico", "Simulación Dinámica"]
        },
        {
            question: "Si un problema se resuelve con sentido común y hay poco tiempo, ¿es apropiada la simulación?",
            answer: "No, no es la herramienta apropiada",
            options: ["Sí, siempre es mejor", "Depende del software", "Solo si es complejo"]
        },
        {
            question: "¿Qué es un parámetro de salida en un modelo?",
            answer: "Una medida de desempeño del sistema",
            options: ["Una variable de entrada", "Una constante del sistema", "Un atributo de una entidad"]
        },
        {
            question: "¿Cuáles son los 6 componentes básicos de la simulación de eventos estocásticos?",
            answer: "Entidades, Atributos, Actividades, Recursos, Estados, Eventos",
            options: ["Entidades, Variables, Tiempo, Costo, Riesgo, Salida", "Modelo, Realidad, Abstracción, Datos, Análisis, Reporte", "Entradas, Procesos, Salidas, Retroalimentación, Control, Entorno"]
        },
        {
            question: "En la generación de números pseudo aleatorios, ¿qué características básicas se buscan?",
            answer: "Uniformidad e Independencia",
            options: ["Uniformidad e Independencia", "Dinamismo y Tendencia", "Solo Uniformidad", "Complejidad y Estructura"]
        },
        {
            question: "La simulación del problema de vendedor de periódico podría ser descrito como:",
            answer: "Estático-estocástico",
            options: ["Continuo-Determinístico", "Discreto-Dinámico", "Estático-Determinístico"]
        },
        {
            question: "En la generación de números aleatorios (pseudo), ¿cuál es la característica que ayuda a saber cuándo tus números empezarán a crear un patrón?",
            answer: "Periodo",
            options: ["Módulo", "Semilla", "Constante de incremento"]
        },
        {
            question: "En la generación de números aleatorios, ¿cuál es la prueba más poderosa para verificar la frecuencia, incluso en muestras pequeñas?",
            answer: "Kolmogorov-Smirnov",
            options: ["La prueba de chi-cuadrado", "Autocorrelación", "Secuencias"]
        }
    ]
};
