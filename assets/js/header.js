//header === responsivo
function initMenu() {
  const menuToggle = document.querySelector('.menu-toggle');
  const navMenu = document.querySelector('.nav-menu');

  if (menuToggle && navMenu) {
    menuToggle.addEventListener('click', function () {
      navMenu.classList.toggle('active');
    });
  }
  const loginBtn = document.querySelector("#btn-login")
  const userLogin = JSON.parse(localStorage.getItem("loginSession"))

  if (userLogin) {
    loginBtn.textContent = "Sair"
  }
  
  if (loginBtn.textContent.includes("Sair")){
    loginBtn.addEventListener('click',() => {
      localStorage.removeItem("loginSession")
      location.reload()
    })
  }

  const profileBtn = document.querySelector("#profile")

  if (userLogin){
    profileBtn.style.display = "block"
  }else{
    profileBtn.style.display = "none"
  }

}


