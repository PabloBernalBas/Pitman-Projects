//Loop
function Call_Loop() { //defining a function and give it a name
    var Digit = "";  //giving variable a name and value
    var x = 10;  //giving variable a name and value
    while (x > -1) {
        Digit += "<br>" + x;
        x--
    }
    document.getElementById("Call_Loop").innerHTML= Digit;  //return value in browser
}

document.write("<br>") //break for cleaner view
document.write("<br>") //break for cleaner view

//Length
var txt = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";  //giving variable a name and value
var len = txt.length;  //giving variable a name and value
document.write(len)

document.write("<br>") //break for cleaner view

//var 
var Instruments = ["Guitar", "Drums", "Piano", "Bass", "Violin", "Trumpet", "Flute"];  //giving variable a name and array as value
var Content = "";  //giving variable a name and value
var Y; //giving variable a name
function for_Loop() { //defining a function and give it a name
    for (Y = 0; Y < Instruments.length;  Y++) {
        Content += Instruments[Y]+ "<br>";
    }
    document.getElementById("List_of_Instruments").innerHTML = Content;  //return value in browser
}

document.write("<br>") //break for cleaner view

//Array 
function Array_Function () { //defining a function and give it a name
    var Season_Pictures  = []; //giving variable a name and value
    Season_Pictures[0] = "spring"; //giving object inside the array name and value
    Season_Pictures[1] = "summer"; //""
    Season_Pictures[2] = "autumn"; //""
    Season_Pictures[3] = "winter"; //""
    document.getElementById("Array").innerHTML = "In this picture, the season is " + Season_Pictures[1] + ".";  //return value in browser
}

document.write("<br>") //break for cleaner view //break for cleaner view

//constant
function constant_function() { //defining a function and give it a name
    const Musical_Instrument = {type: "violin", brand:"Stradivarius", color:"blue"};
    Musical_Instrument.color = "Oak";
    Musical_Instrument.price = "£15000";
    document.getElementById("Constant").innerHTML = "The cost of the " + Musical_Instrument.type +  " was " + Musical_Instrument.price;  //return value in browser
}

document.write("<br>") //break for cleaner view

//var and let 
var my_name = "Mr Anderson";  //giving variable a name and value
document.write(my_name)
	{
  let my_name = ", AKA 'Neo'.";
	document.write(my_name)
  }

document.write("<br>") //break for cleaner view

//return
function return_function(a, b){ //defining a function and give it a name and variable
    var r;
    a = 5; //giving value to variable
    b = 3; //giving value to variable
    r = a * b;
return(r);
}
let result = return_function();
console.log(result);  //return value in console

document.write("<br>") //break for cleaner view

//object creation
let car = {
    make: "Dodge", //giving properties name and value
    model: "Viper", //""
    year: "2021", //""
    color: "red", //""
description : function() {
    return "The car is a " + this.year + " " + this.color + " " + this.make + " " + this.model + ".";
}
};
document.getElementById("object").innerHTML= car.description();  //return value in browser

document.write("<br>") //break for cleaner view

//break statement
const cars = ["BMW", "Volvo", "Saab", "Ford"]; //giving constant keyword name and array value
let text = ""; 

list: { 
    text += cars[0] + "<br>"; 
    text += cars[1] + "<br>"; 
    break list; 
    text += cars[2] + "<br>"; 
    text += cars[3] + "<br>"; 
    }

document.getElementById("demo").innerHTML = text;  //return value in browser

document.write("<br>") //break for cleaner view

//continue statement
let data = '';

for (let i = 0; i < 10; i++) {
  if (i === 3) {
    continue;
  }
  data = data + i;
}
console.log(data);  //return value in console

document.write("<br>") //break for cleaner view