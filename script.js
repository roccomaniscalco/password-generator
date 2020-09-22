// Assignment Code
var generateBtn = document.querySelector("#generate");

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");
  passwordText.value = password;
}

// Generate password based on use input
function generatePassword() {
  return("Hello World.")
}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
