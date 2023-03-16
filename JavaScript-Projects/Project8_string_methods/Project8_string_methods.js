function full_Sentence() { //defining a function and give it a name
    var part_1 = "I have " //give variable a value
    var part_2 = "made this "//""
    var part_3 = "function "//""
    var part_4 = "to get all "//""
    var part_5 = "sentence together."//""
    var whole_sentence  = part_1.concat(part_2, part_3, part_4, part_5); //give variable a value of all var parts into 1 var, for a cleaner view.
    document.getElementById("Concatenate").innerHTML = whole_sentence; //return value in browser
}

function slice_Method() { //defining a function and give it a name
    var Sentence = "I have made this function to get all sentence together.";//give variable a value
    var Section = Sentence.slice(17,25);//give variable a value, and call the part of the sentence I want to take to show.
    document.getElementById("Slice").innerHTML = Section; //return value in browser
}

document.write("<br>") //break for cleaner view
//method to change a string into a UpperCase
var Phrase = "I have made this function to get all sentence together."//give variable a value
document.write(Phrase.toUpperCase()); //return value in browser

document.write("<br>") //break for cleaner view
//method to look in a string for a value and returns the position of the first match.
var text = "I have made this function to get all sentence together."//give variable a value
var position = text.search("sentence");//give variable a value
document.getElementById("search").innerHTML = position; //return value in browser

document.write("<br>") //break for cleaner view

function string_Method() { //defining a function and give it a name
    var x = 214;//give variable a value
    document.getElementById("Number_to_String").innerHTML = x.toString(); //return value in browser
}

document.write("<br>") //break for cleaner view

function precision_Method() {  //defining a function and give it a name
    var x = 2145.21655886321189;//give variable a value
    document.getElementById("Precision").innerHTML = x.toPrecision(6); //return value in browser
}

document.write("<br>") //break for cleaner view

var num = 3.547799; //give variable a value
var n = num.toFixed(2); //give variable a value, and call the var num to fixed the decimal
document.getElementById("toFixed").innerHTML = n; //return value in browser

document.write("<br>") //break for cleaner view

var fruits = ["Banana", "Orange", "Apple", "Mango"];//give variable an Array value
var myArray = fruits.valueOf(); //give variable a value, and call the var fruits into myArray var
document.getElementById("valueOf").innerHTML = myArray; //return value in browser
