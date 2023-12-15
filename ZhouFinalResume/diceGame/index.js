// note: all of the variables are global variables
var die1, die2, dieSum, balance, banner, outcome, die1Name, die2Name, numRolls; // define variables
balance = 0;  // initial value
var die1Image = new Image();
var die2Image = new Image();
var firstPlay = true;
var numberOfRolls = 0;
var numberOfPlays = 0;

function rollDice() {
    die1 = Math.floor(Math.random() * 6) + 1;
    die2 = Math.floor(Math.random() * 6) + 1;
    dieSum = die1 + die2;

    // set the dice images based on the roll
    die1Image = document.querySelectorAll("img")[0];
    die1Name = "images/dice" + die1 + ".png";
    die1Image.setAttribute("src", die1Name);

    die2Image = document.querySelectorAll("img")[1];
    die2Name = "images/dice" + die2 + ".png";
    die2Image.setAttribute("src", die2Name);
}

function whoWon() {
    // in h3 report how much money was won or lost and the balance
    if (dieSum <= 5){
      outcome = "You lose, please pay me " + 5 + " dollars.";
      balance -= 5;
    } else if (dieSum >= 9){
      outcome = "You win, I pay you " + 5 + " dollars.";
      balance += 5;
    } else {
      outcome = "Its a draw, nobody wins or loses.";
    }

    // Report the outcome:
    banner = die1 + " + " + die2 + " is: " + dieSum;
    document.querySelector("h3").innerHTML = banner + "<br>" + outcome;
}

function startGame(){
  numberOfRolls = parseInt(document.getElementById('numberOfRolls').value);
  numberOfPlays = 0;
  playGame();
  document.getElementById('startGameBtn').style.display = 'none';
  document.getElementById('playAgainBtn').style.display = 'inline-block';
}

function playGame() {
  /*for (let i = numberOfPlays; i < numberOfRolls; i++) {
    rollDice();
    whoWon();
    updatedBalance();
    numberOfPlays++;
  }
  if (numberOfPlays >= numberOfRolls) {
    alert("You have reached the number of times you wanted to play!");
  }
}*/
  if (numberOfPlays < numberOfRolls) {
    rollDice();
    whoWon();
    updatedBalance();
    numberOfPlays++;
  } else {
    alert("You have reached the number of times you wanted to play!");
  }
}

function updatedBalance() {
  document.getElementById('balance').textContent = balance;
}



/* word count:
var twit = prompt ("compose your text - your limit is 140 charcters");
alert("you have written " + twit.length = " characters, you have " + (280 - twit.length) + " characters remaining.");
*/

/* how to cut off words for word limit:
var twit = prompt ("compose your text - your limit is 140 charcters");
var twitUnder140 = twit.slice(0,140);
alert(twitUnder140);
*/

/* upper n lower case:
var name = "Polly";
name.toUpperCase();
name = name.toLowerCase();
*/

/* numbers:
+ = add
- = subtract
* = multiply
/ = divide
% = remainder
*/

/*
var kittyAge = prompt ("How old is your kitty?");
var kittyAtTwo = 24;
var kittyAtOne = 15;
var personAge = ((kittyAge - 2) * 4) + kittyAtTwo;
alert("Your kitty is " + personAge + " years old in people years.");
*/

/* Functions, math.floor is rounding:
function walkPooch(minutes) {
  console.log("walkDown");
  console.log("walkLeft");
  console.log("walkright");

  var fetchNumber = Math.floor(minutes / 1.5);

  consolue.log("Throw the ball " + fetchNumber + " times.");

  console.log("Play in the park for " + minutes + ".");
  return minutes % 1.5;
}
var noFetch = walkPooch(10);
*/

/*
function getWidget (money, costPerWidget){
  var numWidget = Math.floor(money/costPerWidget);
  return numWidget;
}
function calcChange (money, costPerWidget){
  var change = money % costPerWidget;
  return change;
}
function buyWidget(availableMoney, cost){
  console.log("We can buy " + getWidget(availableMoney, cost) + " widgets.");
  console.log("Our change is " + calcChange(availableMoney, cost) + " dollars.");
}
buyWidget(15, 2.50);
*/

/* Comparatives:
&& = and
|| = or
! = not
*/

/*
var contactList = ["Emma", "Lucas", "Logan"];
console.log(contactList.length); --> 3
console.log(contactList[0]); --> Emma
contactList.includes("Lucas"); --> true

var nameOnList = prompt ("What is your name?");
if (contactList.includes(nameOnList)) {
  console.log ("So nice to see you again, " + nameOnList);
  contactList.pop();
} else (
  console.log ("So nice to MEET you " + nameOnList);
  contactList.push();
)
*/