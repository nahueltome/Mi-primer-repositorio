// Muestro los productos agregados al carrito
function cartProducts(array){
    htmlContentToAppend = "";
    for(let i = 0; i < array.articles.length; i++){
    let products = array.articles[i];
    htmlContentToAppend += `
    
    <div class="col-4 mb-4">
        <img src="` + products.src + `" height="100">  
    </div>
    <div class="col-4 mb-4">
            ` + products.name + `  
        <br>
            Precio: <span id="precio`+ i +`" value="` + products.unitCost + `">` + products.unitCost + `</span>  ` + products.currency + `
    </div>
    <div class="col-4 mb-4">
        Cantidad: <input type="number" id="count`+ i +`" value="` + products.count + `" onchange="sub`+i+`(this.value); subtotal(); envioOnChange()" min="1" max="10"> <br>
        <div class="text-right font-weight-bold"><span class="font-weight-normal">Subtotal:</span><span id="sp`+i+`"> UYU </span><span id="sub`+ i +`">`+ products.count*products.unitCost +`</span></div>
    </div>
    `
        document.getElementById("Cproductos").innerHTML = htmlContentToAppend;
    }
}

var monedaPesos = true;
var sub0EnPesos = 0;
var sub1EnPesos = 0;
var subtotalEnPesos = 0;
var subtotalEnDolares = 0;
var envioEnPesos = 0;
var envioEnDolares = 0;
var tipoDeEnvio = "";

// Calcula la cantidad*costo del primer producto
function sub0(value){
    sub0EnPesos = Number(value*Number(document.getElementById("precio0").innerHTML));
    if(monedaPesos){
        document.getElementById("sub0").innerHTML = sub0EnPesos;
    } else{
        document.getElementById("sub0").innerHTML = (sub0EnPesos/40).toFixed(2);
    }
}

// Calcula la cantidad*costo del segundo producto
function sub1(value){
    sub1EnPesos = Number(value*document.getElementById("precio1").innerHTML)*40;
    if(monedaPesos){
        document.getElementById("sub1").innerHTML = sub1EnPesos;
    } else{
        document.getElementById("sub1").innerHTML = sub1EnPesos/40;
    }
}

// Calcula el subtotal y total
function subtotal(){
        var subtotalP = Number(sub0EnPesos + sub1EnPesos);
        subtotalEnPesos = subtotalP.toFixed(2);

        var subtotalD = Number(sub0EnPesos/40 + sub1EnPesos/40);
        subtotalEnDolares = subtotalD.toFixed(2);

    if (monedaPesos == true) {
        document.getElementById("total").innerHTML = Number(Number(subtotalEnPesos) + Number(envioEnPesos)).toFixed(2);
        document.getElementById("total2").innerHTML = Number(Number(subtotalEnPesos) + Number(envioEnPesos)).toFixed(2);
    }
    else {
        document.getElementById("total").innerHTML = Number(Number(subtotalEnDolares) + Number(envioEnDolares)).toFixed(2);
        document.getElementById("total2").innerHTML = Number(Number(subtotalEnDolares) + Number(envioEnDolares)).toFixed(2);
    }
    
}

// Cambia la moneda a pesos uruguayos
function pesos() {
    monedaPesos = true;
    document.getElementById("sp0").innerHTML = " UYU ";
    document.getElementById("sp1").innerHTML = " UYU ";
    document.getElementById("sub0").innerHTML = Number(sub0EnPesos);
    document.getElementById("sub1").innerHTML = Number(sub1EnPesos);
    document.getElementById("envio").innerHTML = Number(envioEnPesos).toFixed(2);
    document.getElementById("total").innerHTML = Number(Number(subtotalEnPesos) + Number(envioEnPesos)).toFixed(2);
    document.getElementById("total2").innerHTML = Number(Number(subtotalEnPesos) + Number(envioEnPesos)).toFixed(2);
    document.getElementById("moneda1").innerHTML = " UYU ";
    document.getElementById("moneda2").innerHTML = " UYU ";
    
    
}

