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
const emailForm = document.querySelector("#email")
const typeForm = document.querySelector("#user-type")
const nifForm = document.querySelector("#user-number")
const nifValidation = document.querySelector("#alert-nif")
const passwordForm = document.querySelector("#new-password")
const confirmPasswordForm = document.querySelector("#confirm-password")
const submitForm = document.querySelector("#submit-register")
const passwordValidation = document.querySelector("#alert-password")

//impede de digitar letras
nifForm.addEventListener("input", function () {
    this.value = this.value.replace(/\D/g, "").slice(0, 9);
});

submitForm.addEventListener("click",(e) => {
    e.preventDefault()
    //regex para garantir que nif tem 9 numeros
    if (!/^\d{9}$/.test(nifForm.value)) {
        nifValidation.textContent = "O nif tem de ter 9 digitos"
    }
    if (passwordForm !== confirmPasswordForm) {
        passwordValidation.textContent = "As passwords têm de ser iguais"
    }
    alert(`
        ${nameForm.value}
        ${emailForm.value}
        ${typeForm.value}${nifForm.value}
        ${passwordForm.value}
        ${confirmPasswordForm.value}
        `)
})

