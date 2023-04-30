alert("aiman khan!");
document.write("<h1>ANSWERS </h1>")
document.write("<h1>QUESTION NO :1 </h1>")
var num = prompt("Enter a positive integer:");
var roundOff = Math.round(num);
var floorVal = Math.floor(num);
var ceilVal = Math.ceil(num);

document.write("Number: " + num + "<br>");
document.write("Round off value: " + roundOff + "<br>");
document.write("Floor value: " + floorVal + "<br>");
document.write("Ceil value: " + ceilVal + "<br>");
document.write("<br>");
document.write("<br>");
////////////question 2////
document.write("<h1>QUESTION NO :2</h1>");
var num = prompt("Enter a negative floating point number:");
var roundOff = Math.round(num);
var floorVal = Math.floor(num);
var ceilVal = Math.ceil(num);
document.write("Number: " + num + "<br>");
document.write("Round off value: " + roundOff + "<br>");
document.write("Floor value: " + floorVal + "<br>");
document.write("Ceil value: " + ceilVal + "<br>");
document.write("<br>");
document.write("<br>");
/////question 3///////////////
document.write("<h1>QUESTION NO :3</h1>");
var num = prompt("Enter a number:");
var absolute = Math.abs(num);
document.write("The absolute value of " + num + " is " + absolute);
document.write("<br>");
document.write("<br>");
/////question 4///////////////
document.write("<h1>QUESTION NO :4</h1>");
var diceValue = Math.floor(Math.random() * 6) + 1;
document.write("The value of the dice is: " + diceValue);
document.write("<br>");
document.write("<br>");
//////question 5/////////////////////
document.write("<h1>QUESTION NO :5</h1>");
var coinToss = Math.floor(Math.random() * 2);

if (coinToss === 0) {
  document.write("The coin landed on heads!");
} else {
  document.write("The coin landed on tails!");
}
///////// question 6/////////////
document.write("<h1>QUESTION NO :6</h1>");
var randomNumber = Math.floor(Math.random() * 100) + 1;
document.write("The random number is: " + randomNumber);
document.write("<br>");
document.write("<br>");
////////questionn 7////////////////
document.write("<h1>QUESTION NO :7</h1>");
var weight = prompt("Enter your weight:");
// Remove any non-numeric characters from the input
weight = weight.replace(/[^\d\.]/g, '');
// Parse the weight as a floating-point number
weight = parseFloat(weight);
// Convert the weight to kilograms if necessary
if (isNaN(weight)) {
  document.write("Invalid input");
} else if (weight <= 0) {
  document.write("Weight must be positive");
} else if (weight > 1000) {
  document.write("Weight too large");
} else if (/\bkgs?\b/i.test(weight)) {
  // Input is in kilograms
  document.write("Your weight is: " + weight.toFixed(2) + " kg");
} else if (/\bkilograms?\b/i.test(weight)) {
  // Input is in kilograms
  document.write("Your weight is: " + weight.toFixed(2) + " kg");
} else {
  // Assume input is in pounds and convert to kilograms
  var kgWeight = weight / 2.2046;
  document.write("Your weight is: " + kgWeight.toFixed(2) + " kg");
}
document.write("<br>");
document.write("<br>");
//////question 8//////////////////
document.write("<h1>QUESTION NO :8</h1>");
// Generate a random integer between 1 and 10
var secretNumber = Math.floor(Math.random() * 10) + 1;
// Ask the user to guess a number between 1 and 10
var userGuess = prompt("Guess a number between 1 and 10:");
// Convert the user's guess to an integer
userGuess = parseInt(userGuess);
// Check if the user's guess matches the secret number
if (userGuess === secretNumber) {
  console.log("Congratulations! You guessed the secret number.");
} else {
  document.write("Sorry, your guess was incorrect. The secret number was " + secretNumber + ".");
}
document.write("<br>");
document.write("<br>");
document.write("<hr>");

alert("“▬▬▬▬▬▬▬▬▬ஜ۩۞۩ஜ▬▬▬▬▬▬▬▬▬”");