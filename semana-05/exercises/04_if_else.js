// 4a Crear un número aleatorio entre 0 y 1 utilizando la función Math.random(), si el valor es mayor o igual que 0,5
//  mostrar una alerta con el mensaje “Greater than 0,5” y sino un alerta con el mensaje “Lower than 0,5”.

var num1 = Math.random()

if (num1 >= 0.5) {
    alert ('greater than 0.5');
} else {
    alert ('lower than 0.5');
}

// 4b Crear una variable “Age” que contenga un número entero entre 0 y 100 y muestre los siguientes mensajes de alerta:
var age = 80;

if (age <= 2) {
    alert ('Baby');
} else if (age >= 2 && age <= 12) {
    alert ('Kid');
} else if  (age >= 13 && age <= 19) {
    alert ('Teen');
} else if  (age >= 20 && age <= 30) {
    alert ('Adolescent');
} else if  (age >= 31 && age <= 60) {
    alert ('Adult')
} else if  (age >= 61 && age <= 75) {
    alert ('Older adult');
} else {
    alert ('Old');
}

