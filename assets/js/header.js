//header === responsivo
function initMenu() {
  const menuToggle = document.querySelector('.menu-toggle');
  const navMenu = document.querySelector('.nav-menu');
  // Ativa/desativa a classe 'active' ao clicar no botão de menu (para mostrar ou esconder o menu)
  if (menuToggle && navMenu) {
    menuToggle.addEventListener('click', function () {
      navMenu.classList.toggle('active');
    });
  }

  // Seleciona o botão de login e recupera a sessão do usuário (se houver) do localStorage
  const loginBtn = document.querySelector("#btn-login")
  const userLogin = JSON.parse(localStorage.getItem("loginSession"))

  // Se o usuário estiver logado, muda o texto do botão para "Sair"
  if (userLogin) {
    loginBtn.textContent = "Sair"
  }
  
  if (loginBtn.textContent.includes("Sair")){
    loginBtn.addEventListener('click',() => {
      localStorage.removeItem("loginSession")
      location.reload()
    })
  }

  // Mostra ou oculta o botão de perfil conforme o status de login do usuário
  const profileBtn = document.querySelector("#profile")

  if (userLogin){
    profileBtn.style.display = "block"
  }else{
    profileBtn.style.display = "none"
  }

}

// Destaca a pagina Inicial
function destacarPaginaAtual() {
  const currentPage = window.location.pathname.split("/").pop();
  const links = document.querySelectorAll(".nav-link");

  links.forEach(link => {
    const linkPage = link.getAttribute("href");
    if (linkPage === currentPage) {
      link.classList.add("active");
    }
  });
}

