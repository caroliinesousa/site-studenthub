import { dadosLogin } from "./dados-login.js"

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

submitForm.addEventListener("click", (e) => {
    e.preventDefault()
    //regex para garantir que nif tem 9 numeros
    if (!/^\d{9}$/.test(nifForm.value)) {
        nifValidation.textContent = "O nif tem de ter 9 digitos"
        return
    }

    if (passwordForm.value !== confirmPasswordForm.value) {
        passwordValidation.textContent = "As passwords têm de ser iguais"
        return
    }

    const user = {
        id: typeForm.value + nifForm.value,
        name: nameForm.value,
        email: emailForm.value,
        password: passwordForm.value
    };

    const listUsers = localStorage.getItem('users');
    const users = listUsers ? JSON.parse(listUsers) : dadosLogin;
    users.push(user)

    localStorage.setItem('users', JSON.stringify(users));

    nameForm.value = ""
    emailForm.value = ""
    nifForm.value = ""
    nifValidation.textContent = ""
    passwordForm.value = ""
    confirmPasswordForm.value = ""
    passwordValidation.textContent = ""

    const enterSec = document.querySelector(".login-form")
    const registerSec = document.querySelector(".register-form")

    enterSec.style.display = "block"
    registerSec.style.display = "none"

})


