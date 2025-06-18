// Espera o DOM carregar para garantir que os elementos existem
document.addEventListener("DOMContentLoaded", function () {
  const images = [
    "./assets/images/homepage/carrosell1.webp",
    "./assets/images/homepage/carrosell2.webp",
    "./assets/images/homepage/carrosell3.webp",
  ];

  // Índice inicial da imagem central no carrossel
  let currentIndex = 1;

  const slides = document.querySelectorAll(".slide");
  const dots = document.querySelectorAll(".dot");
  const prevBtn = document.querySelector(".nav.prev");
  const nextBtn = document.querySelector(".nav.next");

   // Atualiza as imagens e os pontos indicadores com base no índice atual
  function updateSlides() {
    const leftIndex = (currentIndex - 1 + images.length) % images.length;
    const centerIndex = currentIndex;
    const rightIndex = (currentIndex + 1) % images.length;

    slides[0].src = images[leftIndex];
    slides[1].src = images[centerIndex];
    slides[2].src = images[rightIndex];

     // Destaca o ponto (dot) correspondente à imagem central
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
  // Navegação pelos botões "anterior" e "próximo"
  nextBtn.addEventListener("click", nextSlide);
  prevBtn.addEventListener("click", prevSlide);

   // Navegação direta pelos pontos (dots)
  dots.forEach((dot, i) => {
    dot.addEventListener("click", () => {
      currentIndex = i;
      updateSlides();
    });
  });
  // Troca automática de imagem a cada 3 segundos
  setInterval(nextSlide, 3000);

  // Inicializa o carrossel com as imagens corretas
  updateSlides();
});
