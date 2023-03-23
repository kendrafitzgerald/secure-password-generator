// Assignment Code
var generateBtn = document.querySelector("#generate");


// Write password to the #password input
var letters = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l",
"m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z" ]
var numbers = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9 ]
var specialCharacters = [ '!', '"',  '#', '$',  '%',  '&', "'",  '(', ' )', ' *',
 '+', ' ,', '-', '.', '/',  ':', ';', '<', '=', '>', '?', '@', '[',  ']', '^', ' _', '`', '{',
  '|',  '}', '~', ]

var passwordLength
var chooseLowercase
var chooseUppercase
var chooseNumbers
var chooseSpecial

var passwordLength=window.prompt("Choose a password length between 8 and 128.");
  if (passwordLength <8 || passwordLength >128) {
    alert("Your password must contain between 8 and 128 characters");
    var passwordLength=window.prompt("Choose a password length between 8 and 128.");
    var chooseLowercase=window.confirm("Would you like to include lowercase letters?")

  }
  else {
    var chooseLowercase=window.confirm("Would you like to include lowercase letters?")
  }

  if(chooseLowercase || !chooseLowercase) {
    var chooseUppercase=window.confirm("Would you like to include uppercase letters?")

  }
  if(chooseUppercase || !chooseUppercase) {
    var chooseNumbers=window.confirm("Would you like to include numbers?")
  }
  if(chooseNumbers || !chooseNumbers) {
    var chooseSpecial=window.confirm ("Would you like to include special characters?")
  }
  if (!chooseLowercase && !chooseUppercase && !chooseNumbers && !chooseSpecial) {
    alert("You need to choose at least one character type to create password!");
    var chooseLowercase=window.confirm ("Would you like to include lowercase letters?");
    var chooseUppercase=window.confirm("Would you like to include uppercase letters?");
    var chooseNumbers=window.confirm("Would you like to include numbers?");
    var chooseSpecial=window.confirm ("Would you like to include special characters?");



  }
function writePassword() { 
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
