const form = document.querySelector('.form-contaner')
const password1 = document.getElementById('password');
const password2 = document.getElementById('password-confirm');
const messageContaner = document.querySelector('.message-container');
const message = document.querySelector('.message');

// ==================================================================
// password and password confirm match ------------------------------
// ==================================================================


let isValid = false;
let passMatch = false;

function validateForm () {
    // Using Contraint API
    isValid = form.checkVisibility();

    if (!isValid){
        message.textContent = "Please fill out all fields.";
        message.style.color = "green";
        messageContaner.style.borderColor = "red";  
        return;
    };

    if (password1.value === password2.value){
        passMatch = true;
        
    } else {
        passMatch = false;
        message.textContent = "Passwords are not the same";
        message.style.color = "red";
        messageContaner.style.borderColor = "red";
        password1.style.borderColor = 'red';
        password2.style.borderColor = 'red';
    }

    if (isValid && passMatch){
        message.textContent = "Successfully Registerd";
        message.style.color = "green";
        messageContaner.style.borderColor = "green";
        password1.style.borderColor = 'green';
        password2.style.borderColor = 'green';
    };
};

function storeData () {
    const user = {
        name : form.name.value,
        phone : form.phone.value,
        email : form.email.value,
        website : form.email.value,
        password : form.password.value,
    };
    // we are just printing the data in the console, in real life it can be sent to a server or something like that.
    console.log(user);
};

function passwordMatch (e) {
    e.preventDefault(); 
    validateForm();

    if (isValid && passMatch){
        storeData();
    };
};

// ==================================================================
// all the event listeners ------------------------------------------
// ==================================================================

// Remember that you can not get on-change event listener in the password input
// You have to add the event listener on the from itself.
form.addEventListener('submit', passwordMatch)