// Cambia la moneda a dólares
function dolar() {
    monedaPesos = false
    document.getElementById("sp0").innerHTML = " USD ";
    document.getElementById("sp1").innerHTML = " USD ";
    document.getElementById("sub0").innerHTML = Number(sub0EnPesos/40);
    document.getElementById("sub1").innerHTML = Number(sub1EnPesos/40);
    document.getElementById("envio").innerHTML = Number(envioEnDolares).toFixed(2);
    document.getElementById("total").innerHTML = Number(Number(subtotalEnDolares) + Number(envioEnDolares)).toFixed(2);
    document.getElementById("total2").innerHTML = Number(Number(subtotalEnDolares) + Number(envioEnDolares)).toFixed(2);
    document.getElementById("moneda1").innerHTML = " USD ";
    document.getElementById("moneda2").innerHTML = " USD ";
    
}

    /////// Envíos ///////

// Sin envío
function sinEnvio() {
    envioEnPesos = 0.00;
    envioEnDolares = 0.00;
    tipoDeEnvio = "no";
    document.getElementById("envio").innerHTML = Number(envioEnPesos).toFixed(2);
    if (monedaPesos == true){
        document.getElementById("total").innerHTML = Number(subtotalEnPesos).toFixed(2);
        document.getElementById("total2").innerHTML = Number(subtotalEnPesos).toFixed(2);
    }
    else {
        document.getElementById("total").innerHTML = Number(subtotalEnDolares).toFixed(2);
        document.getElementById("total2").innerHTML = Number(subtotalEnDolares).toFixed(2);
    }
}

// Envío standard
function standard() {
    envioEnPesos = Number(0.05 * Number(subtotalEnPesos)).toFixed(2);
    envioEnDolares = Number(0.05 * Number(subtotalEnDolares)).toFixed(2);
    tipoDeEnvio = "standard";
    if (monedaPesos == true){
        document.getElementById("envio").innerHTML = Number(envioEnPesos).toFixed(2);
        document.getElementById("total").innerHTML = Number(Number(subtotalEnPesos) + Number(envioEnPesos)).toFixed(2);
        document.getElementById("total2").innerHTML = Number(Number(subtotalEnPesos) + Number(envioEnPesos)).toFixed(2);
    } 
    else {
        document.getElementById("envio").innerHTML = Number(envioEnDolares).toFixed(2);
        document.getElementById("total").innerHTML = Number(Number(subtotalEnDolares) + Number(envioEnDolares)).toFixed(2);
        document.getElementById("total2").innerHTML = Number(Number(subtotalEnDolares) + Number(envioEnDolares)).toFixed(2);
    }
}

// Envío express
function express() {
    envioEnPesos = Number(0.07 * Number(subtotalEnPesos)).toFixed(2);
    envioEnDolares = Number(0.07 * Number(subtotalEnDolares)).toFixed(2);
    tipoDeEnvio = "express";
    if (monedaPesos == true){
        document.getElementById("envio").innerHTML = Number(envioEnPesos).toFixed(2);
        document.getElementById("total").innerHTML = Number(Number(subtotalEnPesos) + Number(envioEnPesos)).toFixed(2);
        document.getElementById("total2").innerHTML = Number(Number(subtotalEnPesos) + Number(envioEnPesos)).toFixed(2);
    } 
    else {
        document.getElementById("envio").innerHTML = Number(envioEnDolares).toFixed(2);
        document.getElementById("total").innerHTML = Number(Number(subtotalEnDolares) + Number(envioEnDolares)).toFixed(2);
        document.getElementById("total2").innerHTML = Number(Number(subtotalEnDolares) + Number(envioEnDolares)).toFixed(2);
    }
}

// Envio premium
function premium() {
    envioEnPesos = Number(0.15 * Number(subtotalEnPesos)).toFixed(2);
    envioEnDolares = Number(0.15 * Number(subtotalEnDolares)).toFixed(2);
    tipoDeEnvio = "premium";
    if (monedaPesos == true){
        document.getElementById("envio").innerHTML = Number(envioEnPesos).toFixed(2);
        document.getElementById("total").innerHTML = Number(Number(subtotalEnPesos) + Number(envioEnPesos)).toFixed(2);
        document.getElementById("total2").innerHTML = Number(Number(subtotalEnPesos) + Number(envioEnPesos)).toFixed(2);
    } 
    else {
        document.getElementById("envio").innerHTML = Number(envioEnDolares).toFixed(2);
        document.getElementById("total").innerHTML = Number(Number(subtotalEnDolares) + Number(envioEnDolares)).toFixed(2);
        document.getElementById("total2").innerHTML = Number(Number(subtotalEnDolares) + Number(envioEnDolares)).toFixed(2);
    }
}

