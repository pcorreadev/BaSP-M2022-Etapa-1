var emailValue = document.getElementById('email').value;


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
        validationsMessage += 'Password length must be more than 8 characters \n';
        return false;
    }
    if ( gotLetters && gotNumbers == false) { 
        setErrorFor(password, 'Password must have letters and numbers');
        validationsMessage += 'Password must have letters and numbers \n';
        return false;
    } else {
        setSuccessFor(password);
        return true;
    } 
}

function completeValidations(){
    return validateEmail(email.value) && passwordfirstVal(password.value);
  }

function loginAlert(event) {
alert (validationsMessage);
event.preventDefault();
submitInfo();
}

function submitInfo(){
if(completeValidations()) {
    fetch('https://basp-m2022-api-rest-server.herokuapp.com/login?email=' +
    email.value + '&password=' + password.value)
    .then(function (response) {
    return response.json();
    })
    .then(function (data) {
    console.log(data);
    var successAlert = data.msg + '\n';
    alert(successAlert);
    })
    .catch(function(error){
    alert(error.msg);
    });
} else {
    alert('Could not find user. \nPlease check again email and password');
}
}

document.getElementById('password').addEventListener('blur', passwordfirstVal);
document.getElementById('email').addEventListener('blur', validateEmail);
// document.getElementById('email').addEventListener('focus', clearAlerts);

var element = document.getElementById('buttonlogin');
element.addEventListener('click', loginAlert);
   

