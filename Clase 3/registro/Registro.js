const frmRegistro = document.querySelector(".Registro"); // valor => .value => string
const txtNombre = document.querySelector("#txtNombre"); // valor => .value => string
const txtApellido = document.querySelector("#txtApellido"); // valor => .value => string
const txtFechaNac = document.querySelector("#txtFechaNac"); // valor => .value => string
const txtUsuario = document.querySelector("#txtUsuario"); // valor => .value => string
const txtClave = document.querySelector("#txtClave"); // valor => .value => string
const txtConociste = document.querySelector("#txtConociste"); // valor => .value => string
const rdTipoEducacionPresencial = document.querySelector(
	"#rdTipoEducacionPresencial"
); // valor => .checked => boolean
const rdTipoEducacionDistancia = document.querySelector(
	"#rdTipoEducacionDistancia"
); // valor => .checked => boolean
const chkPhp = document.querySelector("#chkPhp"); // valor => .checked => boolean
const chkJs = document.querySelector("#chkJs"); // valor => .checked => boolean
const chkNet = document.querySelector("#chkNet"); // valor => .checked => boolean

let errores = [{ campo: "txtNombre", errores: [ "El campo está vacío" ] }]; //  Representar EL ESTADO ACTUAL del formulario
/*
{
  txtNombre: {
    isEmpty: true,
    isFormatted: true
  }
}
*/


txtNombre.addEventListener("input", function (e) {
	if (e.target.value == "") {
    txtNombre.className = 'invalido';
		errores.find((item) => item.campo == "txtNombre").errores.push("El campo está vacío");
  } else { 
    errores.find((item) => item.campo == "txtNombre").errores = [];
  }
});

frmRegistro.addEventListener("submit", function (e) {
	e.preventDefault();
  let esValido = true;

  errores.forEach(error => {
    if(error.errores.length > 0)
      esValido = false;
  });

	if (esValido) e.target.submit();
	else console.log(errores);
});
