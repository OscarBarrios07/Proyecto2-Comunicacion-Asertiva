---
title: Documento Post-Mortem de Incidente

---

# Documento Post-Mortem de Incidente

## 1. Resumen del Incidente
El día jueves durante la hora pico del mediodía (12:15 PM), la aplicación web dejó de registrar los pedidos entrantes y no mostraba las notas de personalización en la pantalla de cocina. El incidente duró 45 minutos, obligando al personal del comedor a retornar temporalmente a la toma de pedidos verbales, lo que generó retrasos y la entrega de 8 pedidos con ingredientes equivocados.

## 2. Línea de Tiempo (Timeline)
* **11:30 AM:** Inicio de la hora pico de almuerzos; el sistema opera con normalidad procesando 15 pedidos/hora.
* **12:05 PM:** Aumento repentino en la concurrencia de pedidos locales y de entrega a domicilio.
* **12:15 PM:** La pantalla de preparación deja de actualizarse; los botones de selección no responden en el celular de atención.
* **12:20 PM:** El equipo identifica que la base de datos local del navegador (IndexedDB) saturó la memoria del celular por acumulación de datos no sincronizados.
* **12:40 PM:** Se aplica un reinicio de la caché del navegador y un script de limpieza de registros antiguos.
* **13:00 PM:** El sistema restablece su funcionamiento normal y sincroniza los datos pendientes.

## 3. Impacto
* **Impacto Operativo:** 45 minutos de interrupción del sistema en el momento de mayor afluencia de clientes.
* **Impacto Financiero/Calidad:** 8 pedidos reajustados por ingredientes erróneos (pérdida estimada en insumos de Q60.00) y retraso de 15 minutos en 3 pedidos a domicilio.
* **Impacto en Usuarios:** Frustración temporal del personal de atención y cocina ante la falla del dispositivo.

## 4. Causa Raíz (Análisis de los 5 Porqués)
1. ¿Por qué falló la pantalla de pedidos? *Porque la aplicación web se congeló y dejó de responder a los toques.*
2. ¿Por qué se congeló la aplicación? *Porque el almacenamiento local del celular se llenó y bloqueó el hilo de ejecución de JavaScript.*
3. ¿Por qué se llenó el almacenamiento local? *Porque las imágenes de apoyo y los registros históricos de ventas no se estaban purgando localmente.*
4. ¿Por qué no se purgaban los registros antiguos? *Porque la rutina de limpieza automática solo se ejecutaba al detectar conexión a internet.*
5. **Causa Raíz:** *Ausencia de un límite estricto de memoria local (almacenamiento en caché) y falta de pruebas de estrés bajo condiciones offline prolongadas.*

## 5. Acciones Tomadas para Solucionarlo
* Se aplicó un parche de emergencia para purgar automáticamente las ventas ya sincronizadas del almacenamiento local.
* Se estableció un procedimiento manual de respaldo en papel como protocolo de contingencia mientras el sistema se recuperaba.

## 6. Acciones a Futuro (Plan de Prevención)
* **Optimización de Código:** Configurar un tope máximo de 50 MB en la memoria del navegador con rotación automática de registros antiguos.
* **Monitoreo y Alertas:** Implementar un indicador visual en pantalla que muestre el porcentaje de memoria ocupada en el celular.
* **Pruebas de Estrés:** Incluir pruebas de carga con más de 100 pedidos simulados sin conexión en la rutina de QA previa a cada fase.