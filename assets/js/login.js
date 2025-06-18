import {dadosLogin} from "./dados-login.js"
// Seleciona os elementos das seções de login e registro
const enterSec = document.querySelector(".login-form")
const registerSec = document.querySelector(".register-form")
// Botões para alternar entre login e registro
const btnToRegister = document.querySelector("#btn-goto-register")
const btnToLogin = document.querySelector("#btn-return-login")

// Mostra o formulário de registro e esconde o de login
btnToRegister.addEventListener("click",() => {
    registerSec.style.display = "block"
    enterSec.style.display = "none"
})

// Mostra o formulário de login e esconde o de registro
btnToLogin.addEventListener("click",() => {
    enterSec.style.display = "block"
    registerSec.style.display = "none"
})
// Campos e botões do formulário de login
const emailLogin = document.querySelector("#username")
const passwordLogin = document.querySelector("#password")
const btnLogin = document.querySelector("#btn-login-form")
const usersListString = localStorage.getItem("users")
const usersList = usersListString ? JSON.parse(usersListString): dadosLogin;
const erroLogin = document.querySelector("#erro-login")
//console.log(usersList)
// Evento ao clicar no botão de login
btnLogin.addEventListener("click",(e) => {
    e.preventDefault()
    usersList.forEach(user => {
        if(user.email == emailLogin.value && user.password == passwordLogin.value){
            localStorage.setItem('loginSession',JSON.stringify(user))
            // Redireciona para página conforme tipo de usuário)
            if(user.id.charAt(0)=='a'){
                window.location.href = "./profile.html"
            }else{
                window.location.href = "./dashboard.html"
            }
        }else{
             // Exibe mensagem de erro se login falhar (pode ser sobrescrita por outro loop)
            erroLogin.textContent = "Email ou Senha Incorretos"
        }
    });
})