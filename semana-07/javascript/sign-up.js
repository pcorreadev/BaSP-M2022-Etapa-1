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

    if (lastnameValue === '') {
        validationsMessage += 'Cant be blank \n';
        setErrorFor(lastname2, 'Cant be blank');
        return false;
    }
    if (letterCounter(lastnameValue) < 3 && gotNumbers(lastnameValue) == true) {
        validationsMessage += 'Last name length must be more than 3 characters \n';
        setErrorFor(lastname2, 'Last name length must be more than 3 characters \n');
        return false;
    }
    if (gotNumbers(lastnameValue) == true) {
        setErrorFor(lastname2, 'Last name must not have numbers');
        validationsMessage += 'Last name must not have numbers';
        return false;
    } else {
        setSuccessFor(lastname2);
        return true;
    }
}

function documentValidation(){

    var documentValue = document.getElementById('document2').value;
    if (documentValue === '') {
        validationsMessage += 'Cant be blank \n';
        setErrorFor(document2, 'Cant be blank');
        return false;
    }
    if (documentValue.length < 7 && gotLetters(documentValue) == false) {
        setErrorFor(document2, 'Document length must be more than 7 characters and not letters');
        validationsMessage += 'Document length must be more than 7 characters and not letters \n';
        return false;
    }
    if ((gotNumbers == true && gotLetters == true) || (gotLetters == true)) {
            setErrorFor(document2, 'Must be numbers only');
            validationsMessage += 'Must be numbers only \n';
        return false;
        } else {
            setSuccessFor(document2);
        return true
    } 
}

function dobValidation() {

    var dobValue =document.getElementById('datebirth').value;

    var yearsSubstring = dobValue.substring (6, 10);
    var monthsSubstring = dobValue.substring (0, 1)
    var daysSubstring = dobValue.substring (3, 4)

    if (monthsSubstring > 12  ){
        setErrorFor(datebirth, 'Date must be this format MM/DD/YYYY');
        validationsMessage += 'Date must be this format MM/DD/YYYY \n';
        return false;
    }
    if (dobValue.indexOf ('/') !== 2 && dobValue.indexOf ('/') !== 5){
        setErrorFor(datebirth, 'Date must be this format MM/DD/YYYY');
        validationsMessage += 'Date must be this format MM/DD/YYYY \n';
        return false;
    }
    if (monthsSubstring > 12  ){
        setErrorFor(datebirth, 'Months must be less than 12');
        validationsMessage += 'Months must be less than 12Y \n';
        return false;
    }
    if (yearsSubstring > 2006 ){
        setErrorFor(datebirth, 'Must be older than 16');
        validationsMessage += 'Must be older than 16 \n';
        return false;
    }
    if (dobValue === ''){
        setErrorFor(datebirth, 'Cant be blank');
        validationsMessage += 'Cant be blank \n';
        return false;
    
    }if (gotLetters(yearsSubstring || monthsSubstring || daysSubstring) == true) { 
        setErrorFor(datebirth, 'Must be only numbers');
        validationsMessage += 'Must be only numbers \n';
        return false;

    } else {
        setSuccessFor(datebirth);
        return true;
    }
}


function phoneValidation(){

    var phoneValue = document.getElementById('phone').value;
    if (phoneValue === '') {
        validationsMessage += 'Cant be blank \n';
        setErrorFor(phone, 'Cant be blank');
        return false;
    }
    if (phoneValue.length != 10) {
        setErrorFor(phone, 'Phone length must be  10 numbers');
        validationsMessage += 'Phone length must be 10 numbers \n';
        return false;

    }if (gotLetters(phoneValue) == true) { 
        setErrorFor(phone, 'Phone must be only numbers');
        validationsMessage += 'Phone must be only numbers \n';
        return false;
    } else {
        setSuccessFor(phone);
        return true
    } 
}

function postalcodeValidation(){

    var postalcodeValue = document.getElementById('postalcode2').value;

    if (postalcodeValue === '' ){
        setErrorFor(postalcode2, 'Cant be blank'); 
        validationsMessage += 'Cant be blank \n';
        return false;
    }
    if ((gotNumbers == true && gotLetters == false) && (postalcodeValue.length < 4 && postalcodeValue.length > 5)) {
        setErrorFor(postalcode2, 'Postal code must have from 4 to 5 numbers');
        validationsMessage += 'Postal code must have from 4 to 5 numbers \n';
        return false;
    }
    if (gotLetters(postalcodeValue) == true) { 
        setErrorFor(postalcode2, 'Postal code must be only numbers');
        validationsMessage += 'Postal code must be only numbers \n';
        return false;

    } else {
        setSuccessFor(postalcode2);
        return true
    }
}

function locationValidation(locationValue){

    var locationValue = document.getElementById('location2').value;

        if (locationValue === '' ){
            setErrorFor(location2, 'Cant be blank'); 
            validationsMessage += 'Cant be blank \n';
            return false;
        }
        if (gotNumbers(locationValue) && gotLetters(locationValue) == false) {
            setErrorFor(location2, 'Must have numbers and letters');
            return false;
        }
        if (gotNumbers(locationValue) == false) {
            setErrorFor(location2, 'Must have numbers');
            return false;
        }
        if (letterCounter(locationValue) < 4) {
            setErrorFor(location2, 'Must have more than 3 letters');
            return false;

        } else {
            setSuccessFor(location2);
            return true;
        }
}

