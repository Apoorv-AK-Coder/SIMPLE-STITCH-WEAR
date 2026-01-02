// async function loadProduct() {
// const url = 'https://real-time-amazon-data.p.rapidapi.com/search?query=Phone&page=1&country=US&sort_by=RELEVANCE&product_condition=ALL&is_prime=false&deals_and_discounts=NONE';
// const options = {
//     method: 'GET',
//     headers: {
//         'x-rapidapi-key': '5d195dd6admsh422786d28075fcdp11de19jsndfe8945b688e',
//         'x-rapidapi-host': 'real-time-amazon-data.p.rapidapi.com'
//     }
// };

//     const res = await fetch(url, options);
//     const json = await res.json();
//     renderProduct(json.data);
// }

// function renderProducts(products) {
//   const container = document.getElementById("productCard");
//   container.innerHTML = "";

//   const validProducts = products.filter(p =>
//     p.product_title &&
//     p.product_title.toLowerCase() !== "sponsored" &&
//     p.product_price &&
//     p.product_photo
//   );

//   validProducts.forEach(p => {
//     container.innerHTML += `
//       <div style="border:1px solid #ddd;padding:12px;font-family:Arial">

//         <img src="${p.product_photo}"
//              style="width:100%;height:200px;object-fit:contain">

//         <h4>${p.product_title}</h4>

//         <p><strong>${p.product_price}</strong></p>

//         ${p.product_star_rating ? `<p>⭐ ${p.product_star_rating}</p>` : ""}

//         <a href="${p.product_url}" target="_blank"
//            style="display:inline-block;margin-top:8px;
//            background:#ff9900;padding:8px 12px;text-decoration:none;color:#000">
//           View on Amazon
//         </a>
//       </div>
//     `;
//   });
// }


// loadProduct();


document.addEventListener("DOMContentLoaded", () => {
    loadProduct();
});

async function loadProduct() {
    const url = 'https://real-time-amazon-data.p.rapidapi.com/search?query=Phone&page=1&country=US&sort_by=RELEVANCE&product_condition=ALL&is_prime=false&deals_and_discounts=NONE';
    const options = {
        method: 'GET',
        headers: {
            'x-rapidapi-key': '5d195dd6admsh422786d28075fcdp11de19jsndfe8945b688e',
            'x-rapidapi-host': 'real-time-amazon-data.p.rapidapi.com'
        }
    };

    try {
        const res = await fetch(url, options);
        const json = await res.json();

        console.log("API DATA:", json); // 🔍 IMPORTANT

        renderProducts(json.data.products);
    } catch (err) {
        console.error(err);
    }
}

function renderProducts(products) {
    const container = document.getElementById("productCard");
    container.innerHTML = "";

    products.forEach(p => {
        if (!p.product_photo || !p.product_price) return; // filter junk

        container.innerHTML += `
        <div class="product">
            <div class="grid grid1">
                <img src="${p.product_photo}">
                <div>
                    <p class="ProductTitle"><b>${p.product_title}</b></p>
                    <div class="pricesec">
                        <p><b>${p.product_price}</b></p>
                        <p>⭐ ${p.product_star_rating ?? "N/A"}</p>
                        </div>
                        <a href="${p.product_url}" target="_blank">
                            <button class="button">View</button>
                            </a><button class="button">+ Add</button>
                </div>
            </div>
        </div>
    `;
    });
}
