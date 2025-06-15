import {dadosLogin} from "./dados-login.js"

const enterSec = document.querySelector(".login-form")
const registerSec = document.querySelector(".register-form")
const btnToRegister = document.querySelector("#btn-goto-register")
const btnToLogin = document.querySelector("#btn-return-login")

btnToRegister.addEventListener("click",() => {
    registerSec.style.display = "block"
    enterSec.style.display = "none"
})

btnToLogin.addEventListener("click",() => {
    enterSec.style.display = "block"
    registerSec.style.display = "none"
})

const emailLogin = document.querySelector("#username")
const passwordLogin = document.querySelector("#password")
const btnLogin = document.querySelector("#btn-login-form")
const usersListString = localStorage.getItem("users")
const usersList = usersListString ? JSON.parse(usersListString): dadosLogin;
const erroLogin = document.querySelector("#erro-login")
//console.log(usersList)

btnLogin.addEventListener("click",(e) => {
    e.preventDefault()
    usersList.forEach(user => {
        if(user.email == emailLogin.value && user.password == passwordLogin.value){
            localStorage.setItem('loginSession',JSON.stringify(user))
            if(user.id.charAt(0)=='a'){
                window.location.href = "./profile.html"
            }else{
                window.location.href = "./dashboard.html"
            }
        }else{
            erroLogin.textContent = "Email ou Senha Incorretos"
        }
    });
})