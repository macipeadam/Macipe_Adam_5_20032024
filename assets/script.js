const slides = [
    {
        image: "slide1.jpg",
        tagLine: "Impressions tous formats <span>en boutique et en ligne</span>",
    },
    {
        image: "slide2.jpg",
        tagLine: "Tirages haute définition grand format <span>pour vos bureaux et events</span>",
    },
    {
        image: "slide3.jpg",
        tagLine: "Grand choix de couleurs <span>de CMJN aux pantones</span>",
    },
    {
        image: "slide4.png",
        tagLine: "Autocollants <span>avec découpe laser sur mesure</span>",
    },
];

let position = 0;
const numberSlide = slides.length;

const left = document.querySelector(".arrow_left");
const right = document.querySelector(".arrow_right");

AfficheSlide(position);
createDots();

left.addEventListener("click", function () {
    if (position == 0) {
        position = numberSlide - 1;
    } else {
        position--;
    }
    AfficheSlide(position);
});

right.addEventListener("click", function () {
    if (position == numberSlide - 1) {
        position = 0;
    } else {
        position++;
    }
    AfficheSlide(position);
});

function AfficheSlide(position) {
    let element = slides[position];
    let txt = document.querySelector(".banner-txt");
    let img = document.querySelector(".banner-img");
    img.src = "./assets/images/slideshow/" + element.image;
    txt.innerHTML = element.tagLine;
    updateDot();
}

function createDots() {
    let dots = document.querySelector(".dots");
    for (let i = 0; i < slides.length; i++) {
        const dot = document.createElement("div");
        dot.setAttribute("class", "dot");
        dots.appendChild(dot);
    }
}

function updateDot() {
    const allDot = document.querySelectorAll(".dot");
    for (let i = 0; i < allDot.length; i++) {
        const dot = allDot[i];
        if (i == position) {
            dot.classList.add("dot_selected");
            console.log(dot);
        } else {
            dot.classList.remove("dot_selected");
            console.log(dot);
        }
    }
}
