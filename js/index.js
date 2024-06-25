function validarFormulario() {
  var nombre = document.getElementById('nombre').value;
  var telefono = document.getElementById('telefono').value;
  var mail = document.getElementById('mail').value;
  var password = document.getElementById('password').value;

  if (nombre == "") {
      alert("Completar nombre");
      return false;
  }

  if (telefono == "") {
      alert("Completar teléfono");
      return false;
  }

  if (mail == "") {
      alert("Ingresá tu mail");
      return false;
  }

  if (password == "") {
      alert("Ingresá tu contraseña");
      return false;
  }

  alert("Formulario enviado con éxito!");
  return true;
}
