function datos(){
    var i = document.getElementById("user").value;
    var contenido = "";
    if (i == "" || i == null){
        contenido += `
            <p>Debe ingresar un usuario</p>
        `
        document.getElementById("errorusuario").innerHTML = contenido;
        return false
    }
    var j = document.getElementById("pass").value;
    var contenido1 = "";
    if (j == "" || j == null){
        contenido1 += `
            <p>Debe ingresar una contraseña</p>
        `
        document.getElementById("errorcontraseña").innerHTML = contenido1;
        return false
    }
}

// Guardo el usuario y contraseña del login
sessionStorage.setItem("usuario", document.getElementById("user").value);
sessionStorage.setItem("contraseña", document.getElementById("pass").value);

function validar(){
    if (datos() == false){
        return datos();
    }
    else {
        return location.href="index.html";
    }
}

//Función que se ejecuta una vez que se haya lanzado el evento de
//que el documento se encuentra cargado, es decir, se encuentran todos los
//elementos HTML presentes.
document.addEventListener("DOMContentLoaded", function(e){

});

