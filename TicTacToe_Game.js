//This variable keeps track of who's turn it is.
let activePlayer = 'X';
//This array stores an array of moves. We use this to determine win conditions.
let selectedSquares = [];

//This function is for placing an x or 0 in a square.
function placeXor0(squareNumber){
    //This condition ensures a square hasn't be selected already.
    //The .some() method is used to check each element of selectedSquare array to
    //see if it contains  the square number clicked on.
    if (!selectedSquares.some(element => element.includes(squareNumber))) {
        //This variable retrieves the html element id that was clicked.
        let select = document.getElementById(squareNumber);
        //This condition checks who's turn it is.
        if (activePlayer === "X") {
            // If activePlayer is equal to 'X', the x.png is placed in HTML.
            select.style.backgroundImage = 'URL("images/x.png")';
        //Active player may only be 'X' or '0' so, if not 'X' in must be '0'..
        } else {
            //If activePlayer is equal to '0', the o.png is placed in HTML.
            select.style.backgroundImage = 'url("images/o.png")';
        }
        //SquareNumber and activePlayer are concatenated together and added to array.
        selectedSquares.push(squareNumber + activePlayer);
        //This calls a function to check for any win conditions.
        checkWinConditions();
        //This condition is for changing the active player.
        if (activePlayer === 'X') {
            //If active player is 'X' change it to '0'
            activePlayer =  '0';
        //If active player is anything other than 'X'
        } else {
            //Change the activePlayer to 'X'
            activePlayer = 'X'
        }
        //This function plays placement sound.
        Audio('./media/place.mp3');
        //This condition checks to see if it is computers turn.
        if (activePlayer === '0') {
            //This function disable clicking for computer choice.
            disableClick();
            //This function waits 1 second before placing the image
            //and enabling click.
            setTimeout(function() {computersTurn(); }, 1000);
        }
        //Returning true is needed for our computerTurn() function to work.
        return true;
    }

    //This function results in a random square being selected.
    function computersTurn()  {
    //This boolean is needed for your while loop.
    let success = false;
    //this variable stores a random number from (0 to 8).
    let pickAsquare;
        //This condition allows our while loop tok keep
        //trying if a square is selected already.
        while(!success) {
            //A random num between 0 and 8 is selected.
            pickAsquare = String(Math.floor(Math.random() *9 ));
            //If the random number evaluates returns true, the square hasn't been selected yet.
            if(placeXor0(pickAsquare)){
                //Tis line calls the function.
                placeXor0(pickAsquare);
                //This changes our boolean and ends  the loop.
                success = true;
            }
        }
    }
}

