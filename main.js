// Verificación de Edad del Cliente.

let solicitudNombre = prompt("Hola! Cómo es tu nombre?");

let mensajeInicio = prompt(solicitudNombre + ", que edad tenés?");

if(mensajeInicio >= "18"){
        
    alert("Perfecto! Gracias por visitar nuestro sitio. Estamos para ayudarte en lo que necesites!");
    
    window.location.replace("pages/pagina-principal.html");

} else window.location.replace("pages/mensaje-de-salida.html");