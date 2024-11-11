document.getElementById("header").innerHTML = fetch('MODEL/header.html')
    .then(response => response.text())
    .then(data => document.getElementById("header").innerHTML = data);

document.getElementById("footer").innerHTML = fetch('MODEL/footer.html')
    .then(response => response.text())
    .then(data => document.getElementById("footer").innerHTML = data);

const menu = document.querySelector("main");
const main = document.querySelector("#main");

menu.addEventListener("mouseenter", () => {
    console.log("Overlay ativado");
    main.classList.add("overlay-active");
});

menu.addEventListener("mouseleave", () => {
    console.log("Overlay desativado");
    main.classList.remove("overlay-active");
});