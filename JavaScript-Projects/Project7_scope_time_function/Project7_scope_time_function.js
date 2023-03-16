//Global variable

var x = "hello"; //defining value to a variable

function global() { //defining a function and give it a name
    console.log(x); //request return value in console
}

global(); // hello

// Local variable

var a = "hello "; //defining a function and give it a name

function local() { //defining a function and give it a name
    let b = "World" //defining value to a variable
    console.log(a + b); //request return value in console, give result
}

local();
console.log(a + b); //request return value in console, error



function Add_var1() { //defining a function and give it a name
	var y = "World"; //maybe should use different variable??
  console.log("Hello " + y); //request return value in console
}
function Add_var2() { //defining a function and give it a name
    console.log(y + "Hello.") //request return value in console
}

Add_var1();//x it is define (example from Scope but using string) It shouldn't work
Add_var2();

//Time of the day Function

function Time_function () {
    var Time = new Date().getHours();
    var Reply;
    if (Time < 12 == Time > 0) { 
        Reply = "It is morning time!"; 
    } 
    else if (Time > 12 == Time < 18) { 
        Reply = "It is the afternoon.";
    }
    else { 
        Reply = "It is evening time.";
    }
    document.getElementById("Time_of_day").innerHTML = Reply;
}

document.write("<br>")

//ID Attribute and onclick

function get_Date() { //defining a function and give it a name
    var currentTime = new Date().getHours(); //defining the variables and giving a name and return a method
    var greeting; 
    if (currentTime < 12) { //if statement
        console.log("Good morning!"); //request return value in console
        document.getElementById("Greeting").innerHTML = "Have a good day."; //return value in browser
    } else if (currentTime < 18) { //else if statement
        console.log("Good afternoon!"); //request return value in console
        document.getElementById("Greeting").innerHTML = "Enjoy your afternoon."; //return value in browser
    } else { //else statement
        console.log("Good evening!");  //request return value in console
        document.getElementById("Greeting").innerHTML = "How was your day?."; //return value in browser
    }
}

//IF and Else 

function checkTime() { //defining a function and give it a name
    var currentTime = new Date().getHours(); //defining the variables and giving a name and return a method
    var greeting; 
    var timeOfDay; 
    if (currentTime < 12) { //if statement
        greeting = "Good morning";
        timeOfDay = "morning";
    } else if (currentTime < 18) { //else if statement
        greeting = "Good afternoon";
        timeOfDay = "afternoon";
    } else { //else statement
        greeting = "Good evening";
        timeOfDay = "evening";
    }
    var image; 
    if(timeOfDay=="morning"){ //if statement
        image = "./photo-1.jpg"
    } else if(timeOfDay=="afternoon"){ //else if statement
        image = "./photo-3.jpg"
    } else { //else statement
        image = "./photo-2.jpg"
    }
    document.getElementById("greeting").innerHTML = greeting; //method to returns and element object, which property matches with the string.
    document.getElementById("image").src = image; //method to returns and element object, which property matches with an image.
}

