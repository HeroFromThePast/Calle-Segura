const nombre = document.getElementById("myname"); 
const apellidos = document.getElementById("surname"); 
const correo = document.getElementById("email"); 
const ciudad = document.getElementById("city"); 
const celular = document.getElementById("phone"); 
const contrasena = document.getElementById("password"); 
const repetircontrasena = document.getElementById("repeatpassword"); 
const terminosycondiciones = document.getElementById("termsAndConditions"); 
const form = document.getElementById("form"); 
const listinputs = document.querySelectorAll(".form-input"); 

if(form){
form.addEventListener("submit", (e) => {
  e.preventDefault();  

  if(nombre.value.length < 1){
    console.error("error");
   }
}); }