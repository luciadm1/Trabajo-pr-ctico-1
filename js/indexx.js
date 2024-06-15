
var formulario=document.getElementsByName("formulario")[0]
    getElementsByName=formulario.name

var validarFormulario=function() {
    if (formulario.nombre.value == 0) 
        alert("Completar el campo nombre");
    }
var validarFormulario=function(){
    if (formulario.telefono.value ==0)
    alert("Completar campo teléfono")
}
var validarFormulario= function(){
    if (formulario.mail.value ==0)
    alert ("Completar campo con mail")
}
var validarFormulario=function(){
    if(formulario.password.value ==0)
    alert("Completar campo contraseña")
}