// LOAD HEADER
fetch('./header.html')
  .then(response => response.text())
  .then(data => {
    document.querySelector("header").innerHTML = data;

    // AFTER HEADER LOADS
    initMenuToggle();
    setActiveMenu();
  });


// LOAD FOOTER
fetch('./footer.html')
  .then(response => response.text())
  .then(data => {
    document.querySelector("footer").innerHTML = data;
  });


// MENU TOGGLE
function initMenuToggle() {
  const b1 = document.getElementById("on");
  const b2 = document.getElementById("off");
  const view = document.getElementById("view");

  b1.addEventListener("click", () => {
    view.style.display = "block";
    b2.style.display = "block";
  });

  b2.addEventListener("click", () => {
    view.style.display = "none";
    b2.style.display = "none";
  });
}


// ACTIVE MENU
function setActiveMenu() {
  const currentPath = window.location.pathname;

  document.querySelectorAll(".navbar ul li a").forEach(link => {
    const href = link.getAttribute("href");

    // HOME
    if (
      href === "/" &&
      (currentPath === "/" || currentPath.endsWith("index.html"))
    ) {
      link.parentElement.classList.add("active");
    }

    // OTHER PAGES
    else if (href !== "/" && currentPath.includes(href)) {
      link.parentElement.classList.add("active");
    }
  });
}
