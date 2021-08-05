// Universal Module Definition
// Es un modulo que puede insertarse en varios lugares
(function (global, factory) {
  
  typeof exports === 'object' && typeof module !== 'undefined' ? module.exports = factory() :
  typeof define === 'function' && define.amd ? define(factory) :
  (global = global || self, global.Calculator = factory());
  
})(this, function () {

  const events = {
    oncalculate: (tipo, numeros) => {
      const evt = new Event(tipo);
      evt.numeros = numeros;
      return evt;
    }
  };

  class Calculator extends EventTarget {
    constructor() {
      super();
    }

    on(evt, callback) {
      this.addEventListener(evt, callback);
    }

    sumar(n1, n2) {
      this.dispatchEvent(events.oncalculate('suma', {numero1: n1, numero2: n2, resultado: n1 + n2}));
      return n1 + n2;
    }

    restar(n1, n2) {
      this.dispatchEvent(events.oncalculate('resta', {numero1: n1, numero2: n2, resultado: n1 - n2}));
      return n1 - n2;
    }
  }

  // El codigo del modulo se retorna aca
  return new Calculator()
  
})
