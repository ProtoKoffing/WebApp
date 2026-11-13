// Select the form
const contactForm = document.getElementById("contactForm");
// Select the input fields
const nameInput = document.getElementById("name");
const emailInput = document.getElementById("email");
const ageInput = document.getElementById("age");
// Select the error message paragraphs
const nameError = document.getElementById("nameError");
const emailError = document.getElementById("emailError");
const ageError = document.getElementById("ageError");
// Select the success message
const successMessage = document.getElementById("successMessage");
// Regular expression for checking email format
const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
// Check whether the name field is empty
function validateName() {

    const nameValue = nameInput.value.trim();

    if (nameValue === "") {
        nameError.textContent = "Please enter your name.";
        return false;
    } else {
        nameError.textContent = "";
        return true;
    }
}
// Check whether the email passed emailpattern test.
function validateEmail() {

    const emailValue = emailInput.value.trim();

    if (emailValue === "") {
        emailError.textContent = "Please enter your email.";
        return false;
    } 
    else if (!emailPattern.test(emailValue)) {
        emailError.textContent = "Please enter a valid email address.";
        return false;
    } 
    else {
        emailError.textContent = "";
        return true;
    }
}
//Checks age for negative numbers or empty fields.
function validateAge(){
    const ageValue = ageInput.value.trim();
    if (ageValue === ""){
        ageError.textContent = "Please enter your age";
        return false;
    }
    else if (isNaN(ageValue) || Number(ageValue) < 1){
        ageError.textContent = "Age must be a number of at least 1"
        return false;
    }
    else{
        ageError.textContent = "";
        return true;
    }
}

// Validate name, age, and email when the user leaves the field
nameInput.addEventListener("blur", validateName);
emailInput.addEventListener("blur", validateEmail);
ageInput.addEventListener("blur", validateAge);

// Checks for form submission, gives a submitted message and resets.
contactForm.addEventListener("submit", function(event) {
    event.preventDefault();
    const validName = validateName();
    const validEmail = validateEmail();
    const validAge = validateAge();
    if (validName && validEmail && validAge) {
        successMessage.textContent = "Form submitted successfully!";
        contactForm.reset();
        nameError.textContent = "";
        emailError.textContent = "";
        ageError.textContent = "";
    }
});