function addressValidation(){

    var addressValue = document.getElementById('address').value;

    if (addressValue === '' ){
        setErrorFor(address, 'Cant be blank'); 
        validationsMessage += 'Cant be blank \n';
        return false;
    }
    if (letterCounter(addressValue)< 4 && letterCounter(addressValue) > 0)  {
        setErrorFor(address, 'Must be more than 5 letters');
        validationsMessage += 'Must be more than 5 letters \n';
        return false;
    }
    if (gotLetters(addressValue) && gotNumbers (addressValue) == false) {
        setErrorFor(address, 'Must have numbers and letters');
        validationsMessage += 'Must have numbers and letters \n';
        return false;
    }
    if (addressValue.indexOf(' ') < 2) {
        setErrorFor(address, 'Must be a space between street and number');
        validationsMessage += 'Must be a space between street and number \n';
    
    } else {
        setSuccessFor(address);
        return true;
    }
}

function validateEmail(){

    var emailValue = document.getElementById('email').value;
    var emailMatch = /[a-z0-9]+@[a-z]+\.[a-z]{2,3}/;
    var emailResult = emailMatch.test(emailValue);

    if (emailValue === '') {
        validationsMessage += 'Cant be blank \n';
        setErrorFor(email, 'Cant be blank');
        return false;
    }
    if(emailResult == false){
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
    if ( gotLetters(passwordValue) == false) { 
        setErrorFor(password, 'Password must have letters');
        validationsMessage += 'Password must have letters \n';
        return false;
    } else {
        setSuccessFor(password);
        return true
    } 
}

function repeatpasswordfirstVal(){
    
    var repeatValue = document.getElementById('repeatpassword').value;

    if (repeatValue === '') {
        validationsMessage += 'Cant be blank \n';
        setErrorFor(repeatpassword, 'Cant be blank');
        return false;
    }
    if (repeatValue == password.value){
        setSuccessFor(repeatpassword);
        return true;
    } else {
        setErrorFor(repeatpassword, 'Please write the same password again');
        return false
    } 
}


function completeValidations(){
    return  nameValidation(name2.value) &&
     lastnameValidation(lastname2.value) && documentValidation(document2.value ) && 
     dobValidation(datebirth.value) && phoneValidation(phone.value) &&
     postalcodeValidation(postalcode2.value) && locationValidation(location2.value) && 
     addressValidation(address.value) &&
     validateEmail(email.value) &&  passwordfirstVal(password.value) &&  
     repeatpasswordfirstVal(repeatpassword.value)
  }

function signupAlert(element) {
    if (validationsMessage === ''){
        element.preventDefault();
        submitInfo();

    } else { (alert (validationsMessage));

    }

}

function submitInfo(){
    if(completeValidations()) {
        fetch('https://basp-m2022-api-rest-server.herokuapp.com/signup?email=' +
        email.value + '&password=' + password.value +
        '&name=' + name2.value +
        '&lastName=' + lastname2.value +
        '&dni=' + document2.value +
        '&dob=' + datebirth.value +
        '&phone=' + phone.value +
        '&zip=' + postalcode2.value +
        '&city=' + location2.value +
        '&address=' + address.value +
        '&password=' + password.value +
        '&confirmpassword=' + repeatpassword.value
        )
        .then(function (response) {
        return response.json();
        })
        .then(function (data) {
        console.log(data);
        var success = data.msg + '\n';
        saveStorage();
        alert(success);
        })
        .catch(function (error){
        alert(error.msg);
        });
    } else {
        alert('Please check again errors');
    }
}


function saveStorage(){
        localStorage.setItem('name2', name2.value);
        localStorage.setItem('lastname2', lastname2.value);
        localStorage.setItem('document2', document2.value);
        localStorage.setItem('phone', phone.value);
        localStorage.setItem('datebirth', datebirth.value);
        localStorage.setItem('postalcode2', postalcode2.value);
        localStorage.setItem('location2', location2.value);
        localStorage.setItem('address', address.value);
        localStorage.setItem('email', email.value);
        localStorage.setItem('password', password.value);
        localStorage.setItem('repeatpassword', repeatpassword.value);
}



function readlocalStorage() {
    name2.value = localStorage.getItem('name2');
    lastname2.value = localStorage.getItem('lastname2');
    document2.value = localStorage.getItem('document2');
    phone.value = localStorage.getItem('phone');
    datebirth.value = localStorage.getItem('datebirth');
    postalcode2.value = localStorage.getItem('postalcode2.value');
    location2.value = localStorage.getItem('location2.value');
    address.value = localStorage.getItem('address');
    email.value = localStorage.getItem('email');
    password.value = localStorage.getItem('password');
    repeatpassword.value = localStorage.getItem('repeatpassword');

}


var element = document.getElementById('buttonsignup');
element.addEventListener('click', signupAlert);
element.addEventListener('click', saveStorage);


window.onload = function() {

readlocalStorage();

document.getElementById('name2').addEventListener('blur', nameValidation);
document.getElementById('lastname2').addEventListener('blur', lastnameValidation);
document.getElementById('document2').addEventListener('blur', documentValidation);
document.getElementById('datebirth').addEventListener('blur', dobValidation);
document.getElementById('phone').addEventListener('blur', phoneValidation);
document.getElementById('postalcode2').addEventListener('blur', postalcodeValidation);
document.getElementById('location2').addEventListener('blur', locationValidation);
document.getElementById('address').addEventListener('blur', addressValidation);
document.getElementById('email').addEventListener('blur', validateEmail);
document.getElementById('password').addEventListener('blur', passwordfirstVal);
document.getElementById('repeatpassword').addEventListener('blur', repeatpasswordfirstVal);



}

