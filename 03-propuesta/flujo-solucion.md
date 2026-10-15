---
title: flujo-solucion

---

graph TD
    A[Inicio: Cliente realiza pedido] --> B[Atendiente selecciona ingredientes en el celular]
    B --> C[El pedido aparece en pantalla de preparación por orden de llegada]
    C --> D[Preparación con notas visibles: sin mayonesa, doble embutido, etc.]
    D --> E[Entrega del producto y marcado como 'Completado']
    E --> F[Registro automático de la venta en base de datos local]
    F --> G[Al cierre: Sistema suma ventas y compara con gastos registrados]
    G --> H{¿Cuadre exitoso?}
    H -- Sí --> I[Cierre del día completado]
    H -- No --> J[Sistema desglosa la diferencia para revisión]
    I --> K[Calculadora sugiere insumos para la compra del día siguiente]
    J --> K
    K --> L[Fin del proceso]
