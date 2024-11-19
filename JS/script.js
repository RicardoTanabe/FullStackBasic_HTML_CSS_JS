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

// Trecho referente aos Slides

let currentSlide = 0;
const slides = document.querySelectorAll('.slide');
let slideInterval = setInterval(nextSlide, 3000)
let timeoutId;

function updateSlidePosition() {
    const slidesContainer = document.querySelector('.slides')
    slidesContainer.style.transition = 'transform 1s ease';
    slidesContainer.style.transform = `translateX(-${currentSlide * 100}%)`;
}

function nextSlide() {
    currentSlide = (currentSlide + 1) % slides.length;
    updateSlidePosition();
}


// Trecho referente aos Slides

// Trecho referente aos Botões
document.addEventListener('DOMContentLoaded', () => {
    const buttonContainer = document.getElementById('button-container');

    function createButton(index) {
        const newButton = document.createElement('button');
        newButton.setAttribute('data-index', index)

        newButton.style.backgroundColor = 'rgba(0, 0, 0, 1)';
        newButton.style.margin = '0px 5px';
        newButton.style.cursor = 'pointer';

        newButton.addEventListener('mouseover', () => {
            newButton.style.backgroundColor = 'rgba(0, 0, 0, 0.5)';
        });

        newButton.addEventListener('mouseout', () => {
            newButton.style.backgroundColor = 'rgba(0, 0, 0, 1)';
        });

        newButton.addEventListener('click', (event) => {
            clearInterval(slideInterval);
            clearTimeout(timeoutId);
            currentSlide = parseInt(event.target.getAttribute('data-index'));
            updateSlidePosition()
            timeoutId = setTimeout(() => {
                slideInterval = setInterval(nextSlide, 3000);
            }, 6000)
        })
        return newButton
    }

    for(let i = 0; i < slides.length; i++) {
        const button = createButton(i);
        buttonContainer.appendChild(button)
    }
})
// Trecho referente aos Botões