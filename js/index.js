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
function validandomail(mail) {
    var validandomail1= /^[-\w.%+]{1,64}@(?:[A-Z0-9-]{1,63}\.){1,125}[A-Z]{2,63}$/i;
    var mailValido= validandomail1.test(mail);

      if(mailValido==true){
        alert('Mail Validado!');
      }

      else{
        alert('Mail inválido,vuelva a intentar')
      }

}

function validarTelefono(telefono){
  var telefonoValidado= /^\d{13}$/;

  if(!telefonoValidado.test(telefono)){
    return false;
  }

  else{
    return true;
  }
  
}
