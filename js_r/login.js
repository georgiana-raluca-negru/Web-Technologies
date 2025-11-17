
function initializeUsers() {
    var promiseFetch = fetch('users.json');
    promiseFetch.then(function (response) {
        if (response.status == '200') {
            return response.json();
        }
        else {
            throw "Error fetching login.json"
        }
    })
        .then(function (users) {
            if (!localStorage.getItem("users")) {
                localStorage.setItem('users', JSON.stringify(users));
            }
        })
        .catch(function (err) {
            alert(err);
        });
}
function checkLogin(username, password) {

    var users = JSON.parse(localStorage.getItem('users'));
    if (users) {
        for (var i = 0; i < users.length; i++) {
            if (users[i].username == username && users[i].password == password) {
                return true;
            }
        }
    }
    return false;
}
document.getElementById('formular').onsubmit = function (event) {
    event.preventDefault();

    var username = document.getElementById('username').value;
    var password = document.getElementById('password').value;

    if (checkLogin(username, password)) {
        alert('Login successful!');
        window.location.href = 'acasa.html';
    }
    else {
        alert('Invalid username or password!');
    }
};
window.onload = function () {
    initializeUsers();
};