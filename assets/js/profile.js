// Seleciona os elementos HTML onde os dados do usuário serão exibidos
const title = document.querySelector("#welcome")
const profilePic = document.querySelector("#profile-pic")
const name = document.querySelector("#nome-completo")
const email = document.querySelector("#email")
const nif = document.querySelector("#nif")


// Recupera os dados do usuário logado a partir do localStorage
const userInfo = JSON.parse(localStorage.getItem("loginSession"))

// Exibe os dados do usuário na interface
title.textContent = `${userInfo.name} | ${userInfo.id}`
name.textContent = userInfo.name
email.textContent = userInfo.email
nif.textContent = userInfo.id.slice(1)

// Função assíncrona que busca uma imagem aleatória de gato na API TheCatAPI
async function getGatinhoUrl() {
    const response = await fetch('https://api.thecatapi.com/v1/images/search');
    const data = await response.json();
    return data[0].url; //a imagem ve num array
}


async function getGatinhoUrl() {
    const response = await fetch('https://api.thecatapi.com/v1/images/search');
    const data = await response.json();
    return data[0].url;
}

// Função que atualiza a imagem de perfil com um "gatinho aleatório"
async function atualizarFotoDePerfil() {
    const url = await getGatinhoUrl();
    profilePic.src = url;
}

 // Atualiza a foto automaticamente ao carregar a página
window.addEventListener('load', atualizarFotoDePerfil);