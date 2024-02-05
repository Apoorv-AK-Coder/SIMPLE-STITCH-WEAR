import { initializeApp } from "https://www.gstatic.com/firebasejs/10.8.0/firebase-app.js";
import { getDatabase, ref, get } from "https://www.gstatic.com/firebasejs/10.8.0/firebase-database.js";
var firebaseConfig = {
    apiKey: "AIzaSyAV348JSscviViD2GQTfQ-Ej5ywF0zEJBk",
    authDomain: "simple-stitch-wear-49549.firebaseapp.com",
    databaseURL: "https://simple-stitch-wear-49549-default-rtdb.firebaseio.com",
    projectId: "simple-stitch-wear-49549",
    storageBucket: "simple-stitch-wear-49549.appspot.com",
    messagingSenderId: "20554738672",
    appId: "1:20554738672:web:9d3cb92e1fde0039904b35",
    measurementId: "G-N2235GQ1G6"
};

const app = initializeApp(firebaseConfig);
const database = getDatabase(app);

// Reference to the 'Products' node
const productsRef = ref(database, 'Products');

// Fetch products from Firebase using 'get' method
get(productsRef).then((snapshot) => {
    if (snapshot.exists()) {
        const products = snapshot.val();
        displayProductsInCategories(products);
    } else {
        console.log("No data available");
    }
}).catch((error) => {
    console.error("Error fetching data:", error);
});

function displayProductsInCategories(products) {
    for (const categoryKey in products) {
        if (products.hasOwnProperty(categoryKey)) {
            const category = products[categoryKey];
            const categoryDiv = document.getElementById(`products-list${categoryKey.charAt(categoryKey.length - 1)}`);

            if (categoryDiv) {
                // Append category header if not already present
                const existingHeader = categoryDiv.querySelector('h2');
                if (!existingHeader) {
                    const categoryHeader = document.createElement('h2');
                    categoryHeader.textContent = categoryKey;
                    categoryDiv.parentElement.querySelector(".column").appendChild(categoryHeader);
                }

                displayProducts(category, categoryDiv);
            }
        }
    }
}

function displayProducts(products, categoryDiv) {
    for (const productKey in products) {
        if (products.hasOwnProperty(productKey)) {
            const product = products[productKey];
            const productDiv = document.createElement('div');
            productDiv.innerHTML = `
            <div class="column item">
            <img src="${product.img}">
            <h3>${product.name}</h3>
            <!--<p>ID: ${product.id}</p>-->
            <p>${product.desc}</p>
            <h4>Price: ${product.price}</h4>
            <button class="buy">Buy Now <i class="fa-solid fa-cart-shopping"></i></button>
        </div>
            `;
            categoryDiv.appendChild(productDiv);
        }
    }
}



/* <div class="column item">
            <img src="${product.img}">
            <h3>${product.name}</h3>
            <!--<p>ID: ${product.id}</p>-->
            <p>${product.desc}</p>
            <h4>Price: ${product.price}</h4>
            <button class="buy">Buy Now <i class="fa-solid fa-cart-shopping"></i></button>
        </div> */