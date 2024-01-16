fetch('./header-and-footer/header.html')
.then((response) => response.text())
.then((data) => {
    document.querySelector("header").innerHTML = data;
});


fetch('./header-and-footer/footer.html')
.then((response) => response.text())
.then((data) => {
    document.querySelector("footer").innerHTML = data;
});

document.getElementById("up").addEventListener("click", up)

function up() {}