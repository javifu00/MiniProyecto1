var slideIndex = 1;
showSlides(slideIndex);

// Next/previous controls
function plusSlides(n) {
  showSlides(slideIndex += n);
}

// Thumbnail image controls
function currentSlide(n) {
  showSlides(slideIndex = n);
}

function showSlides(n) {
  var i;
  var slides = document.getElementsByClassName("mySlides");
  var dots = document.getElementsByClassName("dot");
  if (n > slides.length) {slideIndex = 1}
  if (n < 1) {slideIndex = slides.length}
  for (i = 0; i < slides.length; i++) {
      slides[i].style.display = "none";
  }
  for (i = 0; i < dots.length; i++) {
      dots[i].className = dots[i].className.replace(" active", "");
  }
  slides[slideIndex-1].style.display = "block";
  dots[slideIndex-1].className += " active";
}

function mostrarDatos(){
  var datosVerificados = true;
  var nombre = document.getElementById('name');
  var correo = document.getElementById('mail');
  var mensaje = document.getElementById('msg');
  var verificarCorreo = correo.value.includes("@")
  if (!validateEmail(correo.value)){
      datosVerificados = false;
  } else if (!allLetter(nombre.value)){
      datosVerificados = false;
  } else if (mensaje.value === ""){
      datosVerificados = false;
  }
  if (datosVerificados) {
      console.log("Nombre: " + nombre.value + "\nCorreo electronico: " + correo.value + "\nMensaje: " + mensaje.value);
      alert("Su mensaje ha sido enviado");
  } else {
      alert("Sus datos no son validos, Ingreselos nuevamente");
  }
  
}

function validateEmail(mail) {
  var re = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
  return re.test(String(mail).toLowerCase());
}

function allLetter(inputtxt){
  return /^[A-z ]+$/.test(inputtxt);
}