
# Cifrado Cesar

## Introducción

Esta app esta diseñada para aquellas personas que quieren tener su propio lenguaje de conversación como el idioma de la p que teníamos hace años y hasta ahora algunas 
frases son usadas como: hopo lapa  .También cuando quieres tener una conversación ultra secreta, ese mensaje que solo le puedes decir a tus mejores amigos  y a tu almohada.
Si estas buscando estas características entonces estas en el lugar perfecto ya que el cifrado cesar es uno de los métodos más confiables y utilizados para que las personas
puedan intercambiar mensajes cifrados por un determinado número de desplazamiento.

## Funcionalidad

La principal función de esta app es que tu puedas ser capaz de cifrar y de decifrar los mensajes dados.
Para eso cuentas con un area donde puedes colocar tu mensaje y dos botones : uno para cifrar y el otro es para descifrar los mensajes 
 
## Objetivos

Decifrar lenguajes ocultos con desplazamiento de movimientos



### Criterios para el diseño

* Los principales usuarios son familiares y amigos que van organizar una fiesta sorpresa.
* El principal objetivo del proyecto es que el festejado no se entera de la sorpresa.
* El diseño es para manejar de modo sencillo para que cualquiera pueda utilizarlo tanto la persona mayor como la persona menor.

### MODO DE USO

La interfaz debe permitir al usuario:

* elegir un `offset` indicando cuántas posiciones queremos que el cifrado
  desplace cada caracter
* insertar un mensaje (texto) que queremos cifrar
* ver el resultado del mensaje cifrado
* insertar un mensaje (texto) a descifrar
* ver el resultado del mensaje descifrado

### Scripts / Archivos


* `README.md`: debe explicar cómo descargar, instalar y ejecutar la aplicación
  así como una introducción a la aplicación, su funcionalidad y decisiones de
  diseño que tomaron.

* `src/index.html`: este es el punto de entrada a tu aplicación. Este archivo
  debe contener to _markup_ (HTML) e incluir el CSS y JavaScript necesario.

* `src/cipher.js`: acá debes implementar el objeto cipher, el cual debe estar
  _exportado_ en el objeto global (`window`). Este objeto (`cipher`) debe
  contener dos métodos:

  - `cipher.encode(offset, string)`: `offset` es el número de posiciones que
    queremos mover a la derecha en el alfabeto y `string` el mensaje (texto)
    que queremos cifrar.

  - `cipher.decode(offset, string)`: `offset` es el número de posiciones que
    queremos mover a la izquierda en el alfabeto y `string` el mensaje
    (texto) que queremos decifrar.
    
* `src/index.js`: acá debes escuchar eventos del DOM, invocar `cipher.encode()`
  o `cipher.decode()` según sea necesario y actualizar el resultado en la UI.
* `test/cipher.spec.js`: este archivo contiene algunos tests de ejemplo y acá
  tendrás que implementar los tests para `cipher.encode()` y `cipher.decode()`.


