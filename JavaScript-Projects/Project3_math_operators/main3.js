function addition_Function() { //defining an addition function and naming it
    var addition = 2 + 2;      //defining a variable and it value
    document.getElementById("Math").innerHTML = " " + addition;//method to returns and element object, which property matches with the string.
}

function subtraction_Function() { //defining a subtraction function and naming it
    var subtraction = 5 - 2;      //defining a variable and it value
    document.getElementById("Math").innerHTML = " " + subtraction;//method to returns and element object, which property matches with the string.
}

function multiplication() {  //defining a multiplication function and naming it
    var simple_Math = 6 * 8; //defining a variable and it value
    document.getElementById("Math").innerHTML = " " + simple_Math;//method to returns and element object, which property matches with the string.
}

function division() {  //defining a division function and naming it
    var simple_Math = 48 / 6; //defining a variable and it value
    document.getElementById("Math").innerHTML = " " + simple_Math;//method to returns and element object, which property matches with the string.
}

function more_Math() { //defining other function and naming it
    var simple_Math = (1 + 2) * 10 / 2 - 5;  //defining a variable and it value
    document.getElementById("Math").innerHTML = " " + simple_Math;//method to returns and element object, which property matches with the string.
}

function modulus_Operator() { //defining other function and naming it
    var simple_Math = 25 % 6; //defining a variable and it value
    document.getElementById("Math").innerHTML = " " + simple_Math;//method to returns and element object, which property matches with the string.
}

function increment(){  //defining a function and naming it
    var X = 5;         //defining a variable and it value
    X++;               //incrementing value by using an operator
    document.write(X); //method to show variable new value
}

function decrement(){  //defining a function and naming it
    var Y = 5;         //defining a variable and it value
    Y--;               //decrementing value by using an operator
    document.write(Y); //method to show variable new value
}


window.alert(Math.random().toFixed(4) * 100) //request return number randomly every time the page is open or refresh
