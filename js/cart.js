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
    <div id="errorEnvio" style="color: red;">
                      
    </div>`
    document.getElementById("envios").innerHTML = envios;
}

function tarjetaDeCredito0(){
    metodoDePago0 = "Tarjeta";
    document.getElementById("errorPago0").innerHTML = "";
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
                            <input id="nombreDelTitular0" type="text" class="form-control" placeholder="Nombre del titular" aria-label="Número" aria-describedby="basic-addon1">
                        </div><div id="errorNombreDelTitular0" style="color: red;"></div>
                    </div>
                    <div class="row mb-3">
                        <div class="input-group">
                            <div class="input-group-prepend">
                                <span class="input-group-text" id="basic-addon2">Número de la tarjeta</span>
                            </div> 
                            <input id="numeroTarjeta0" type="text" class="form-control" placeholder="xxxx-xxxx-xxxx-xxxx" aria-label="Número" aria-describedby="basic-addon2">
                        </div><div id="errorNumeroTarjeta0" style="color: red;"></div>
                    </div>
                    <div class="row mb-3">
                        <div class="input-group">
                            <div class="input-group-prepend">
                                <span class="input-group-text" id="basic-addon3">Fecha de expiración</span>
                            </div> 
                            <input id="fechaExp0" type="date" class="form-control" aria-label="Número" aria-describedby="basic-addon3">
                        </div><div id="errorFechaExp0" style="color: red;"></div>
                    </div>
                    <div class="row mb-3">
                        <div class="input-group">
                            <div class="input-group-prepend">
                                <span class="input-group-text" id="basic-addon4">Código</span>
                            </div> 
                            <input id="codigo0" type="text" class="form-control" placeholder="Código" aria-label="Número" aria-describedby="basic-addon4">
                        </div><div id="errorCodigo0" style="color: red;"></div>
                    </div>
                </div>
    `
    document.getElementById("divCredit0").innerHTML = collapse;
    document.getElementById("divBank0").innerHTML = "";
}

function transferenciaBancaria0(){
    metodoDePago0 = "Transferencia";
    document.getElementById("errorPago0").innerHTML = "";
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
                                <span class="input-group-text" id="inputCuenta0">Número de cuenta (Cliente)</span>
                            </div> 
                            <input id="cuentaCliente0" type="text" class="form-control" placeholder="Número de cuenta (Cliente)" aria-label="Número" aria-describedby="inputCuenta0">
                        </div><div id="errorCuentaCliente0" style="color: red;"></div>
                    </div>
                    <div class="row mb-3">
                        <div class="input-group">
                            <div class="input-group-prepend">
                                <span class="input-group-text" id="inputCuenta1">Número de cuenta (Vendedor)</span>
                            </div> 
                            <input id="cuentaVendedor0" type="text" class="form-control" placeholder="Número de cuenta (Vendedor)" aria-label="Número" aria-describedby="inputCuenta1">
                        </div><div id="errorCuentaVendedor0" style="color: red;"></div>
                    </div>
                </div>
    `
    document.getElementById("divCredit0").innerHTML = "";
    document.getElementById("divBank0").innerHTML = collapse;
}

function tarjetaDeCredito1(){
    metodoDePago1 = "Tarjeta";
    document.getElementById("errorPago1").innerHTML = "";
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
                            <input id="nombreDelTitular1" type="text" class="form-control" placeholder="Nombre del titular" aria-label="Número" aria-describedby="basic-addon10">
                        </div><div id="errorNombreDelTitular1" style="color: red;"></div>
                    </div>
                    <div class="row mb-3">
                        <div class="input-group">
                            <div class="input-group-prepend">
                                <span class="input-group-text" id="basic-addon11">Número de la tarjeta</span>
                            </div> 
                            <input id="numeroTarjeta1" type="text" class="form-control" placeholder="xxxx-xxxx-xxxx-xxxx" aria-label="Número" aria-describedby="basic-addon11">
                        </div><div id="errorNumeroTarjeta1" style="color: red;"></div>
                    </div>
                    <div class="row mb-3">
                        <div class="input-group">
                            <div class="input-group-prepend">
                                <span class="input-group-text" id="basic-addon12">Fecha de expiración</span>
                            </div> 
                            <input id="fechaExp1" type="date" class="form-control" aria-label="Número" aria-describedby="basic-addon12">
                        </div><div id="errorFechaExp1" style="color: red;"></div>
                    </div>
                    <div class="row mb-3">
                        <div class="input-group">
                            <div class="input-group-prepend">
                                <span class="input-group-text" id="basic-addon13">Código</span>
                            </div> 
                            <input id="codigo1" type="text" class="form-control" placeholder="Código" aria-label="Número" aria-describedby="basic-addon13">
                        </div><div id="errorCodigo1" style="color: red;"></div>
                    </div>
                </div>
    `
    document.getElementById("divCredit1").innerHTML = collapse;
    document.getElementById("divBank1").innerHTML = "";
}

