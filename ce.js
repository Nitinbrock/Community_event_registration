function validateForm() {
    const name = document.getElementById("name").value.trim();
    const age = parseInt(document.getElementById("age").value);
    const phone = document.getElementById("phone").value.trim();
    const email = document.getElementById("email").value.trim();
    const gender = document.querySelector('input[name="gender"]:checked');
    const event = document.getElementById("event").value;

    if (name === "" || !/^[A-Za-z\s]+$/.test(name)) {
        alert("Please enter a valid name using letters only.");
        return false;
    }

    if (isNaN(age) || age < 18) {
        alert("You must be at least 18 years old.");
        return false;
    }

    if (!/^\d{10}$/.test(phone)) {
        alert("Phone number must be 10 digits.");
        return false;
    }

    const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailPattern.test(email)) {
        alert("Please enter a valid email.");
        return false;
    }

    if (!gender) {
        alert("Please select your gender.");
        return false;
    }

    if (event === "") {
        alert("Please select an event.");
        return false;
    }

    alert("🎉 Registration Successful!");
    return true;
}
