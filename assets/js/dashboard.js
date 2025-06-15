const tbody = document.querySelector("#tbody-user")
const userListString = localStorage.getItem("users")
const userList = JSON.parse(userListString)


userList.forEach(user => {
    tbody.innerHTML += `
    <tr>
        <td>${user.name}</td>
        <td>${user.id.slice(1)}</td>
        <td>${user.email}</td>
    </tr>
    `
});