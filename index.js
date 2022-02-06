// For Dice 1 :-
var diceRoll1 = Math.floor(Math.random()*6) + 1; // 1 to 6
var randomDiceImage = "./images/dice" + diceRoll1 + ".png";  // selecting images from the folder
var image1 = document.querySelectorAll("img")[0];
image1.setAttribute("src", randomDiceImage);


// For Dice 2 :-
var diceRoll2 = Math.floor(Math.random()*6) + 1;
var randomDiceImages = "./images/dice" + diceRoll2 + ".png";
var image2 = document.querySelectorAll("img")[1];
image2.setAttribute("src", randomDiceImages);

if(diceRoll1 > diceRoll2){
    document.querySelector("h1").innerHTML = "Player 1 wins 🥳 🥳 🥳 ";
}
else if (diceRoll2 > diceRoll1){
    document.querySelector("h1").innerHTML = "Player 2 wins 🥳 🥳 🥳 "; 
}

else{
    document.querySelector("h1").innerHTML = "Draw 🧐"
}