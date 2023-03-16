alert("JS Assignment") //Alert method

var Family = "Sympsons", Dad = "Hommer", Mom = "Marge";//defining variable and giving values
document.write(Mom)//chose as result  one  of the values above

document.write("<br>");//break to make cleaner look

var blues = "I have the blues";//defining variable and giving a string value
document.write('<font color="red"> blue</font>');//using method to give color to the string above

document.write("<br>");//break to make cleaner look

document.write(4*4)//giving value to the expression to result in a value

function myFunction() {
    var sentence = "I am learning";
    sentence += " a lot from this book!";
    document.getElementById("Concatenate").innerHTML = sentence;
}