//10. ¿Cuando es conveniente utilizar un callback, y cuando es necesario utilizar una promesa?

/*
Los callbacks son útiles en operaciones simples o cuando trabajas con APIs antiguas, mientras que las promesas son necesarias en flujos más complejos porque permiten un manejo más claro de la asincronía, evitan el “callback hell” y facilitan el uso de async/await.

Cuándo usar callbacks
- Operaciones simples y rápidas: cuando solo necesitas ejecutar una función después de otra (ej. un setTimeout básico).
- Compatibilidad con código antiguo: muchas librerías más viejas (como Node.js en sus primeras versiones) usan callbacks.
- Control manual: si quieres manejar directamente qué pasa en cada paso sin necesidad de objetos adicionales.

Cuándo usar promesas
- Operaciones asíncronas encadenadas: cuando necesitas ejecutar varias tareas en secuencia (ej. llamadas a APIs).
- Manejo de errores centralizado: .catch() permite capturar errores en un solo lugar.
- Mayor legibilidad: el código se lee de arriba hacia abajo, evitando anidaciones excesivas.
- Compatibilidad moderna: las promesas son estándar en JavaScript y base para async/await.
*/