//header === responsivo
function inicializarMenu() {
    const menuToggle = document.querySelector('.menu-toggle');
    const navMenu = document.querySelector('.nav-menu');

    if (!menuToggle || !navMenu) return; // Garante que os elementos existem

    menuToggle.addEventListener('click', function() {
        this.classList.toggle('active');
        navMenu.classList.toggle('active');
        document.body.style.overflow = navMenu.classList.contains('active') ? 'hidden' : 'auto';
    });

    document.querySelectorAll('.nav-menu a').forEach(link => {
        link.addEventListener('click', () => {
            navMenu.classList.remove('active');
            menuToggle.classList.remove('active');
            document.body.style.overflow = 'auto';
        });
    });
}
// Espera o DOM carregar para garantir que os elementos existem
document.addEventListener('DOMContentLoaded', inicializarMenu);

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