function transferenciaBancaria1(){
    metodoDePago1 = "Transferencia";
    document.getElementById("errorPago1").innerHTML = "";
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
                                <span class="input-group-text" id="inputCuenta2">Número de cuenta (Cliente)</span>
                            </div> 
                            <input id="cuentaCliente1" type="text" class="form-control" placeholder="Número de cuenta (Cliente)" aria-label="Número" aria-describedby="inputCuenta2">
                        </div><div id="errorCuentaCliente1" style="color: red;"></div>
                    </div>
                    <div class="row mb-3">
                        <div class="input-group">
                            <div class="input-group-prepend">
                                <span class="input-group-text" id="inputCuenta3">Número de cuenta (Vendedor)</span>
                            </div> 
                            <input id="cuentaVendedor1" type="text" class="form-control" placeholder="Número de cuenta (Vendedor)" aria-label="Número" aria-describedby="inputCuenta3">
                        </div><div id="errorCuentaVendedor1" style="color: red;"></div>
                    </div>
                </div>
    `
    document.getElementById("divCredit1").innerHTML = "";
    document.getElementById("divBank1").innerHTML = collapse;
}

// Muestro los paises para elegir en un input
function countries(array){
    htmlContentToAppend = "";
    for (let i = 0; i < array.countries.length; i++){
        let paises = array.countries[i];
        htmlContentToAppend += `
            <option id="pais`+paises.id+`" value="`+paises.name+`">`+ paises.name +`</option>
    
        `
        document.getElementById("pais").innerHTML = htmlContentToAppend;
    }
    document.getElementById("pais111").setAttribute("selected", "selected"); // Uruguay como default
}

                    ////////////      Modal Con Envío      ////////////

// Valida los campos si compro con envío
function validarConEnvio(){
    validarTipoDeEnvio();
    validarCamposDeDireccion();
    validarMetodoDePago0();
    if (metodoDePago0 == "Tarjeta"){
        validarCamposDeTarjetaDeCredito0();
    }
    if (metodoDePago0 == "Transferencia"){
        validarCamposDeTransferencia0();
    }
}

var metodoDePago0 = "";
var CamposDeDireccion0 = false;
var CamposDePago0 = false;
var CamposDeEnvio = false;

// Valida los radio buttons de métodos de pago
function validarMetodoDePago0(){
    var metodoDePago = document.getElementsByName("pago");
    var formValid = false;
    for (let i = 0; i < metodoDePago.length; i++) {
        if (metodoDePago[i].checked) formValid = true;
    }
    if (formValid == false) {
        document.getElementById("errorMetodoDePago0").innerHTML = "Debe seleccionar un Método de pago";
    }else{
        document.getElementById("errorMetodoDePago0").innerHTML = "";
    }
}

// Valida los campos de tarjeta de crédito (0)
function validarCamposDeTarjetaDeCredito0(){
    var nombre = document.getElementById("nombreDelTitular0").value;
    var numero = document.getElementById("numeroTarjeta0").value;
    var fecha = document.getElementById("fechaExp0").value;
    var codigo = document.getElementById("codigo0").value;
    if (nombre == "" || nombre == null){
        document.getElementById("errorNombreDelTitular0").innerHTML = "Debe ingresar el Nombre del titular";
        document.getElementById("nombreDelTitular0").className = "form-control is-invalid";
        formValid = true;
    } else {
        document.getElementById("errorNombreDelTitular0").innerHTML = "";
        document.getElementById("nombreDelTitular0").className = "form-control is-valid";
    }
    if (numero == "" || numero == null){
        document.getElementById("errorNumeroTarjeta0").innerHTML = "Debe ingresar el Número de la tarjeta";
        document.getElementById("numeroTarjeta0").className = "form-control is-invalid";
    } else {
        document.getElementById("errorNumeroTarjeta0").innerHTML = "";
        document.getElementById("numeroTarjeta0").className = "form-control is-valid";
    }
    if (fecha == "" || fecha == null){
        document.getElementById("errorFechaExp0").innerHTML = "Debe ingresar la Fecha de expiración";
        document.getElementById("fechaExp0").className = "form-control is-invalid";
    } else {
        document.getElementById("errorFechaExp0").innerHTML = "";
        document.getElementById("fechaExp0").className = "form-control is-valid";
    }
    if (codigo == "" || codigo == null){
        document.getElementById("errorCodigo0").innerHTML = "Debe ingresar el Código de la tarjeta";
        document.getElementById("codigo0").className = "form-control is-invalid";
    } else {
        document.getElementById("errorCodigo0").innerHTML = "";
        document.getElementById("codigo0").className = "form-control is-valid";
    }
    if (nombre == "" || nombre == null || numero == "" || numero == null || fecha == "" || fecha == null || codigo == "" || codigo == null){
        document.getElementById("errorPago0").innerHTML = "Faltan llenar campos de Tarjeta de crédito";
        CamposDePago0 = false;
    } else {
        document.getElementById("errorPago0").innerHTML = "";
        CamposDePago0 = true;
    }
}

// Valida los campos de transferencia (0)
function validarCamposDeTransferencia0(){
    var cuentaCliente = document.getElementById("cuentaCliente0").value;
    var cuentaVendedor = document.getElementById("cuentaVendedor0").value;
    if (cuentaCliente == "" || cuentaCliente == null){
        document.getElementById("errorCuentaCliente0").innerHTML = "Debe ingresar el Número de cuenta (Cliente)";
        document.getElementById("cuentaCliente0").className = "form-control is-invalid";
    } else {
        document.getElementById("errorCuentaCliente0").innerHTML = "";
        document.getElementById("cuentaCliente0").className = "form-control is-valid";
    }
    if (cuentaVendedor == "" || cuentaVendedor == null){
        document.getElementById("errorCuentaVendedor0").innerHTML = "Debe ingresar el Número de cuenta (Vendedor)";
        document.getElementById("cuentaVendedor0").className = "form-control is-invalid";
    } else {
        document.getElementById("errorCuentaVendedor0").innerHTML = "";
        document.getElementById("cuentaVendedor0").className = "form-control is-valid";
    }
    if (cuentaCliente == "" || cuentaCliente == null || cuentaVendedor == "" || cuentaVendedor == null){
        document.getElementById("errorPago0").innerHTML = "Faltan llenar campos de Transferencia bancaria";
        CamposDePago0 = false;
    } else {
        document.getElementById("errorPago0").innerHTML = "";
        CamposDePago0 = true;
    }
}

// Valida los radio buttons de tipo de envío
function validarTipoDeEnvio(){
    var tipoEnvio = document.getElementsByName("envio");
    var formValid = false;
    for (let i = 0; i < tipoEnvio.length; i++) {
        if (tipoEnvio[i].checked) formValid = true;
    }
    if (formValid == false) {
        document.getElementById("errorEnvio").innerHTML = "Debe seleccionar un tipo de envío";
    } else {
        document.getElementById("errorEnvio").innerHTML = "";
        CamposDeEnvio = true;
    }
}

// Valida los campos de direccion 
function validarCamposDeDireccion(){
    var calle = document.getElementById("calle").value;
    var numero = document.getElementById("numeroCasa").value;
    var esquina = document.getElementById("esquina").value;
    document.getElementById("pais").className = "custom-select is-valid"
    if (calle == "" || calle == null){
        document.getElementById("errorCalle").innerHTML = "Debe ingresar una Calle";
        document.getElementById("calle").className = "form-control is-invalid";
    } else {
        document.getElementById("errorCalle").innerHTML = "";
        document.getElementById("calle").className = "form-control is-valid";
    }
    if (numero == "" || numero == null){
        document.getElementById("errorNumeroCasa").innerHTML = "Debe ingresar un Número";
        document.getElementById("numeroCasa").className = "form-control is-invalid";
    } else {
        document.getElementById("errorNumeroCasa").innerHTML = "";
        document.getElementById("numeroCasa").className = "form-control is-valid";
    }
    if (esquina == "" || esquina == null){
        document.getElementById("errorEsquina").innerHTML = "Debe ingresar una Esquina";
        document.getElementById("esquina").className = "form-control is-invalid";
    } else {
        document.getElementById("errorEsquina").innerHTML = "";
        document.getElementById("esquina").className = "form-control is-valid";
    }
    if (calle == "" || calle == null || numero == "" || numero == null || esquina == "" || esquina == null) {
        CamposDeDireccion0 = false;
    } else {
        CamposDeDireccion0 = true;
    }
}

// Vuelve al inicio 
function volverAlInicio(){
    return location.href = "home.html";
}

// Mensaje de éxito al finalizar la compra
function mensajeDeExito0(){
    getJSONData(CART_BUY_URL).then(function(resultObj){
        if (resultObj.status === "ok"){
            mensaje = resultObj.data;

            if (CamposDeDireccion0 == true && CamposDePago0 == true && CamposDeEnvio == true){
                var htmlContentToAppend = "";
                htmlContentToAppend += `
        
                    <div class="modal-dialog modal-lg">
                        <div class="modal-content">
                            <div class="modal-header">
                                <h5 class="modal-title font-weight-bold" id="staticBackdropLabel" style="color: green">¡Gracias!</h5>
                            </div>
                            <div class="modal-body font-weight-bold" style="color: green">
                                `+ mensaje.msg +`
                            </div>
                            <div class="modal-footer">
                                <button type="button" class="btn btn-success" onclick="volverAlInicio()">Volver al inicio</button>
                            </div>
                        </div>
                    </div>
                `
                document.getElementById("staticBackdrop").innerHTML = htmlContentToAppend;
            }
        };
    });
}

                    ////////////      Modal Sin Envío      ////////////

// Valida los campos si compro sin envío
function validarSinEnvio(){
    validarMetodoDePago1();
    if (metodoDePago1 == "Tarjeta"){
        validarCamposDeTarjetaDeCredito1();
    }
    if (metodoDePago1 == "Transferencia"){
        validarCamposDeTransferencia1();
    }
}

var metodoDePago1 = "";
var CamposDePago1 = false;

// Valida los radio buttons de métodos de pago
function validarMetodoDePago1(){
    var metodoDePago = document.getElementsByName("pago1");
    var formValid = false;
    for (let i = 0; i < metodoDePago.length; i++) {
        if (metodoDePago[i].checked) formValid = true;
    }
    if (formValid == false) {
        document.getElementById("errorMetodoDePago1").innerHTML = "Debe seleccionar un Método de pago";
    }else{
        document.getElementById("errorMetodoDePago1").innerHTML = "";
    }
}

// Valida los campos de tarjeta de crédito (1)
function validarCamposDeTarjetaDeCredito1(){
    var nombre = document.getElementById("nombreDelTitular1").value;
    var numero = document.getElementById("numeroTarjeta1").value;
    var fecha = document.getElementById("fechaExp1").value;
    var codigo = document.getElementById("codigo1").value;
    if (nombre == "" || nombre == null){
        document.getElementById("errorNombreDelTitular1").innerHTML = "Debe ingresar el Nombre del titular";
        document.getElementById("nombreDelTitular1").className = "form-control is-invalid";
        formValid = true;
    } else {
        document.getElementById("errorNombreDelTitular1").innerHTML = "";
        document.getElementById("nombreDelTitular1").className = "form-control is-valid";
    }
    if (numero == "" || numero == null){
        document.getElementById("errorNumeroTarjeta1").innerHTML = "Debe ingresar el Número de la tarjeta";
        document.getElementById("numeroTarjeta1").className = "form-control is-invalid";
    } else {
        document.getElementById("errorNumeroTarjeta1").innerHTML = "";
        document.getElementById("numeroTarjeta1").className = "form-control is-valid";
    }
    if (fecha == "" || fecha == null){
        document.getElementById("errorFechaExp1").innerHTML = "Debe ingresar la Fecha de expiración";
        document.getElementById("fechaExp1").className = "form-control is-invalid";
    } else {
        document.getElementById("errorFechaExp1").innerHTML = "";
        document.getElementById("fechaExp1").className = "form-control is-valid";
    }
    if (codigo == "" || codigo == null){
        document.getElementById("errorCodigo1").innerHTML = "Debe ingresar el Código de la tarjeta";
        document.getElementById("codigo1").className = "form-control is-invalid";
    } else {
        document.getElementById("errorCodigo1").innerHTML = "";
        document.getElementById("codigo1").className = "form-control is-valid";
    }
    if (nombre == "" || nombre == null || numero == "" || numero == null || fecha == "" || fecha == null || codigo == "" || codigo == null){
        document.getElementById("errorPago1").innerHTML = "Faltan llenar campos de Tarjeta de crédito";
        CamposDePago1 = false;
    } else {
        document.getElementById("errorPago1").innerHTML = "";
        CamposDePago1 = true;
    }
}

// Valida los campos de transferencia (1)
function validarCamposDeTransferencia1(){
    var cuentaCliente = document.getElementById("cuentaCliente1").value;
    var cuentaVendedor = document.getElementById("cuentaVendedor1").value;
    if (cuentaCliente == "" || cuentaCliente == null){
        document.getElementById("errorCuentaCliente1").innerHTML = "Debe ingresar el Número de cuenta (Cliente)";
        document.getElementById("cuentaCliente1").className = "form-control is-invalid";
    } else {
        document.getElementById("errorCuentaCliente1").innerHTML = "";
        document.getElementById("cuentaCliente1").className = "form-control is-valid";
    }
    if (cuentaVendedor == "" || cuentaVendedor == null){
        document.getElementById("errorCuentaVendedor1").innerHTML = "Debe ingresar el Número de cuenta (Vendedor)";
        document.getElementById("cuentaVendedor1").className = "form-control is-invalid";
    } else {
        document.getElementById("errorCuentaVendedor1").innerHTML = "";
        document.getElementById("cuentaVendedor1").className = "form-control is-valid";
    }
    if (cuentaCliente == "" || cuentaCliente == null || cuentaVendedor == "" || cuentaVendedor == null){
        document.getElementById("errorPago1").innerHTML = "Faltan llenar campos de Transferencia bancaria";
        CamposDePago1 = false;
    } else {
        document.getElementById("errorPago1").innerHTML = "";
        CamposDePago1 = true;
    }
}

// Mensaje de éxito al finalizar la compra
function mensajeDeExito1(){
    getJSONData(CART_BUY_URL).then(function(resultObj){
        if (resultObj.status === "ok"){
            mensaje = resultObj.data;

            if (CamposDePago1 == true){
                var htmlContentToAppend = "";
                htmlContentToAppend += `
        
                    <div class="modal-dialog modal-lg">
                        <div class="modal-content">
                            <div class="modal-header">
                                <h5 class="modal-title font-weight-bold" id="staticBackdropLabel" style="color: green">¡Gracias!</h5>
                            </div>
                            <div class="modal-body font-weight-bold" style="color: green">
                                `+ mensaje.msg +`
                            </div>
                            <div class="modal-footer">
                                <button type="button" class="btn btn-success" onclick="volverAlInicio()">Volver al inicio</button>
                            </div>
                        </div>
                    </div>
                `
                document.getElementById("staticBackdrop1").innerHTML = htmlContentToAppend;
            }
        };
    });
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
    getJSONData(PAISES).then(function(resultObj){
        if (resultObj.status === "ok")
        {
            paises = resultObj.data;
            countries(paises);
        };
    });
});