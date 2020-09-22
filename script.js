// Assignment Code
var generateBtn = document.querySelector("#generate");

// Script global variables
var passLength = 0;
var alphabetsArr = [];
var lowerLettersArr = [
  "a",
  "b",
  "c",
  "d",
  "e",
  "f",
  "g",
  "h",
  "i",
  "j",
  "k",
  "l",
  "m",
  "n",
  "o",
  "p",
  "q",
  "r",
  "s",
  "t",
  "u",
  "v",
  "w",
  "x",
  "y",
  "z"
]
var upperLettersArr = [
  "A",
  "B",
  "C",
  "D",
  "E",
  "F",
  "G",
  "H",
  "I",
  "J",
  "K",
  "L",
  "M",
  "N",
  "O",
  "P",
  "Q",
  "R",
  "S",
  "T",
  "U",
  "V",
  "W",
  "X",
  "Y",
  "Z"
]
var numbersArr = [1,2,3,4,5,6,7,8,9,0]
var specialCharactersArr = [
  "!",
  "#",
  "$",
  "%",
  "&",
  "'",
  "(",
  ")",
  "*",
  "+",
  "-",
  ".",
  "/",
  ":",
  ";",
  "<",
  "=",
  ">",
  "?",
  "@",
  "[",
  "\\",
  "]",
  "^",
  "_",
  "`",
  "{",
  "|",
  "}",
  "~",
  '"'
]

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");
  passwordText.value = password;
}

// Generate password based on user input
function generatePassword() {
  var pass = "";
  var alphabet = [];
  var alphabetItem = 0;
  alphabetsArr = [];

  promptUser();

  /* While pass is less than passLength, 
     append alphabetsArr[random array][random array item] to pass */
  while (pass.length < passLength) {
    alphabet = alphabetsArr[Math.floor(Math.random() * alphabetsArr.length)];
    alphabetItem = alphabet[Math.floor(Math.random() * alphabet.length)];
    pass += String(alphabetItem);
    console.log(alphabet);
  }

  return pass;
}

// Prompt user input and add alphabets to alphabetsArr accordingly
function promptUser() {
  passLength = prompt(
    "How many characters would you like your password to consist of?"
  );

  // Prompt password length
  while (
    passLength < 8 ||
    passLength > 250 ||
    isNaN(parseInt(passLength))
  ) {
    passLength = prompt(
      "'" +
        passLength +
        "' is not a valid input. Please enter an integer in the range [8,250]."
    );
  }

  // Confirm inclusion of lowercase letters
  if(confirm(
    "Would you like your password to include lowercase letters?"
  )){alphabetsArr.push(lowerLettersArr)}

  // Confirm inclusion of uppercase letters
  if(confirm(
    "Would you like your password to include uppercase letters?"
  )){alphabetsArr.push(upperLettersArr)}

  // Confirm inclusion of integers
  if(confirm(
    "Would you like your password to include numbers?"
  )){alphabetsArr.push(numbersArr)}

  // Confirm inclusion of special characters
  if(confirm(
    "Would you like your password to include special characters?"
  )){alphabetsArr.push(specialCharactersArr)}
}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
