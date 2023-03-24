// Assignment Code
var generateBtn = document.querySelector("#generate");


// The four arrays below hold the characters one could potentially choose for their password.
var letters = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l",
"m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z" ]
var lettersUppercase= ["A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "O",
"P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z"]
var numbers = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9 ]
var specialCharacters = ['!', '"',  '#', '$',  '%',  '&', "'",  '(', ' )', ' *',
 '+', ' ,', '-', '.', '/', ':', ';', '<', '=', '>', '?', '@', '[',  ']', '^', ' _', '`', '{',
  '|',  '}', '~', '\\' ]
// The function below generates the password based on the choices the user picks when prompted.
function generatePassword() {
// Here I declared variables that are used within the function generatePassword(). 
var passwordLength
var chooseLowercase
var chooseUppercase
var chooseNumbers
var chooseSpecial
var passwordChoice=[]
var finalPassword=[]
 // This variable indicates that when the function is called upon clicking the generate button,
 // the first prompt the user will see in the window refers to the password's length. 
    var passwordLength=window.prompt("Choose a password length between 8 and 128.");
 // This if statement states that if the value the user puts into the prompt is less than 8 or greater than
 // 128, they will be alerted that their choice is invalid and the function execution will end.
  if (passwordLength <8 || passwordLength >128) {
    alert("Your password must contain between 8 and 128 characters");
    return;

  }
  // If the function execution does not end, then the user will be prompted with the values within these
  //variables to choose the characters they would like to include in their password.
    var chooseLowercase=window.confirm("Would you like to include lowercase letters?")
    var chooseUppercase=window.confirm("Would you like to include uppercase letters?")
    var chooseNumbers=window.confirm("Would you like to include numbers?")
    var chooseSpecial=window.confirm ("Would you like to include special characters?")
  // The below if statement states that if the user does not choose any of the character prompts,
  // then they will be alerted they must choose one and the function will end.
    if (!chooseLowercase && !chooseUppercase && !chooseNumbers && !chooseSpecial) {
      alert("You must pick at least one character type. Start over.")
      return;
    }
  // The below if statement says that if the user chooses OK on the chooseLowercase prompt, then 
  // the values in the letters array will be added to the variable of passwordChoice.
    if(chooseLowercase) {
      passwordChoice=letters;
    } 
  // The below if statement says that if the user chooses OK on the chooseUppercase prompt, then
  // the values in the lettersUppercase array will be added to the passwordChoice variable. If the 
  //user also chose OK on the chooseLowercase prompt, both arrays will have been assigned to the
  //passwordChoice variable. If not, only the lettersUppercase values will have been added. This 
  //logic applies to the rest of the if statements below.
    if(chooseUppercase) {
      passwordChoice= passwordChoice.concat(lettersUppercase);
    }
    if(chooseNumbers) {
      passwordChoice= passwordChoice.concat(numbers);
    }
    if(chooseSpecial) {
      passwordChoice=passwordChoice.concat(specialCharacters)
    }
  // This for loop sets the variable "i", and states that as long as "i" is less than the passwordLength variable,
  // the code within the loop will continue to be executed, positively incrementing. 
    for (var i=0; i < passwordLength; i++) {
  // The block of code to be executed states that when the generatePassword function is called, and
  // the previously listed conditions are met, then a random assortment of characters from the passwordChoice
  //variable will be added to the variable finalPassword.
      finalPassword.push(passwordChoice[Math.floor(Math.random() * passwordChoice.length)]);

      console.log(finalPassword);
      
      }
  // Once the random assortment of letters has been added to the finalPassword variable, 
  //the function will return finalPassword as a string of characters rather than an array.
    return finalPassword.join("");

    }
function writePassword() { 
 var password = generatePassword();
 var passwordText = document.querySelector("#password");

  passwordText.value = password;

}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
