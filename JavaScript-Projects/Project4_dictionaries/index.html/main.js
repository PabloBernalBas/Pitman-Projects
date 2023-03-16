function my_Dictionary() { //defining the function and giving a name
    var Animal = {  //defining the variable and giving a name an object
        Species:"Dog", //defining KVP
        Color:"Black", //""
        Breed:"Labrador", //""
        Age:5, //""
        Sound:"Bark!" //""
    };
    delete Animal.Breed; //deleting a statement request
    document.getElementById("Dictionary").innerHTML=Animal.Breed; //method to returns and element object, which property matches with the string.
}