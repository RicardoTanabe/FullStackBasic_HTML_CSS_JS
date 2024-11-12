document.getElementById("header").innerHTML = fetch('MODEL/header.html')
    .then(response => response.text())
    .then(data => {
        document.getElementById("header").innerHTML = data

        const menuItems = document.querySelectorAll("#header-bottom-menu-layer-1 > li");
        const main = document.querySelector("main");

        menuItems.forEach((item, index) => {
            if (index < menuItems.length - 3) {
                item.addEventListener("mouseenter", () => {
                    main.classList.add("overlay-active");
                });

                item.addEventListener("mouseleave", () => {
                    main.classList.remove("overlay-active");
                });
            }
        })
    });

document.getElementById("footer").innerHTML = fetch('MODEL/footer.html')
    .then(response => response.text())
    .then(data => {
        document.getElementById("footer").innerHTML = data
    });
