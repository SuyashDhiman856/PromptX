document.getElementById('show-register').addEventListener('click', function() {
    document.querySelector('.login-container').style.display = 'none';
    document.getElementById('registration-form').style.display = 'block';
});

document.getElementById('show-login').addEventListener('click', function() {
    document.getElementById('registration-form').style.display = 'none';
    document.querySelector('.login-container').style.display = 'block';
});
document.getElementById('lg_in').addEventListener('click', function(event) {
    event.preventDefault(); // Prevent default form submission

    // Get input values
    let email = document.querySelector('input[type="email"]').value;
    let password = document.querySelector('input[type="password"]').value;

    // Define valid credentials
    const validEmail = "shashankmuz3@gmail.com";
    const validPassword = "7410";

    // Check if credentials match
    if (email === validEmail && password === validPassword) {
        window.location.href = '../Home_Page/index.html'; // Redirect on success
    } else {
        alert("Invalid email or password!"); // Show error message
    }
});