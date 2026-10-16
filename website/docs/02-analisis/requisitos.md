---
title: requisitos

---

# Requisitos del Sistema

A partir de los hallazgos obtenidos en las entrevistas con los dos negocios de comida (puesto de panes con embutidos y comedor de desayunos/almuerzos), se identificaron 8 requisitos clave para el desarrollo de la solución tecnológica.

## Listado de Requisitos Identificados

| ID | Tipo | Descripción del Requisito | Criterio de Aceptación / Observaciones |
| :--- | :--- | :--- | :--- |
| *RQ-01* | Funcional | Registrar cada pedido con sus ingredientes específicos y las modificaciones personalizadas solicitadas por el cliente (ej. sin mayonesa, sin salsa dulce, embutido doble). | Permitir selección mediante toques rápidos en pantalla sin necesidad de escribir texto. |
| *RQ-02* | Funcional | Mostrar el pedido de forma clara y ordenada a la persona encargada de la preparación en cocina/puesto. | Visualizar pedidos por orden de llegada con indicador de tiempo de espera. |
| *RQ-03* | Funcional | Calculadora de insumos del día que sugiera la cantidad de paquetes de embutidos y panes a comprar. | Basado en una estimación inicial y ajustado automáticamente según las ventas históricas. |
| *RQ-04* | Funcional | Registrar las ventas realizadas durante la jornada de trabajo diaria. | Almacenamiento local de transacciones. |
| *RQ-05* | Funcional | Calcular el cuadre de caja al cierre del día, comparando el total de ventas contra los gastos en insumos (pan, embutidos, gas). | Muestra de forma automática si existe diferencia (faltante o sobrante). |
| *RQ-06* | Funcional | Agenda y programación de pedidos a domicilio indicando la hora exacta de entrega. | Alertar con tiempo suficiente para iniciar la preparación sin chocar con la fila del local. |
| *RQ-07* | No Funcional | Interfaz minimalista y simplificada, optimizada para pantallas de teléfonos celulares con botones grandes. | Diseñada para operarse rápidamente durante la hora pico (mediodía) con el mínimo de toques. |
| *RQ-08* | No Funcional | Capacidad de funcionamiento local (offline) que no dependa de conexión a internet continua. | Almacenamiento de datos en el dispositivo y sincronización automática al detectar red. |