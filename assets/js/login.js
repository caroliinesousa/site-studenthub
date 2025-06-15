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

//Register Validation
const nameForm = document.querySelector("#name")
const emailForm = document.querySelector("email")
const typeForm = document.querySelector("#user-type")
const nifForm = document.querySelector("#user-number")
const passworForm = document.querySelector("#new-password")
const confirmPasswordForm = document.querySelector("#confirm-password")

