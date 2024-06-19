function validarFormulario() {

    var nombre= document.getElementsById('nombre').value;
    var telefono= document.getElementsById('telefono').value;
    var mail= document.getElementById('mail').value;
    var password= document.getElementById('password').value;

      if (nombre==""){

        alert ("Completar nombre");
        return;
     }

     if (telefono==""){
      alert("Completar teléfono");
      return
     }

     if (mail==""){
      alert("Ingresá tu mail");
      return
     }

     if (password==""){
      alert("Ingresá tu contraseña");
      return
     }
}