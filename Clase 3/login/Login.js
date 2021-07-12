var esValido = false;


document
  .querySelector('.Login')
  .addEventListener('submit', function(manejadorDelEventoActual){
    // Cancelar el envío del formulario
    alert('Hola')
  })


function procesarFormulario() {
  if(esValido) {
    console.log('Enviando formulario');
  } else {
    console.log('No enviando formulario');
  }
}

procesarFormulario()