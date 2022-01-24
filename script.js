
//initial variables
var counter = 0 ;
var messageEL = document.getElementById('output');
var inputEL = document.getElementById('inputValue');
var RandomNum = RandomNumber();

var Guessbtn = document.getElementsByClassName("OnGuessClick")[0];
Guessbtn.addEventListener('click' , OnGuessClick) ;

var Resetbtn = document.getElementsByClassName("OnResetGame")[0];
Resetbtn.addEventListener('click' , OnResetGame) ;

//Creates a random number one time each the Game (get random number)
function RandomNumber() {
    RandomNum = (Math.random() * 100) + 1;
    RandomNum = Math.floor(RandomNum);
    return RandomNum;
}
//Function to start play game
function OnGuessClick() {
    var Num = parseInt(inputEL.value);// Get value from the user

    if (counter >= 9) {
        counter += 1;
        DispalyUserCounter(counter);
        displayMessage("Game Over , Reset to Replay");
        GameOver();
        return;
    }
    
    if(!Num){
        alert("Please choose the Number")
    }

 if (Num > RandomNum) {
    counter += 1;
    messageEL.style.color="#FFCC00";
    displayMessage("Your Number Is Larger , Try Asmller Number");
    DispalyUserCounter(counter);

}

else if (Num < RandomNum) {
    counter += 1;
    messageEL.style.color="#FFCC00";
    displayMessage(" Your Number Is Smaller , Try larger Number");
    DispalyUserCounter(counter);


}
else if (Num == RandomNum){
    displayMessage("Good Choice , You Win ");
    ChangeGuessbtnAbility(true);
}
}


// Display a hint message
function displayMessage(text) {
    messageEL.innerText = text;
}

// Function to Reset the Game
function OnResetGame() {

    counter = 0;
   DispalyUserCounter(0)
   displayMessage("Result : ");
   ChangeGuessbtnAbility(false);
   inputEL.value = " ";
   RandomNum=RandomNumber();
}

// Game Over Function 
function GameOver() {
    ChangeGuessbtnAbility(true);
    messageEL.style.color="#ff0017";
}

//Number of user attempts
function DispalyUserCounter(counter){
    var Counters = document.getElementById('countNum');
    Counters.innerText = counter;
}

//Change "Guess button "
function ChangeGuessbtnAbility(status) {
    Guessbtn = document.getElementById('Guess');
    Guessbtn.disabled = status;
    if(status==true){
        Guessbtn.style.background="#5D636B";
        Guessbtn.style.color="white";
        messageEL.style.color="#46eb49"
    }else{
        Guessbtn.style.background="#db9b9b";
        Guessbtn.style.color="black";
        messageEL.style.color="white";
 }}













// function to Game teaching 
// (function gameInstructionsrt(){
//     displayMessage(
//        " 1- The computer will choose the password and hide it \n"+
//         "  2- You guess what the number is \n"  +
//         "  3- If your guess is too big or too small, it will give you a hint. \n"  +
//         "  4- The number of roles allowed to win is only 10 times ")
//     })();
   