// Función que ajusta el envío cuando cambio la cantidad de un producto
function envioOnChange() {
    if (tipoDeEnvio == "no") {
        sinEnvio();
    }
    if (tipoDeEnvio == "premium") {
        premium();
    }
    if (tipoDeEnvio == "express") {
        express();
    }
    if (tipoDeEnvio == "standard") {
        standard();
    }
}

function eliminarChecked(){
    var envios = `Standard (12-15 días) <input name="envio" type="radio" onclick="standard()"><br>
    Express (5-8 días) <input name="envio" type="radio" onclick="express()"><br>
    Premium (2-5 días) <input name="envio" type="radio" onclick="premium()"><br>
    <div class="alert-danger" id="errorEnvio">
                      
    </div>`
    document.getElementById("envios").innerHTML = envios;
}

function tarjetaDeCredito0(){
    var collapse = "";
    collapse += `
                <div class="row mb-3" id="credit0">
                    <button class="btn btn-primary col-12" type="button" data-toggle="collapse" data-target="#collapseCredit0" aria-expanded="false" aria-controls="collapseCredit0">
                      Tarjeta de crédito
                    </button>
                </div>

                <div class="collapse" id="collapseCredit0">
                    <div class="row mb-3">
                        <div class="input-group">
                            <div class="input-group-prepend">
                                <span class="input-group-text" id="basic-addon1">Nombre del titular</span>
                            </div> 
                            <input type="text" class="form-control" placeholder="Nombre del titular" aria-label="Número" aria-describedby="basic-addon1">
                        </div>
                    </div>
                    <div class="row mb-3">
                        <div class="input-group">
                            <div class="input-group-prepend">
                                <span class="input-group-text" id="basic-addon2">Número de la tarjeta</span>
                            </div> 
                            <input type="text" class="form-control" placeholder="xxxx-xxxx-xxxx-xxxx" aria-label="Número" aria-describedby="basic-addon2">
                        </div>
                    </div>
                    <div class="row mb-3">
                        <div class="input-group">
                            <div class="input-group-prepend">
                                <span class="input-group-text" id="basic-addon3">Fecha de expiración</span>
                            </div> 
                            <input type="date" class="form-control" aria-label="Número" aria-describedby="basic-addon3">
                        </div>
                    </div>
                    <div class="row mb-3">
                        <div class="input-group">
                            <div class="input-group-prepend">
                                <span class="input-group-text" id="basic-addon4">Código</span>
                            </div> 
                            <input type="text" class="form-control" placeholder="Código" aria-label="Número" aria-describedby="basic-addon4">
                        </div>
                    </div>
                </div>
    `
    document.getElementById("divCredit0").innerHTML = collapse;
    document.getElementById("divBank0").innerHTML = "";
}

function transferenciaBancaria0(){
    var collapse = "";
    collapse += `
                <div class="row mb-3" id="bank0">
                    <button class="btn btn-success col-12" type="button" data-toggle="collapse" data-target="#collapseBank0" aria-expanded="false" aria-controls="collapseBank0">
                        Transferencia bancaria
                    </button>
                </div>

                <div class="collapse" id="collapseBank0">
                    <div class="row mb-3">
                        <div class="input-group">
                            <div class="input-group-prepend">
                                <span class="input-group-text" id="basic-addon5">Número de cuenta</span>
                            </div> 
                            <input type="text" class="form-control" placeholder="Número de cuenta" aria-label="Número" aria-describedby="basic-addon5">
                        </div>
                    </div>
                </div>
    `
    document.getElementById("divCredit0").innerHTML = "";
    document.getElementById("divBank0").innerHTML = collapse;
}

