import { initializeApp } from "https://www.gstatic.com/firebasejs/10.8.0/firebase-app.js";
import { getDatabase, ref, onValue } from "https://www.gstatic.com/firebasejs/10.8.0/firebase-database.js";
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
const sareeRef = ref(database, 'Products/saree');

var productsListContainer = document.getElementById('products-list1');

// Fetch and display data from Firebase
onValue(sareeRef, function (snapshot) {
  // Clear existing content
  productsListContainer.innerHTML = '';

  // Loop through each product in the snapshot
  snapshot.forEach(function (productSnapshot) {
    var product = productSnapshot.val();

    // Create HTML elements to display product information
    var productElement = document.createElement('div');
    productElement.className = 'column item';

    // Customize this part based on your actual data structure
    productElement.innerHTML = `
            <img src="${product.image}">
            <h3>${product.name}</h3>
            <p class="id">ID: ${product.id}</p>
            <p>${product.description}</p>

            <h4>${product.price}</h4>
            <div class="column d-flex"> 
              <button class="cartbutton">Add To Cart <i class="fa-solid fa-plus"></i></button>
              <button class="buy">Buy Now <i class="fa-solid fa-cart-shopping"></i></button>
            </div>
    `;
    // Append the product element to the container
    productsListContainer.appendChild(productElement);
    // console.log(product);
  });
});


//add to cart function start here



// Add event listener for the "Add to Cart" buttons
document.addEventListener('click', function (event) {
  if (event.target.classList.contains('cartbutton')) {
    // Get the product data
    var productElement = event.target.closest('.item');
    var product = {
      // id: productElement.querySelector('.id').textContent,
      img: productElement.querySelector('img').src,
      name: productElement.querySelector('h3').textContent,
      price: productElement.querySelector('h4').textContent,
      // Add other relevant product data you want to include in the cart
    };
    let cart = [];
    cart = JSON.parse(localStorage.getItem("cart")) ?? []
    // console.log(getCartData)
    // Add the product to the cart
    cart.push(product);

    // Store the cart in localStorage (optional)
    localStorage.setItem('cart', JSON.stringify(cart));

    alert('Item added to cart.');

    // Refresh cart items display
    displayCartItems();
  }
});

// Function to display cart items
function displayCartItems() {
  var cartContainer = document.getElementById('cart-items');
  cartContainer.innerHTML = ''; // Clear previous items

  // Retrieve cart from localStorage
  var storedCart = JSON.parse(localStorage.getItem('cart')) || [];
  console.log(storedCart);
  let totalPrice = [];
  // Display products in the cart
  storedCart.forEach((product) => {
    totalPrice.push(parseInt(product.price));
    // console.log(item, " cartItems items");

    // let id = document.querySelector(".id");
    // id.insertAdjacentHTML(`beforeend`, `
    // <p>${product.id}</p>
    // `)


    let display = document.querySelector(".display");
    display.insertAdjacentHTML(`beforeend`, `
    <div class="flex cartdisplay">
      <div class="cartdisplayleft">
        <img src="${product.img}">
      </div>
      <div class="cartdisplayright">
        <h3>${product.name}</h3>
        <h4>Rs. ${product.price}</h4>
      </div>
    </div>
    `)



    // let img = document.querySelector(".img");
    // img.insertAdjacentHTML(`beforeend`, `
    // <img src="${product.img}">
    // `)

    // let cartItems = document.querySelector(".cartItems");
    // cartItems.insertAdjacentHTML(`beforeend`, `
    //         <p>${product.name}</p>
    // `)

    let cartPrice = document.querySelector(".cartPrice");
    cartPrice.insertAdjacentHTML(`beforeend`, `
      <p class="split">${product.name} <span>${product.price}</span></p>
    `)
  })

  // grandTotal starts here 

  // grandTotal ends here 
  console.log("Total Price Array", totalPrice);
  let grandTotal = totalPrice.reduce((total, price) => price + total, 0);
  console.log("grandTotal", grandTotal);

  let Total = document.querySelector(".grandtotal");
  Total.insertAdjacentHTML(`beforeend`, `
            <hr>
            <h4 class="split">Total Price: <span>${grandTotal}</span></h4>
    `)

}

// Initial display of cart items
displayCartItems();