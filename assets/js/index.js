// Espera o DOM carregar para garantir que os elementos existem
document.addEventListener("DOMContentLoaded", function () {
  const images = [
    "./assets/images/homepage/carrosell1.webp",
    "./assets/images/homepage/carrosell2.webp",
    "./assets/images/homepage/carrosell3.webp",
  ];

  let currentIndex = 1;

  const slides = document.querySelectorAll(".slide");
  const dots = document.querySelectorAll(".dot");
  const prevBtn = document.querySelector(".nav.prev");
  const nextBtn = document.querySelector(".nav.next");

  function updateSlides() {
    const leftIndex = (currentIndex - 1 + images.length) % images.length;
    const centerIndex = currentIndex;
    const rightIndex = (currentIndex + 1) % images.length;

    slides[0].src = images[leftIndex];
    slides[1].src = images[centerIndex];
    slides[2].src = images[rightIndex];

    // Atualiza os indicadores
    dots.forEach((dot, i) => {
      dot.classList.toggle("active", i === centerIndex);
    });
  }

  function nextSlide() {
    currentIndex = (currentIndex + 1) % images.length;
    updateSlides();
  }

  function prevSlide() {
    currentIndex = (currentIndex - 1 + images.length) % images.length;
    updateSlides();
  }

  nextBtn.addEventListener("click", nextSlide);
  prevBtn.addEventListener("click", prevSlide);

  dots.forEach((dot, i) => {
    dot.addEventListener("click", () => {
      currentIndex = i;
      updateSlides();
    });
  });

  setInterval(nextSlide, 3000);
  updateSlides();
});
