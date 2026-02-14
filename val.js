const slides = document.getElementById("slideContainer");
let slideItems = document.querySelectorAll(".slide");
let index = 0;

// Clone first 3 slides for smooth infinite loop
for (let i = 0; i < 3; i++) {
  slides.appendChild(slideItems[i].cloneNode(true));
}

const totalSlides = document.querySelectorAll(".slide").length;

function nextSlide() {
  index++;
  slides.style.transition = "transform 0.6s ease-in-out";
  slides.style.transform = `translateX(-${index * (100/3)}%)`;

  if (index >= totalSlides - 3) {
    setTimeout(() => {
      slides.style.transition = "none";
      index = 0;
      slides.style.transform = `translateX(0%)`;
    }, 600);
  }
}

setInterval(nextSlide, 2500);

let yes_button = document.getElementById("yes-button");