document.getElementById('registrationForm').addEventListener('submit', function(event) {
    event.preventDefault();

    const firstName = document.getElementById('firstName').value.trim();
    const lastName = document.getElementById('lastName').value.trim();
    const email = document.getElementById('email').value.trim();
    const queryType = document.querySelector('input[name="queryType"]:checked');
    const message = document.getElementById('message').value.trim();
    const consent = document.getElementById('consent').checked;

    let valid = true;

    document.getElementById('firstNameError').style.display = 'none';
    document.getElementById('lastNameError').style.display = 'none';
    document.getElementById('emailError').style.display = 'none';
    document.getElementById('queryTypeError').style.display = 'none';
    document.getElementById('messageError').style.display = 'none';
    document.getElementById('consentError').style.display = 'none';

    if (firstName === '') {
        document.getElementById('firstNameError').style.display = 'block';
        valid = false;
    }

    if (lastName === '') {
        document.getElementById('lastNameError').style.display = 'block';
        valid = false;
    }

    const emailPattern = /^[^\s@]+@[^\s@]+\.(com|org|edu)$/;
if (!emailPattern.test(email)) {
    document.getElementById('emailError').style.display = 'block';
    valid = false;
}

    if (!emailPattern.test(email)) {
        document.getElementById('emailError').style.display = 'block';
        valid = false;
    }

    if (!queryType) {
        document.getElementById('queryTypeError').style.display = 'block';
        valid = false;
    }

    if (message === '') {
        document.getElementById('messageError').style.display = 'block';
        valid = false;
    }

    if (!consent) {
        document.getElementById('consentError').style.display = 'block';
        valid = false;
    }

    if (valid) {
        alert('Form submitted successfully!');
    }
});
