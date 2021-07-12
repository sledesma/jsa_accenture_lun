document
  .querySelector('.Login')
  .addEventListener('submit', function(e){
    // Cancelar el envío del formulario
    e.preventDefault();
    console.log(e)
    
    // Definir si esta validado o no, y decidir que hacer en cada caso
    if(
      (e.target[0].value == '') ||
      (e.target[1].value == '' )
    ) {
      console.log('No enviando formulario');
    } else {
      e.target.submit();
    }
  })
