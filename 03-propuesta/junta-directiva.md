---
title: Untitled

---


# Acuerdos de la Junta Directiva Técnica

Durante la sesión presencial de la Junta Directiva Técnica se evaluaron los problemas operativos de los comercios analizados (comedor y puesto de panes con embutidos) y se definieron cuatro acuerdos fundamentales:

### Acuerdo 1: Implementación por Fases (Alcance Progresivo)
* **Descripción:** El desarrollo se dividirá en 3 entregas incrementales para mitigar riesgos de calidad y tiempo.
  * **Fase 1:** Módulo de Pedidos con Personalización (pantalla interactiva) + Calculadora de Insumos del Día.
  * **Fase 2:** Registro de Ventas en Vivo + Cuadre de Caja (control de ingresos/egresos).
  * **Fase 3:** Agenda de Pedidos a Domicilio y Programados.
* **Firmas de conformidad:** Francisco (PM), Oscar (Tech Lead), Luis (QA), Javier (Cliente), Iván (Scrum Master).

### Acuerdo 2: Diseño de Interfaz Mínima e Intuitiva para Dispositivo Móvil
* **Descripción:** Se desarrollará una aplicación web ligera optimizada para teléfonos inteligentes, con botones grandes y un número mínimo de toques, sin requerir hardware dedicado ni navegación compleja.

### Acuerdo 3: Protocolo de Pruebas en Paralelo y Validación con Datos Reales
* **Descripción:** Antes de liberar cada fase a producción, se ejecutará una semana de pruebas en entorno real. El negocio mantendrá su método manual en paralelo para garantizar la continuidad operativa si ocurre una falla técnica.

### Acuerdo 4: Capacitación Breve y Guía Visual Impresa en Punto de Venta
* **Descripción:** Se impartirá un taller de 30 minutos al personal operativo previo a cada fase y se entregará una guía visual plastificada con diagramas de uso paso a paso en el mostrador.

---

# Parte 2: Matriz de Trade-offs (Compromisos y Renuncias)

Para alcanzar el consenso durante la reunión, el equipo técnico y de negocio negoció de forma asertiva los siguientes balances:

| Decisión / Acuerdo | Lo que se GANA (Beneficio) | Lo que se RENUNCIA / ARRIESGA (Trade-off) | Justificación Técnica y de Negocio |
| :--- | :--- | :--- | :--- |
| **Desarrollo por Fases vs. Todo de Una Vez** | Mayor estabilidad, menor tasa de errores críticos y validación real de cada módulo. | Salida diferida del 100% de las funcionalidades (la Fase 1 toma ~2 semanas; el total ~6 semanas). | Entregar todas las funciones juntas en 2 semanas incrementa exponencialmente el riesgo de fallo en producción durante la hora pico. |
| **Interfaz Mínima Móvil vs. Sistema Completo** | Adopción inmediata por el personal sin barreras tecnológicas, bajo costo de infraestructura. | Funciones avanzadas de análisis de datos, reportes complejos y personalización gráfica. | En la hora pico (12:00 PM) la rapidez de captura es prioritaria sobre funciones analíticas complejas. |
| **Pruebas en Paralelo vs. Despliegue Inmediato** | Reducción a cero del riesgo de interrupción de ventas en caso de errores del sistema. | Tiempo adicional en el cronograma total por la semana de pruebas obligatoria por fase. | Evita pérdidas económicas por ralentización del servicio frente al cliente final. |
| **Integración de Vista de Cola en Pantalla de Pedidos** | Reducción de carga de trabajo de desarrollo y simplificación de la arquitectura. | Un módulo dedicado de monitoreo de cola en tiempo real con métricas independientes. | La pantalla de pedidos por orden de llegada cumple la función esencial de gestión de fila sin añadir complejidad técnica. |

---

# Parte 3: Matriz de Requerimientos vs. Fases de Solución

| Código | Requerimiento Extraído | Fase Asignada | Estado de Acuerdo |
| :---: | :--- | :---: | :---: |
| **RQ-01** | Registrar pedidos con ingredientes y modificaciones del cliente. | **Fase 1** | Aprobado |
| **RQ-02** | Mostrar pedidos de forma clara a quien los prepara. | **Fase 1** | Aprobado |
| **RQ-03** | Calcular insumos necesarios (panes y paquetes de embutidos). | **Fase 1** | Aprobado |
| **RQ-04** | Registrar las ventas realizadas durante el día. | **Fase 2** | Aprobado |
| **RQ-05** | Calcular cuadre entre ventas y gastos al cierre de jornada. | **Fase 2** | Aprobado |
| **RQ-06** | Agendar pedidos a domicilio con hora de entrega programada. | **Fase 3** | Aprobado |
| **RQ-07** | Interfaz ultra sencilla con pocos toques y botones grandes. | **Transversal (Fase 1-3)** | Aprobado |
| **RQ-08** | Funcionamiento en celular con almacenamiento local (offline-first). | **Transversal (Fase 1-3)** | Aprobado |

