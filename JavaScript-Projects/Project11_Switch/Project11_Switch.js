function Team_Function() {
    var Team_Output;
    var Teams = document.getElementById("Team_Input").value;
    var Team_String = " is a great team!";
    switch(Teams) {
        case "Red Bull":
            Team_Output = "Red Bull" + Team_String;
        break;
        case "Mercedes":
            Team_Output = "Mercedes" + Team_String;
        break;
        case "Ferrari":
            Team_Output = "Ferrari" + Team_String;
        break;
        case "McLaren":
            Team_Output = "McLaren" + Team_String;
        break;
        case "Aston Martin":
            Team_Output = "Aston Martin" + Team_String;
        break;
        case "Alpine":
            Team_Output = "Alpine" + Team_String;
        break;
        case "Williams":
            Team_Output = "Williams" + Team_String;
        break;
        case "Alfa Romeo":
            Team_Output = "Alfa Romeo" + Team_String;
        break;
        case "Haas":
            Team_Output = "Haas" + Team_String;
        break;
        case "Toro Rosso":
            Team_Output = "Toro Rosso" + Team_String;
        break;
        default:
        Team_Output = "Enter a name of the F1 Team exactly as written on the list above list.";
        document.getElementById("Formula1").innerHTML = Team_Output;
    }
  console.log(Team_Output)
}