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
  password.passLength = (
    prompt("How many characters would you like your password to consist of?")
  );

  // Prompt password length
  while (
    password.passLength < 8 ||
    password.passLength > 250 ||
    isNaN(parseInt(password.passLength))
  ) {
    password.passLength = prompt(
      "'" +
        password.passLength +
        "' is not a valid input. Please enter an integer in the range [8,250]."
    );
  }

  // Confirm inclusion of lowercase letters
  password.includeLowercase = confirm(
    "Would you like your password to include lowercase letters?"
  );

  // Confirm inclusion of uppercase letters
  password.includeUppercase = confirm(
    "Would you like your password to include uppercase letters?"
  );

  // Confirm inclusion of integers
  password.includeNumbers = confirm(
    "Would you like your password to include numbers?"
  );

  // Confirm inclusion of special characters
  password.includeSpecialCharacters = confirm(
    "Would you like your password to include special characters?"
  );

  console.log(password);
}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