---

# Parte 4: Documento Post-mortem de la Junta Directiva Técnica

**Nombre del Proyecto:** Sistema de Gestión de Pedidos e Insumos para Comercio de Comida  
**Fecha de Evaluación:** 27 de agosto de 2026  
**Facilitador:** Iván (Scrum Master)  

---

### 1. Resumen Ejecutivo
La Junta Directiva Técnica se celebró con el fin de resolver el conflicto de definición de alcance entre los objetivos de tiempo/negocio (Francisco) y la viabilidad técnica y de calidad (Oscar y Luis). Se partió de un escenario de alta tensión e insatisfacción del cliente (Javier), logrando reestructurar el proyecto en un modelo por fases negociado mediante comunicación asertiva.

---

### 2. Lo Que Salió Bien (Puntos Fuertes del Proceso)
1. **Facilitación Asertiva:** La intervención del Scrum Master permitió encauzar las interrupciones y ataques personales hacia críticas objetivas de propuestas.
2. **Identificación Transparente de Restricciones:** Descubrir tempranamente que el cliente operaría desde un teléfono inteligente evitó el sobrediseño de una aplicación de escritorio.
3. **Escucha Activa del Cliente:** Al indagar sobre la postura pasiva de Javier, se reveló que la prioridad económica real era evitar pérdidas de caja por errores de cálculo.
4. **Desglose Objetivos de Trade-offs:** Evaluar las opciones A, B y C bajo los criterios explícitos de Tiempo, Costo y Calidad permitió un consenso unánime.

---

### 3. Lo Que Salió Mal (Desafíos y Bloqueos Iniciales)
1. **Estilos de Comunicación Inadecuados al Inicio:**
   * **Estilo Dominante/Agresivo:** Demandas de entrega total del alcance en plazos irrealistas sin validar viabilidad técnica.
   * **Estilo Pasivo/Pasivo-Agresivo:** Represión inicial de las verdaderas prioridades por temor a la complejidad del software.
   * **Estilo Obstinado:** Rechazo rotundo de planes de trabajo sin presentar alternativas de solución de manera inmediata.
2. **Expectativas Desalineadas:** Existía una brecha entre la capacidad real de desarrollo en 2 semanas y las 5 propuestas presentadas por los miembros del equipo.

---

### 4. Lecciones Aprendidas
1. **Definición de Criterios Abogados:** Las discusiones de alcance deben estar respaldadas por análisis de datos y capacidad real de pruebas de QA.
2. **Herramientas de Mitigación de Barreras:** El uso de resúmenes parciales ("Lo que escucho es...") y la reformulación de quejas en propuestas constructivas fueron claves para destrabar el conflicto.
3. **Documentación en Vivo:** Registrar los acuerdos en el acta visible a medida que se alcanzaban evitó volver a discutir puntos cerrados.

---

### 5. Plan de Acción y Compromisos Individuales

* **Francisco (Product Manager):** Defender cronogramas realistas basados en entregas por fases y asegurar la asignación presupuestaria oportuna.
* **Oscar (Tech Lead):** Mantener la arquitectura simple orientada a dispositivos móviles y liderar el diseño de la guía impresa de usuario.
* **Luis (QA / Auditoría):** Diseñar la matriz de pruebas operativas con datos reales para la semana de marcha en paralelo.
* **Javier (Cliente):** Garantizar la disponibilidad del personal para las pruebas en horario operativo y brindar retroalimentación directa.
* **Iván (Scrum Master):** Dar seguimiento al cumplimiento de los trade-offs acordados y facilitar las sesiones de cierre de cada fase.

---

### 6. Firmas de Cierre y Conformidad

| Rol | Nombre | Firma de Aprobación |
| :--- | :--- | :---: |
| Scrum Master | Iván | *[Firmado]* |
| Product Manager | Francisco | *[Firmado]* |
| Tech Lead | Oscar | *[Firmado]* |
| Cliente | Javier | *[Firmado]* |
| QA & Auditoría | Luis | *[Firmado]* |