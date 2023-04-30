var a=confirm("welcome to my assigment");
if(a===true){
    alert("welcome")
}
else{
    alert("soory");
}
document.write("<br>")
////////////////////////question1////////////////
let firstName = prompt("Enter your first name:");
let lastName = prompt("Enter your last name:");

let fullName = firstName + " " + lastName;

alert("Hello, " + fullName + "!");
document.write("<br>")
document.write("<br>")
/////////////question  2////////////////////////
document.write("<h1>ANSWERS </h1>");
document.write("<h1>QUESTION NO :2 </h1>");
var favoriteMobile = prompt("What is your favorite mobile phone model?");

var length = favoriteMobile.length;

document.write("The length of your samsung gaaxy mobile phone  mobile phone model is: " + length);
document.write("<br>")
document.write("<br>")

/////////////question 3////////////////
document.write("<h1>QUESTION NO :3 </h1>")
var word = "Pakistani";
var index = word.indexOf("n");

document.write("The index of 'n' in the word 'Pakistani' is: " + index);
document.write("<br>")
document.write("<br>")
///////////////////////question 4///////////////////////
document.write("<h1>QUESTION NO :4 </h1>")
var word = "Hello World";

var lastIndex = word.lastIndexOf("l");

document.write("The last index of 'l' in the word 'Hello World' is: " + lastIndex);
document.write("<br>");
document.write("<br>");

/////////////////////////////question no 5/////////////////////
document.write("<h1>QUESTION NO :5 </h1>")
var world = "Pakistani";

var char = word.charAt(3);

document.write("The character at the 3rd index in the word 'Pakistani' is: " + char);
document.write("<br>");
document.write("<br>");
////////////////question 6/////////////////////////

document.write("<h1>QUESTION NO :6 </h1>")
var firstNme = prompt("Please enter your first name:");
var lastame = prompt("Please enter your last name:");

var fullame = firstName.concat(" ", lastName);

alert("Hello, " + fullName + "!");
document.write("<p>answr show in alert</p>");
document.write("<br>");
document.write("<br>");
////////////////question 7//////////////////////
document.write("<h1>QUESTION NO :7 </h1>");

var word = "Hyderabad";
var newWord = word.replace("Hyder", "Islam");
document.write("The new word is: " + newWord);
document.write("<br>");
document.write("<br>");
///////question 8///////////////////////////
document.write("<h1>QUESTION NO :8 </h1>");

var message = "Aiman and abdullah are best friends. They play cricket and football together.";
var newMessage = message.replace(/and/g, "&");
document.write("The new message is: " + newMessage);
document.write("<br>");
document.write("<br>");
//////////question 9///////////////////
document.write("<h1>QUESTION NO :9 </h1>");
var str = "472";
var num = Number(str);
document.write("The string is: " + str + "<br>");
document.write("The type of the string is: " + typeof str + "<br><br>");
document.write("The number is: " + num + "<br>");
document.write("The type of the number is: " + typeof num);
document.write("<br>");
document.write("<br>");
/////////question 10//////////////////////////////
document.write("<h1>QUESTION NO :10 </h1>")
var  userInput = prompt("Enter your input:");
var  capitalizedInput = userInput.toUpperCase();
document.write("User input: " + userInput + "<br>");
document.write("Capitalized input: " + capitalizedInput);
document.write("<br>");
document.write("<br>");
//////////question 11/////////////////////////
document.write("<h1>QUESTION NO :11 </h1>");
var  userInput = prompt("Enter your input:");

var titleCaseInput = userInput.replace(/\b\w/g, function(c) {
    return c.toUpperCase();
});
document.write("User input: " + userInput + "<br>");
document.write("Title case input: " + titleCaseInput);
document.write("<br>");
document.write("<br>");
////////////question 12/////////////////////////
document.write("<h1>QUESTION NO :12</h1>")
var num = 35.36;
var numString = num.toString();
var  numStringWithoutDot = numString.replace(".", "");
document.write("Original number: " + num + "<br>");
document.write("Number as string: " + numString + "<br>");
document.write("Number without dot: " + numStringWithoutDot);
document.write("<br>");
document.write("<br>");
//////////////////question 13///////////////////
document.write("<h1>QUESTION NO :13</h1>");
var  username = prompt("Enter your username:");

if (username.includes("@") || username.includes(".") || username.includes(",") || username.includes("!")) {
  alert("Please enter a valid username without any special characters.");
} else {
  alert("Welcome, " + username + "!");
}
document.write("<p>answer in alert</p>");
document.write("<br>");
document.write("<br>");
////////////////question 14//////////////////////////
var  A = ["cake", "apple pie", "cookie", "chips", "patties"];

// Convert all array elements to lowercase for case-insensitive search
A = A.map(item => item.toLowerCase());

// Prompt user for input
var  user_input = prompt("Enter item to search: ").toLowerCase();

// Search for item in array
if (A.includes(user_input)) {
  document.write(user_input.charAt(0).toUpperCase() + user_input.slice(1) + " is found in the list.");
} else {
  document.write(user_input.charAt(0).toUpperCase() + user_input.slice(1) + " is not found in the list.");
}
document.write("<br>");
document.write("<br>");
//////////////question 15////////////////////////////////\
// Define function to check if password meets requirements
function checkPassword(password) {
    if (password.length < 6 || !isNaN(password[0])) {
      return false;
    }
    var hasAlpha = false;
    var hasNum = false;
    for (let i = 0; i < password.length; i++) {
      let charCode = password.charCodeAt(i);
      if ((charCode >= 65 && charCode <= 90) || (charCode >= 97 && charCode <= 122)) {
        hasAlpha = true;
      } else if (charCode >= 48 && charCode <= 57) {
        hasNum = true;
      }
      if (hasAlpha && hasNum) {
        return true;
      }
    }
    return false;
  }
  
  // Prompt user ///
  while (true) {
    let password = prompt("Enter password: ");
    if (checkPassword(password)) {
      console.log("Password meets requirements.");
      break;
    } else {
      document.write("Password must be at least 6 characters long, contain alphabets and numbers, and should not start with a number. Please enter a valid password.");
    }
  }
  document.write("<br>");
document.write("<br>");
/////////////question 16 /////////////
document.write("<h1>QUESTION NO :16</h1>");
var university = "University of Karachi";
var arr = university.split(" ");
for (var i = 0; i < arr.length; i++) {
  document.write(arr[i]);
}
document.write("<br>");
document.write("<br>");

////////////question 17////////////////////////////////
document.write("<h1>QUESTION NO :17</h1>");
var input = prompt("Enter a string:");
var lastChar = input.charAt(input.length - 1);
document.write("The last character is: " + lastChar);
document.write("<br>");
document.write("<br>");

//////question 18///////////////////////
document.write("<h1>QUESTION NO :18</h1>");
var str = "The quick brown fox jumps over the lazy dog";
var count = 0;
var words = str.split(" ");

for (var i = 0; i < words.length; i++) {
  if (words[i].toLowerCase() == "the") {
    count++;
  }
}
document.write("Number of occurrences of 'the': " + count);
document.write("<br>");
document.write("<br>");
document.write("<hr>");

alert("“▬▬▬▬▬▬▬▬▬ஜ۩۞۩ஜ▬▬▬▬▬▬▬▬▬”");
