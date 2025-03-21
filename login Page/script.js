document.getElementById('show-register').addEventListener('click', function() {
    document.querySelector('.login-container').style.display = 'none';
    document.getElementById('registration-form').style.display = 'block';
});

document.getElementById('show-login').addEventListener('click', function() {
    document.getElementById('registration-form').style.display = 'none';
    document.querySelector('.login-container').style.display = 'block';
});
document.getElementById('lg_in').addEventListener('click', function() {
    window.location.href = '../Home_Page/index.html';
});