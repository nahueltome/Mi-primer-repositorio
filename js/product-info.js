var product = {};
var comment = [];

function showImagesGallery(array){

    let htmlContentToAppend = "";

    for(let i = 0; i < array.length; i++){
        let imageSrc = array[i];

        htmlContentToAppend += `
        <div class="col-lg-3 col-md-4 col-6">
            <div class="d-block mb-4 h-100">
                <img class="img-fluid img-thumbnail" src="` + imageSrc + `" alt="">
            </div>
        </div>
        `

        document.getElementById("productImagesGallery").innerHTML = htmlContentToAppend;
    }
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
            let relatedProductsHTML = document.getElementById("relatedP");
        
            categoryNameHTML.innerHTML = product.name;
            categoryDescriptionHTML.innerHTML = product.description;
            productCountHTML.innerHTML = product.cost + " " + product.currency;
            productCriteriaHTML.innerHTML = product.soldCount;
            relatedProductsHTML.innerHTML = product.relatedProducts;

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

