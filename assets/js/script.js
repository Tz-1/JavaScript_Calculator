var num1, num2, result

function bignum(num1,num2){
    if (num1>num2) {
        result = alert(num1 + " es mayor que " + num2);
    }
        else if (num2>num1){
          result = alert(num2 + " es mayor que " + num1);        
    }       
            else{
               result = alert(num1+ " es igual a " + num2)
    }
}    

function plus(num1, num2) {
    result = num1 + num2;
    return result
}

function subtract(num1, num2) {
    result = num1 - num2;
    return result
}

function multiply(num1, num2) {
    result = num1 * num2;
    return result
}

function divide(num1, num2) {
    if (num2==0) {
        result = alert("No se puede dividir por 0");
    }
    else{
        result = num1 / num2;
        alert("La division de los números " + num1 + " y " + num2 + " es: " +
            result)
    }
    return result;
}

var pls = 0;

while(pls != 1){
    var opt = parseInt(prompt("Selecione que desea hacer: \n1.- Calcular cual número es mayor.\n2.- Sumar.\n3.- Restar.\n4.- Multiplicar\n5.- Dividir\n6.- Mostrar números ingresados\n7.- Salir"))
    switch(opt){
        case 1: 
            num1 = parseFloat(prompt("Ingrese su primer número"))
            num2 = parseFloat(prompt("Ingrese su segundo número"))
            result = bignum(num1,num2)
            break;

        case 2:
            num1 = parseFloat(prompt("Ingrese su primer número"))
            num2 = parseFloat(prompt("Ingrese su segundo número"))
            result = plus(num1,num2)
            alert("La suma de los números " + num1 + " y " + num2 + " es: " +
            result)
            break;  

        case 3:
            num1 = parseFloat(prompt("Ingrese su primer número"))
            num2 = parseFloat(prompt("Ingrese su segundo número"))
            result = subtract(num1,num2)
            alert("La resta de los números " + num1 + " y " + num2 + " es: " +
            result)
            break;

        case 4:
            num1 = parseFloat(prompt("Ingrese su primer número"))
            num2 = parseFloat(prompt("Ingrese su segundo número"))
            result = multiply(num1, num2)
            alert("La multiplicacion de los números " + num1 + " y " + num2 + " es: " +
            result)
            break;

        case 5:
            num1 = parseFloat(prompt("Ingrese su primer número"))
            num2 = parseFloat(prompt("Ingrese su segundo número"))
            result = divide(num1,num2)
            
            break;

        case 6:
            num1 = parseFloat(prompt("Ingrese su primer número"))
            num2 = parseFloat(prompt("Ingrese su segundo número"))
            alert("Los numeros que usted ingreso son " + num1 + " y " + num2)
            break;

        case 7:
            alert("Bye Bye 😊")
            pls = pls +1; 
            break;

        default:
            alert("Eleccion incorrecta. CHAO!") 
            pls = pls +1;     
            break;
    }
}
