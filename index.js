console.log("Hello");

let api = "https://fakestoreapi.com/products"

async function getApi (url) {
    let response = await fetch(url)
    let data = await response.json()
     console.log(data);

     let carts = ""
     data.forEach(function(element){
        carts += `
        
        <div class="cart">
        
        <div class=" box box1">
            <img src="${element.image}" alt="my-product">
        </div>
    
            <h2>${element.title}</h2>
            <p>${element.description}</p>
            <h3>Rs. ${element.price} <small>Rating: ${element.rating.rate}</small></h3>
            <button>Add to Cart</button>
        </div>        
        `
        document.getElementById("all-carts").innerHTML = carts

     });
}

getApi(api)

