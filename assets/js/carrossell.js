document.addEventListener("DOMContentLoaded", function () {
  const images = [
    "/assets/images/homepage/carrosell1.webp",
    "/assets/images/homepage/carrosell2.webp",
    "/assets/images/homepage/carrosell3.webp",
  ];
  
  let currentIndex = 1;

  function updateSlides() {
    const left = document.querySelector(".slide.left");
    const center = document.querySelector(".slide.center");
    const right = document.querySelector(".slide.right");

    left.src = images[(currentIndex - 1 + images.length) % images.length];
    center.src = images[currentIndex];
    right.src = images[(currentIndex + 1) % images.length];
  }

  function nextSlide() {
    currentIndex = (currentIndex + 1) % images.length;
    updateSlides();
  }

  setInterval(nextSlide, 3000);
});
