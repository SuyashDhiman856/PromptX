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
        let selectedRole = document.querySelector('input[name="contact"]:checked');
        
        if (!selectedRole) {
            alert("Please select a role before logging in.");
            return;
        }
        
        let role = selectedRole.value;
        
        // Define the redirection paths based on role
        let redirectPaths = {
            "email": "../Home_Page/index.html", // Redirect page for Client
            "phone": "../Renter_Page/index.html", // Redirect page for Renter
            "mail": "../Guide_Page/index.html" // Redirect page for Guide
        };
        
        // Redirect to the appropriate page
        if (redirectPaths[role]) {
            window.location.href = redirectPaths[role];
        } else {
            alert("Invalid selection");
        }
    } else {
        alert("Invalid email or password!"); 
    }
});
