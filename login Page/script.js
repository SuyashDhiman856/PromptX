document.getElementById('show-register').addEventListener('click', function() {
    document.querySelector('.login-container').style.display = 'none';
    document.getElementById('registration-form').style.display = 'block';
});

document.getElementById('show-login').addEventListener('click', function() {
    document.getElementById('registration-form').style.display = 'none';
    document.querySelector('.login-container').style.display = 'block';
});
document.getElementById('lg_in').addEventListener('click', function(event) {
    event.preventDefault();

    let email = document.querySelector('input[type="email"]').value;
    let password = document.querySelector('input[type="password"]').value;

    const validEmail = "shashankmuz3@gmail.com";
    const validPassword = "7410";

    if (email === validEmail && password === validPassword) {
        window.location.href = '../Home_Page/index.html';
    } else {
        alert("Invalid email or password!"); 
    }
});