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
            Precio: <span class="toto" id="precio`+ i +`" value="` + products.unitCost + `">` + products.unitCost + `</span>  ` + products.currency + `
    </div>
    <div class="col-4 mb-4 text-right">
        Cantidad: <input class="toto" type="number" id="count`+ i +`" value="` + products.count + `" onchange="sub`+i+`(this.value); subtotal(); envioOnChange()" min="1" max="10"> <br>
        <span id="sub`+ i +`" hidden>`+ products.count*products.unitCost +`</span>
    </div>
    `
        document.getElementById("Cproductos").innerHTML = htmlContentToAppend;
    }
}

var monedaPesos = true;
var subtotalEnPesos = 0;
var subtotalEnDolares = 0;
var envioEnPesos = 0;
var envioEnDolares = 0;
var tipoDeEnvio = "";

// Calcula la cantidad*costo del primer producto
function sub0(value){
    var sum = value*document.getElementById("precio0").innerHTML;
    document.getElementById("sub0").innerHTML = sum;
}

// Calcula la cantidad*costo del segundo producto
function sub1(value){
    var sum = value*document.getElementById("precio1").innerHTML;
    document.getElementById("sub1").innerHTML = sum;
}

// Calcula el subtotal y total
function subtotal(){
        var sub0 = Number(document.getElementById("sub0").innerHTML);
        var sub1 = Number(document.getElementById("sub1").innerHTML)*40;
        var subtotalP = sub0 + sub1;
        subtotalEnPesos = subtotalP.toFixed(2);

        var sub3 = Number(document.getElementById("sub0").innerHTML)/40;
        var sub4 = Number(document.getElementById("sub1").innerHTML);
        var subtotalD = sub3 + sub4;
        subtotalEnDolares = subtotalD.toFixed(2)

    if (monedaPesos == true) {
        document.getElementById("subtotal").innerHTML = Number(subtotalEnPesos).toFixed(2);
        document.getElementById("total").innerHTML = Number(Number(subtotalEnPesos) + Number(envioEnPesos)).toFixed(2);
    }
    else {
        document.getElementById("subtotal").innerHTML = subtotalEnDolares;
        document.getElementById("total").innerHTML = Number(Number(subtotalEnDolares) + Number(envioEnDolares)).toFixed(2);
    }
    
}

// Cambia la moneda a pesos uruguayos
function pesos() {
    monedaPesos = true;
    document.getElementById("subtotal").innerHTML = Number(subtotalEnPesos).toFixed(2);
    document.getElementById("envio").innerHTML = Number(envioEnPesos).toFixed(2);
    document.getElementById("total").innerHTML = Number(Number(subtotalEnPesos) + Number(envioEnPesos)).toFixed(2);
    document.getElementById("moneda0").innerHTML = " UYU ";
    document.getElementById("moneda1").innerHTML = " UYU ";
    document.getElementById("moneda2").innerHTML = " UYU ";
    
    
}

// Cambia la moneda a dólares
function dolar() {
    monedaPesos = false
    document.getElementById("subtotal").innerHTML = subtotalEnDolares;
    document.getElementById("envio").innerHTML = Number(envioEnDolares).toFixed(2);
    document.getElementById("total").innerHTML = Number(Number(subtotalEnDolares) + Number(envioEnDolares)).toFixed(2);
    document.getElementById("moneda0").innerHTML = " USD ";
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
    }
    else {
        document.getElementById("total").innerHTML = Number(subtotalEnDolares).toFixed(2);
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
    } 
    else {
        document.getElementById("envio").innerHTML = Number(envioEnDolares).toFixed(2);
        document.getElementById("total").innerHTML = Number(Number(subtotalEnDolares) + Number(envioEnDolares)).toFixed(2);
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
    } 
    else {
        document.getElementById("envio").innerHTML = Number(envioEnDolares).toFixed(2);
        document.getElementById("total").innerHTML = Number(Number(subtotalEnDolares) + Number(envioEnDolares)).toFixed(2);
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
    } 
    else {
        document.getElementById("envio").innerHTML = Number(envioEnDolares).toFixed(2);
        document.getElementById("total").innerHTML = Number(Number(subtotalEnDolares) + Number(envioEnDolares)).toFixed(2);
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

//Función que se ejecuta una vez que se haya lanzado el evento de
//que el documento se encuentra cargado, es decir, se encuentran todos los
//elementos HTML presentes.
document.addEventListener("DOMContentLoaded", function(e){
    getJSONData(CART_INFO_URL2).then(function(resultObj){
        if (resultObj.status === "ok")
        {
            product = resultObj.data;
            cartProducts(product);
            subtotal();
        };
    });
});