let products = [{
        "category1":    {   "product1": {
                                "id": 001,
                                "name": "p1",
                                "description": "wear",
                                "price": "₹100",
                                "picture": '<img src="./images/Img-01.jpg">'
                            },
                            "product2": {
                                "id": 002,
                                "name": "p2",
                                "description": "dance",
                                "price": "₹200",
                                "picture": '<img src="./images/Img-01.jpg">'
                            },
                            "product3": {
                                "id": 003,
                                "name": "p3",
                                "description": "ears",
                                "price": "₹300",
                                "picture": '<img src="./images/Img-01.jpg">'
                            },
                            "product4": {
                                "id": 004,
                                "name": "p4",
                                "description": "eye",
                                "price": "₹400",
                                "picture": '<img src="./images/Img-01.jpg">'
                            }
                        },
                        
        "category2":    {   "product1": {
                                "id": 001,
                                "name": "p5",
                                "description": "wear",
                                "price": "500",
                                "picture": '<img src="./images/Img-01.jpg">'
                            },
                            "product2": {
                                "id": 002,
                                "name": "p6",
                                "description": "dance",
                                "price": "600",
                                "picture": '<img src="./images/Img-01.jpg">'
                            },
                            "product3": {
                                "id": 003,
                                "name": "p7",
                                "description": "ears",
                                "price": "700",
                                "picture": '<img src="./images/Img-01.jpg">'
                            },
                            "product4": {
                                "id": 004,
                                "name": "p8",
                                "description": "eye",
                                "price": "800",
                                "picture": '<img src="./images/Img-01.jpg">'
                            }
                        }
}]

// category1 here

let category1Content = Object.keys(products[0].category1).map(productKey => {
    let product = products[0].category1[productKey];
    return `
        <div class="column item">
            ${product.picture}
            <h3>${product.name}</h3>
            <!--<p>ID: ${product.id}</p>-->
            <p>${product.description}</p>
            <h4>Price: ${product.price}</h4>
            <button class="buy">Buy Now <i class="fa-solid fa-cart-shopping"></i></button>
        </div>
    `;
}).join('');


// category1 here

let category2Content = Object.keys(products[0].category2).map(productKey => {
    let product = products[0].category2[productKey];
    return `
        <div class="column item">
            ${product.picture}
            <h3>${product.name}</h3>
            <!--<p>ID: ${product.id}</p>-->
            <p>${product.description}</p>
            <h4>Price: ${product.price}</h4>
            <button class="buy">Buy Now <i class="fa-solid fa-cart-shopping"></i></button>
        </div>
    `;
}).join('');

// Set the HTML content to the element with the id's
// document.getElementById("category1").innerHTML = category1Content;
document.getElementById("category2").innerHTML = category2Content;

console.log(products);