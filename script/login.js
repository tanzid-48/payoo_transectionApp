document.getElementById('btn-login').addEventListener('click', function () {

    // 1. Get input values
    const contactNumber = document.getElementById('input-number').value.trim();
    const pin = document.getElementById('input-pin').value.trim();

    // 2. Basic validation
    if (contactNumber.length !== 11 || isNaN(contactNumber)) {
        alert("Enter valid 11 digit mobile number");
        return;
    }

    if (pin.length !== 4 || isNaN(pin)) {
        alert("Enter valid 4 digit pin");
        return;
    }

    // 3. Saved credentials
    const savedNumber = "01798546510";
    const savedPin = "1234";

    // 4. Match check
    if (contactNumber === savedNumber && pin === savedPin) {
        alert("Login Success");
        window.location.assign('home.html');
    } else {
        alert("Login Failed");
    }
});
