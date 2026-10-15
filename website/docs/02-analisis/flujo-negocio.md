---
title: flujo-negocio

---

# Diagramas de Flujo del Negocio

## 1. Flujo Actual del Negocio (Sin Automatización)

En la actualidad, ambos comedores operan de forma empírica y sin registros escritos, realizando todos los cálculos y toma de pedidos de memoria, lo que ocasiona congestión y errores frecuentes durante la hora pico del mediodía.

```mermaid
graph TD
    A[Inicio: Cliente llega al establecimiento] --> B[Solicita pedido de palabra con modificaciones]
    B --> C[Personal prepara el pedido de memoria]
    C --> D{¿Ocurrió un error en los ingredientes?}
    D -- Sí --> E[Desechar/Rehacer pedido con retraso y pérdida de insumos]
    D -- No --> F[Entregar pedido al cliente]
    E --> F
    F --> G[Cobro y cálculo mental de la cuenta]
    G --> H[Al cierre: Cuadre de caja de memoria]
    H --> I{¿Cuadra la caja?}
    I -- No --> J[El empleado repone el faltante de su dinero]
    I -- Sí --> K[Fin de la jornada]
    J --> K
    
```