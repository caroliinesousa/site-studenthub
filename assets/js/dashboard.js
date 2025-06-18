import {dadosLogin} from "./dados-login.js"
// Seleciona o elemento <tbody> da tabela que possui o id "tbody-user"
const tbody = document.querySelector("#tbody-user") 
// Se houver dados no localStorage, converte de string para objeto (JSON)
// Caso contrário, usa os dados importados de "dados-login.js"
const userListString = localStorage.getItem("users")
const userList = userListString ? JSON.parse(userListString):dadosLogin;

// Percorre cada usuário na lista
userList.forEach(user => {
    // Adiciona uma nova linha na tabela com os dados do usuário
    tbody.innerHTML += `
    <tr>
        <td>${user.name}</td>
        <td>${user.id.slice(1)}</td>
        <td>${user.email}</td>
    </tr>
    `
});