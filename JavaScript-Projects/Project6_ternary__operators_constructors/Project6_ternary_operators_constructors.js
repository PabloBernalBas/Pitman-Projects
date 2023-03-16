var up = document.getElementById('UP');//defining the variables and giving a name and return a method
var greeting; 
var down = document.getElementById('DOWN'); //defining the variables and giving a name and return a method
var greeting; 
    up.innerHTML = "Click on the button, to call nested function.";    
        function fun1(a) { //defining a function and give it a name and value
        function fun2(b) { //defining a function and give it a name and value
            return a + b; //requested a return value
        }
        return fun2; //requested a return value
        }
    function Nested_Function() { //defining a function and give it a name
        down.innerHTML = fun1("This is ")("the result."); //method to returns and element object, which property matches with the string.
        }

document.write("<br>") //making space in between functions to tide it up

function Worker (Name, Age, Sex, Position) {//defining a function and give it a name an Object Array value
    this.Worker_Name = Name; //giving name to keywords inside of the function
    this.Worker_Age = Age; //""
    this.Worker_Sex = Sex; //""
    this.Worker_Position = Position //""
    }
    var worker1 = new Worker ("Juan", 23, "Male", "HR"); //defining keywords and use it as object
    var worker2 = new Worker ("Sara", 32, "Female", "Admin");//""
    var worker3 = new Worker ("Luis", 27, "Male", "Finance");//""
function myFunction() { //defining a function and give it a name
    document.getElementById("New_and_This").innerHTML = "This is " + worker1.Worker_Name + ", " + worker1.Worker_Age + " years old," + " this employee works in " + worker1.Worker_Position + ".";
    //method to returns and element object, which property matches with the string.
}    

document.write("<br>") //making space in between functions to tide it up

function Vote_Function() { //defining a function and give it a name
    var Age, Can_vote; //defining the variables
    Age = document.getElementById("Age").value; //giving a variable a value
    Can_vote = (Age > 17) ? "You can Vote":"You can't Vote"; //defining the variable with a condition
    document.getElementById("Vote").innerHTML = Can_vote + "."; //method to returns and element object, which property matches with the string.
}