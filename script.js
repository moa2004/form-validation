document.getElementById('registrationForm').addEventListener('submit', function(event) {
    event.preventDefault();

    const username = document.getElementById('username').value;
    const email = document.getElementById('email').value;
    const password = document.getElementById('password').value;

    let valid = true;

    document.getElementById('usernameError').style.display = 'none';
    document.getElementById('emailError').style.display = 'none';
    document.getElementById('passwordError').style.display = 'none';

    if (!/^[a-zA-Z0-9]+$/.test(username)) {
        document.getElementById('usernameError').textContent = 'Username must be alphanumeric.';
        document.getElementById('usernameError').style.display = 'block';
        valid = false;
    }

    if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
        document.getElementById('emailError').textContent = 'Invalid email format.';
        document.getElementById('emailError').style.display = 'block';
        valid = false;
    }

    if (password.length < 6 || 
        !/[A-Z]/.test(password) || 
        !/[a-z]/.test(password) || 
        !/[0-9]/.test(password) || 
        !/[!@#$%^&*]/.test(password)) {
        document.getElementById('passwordError').textContent = 'Password must be at least 6 characters long, include uppercase, lowercase, number, and special character.';
        document.getElementById('passwordError').style.display = 'block';
        valid = false;
    }

    if (valid) {
        alert('Form submitted successfully!');
    }
});
