function datos(){
    var i = document.getElementById("user").value;
    var contenido = "";

    if (i == "" || i == null){
        contenido += `
            <p>Debe ingresar un usuario</p>
        `
        document.getElementById("errorusuario").innerHTML = contenido;
        return false
    } else {
            document.getElementById("errorusuario").innerHTML = "";
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




function validar(){
    if (datos() == false){
        return datos();
    }
    else {
        return location.href="home.html";
    }
}

function voy(){
    sessionStorage.setItem('user', document.getElementById("user").value);
    sessionStorage.setItem('pass', document.getElementById("pass").value);
}
//Función que se ejecuta una vez que se haya lanzado el evento de
//que el documento se encuentra cargado, es decir, se encuentran todos los
//elementos HTML presentes.
document.addEventListener("DOMContentLoaded", function(e){

});

