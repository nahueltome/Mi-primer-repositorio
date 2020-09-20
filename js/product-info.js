var product = {};
var comment = [];

function showImagesGallery(array){

    let htmlContentToAppend = "";
        let imageSrc = array;

        htmlContentToAppend += `
            <div class="carousel-item active" data-interval="3000">
                <img src="` + imageSrc[0] + `" class="d-block w-100" alt="...">
            </div>
            <div class="carousel-item" data-interval="3000">
                <img src="` + imageSrc[1] + `" class="d-block w-100" alt="...">
            </div>
            <div class="carousel-item" data-interval="3000">
                <img src="` + imageSrc[2] + `" class="d-block w-100" alt="...">
            </div>
            <div class="carousel-item" data-interval="3000">
                <img src="` + imageSrc[3] + `" class="d-block w-100" alt="...">
            </div>
            <div class="carousel-item" data-interval="3000">
                <img src="` + imageSrc[4] + `" class="d-block w-100" alt="...">
            </div>
        `
        document.getElementById("productImagesGallery").innerHTML = htmlContentToAppend;
    
}

function showRelatedProducts(array){
    let htmlContentToAppend = "";
            let products = array;
            htmlContentToAppend += `
            
                <div class="row row-cols-4">
                    <div class="col-3 mr-4">
                        <div class="card" style="width: 18rem;">
                            <a href="product-info.html" class="list-group-item list-group-item-action">
                                <img src="` + products[1].imgSrc + `" class="card-img-top" alt="...">
                                <div class="card-body">
                                    <h3 class="card-title" style="font-weight:bold;">` + products[1].cost + ` ` + products[1].currency + `</h3>
                                    <h5 class="card-title">` + products[1].name + `</h5>
                                    <p class="card-text">` + products[1].description + `</p>
                                </div>
                            </a>
                        </div>
                    </div>
                    <div class="col-3 mr-4">
                        <div class="card" style="width: 18rem;">
                            <a href="product-info.html" class="list-group-item list-group-item-action">
                                <img src="` + products[3].imgSrc + `" class="card-img-top" alt="...">
                                <div class="card-body">
                                    <h3 class="card-title" style="font-weight:bold;">` + products[3].cost + ` ` + products[3].currency + `</h3>
                                    <h5 class="card-title">` + products[3].name + `</h5>
                                    <p class="card-text">` + products[3].description + `</p>
                                </div>
                            </a>
                        </div>
                    </div>
                </div>
        `
        document.getElementById("rProducts").innerHTML = htmlContentToAppend;
    
}

function Comentarios(array){

    let htmlContent = "";
    for(let o = 0; o < array.length; o++){
        let comments = array[o];

        htmlContent += `
        <div class="row">
            <div class="col-4">
                <i class="fas fa-user" style="font-size:20px; float: left; width: 26px;"></i><p style="font-size:20px; color: blue">`+ comments.user +`</p>
            </div>
            <div class="col-4">
                <span class="span fa fa-star"></span>
                <span class="span fa fa-star"></span>
                <span class="span fa fa-star"></span>
                <span class="span fa fa-star"></span>
                <span class="span fa fa-star"></span>
                `+ comments.score +`
            </div>
            <div class="col-4 text-right">
                <p style="color:grey;">`+ comments.dateTime +`</p>
            </div>
        </div>
            
        <div class="row">    
            <div class="col-12">
                <p id="cDescripción">`+ comments.description +`</p>
            </div>
        </div>
        
        `
        
        document.getElementById("comments").innerHTML = htmlContent;
    }
}


//Función que se ejecuta una vez que se haya lanzado el evento de
//que el documento se encuentra cargado, es decir, se encuentran todos los
//elementos HTML presentes.
document.addEventListener("DOMContentLoaded", function(e){
    getJSONData(PRODUCT_INFO_URL).then(function(resultObj){
        if (resultObj.status === "ok")
        {
            product = resultObj.data;

            let categoryNameHTML  = document.getElementById("productName");
            let categoryDescriptionHTML = document.getElementById("productDescription");
            let productCountHTML = document.getElementById("pCost");
            let productCriteriaHTML = document.getElementById("pSoldCount");
        
            categoryNameHTML.innerHTML = product.name;
            categoryDescriptionHTML.innerHTML = product.description;
            productCountHTML.innerHTML = product.cost + " " + product.currency;
            productCriteriaHTML.innerHTML = product.soldCount;

            //Muestro las imagenes en forma de galería
            showImagesGallery(product.images);
        }
    });
    getJSONData(PRODUCT_INFO_COMMENTS_URL).then(function(resultObj){
        if (resultObj.status === "ok")
        {
            comment = resultObj.data;
            Comentarios(comment);
        };
    });
    getJSONData(PRODUCTS_URL).then(function(resultObj){
        if (resultObj.status === "ok")
        {
            products = resultObj.data;
            showRelatedProducts(products);
        };
    });
});

function envioComentario(){
    var textarea = document.getElementById("comment").value;
    var parrafo = document.getElementById("ms-success");
    var estrellas = document.getElementById("estrellas").value;
    document.getElementById("error-estrellas").style.display = "none";
    document.getElementById("error-textarea").style.display = "none";

    
    if ((textarea == "") || (estrellas == "")){
        if (textarea == ""){
            document.getElementById("error-textarea").style.display = "block";
            document.getElementById("error-textarea").style.color = "red";
        }
        if(estrellas == ""){
            document.getElementById("error-estrellas").style.display = "block";
            document.getElementById("error-estrellas").style.color = "red";
        }
    }else{
        document.getElementById("error-estrellas").style.display = "none";
        document.getElementById("error-textarea").style.display = "none";
        parrafo.style.display = "block";
        parrafo.style.color = "green";
        sessionStorage.setItem('comment', document.getElementById("comment").value);

        let htmlContentToAppend = `
        <div class="row">
            <div class="col-4">
                <i class="fas fa-user" style="font-size:20px; float: left; width: 26px;"></i><p style="font-size:20px; color: blue">`+ sessionStorage.getItem("user") +`</p>
            </div>
            <div class="col-4">
                <span class="span fa fa-star"></span>
                <span class="span fa fa-star"></span>
                <span class="span fa fa-star"></span>
                <span class="span fa fa-star"></span>
                <span class="span fa fa-star"></span>
            </div>
            <div class="col-4 text-right">
                <p style="color:grey;">`+ comments.dateTime +`</p>
            </div>
        </div>
            
        <div class="row">    
            <div class="col-12">
                <p id="cDescripción">`+ sessionStorage.getItem('comment') +`</p>
            </div>
        </div>
        
        `
        document.getElementById("comments").innerHTML += htmlContentToAppend;
        var estrellas = document.getElementsByClassName("pintar");
        for(let i = 0; i < estrellas.length; i++){
            document.getElementById("estrellas").value = num;
            if(i < num){
                estrellas[i].className = "pintar fa fa-star checked";
            }else{
                estrellas[i].className = "pintar fa fa-star";
            }
        }
    }
}

function pintarEstrellas(num){
    var estrellas = document.getElementsByClassName("pintar");
    for(let i = 0; i < estrellas.length; i++){
        document.getElementById("estrellas").value = num;
        if(i < num){
            estrellas[i].className = "pintar fa fa-star checked";
        }else{
            estrellas[i].className = "pintar fa fa-star";
        }
    }
}

