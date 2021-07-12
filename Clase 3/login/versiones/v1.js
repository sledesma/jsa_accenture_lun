var esValido = true;

const txtUsuario = document.querySelector('#txtUsuario');
const txtClave = document.querySelector('#txtClave');

document
  .querySelector('.Login')
  .addEventListener('submit', function(e){
    // Cancelar el envío del formulario
    e.preventDefault();
    
    // Definir si esta validado o no
    if( txtUsuario.value == '' ) esValido = false;
    if( txtClave.value == '' ) esValido = false;
    
    console.log(txtUsuario.value)
    console.log(txtClave.value)

    // Decidir que hacer en cada caso
    if(esValido) {
      e.target.submit();
    } else {
      console.log('No enviando formulario');
      esValido = true;
    }
  })
