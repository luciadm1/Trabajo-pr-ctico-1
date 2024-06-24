function validarFormulario() {

    var nombre= document.getElementsById('nombre').value;
    var telefono= document.getElementsById('telefono').value;
    var mail= document.getElementById('mail').value;
    var password= document.getElementById('password').value;

      if (nombre==""){

        alert ("Completar nombre");
        return 0;
     }

     if (telefono==""){
      alert("Completar teléfono");
      return 0;
     }

     if (mail==""){
      alert("Ingresá tu mail");
      return 0;
     }

     if (password==""){
      alert("Ingresá tu contraseña");
      return 0;
     }
}
