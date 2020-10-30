var datos = {
    "Nombre": "",
    "Apellido": "",
    "Edad": "",
    "Email": "",
    "Telefono": ""
}

var datosParse = JSON.parse(localStorage.getItem("datos")); 
if (datosParse) {
    document.getElementById("userNombre").value = datosParse.Nombre;
    document.getElementById("userApellido").value = datosParse.Apellido;
    document.getElementById("userEdad").value = datosParse.Edad;
    document.getElementById("userEmail").value = datosParse.Email;
    document.getElementById("userTelefono").value = datosParse.Telefono;
}


var mensaje = document.getElementById("saveAlert");
var mensajeImagen = document.getElementById("imageAlert");

function guardarCambios() {
    datos.Nombre = document.getElementById("userNombre").value;
    datos.Apellido = document.getElementById("userApellido").value;
    datos.Edad = document.getElementById("userEdad").value;
    datos.Email = document.getElementById("userEmail").value;
    datos.Telefono = document.getElementById("userTelefono").value;
    localStorage.setItem("datos", JSON.stringify(datos));
    
    mensaje.innerHTML = "Datos guardados con éxito";
    mensaje.style.display = "block";
        setTimeout(() => {
            mensaje.style.display = "none";
        }, 3000);     // Después de 3 segundos oculta el mensaje de éxito
}
const recentImageDataUrl = localStorage.getItem("profilePhoto");

document.getElementById("fotoPerfil").addEventListener("change", function(){
    const reader = new FileReader();

    reader.addEventListener("load", () => {
        localStorage.setItem("profilePhoto", reader.result);
        
    });

    reader.readAsDataURL(this.files[0]);
    mensajeImagen.innerHTML = "Cargando imagen...";
    mensajeImagen.style.display = "block";
    setTimeout(() => {
        mensajeImagen.style.display = "none";
        location.reload();
    }, 2000);
    
});

//Función que se ejecuta una vez que se haya lanzado el evento de
//que el documento se encuentra cargado, es decir, se encuentran todos los
//elementos HTML presentes.
document.addEventListener("DOMContentLoaded", function (e) {
    if (recentImageDataUrl) {
        document.getElementById("mostrarFoto").setAttribute("src", recentImageDataUrl);
        document.getElementById("mostrarFoto").style.display = "block";
    }
});