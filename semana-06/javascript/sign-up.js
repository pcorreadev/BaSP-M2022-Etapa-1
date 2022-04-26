function setErrorFor(input, message) {
	const validationForm = input.parentElement;
	const paragraphConst = validationForm.querySelector('p');
	validationForm.className = 'validation-form error';
	paragraphConst.innerText = message;
}

function setSuccessFor(input) {
	const validationForm = input.parentElement;
	validationForm.className = 'validation-form success';
}

var validationsMessage = "";


function gotNumbers(str) {
    var gotNumbers = false;
    for (var i = 0; i < str.length; i++) {
        var element = str[i];
        if (!isNaN(element)){
            gotNumbers=true;   
        }
    }
    return gotNumbers;
}

function gotLetters(str) {
    var gotLetters = false;
    for (var i = 0; i < str.length; i++) {
        var element = str[i];
        if (isNaN(element)){
            gotLetters=true;   
        }
    }
    return gotLetters;
}


function letterCounter(str){
    var letterCounter = 0
    for (var i = 0; i < str.length; i++) { 
        var element = str[i]
        if (isNaN(element[i])){
            letterCounter++;
        }
    }
    return letterCounter;
}


function numberCounter(str) {
    var numbersCounter = 0;
    for (var i = 0; i < str.length; i++) { 
        var element = str[i]
        if (!isNaN(element[i])){
            numbersCounter++;
        }
    }
    return numbersCounter;
}


function nameValidation() {
    var nameValue = document.getElementById('name2').value;
    if (nameValue === '') {
        validationsMessage += 'Cant be blank \n';
        setErrorFor(name2, 'Cant be blank');
        return false;
    }
    if (letterCounter(nameValue) < 3 && gotNumbers(nameValue) == true) {
        validationsMessage += 'Name length must be more than 3 characters only letters \n';
        setErrorFor(name2, 'Name length must be more than 3 characters only letters ');
        return false;
    }
    if (gotNumbers(nameValue) == true) {
        setErrorFor(name2, 'Name must not have numbers');
        validationsMessage += 'Name must not have numbers';
        return false;
    } else {
        setSuccessFor(name2);
        return true;
    }
}


function lastnameValidation() {
    var lastnameValue = document.getElementById('lastname2').value;

    if (letterCounter(lastnameValue) < 3 && gotNumbers(lastnameValue) == true) {
        validationsMessage += 'Name length must be more than 3 characters \n';
        setErrorFor(lastname2, 'Name length must be more than 3 characters \n');
        return false;
    }
    if (gotNumbers(lastnameValue) == true) {
        setErrorFor(lastname2, 'Name must not have numbers');
        validationsMessage += 'Name must not have numbers';
        return false;
    } else {
        setSuccessFor(lastame2);
        return true;
    }
}

function documentValidation(){
    var documentValue = document.getElementById('document2').value;

    if (numbercounter(documentValue) < 7 && gotletters(documentValue) == false) {
        setErrorFor(document2, 'Document length must be more than 7 characters and not letters');
        validationsMessage += 'Document length must be more than 7 characters and not letters \n';
        return false;
    }
    if ((gotNumbers == true && gotLetters == true) || (gotletters == true)) {
            setErrorFor(name2, 'Must be numbers only');
            validationsMessage += 'Must be numbers only \n';
        return false;
        } else {
            setSuccessFor(document2);
        return true
    } 
}


function dobValidation(){

    var dobValue =document.getElementById('datebirth').value;

    var yearsSubstring = dobValue.substring (0,3);

    if (yearsSubstring < 2006 ){
        setErrorFor(datebirth, 'Must be older than 16');
        validationsMessage += 'Must be older than 16 \n';
        return false;
    
    } else {
        setSuccessFor(datebirth);
        return true;
    }
}

function phoneValidation(){

    var phoneValue = document.getElementById('phone').value;

    if (numbersCounter(phoneValue).length != 10) {
        setErrorFor(phone, 'Phone length must be  10 numbers');
        validationsMessage += 'Phone length must be 10 numbers \n';
        return false;
    } else if (gotLetters(phoneValue) == true) { 
        setErrorFor(phone, 'Phone must be only numbers');
        validationsMessage += 'Phone must be only numbers \n';
        return false;
    } else {
        setSuccessFor(phone);
        return true
    } 
}

