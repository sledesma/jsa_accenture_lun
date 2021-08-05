/**
 * Module = Encapsulamiento
 * 
 * Problema que resuelve: Necesito ocultar detalles de la implementación (private)
 * Estrategia que ofrece: En JavaScript, podemos usar funciones y el ámbito para encapsular cosas
**/
const Numeros = (function(){

  // Una función que se llama inmediatamente
  // Dentro de una función (autoinvocada), todo es privado

  const obtenerNumero = () => 23;

  // La parte pública será el retorno de esta función
  return {
    numero: obtenerNumero()
  }

})();

module.exports