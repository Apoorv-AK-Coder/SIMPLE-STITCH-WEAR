// for the header
fetch('./header.html')
    .then((response) => response.text())
    .then((data) => {
        document.querySelector("header").innerHTML = data;
    });

// for the footer

fetch('./footer.html')
    .then((response) => response.text())
    .then((data) => {
        document.querySelector("footer").innerHTML = data;
    });

// for the form in a single position

let btn1 = document.getElementById("myFunction");
let btn2 = document.getElementById("myFunction1");

let x = document.getElementById("sign-up");
let y = document.getElementById("sign-in");

btn1.addEventListener("click", form2)
function form2() {
    if ((x.style.display = "block")) {
        y.style.display = 'none';
        btn1.style.backgroundColor = "#141414";
        btn2.style.backgroundColor = "#537073";
        btn1.style.border = "1px solid white";
        btn2.style.border = "1px solid #537073";
    }
    else {
        x.style.display = 'block';
        btn1.style.backgroundColor = "#141414";
        btn2.style.backgroundColor = "#537073";
        btn1.style.border = "1px solid white";
        btn2.style.border = "1px solid #537073";
    }
}

btn2.addEventListener("click", form1)
function form1() {
    if ((y.style.display = "block")) {
        x.style.display = 'none';
        btn2.style.backgroundColor = "#141414";
        btn1.style.backgroundColor = "#537073";
        btn2.style.border = "1px solid white";
        btn1.style.border = "1px solid #537073";
    }
    else {
        y.style.display = 'block';
        btn2.style.backgroundColor = "#141414";
        btn1.style.backgroundColor = "#537073";
        btn2.style.border = "1px solid white";
        btn1.style.border = "1px solid #537073";
    }
}