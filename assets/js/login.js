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

//login 
const emailLogin = document.querySelector("#username")
<<<<<<< Updated upstream
<<<<<<< Updated upstream
//const passworLogin = document.querySelector("#")
=======
const passworLogin = document.querySelector("#password")
>>>>>>> Stashed changes
=======
const passworLogin = document.querySelector("#password")
>>>>>>> Stashed changes
