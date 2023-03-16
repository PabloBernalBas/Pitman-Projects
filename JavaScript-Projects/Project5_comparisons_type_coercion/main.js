document.write(typeof "Word");

document.write("<br>");

document.write(2E310);

document.write("<br>");

document.write(-3E310)

document.write("<br>");

function my_Function() {
    document.getElementById("Test").innerHTML = 0/0;
}

document.write("<br>");

function my_Function1() {
    document.getElementById("Test1").innerHTML = isNaN('Is this True');
}

document.write("<br>");

function my_Function2() {
    document.getElementById("Test2").innerHTML = isNaN('34');
}

document.write("<br>");

document.write(3<10)

document.write("<br>");

document.write(3>10)

document.write("<br>");

console.log(2 + 2);

document.write("<br>");

document.write(5 + "0");

document.write("<br>");

if (x = 5, y = 2) {
    console.log(x < y );
}

document.write("<br>");

document.write(3==4);

x=1
y=1
document.write(x===y);

document.write("<br>");

x=1
y="2"
document.write(x===y);

document.write("<br>");

x=1
y="1"
document.write(x===y);

document.write("<br>");

x=1
y=2
document.write(x===y);

document.write("<br>");

document.write((5 < 10 && 5 > 1));

document.write("<br>");

document.write((5 > 10 && 5 > 1));

document.write("<br>");

document.write((5 > 10 || 5 > 1));

document.write("<br>");

document.write((5 > 10 || 5 < 1));

document.write("<br>");

function not_Function(){
    document.getElementById("Not").innerHTML=!(5>10);
}

document.write("<br>");

function not_Function1(){
    document.getElementById("Not1").innerHTML=!(20>10);
}