let users = []
 
const addUser = () => {
    let name = document.getElementById('name').value
    let email = document.getElementById('email').value
    let password = document.getElementById('password').value
 
 if (localStorage.getItem('users') != null){
     user = JSON.parse(localStorage.getItem('users'))
 }
 
 users.push([name, email, password])
 localStorage.setItem('users', JSON.stringify(users))
}
 
const listUser = () => {
    let tbody = document.getElementById('table=linha')
    if (localStorage.getItem('users') = null){
        users = JSON.parse(localStorage.getItem('users'))
        users.forEach(user => {
            tbody.innerHTML += "<tr> <td>"+user[0]+ "</td> <td>"+user[1]+"</td> </tr>"
        });
    }else {
        tbody.innerHTML += "<tr> <td>Vazio</td> <td>Vazio</td> </tr>"
    }
                                                                                                                                                                                                                                                                                                                                                                                              
  tbody.innerHTML += "<tr> <td>"+user[0]+ "</td> <td>"+user[1]+"</td>" + "<td> <button onclick='deleteUser("+ index")'> \u(lFSD1) </td>" + "</tr>"
        });
const deleteUser = (index) =>{
    users = JSON.parse(localStorage.getItem('users'))
    let auxUsers = users.filter((v, i) => i != index)
    localStorage.setItem('users', JSON.stringify(auxUsers))
    document.location.reload(true)
}
