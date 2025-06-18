import { dadosLogin } from "./dados-login.js"

// Seleciona os campos do formulário de registro
const nameForm = document.querySelector("#name")
const emailForm = document.querySelector("#email")
const typeForm = document.querySelector("#user-type")
const nifForm = document.querySelector("#user-number")
const nifValidation = document.querySelector("#alert-nif")
const passwordForm = document.querySelector("#new-password")
const confirmPasswordForm = document.querySelector("#confirm-password")
const submitForm = document.querySelector("#submit-register")
const passwordValidation = document.querySelector("#alert-password")

// Impede que o usuário digite letras no campo NIF e limita a 9 dígitos
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
    // Validação: Senhas devem ser iguais
    if (passwordForm.value !== confirmPasswordForm.value) {
        passwordValidation.textContent = "As passwords têm de ser iguais"
        return
    }
    // Cria um novo objeto usuário
    const user = {
        id: typeForm.value + nifForm.value,
        name: nameForm.value,
        email: emailForm.value,
        password: passwordForm.value
    };
    // Recupera usuários do localStorage ou dados padrão
    const listUsers = localStorage.getItem('users');
    const users = listUsers ? JSON.parse(listUsers) : dadosLogin;
    users.push(user)

    // Salva a lista atualizada no localStorage
    localStorage.setItem('users', JSON.stringify(users));

    // Limpa os campos do formulário e mensagens de erro
    nameForm.value = ""
    emailForm.value = ""
    nifForm.value = ""
    nifValidation.textContent = ""
    passwordForm.value = ""
    confirmPasswordForm.value = ""
    passwordValidation.textContent = ""

    // Alterna de volta para a tela de login
    const enterSec = document.querySelector(".login-form")
    const registerSec = document.querySelector(".register-form")

    enterSec.style.display = "block"
    registerSec.style.display = "none"

})


