const title = document.querySelector("#welcome")
const profilePic = document.querySelector("#profile-pic")
const name = document.querySelector("#nome-completo")
const email = document.querySelector("#email")
const nif = document.querySelector("#nif")

const userCobaia = {
    id: "a123456789",
    name: "João Silva",
    email: "joao.silva@example.com",
    password: "123456789"
}

localStorage.setItem("loginSession", JSON.stringify(userCobaia))

const userInfo = JSON.parse(localStorage.getItem("loginSession"))

title.textContent = `${userInfo.name} | ${userInfo.id}`
name.textContent = userInfo.name
email.textContent = userInfo.email
nif.textContent = userInfo.id.slice(1)


async function getGatinhoUrl() {
    const response = await fetch('https://api.thecatapi.com/v1/images/search');
    const data = await response.json();
    return data[0].url;
}

async function getGatinhoUrl() {
    const response = await fetch('https://api.thecatapi.com/v1/images/search');
    const data = await response.json();
    return data[0].url;
}

async function atualizarFotoDePerfil() {
    const url = await getGatinhoUrl();
    profilePic.src = url;
}

// Se quiseres atualizar automaticamente ao carregar a página:
window.addEventListener('load', atualizarFotoDePerfil);
