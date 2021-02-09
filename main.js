function mostrarDatos(){
    var datosVerificados = true;
    var nombre = document.getElementById('name');
    var correo = document.getElementById('mail');
    var mensaje = document.getElementById('msg');
    if (!correo.value.contains("@") && !correo.value.contains(".com")){
        datosVerificados = false;
    } else if (hasNumber(nombre.value)){
        datosVerificados = false;
    }

    if (datosVerificados) {
        console.log("Nombre: " + nombre.value + "\nCorreo electronico: " + correo.value + "\nMensaje: " + mensaje.value);
        alert("Su mensaje ha sido enviado");
    } else {
        alert("Sus datos no son validos");
    }
    
}

function hasNumber(myString) {
    return /\d/.test(myString);
}