// Assignment Code
var generateBtn = document.querySelector("#generate");


// Write password to the #password input
var letters = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l",
"m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z" ]
var lettersUppercase= ["A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "O",
"P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z"]
var numbers = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9 ]
var specialCharacters = ['!', '"',  '#', '$',  '%',  '&', "'",  '(', ' )', ' *',
 '+', ' ,', '-', '.', '/', ':', ';', '<', '=', '>', '?', '@', '[',  ']', '^', ' _', '`', '{',
  '|',  '}', '~', '\\' ]

function generatePassword() {

var passwordLength
var chooseLowercase
var chooseUppercase
var chooseNumbers
var chooseSpecial
var passwordChoice=[]
var finalPassword=[]

    var passwordLength=window.prompt("Choose a password length between 8 and 128.");
  if (passwordLength <8 || passwordLength >128) {
    alert("Your password must contain between 8 and 128 characters");
    return;

  }
    var chooseLowercase=window.confirm("Would you like to include lowercase letters?")
    var chooseUppercase=window.confirm("Would you like to include uppercase letters?")
    var chooseNumbers=window.confirm("Would you like to include numbers?")
    var chooseSpecial=window.confirm ("Would you like to include special characters?")

    if (!chooseLowercase && !chooseUppercase && !chooseNumbers && !chooseSpecial) {
      alert("You must pick at least one character type. Start over.")
      return;
    }

    if(chooseLowercase) {
      passwordChoice=letters;
    } 

    if(chooseUppercase) {
      passwordChoice= passwordChoice.concat(lettersUppercase);
    }
    if(chooseNumbers) {
      passwordChoice= passwordChoice.concat(numbers);
    }
    if(chooseSpecial) {
      passwordChoice=passwordChoice.concat(specialCharacters)
    }

    for (var i=0; i < passwordLength; i++) {
      finalPassword.push(passwordChoice[Math.floor(Math.random() * passwordChoice.length)]);
      console.log(finalPassword);
      
      }
    return finalPassword.join("");

  }

function writePassword() { 
 var password = generatePassword();
 var passwordText = document.querySelector("#password");

  passwordText.value = password;

}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