function postalcodeValidation(){

    var postalcodeValue = document.getElementById('postal-code').value;
    if (postcodeValue.length === 0 ){
        setErrorFor(postalcode, 'Cant be blank'); 
        validationsMessage += 'Cant be blank \n';
    }
    if (numbersCounter(postalcodeValue) < 4 && numbersCounter (postalcodeValue) > 5) {
        setErrorFor(postalcode, 'Postal code must have from 4 to 5 numbers');
        validationsMessage += 'Postal code must have from 4 to 5 numbers \n';
        return false;
    }
    if (gotnumbers == false) { 
        setErrorFor(postalcode, 'Postal code must be only numbers');
        validationsMessage += 'Postal code must be only numbers \n';
        return false;

    } else {
        setSuccessFor(postalcode);
        return true
    }
}

function locationValidation(locationValue){

    var locationValue = document.getElementById('location').value;

        if (gotNumbers(locationValue) && gotLetters(locationValue) == false) {
            setErrorFor(location, 'Must have numbers and letters');
        }
        if (letterCounter(locationValue) < 3) {
            setErrorFor(location, 'Must have more than 3 letters');

        } else {
            setSuccessFor(location);
            return true;
        }
    }

function adressValidation(){

    var adressValue = document.getElementById('postal-code').value;

    if (letterCounter(adressValue).length < 5) {
        setErrorFor(adress, 'Must be more than 5 characters');
        validationsMessage += 'Postal code must be only numbers \n';
    }
    if (numberandLetter(adressValue) == true) {
        setErrorFor(adress, 'Must have numbers and letters');
        validationsMessage += 'Postal code must be only numbers \n';
    }
    if (adressValue.indexOf(' ') < 2) {
        setErrorFor(adress, 'Must be a space between street and number');
        validationsMessage += 'Postal code must be only numbers \n';
    
    } else {
        setSuccessFor(location);
        return true;
    }
}

function validateEmail(){
    var emailValue = document.getElementById('email').value;
    var emailMatch = /[a-z0-9]+@[a-z]+\.[a-z]{2,3}/;
    var emailResult = emailMatch.test(emailValue);
    var emailError = false;
    if(emailResult == false){
        emailError = 'Must be a valid email format';
        validationsMessage += 'Must be a valid email format \n';
        return setErrorFor(email, 'Must be a valid email format');
        
    }else{
        setSuccessFor(email);
        return true;
    }  
}


function passwordfirstVal(){
    
    var passwordValue = document.getElementById('password').value;

    if (passwordValue === '') {
        validationsMessage += 'Cant be blank \n';
        setErrorFor(password, 'Cant be blank');
        return false;
    }
    if (passwordValue.length < 8) {
        setErrorFor(password, 'Password length must be more than 8 characters');
        validationsMessage += 'Postal code must be only numbers \n';
        return false;
    }
    if ( gotLetters == false) { 
        setErrorFor(password, 'Password must have letters');
        validationsMessage += 'Password must have letters \n';
        return false;
    } else {
        setSuccessFor(password);
        return true
    } 
}

function repeatpasswordfirstVal(){
    
    var passwordValue = document.getElementById('repeat-password').value;

    if (passwordValue === '') {
        validationsMessage += 'Cant be blank \n';
        setErrorFor(repeatpassword, 'Cant be blank');
        return false;
    }
    if (passwordValue.length < 8) {
        setErrorFor(repeatpassword, 'Password length must be more than 8 characters');
        validationsMessage += 'Password length must be more than 8 character\n';
        return false;
    }
    if ( gotLetters == false) { 
        setErrorFor(repeatpassword, 'Password must have letters');
        validationsMessage += 'Password must have letters \n';
        return false;
    } else {
        setSuccessFor(repeatpassword);
        return true
    } 
}


window.onload = function() {

document.getElementById('name2').addEventListener('blur', nameValidation);



const element = document.getElementById("buttonsignup");
element.addEventListener("click", function() {
    alert (validationsMessage);;
})

// document.getElementById('document2').addEventListener('blur', documentValidation);
// document.getElementById('datebirth').addEventListener('blur', dobValidation);
}
