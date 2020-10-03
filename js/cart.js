function Product(array){
    let imagenC = "";
    let nombreC = "";
    let precioC = "";
    let products = array;

            imagenC += `
        
                <img src="` + products.articles[0].src + `" height="200">                   
        `
            nombreC += `
        
                ` + products.articles[0].name + `                   
        `
            precioC += `
        
                ` + products.articles[0].unitCost + ` ` + products.articles[0].currency + `                  
        `

        document.getElementById("imagenC").innerHTML = imagenC;
        document.getElementById("nombreC").innerHTML += nombreC;
        document.getElementById("precioC").innerHTML += precioC;
    
}


//Función que se ejecuta una vez que se haya lanzado el evento de
//que el documento se encuentra cargado, es decir, se encuentran todos los
//elementos HTML presentes.
document.addEventListener("DOMContentLoaded", function(e){
    getJSONData(CART_INFO_URL).then(function(resultObj){
        if (resultObj.status === "ok")
        {
            product = resultObj.data;
            Product(product);
        };
    });
});