function tarjetaDeCredito1(){
    var collapse = "";
    collapse += `
                <div class="row mb-3" id="credit1">
                    <button class="btn btn-primary col-12" type="button" data-toggle="collapse" data-target="#collapseCredit1" aria-expanded="false" aria-controls="collapseCredit1">
                      Tarjeta de crédito
                    </button>
                </div>

                <div class="collapse" id="collapseCredit1">
                    <div class="row mb-3">
                        <div class="input-group">
                            <div class="input-group-prepend">
                                <span class="input-group-text" id="basic-addon10">Nombre del titular</span>
                            </div> 
                            <input type="text" class="form-control" placeholder="Nombre del titular" aria-label="Número" aria-describedby="basic-addon10">
                        </div>
                    </div>
                    <div class="row mb-3">
                        <div class="input-group">
                            <div class="input-group-prepend">
                                <span class="input-group-text" id="basic-addon11">Número de la tarjeta</span>
                            </div> 
                            <input type="text" class="form-control" placeholder="xxxx-xxxx-xxxx-xxxx" aria-label="Número" aria-describedby="basic-addon11">
                        </div>
                    </div>
                    <div class="row mb-3">
                        <div class="input-group">
                            <div class="input-group-prepend">
                                <span class="input-group-text" id="basic-addon12">Fecha de expiración</span>
                            </div> 
                            <input type="date" class="form-control" aria-label="Número" aria-describedby="basic-addon12">
                        </div>
                    </div>
                    <div class="row mb-3">
                        <div class="input-group">
                            <div class="input-group-prepend">
                                <span class="input-group-text" id="basic-addon13">Código</span>
                            </div> 
                            <input type="text" class="form-control" placeholder="Código" aria-label="Número" aria-describedby="basic-addon13">
                        </div>
                    </div>
                </div>
    `
    document.getElementById("divCredit1").innerHTML = collapse;
    document.getElementById("divBank1").innerHTML = "";
}

function transferenciaBancaria1(){
    var collapse = "";
    collapse += `
                <div class="row mb-3" id="bank1">
                    <button class="btn btn-success col-12" type="button" data-toggle="collapse" data-target="#collapseBank1" aria-expanded="false" aria-controls="collapseBank1">
                        Transferencia bancaria
                    </button>
                </div>

                <div class="collapse" id="collapseBank1">
                    <div class="row mb-3">
                        <div class="input-group">
                            <div class="input-group-prepend">
                                <span class="input-group-text" id="basic-addon14">Número de cuenta</span>
                            </div> 
                            <input type="text" class="form-control" placeholder="Número de cuenta" aria-label="Número" aria-describedby="basic-addon14">
                        </div>
                    </div>
                </div>
    `
    document.getElementById("divCredit1").innerHTML = "";
    document.getElementById("divBank1").innerHTML = collapse;
}

// Valida los campos si compro con envío
function validarConEnvio(){
    validarTipoDeEnvio();
    validarCamposDeDireccion();
}

// Valida los radio buttons de tipo de envío
function validarTipoDeEnvio(){
    var tipoEnvio = document.getElementsByName("envio");
    var formValid = false;

    
    for (let i = 0; i < tipoEnvio.length; i++) {
        if (tipoEnvio[i].checked) formValid = true;
        
    }
    if (formValid == false) {
        document.getElementById("hola").innerHTML = "Debe seleccionar un tipo de envío";
        return false;
    }else{
        document.getElementById("hola").innerHTML = "";
        return true;
    }
}

// Valida los campos de direccion 
function validarCamposDeDireccion(){
    var addrElem = document.getElementsByClassName("req");
    var formValid = true;
    for(var i = 0; i < addrElem.length; i++){
        formValid = formValid && addrElem[i].value != "";
    }
    if(formValid == false){
        document.getElementById("3").className = "form-control req is-invalid";
        document.getElementById("4").innerHTML = "Looks bad!";
        document.getElementById("4").className = "invalid-feedback";
        return false;
    }else{
        document.getElementById("3").className = "form-control req is-valid";
        document.getElementById("4").innerHTML = "Looks good!";
        document.getElementById("4").className = "valid-feedback";
        return true;
    }
}

function validarMetodoDePago(){
    
}

//Función que se ejecuta una vez que se haya lanzado el evento de
//que el documento se encuentra cargado, es decir, se encuentran todos los
//elementos HTML presentes.
document.addEventListener("DOMContentLoaded", function(e){
    getJSONData(CART_INFO_URL2).then(function(resultObj){
        if (resultObj.status === "ok")
        {
            product = resultObj.data;
            cartProducts(product);
            sub0(document.getElementById("count0").value);
            sub1(document.getElementById("count1").value);
            subtotal();
        };
    });
});