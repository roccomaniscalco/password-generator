// Assignment Code
var generateBtn = document.querySelector("#generate");

// Script global variables
var password = {
  passValue: "",
  passLength: 0,
  includeLowercase: false,
  includeUppercase: false,
  includeNumbers: false,
  includeSpecialCharacters: false,
};

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");
  passwordText.value = password;
}

// Generate password based on use input
function generatePassword() {
  promptUser();
}

// Prompt user input
function promptUser() {
  password.passLength = parseInt(
    prompt("How many characters would you like your password to consist of?")
  );

  // Prompts password length
  while (
    password.passLength < 8 ||
    password.passLength > 250 ||
    isNaN(password.passLength)
  ) {
    if(password.passLength === null){
      return("")
    }
    password.passLength = prompt(
      "'" +
        password.passLength +
        "' is not a valid input. Please enter an integer in the range [8,250]."
    );
  }

  // Prompts inclusion of lowercase letters
  password.includeLowercase = prompt(
    "Would you like your password to include lowercase letters?"
  );
  console.log(password.includeLowercase + "!");
}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
