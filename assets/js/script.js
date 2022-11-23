// Assignment Code

// These variables are grabbed from the HTML and linked here
var generateBtn = document.querySelector("#generate");

var characterRange = document.getElementById("characterRange");
var characterNumber = document.getElementById("characterNumber");

var uppercaseElement = document.getElementById('uppercase');
var numbersElement = document.getElementById('numbers');
var symbolsElement = document.getElementById('symbols');

var form = document.getElementById('passwordForm');
var passwordText = document.getElementById('passwordText');


// setting the variables to the charcode numbers specific to the checkbox options
var uppercaseCharCode = characterArray(65, 90);
var lowercaseCharCode = characterArray(97, 122);
var numbersCharCode = characterArray(48, 57);

// The symbols numbers' are out of order so you have to concat, or add the rest of the numbers to fill in the gaps
var symbolsCharCode = characterArray(33, 47).concat(
  characterArray(58, 64) 
).concat(
  characterArray(91, 96)
).concat(
  characterArray(123, 126)
)

// This just syncs the scroll bar to the input box range
characterRange.addEventListener('input', syncCharacters);
characterNumber.addEventListener('input', syncCharacters);

// this syncs up the slider to the input box to be the same number
  function syncCharacters(a) {
    var sync = a.target.value; 
    characterRange.value = sync;
    characterNumber.value = sync;
}

// Write password to the #password input
form.addEventListener('submit', e => {
  // Makes sure the website doesn't refresh each time you click the generate button
  e.preventDefault();

// sets the characterAmount variable to the value of the number input box which is linked to the scroll bar
  var characterAmount = characterNumber.value;

// varaibles set to the checked status of the check boxes
  var uppercase = uppercaseElement.checked
  var numbers = numbersElement.checked
  var symbols = symbolsElement.checked

// variable set 
  var password = generatePassword(characterAmount, uppercase, numbers, symbols);
  passwordText.innerText = password;
})

// this function takes 4 parameters that have been defined earlier

// this function will set lowercase as default, check if the checkboxes are checked and set up the for loop to pass in random characters into the password

// String.fromCharCode();
function generatePassword(characterAmount, uppercase, numbers, symbols) {
  // charcodes is set to the default lowercase letters
  var charCodes = lowercaseCharCode;
  var passwordCharacters = [];

  // if the checkboxes are checked then add the charCode arrays to the password array 
  if (uppercase) charCodes = charCodes.concat(uppercaseCharCode);
  if (numbers) charCodes = charCodes.concat(numbersCharCode);
  if (symbols) charCodes = charCodes.concat(symbolsCharCode);


// this for loop goes through the amount of characters
  for (var i = 0; i < characterAmount; i++) {
// var character picks a random number from the Math.random function and randomizes it for the length of the charcodes that the user sets
    var character = charCodes[Math.floor(Math.random() * charCodes.length)];
    // the empty array of password characters is now being added the random characters from the "character" variable
    passwordCharacters.push(String.fromCharCode(character));
  }
  // this returns the result and also sets it as a string 
  return passwordCharacters.join('');
}

// This array parses through the charcode to gather the id character numbers
function characterArray(small, large) {
  const array = [];
  // i is set to small which is the starting number of the charcode list then loops until large which is the last number of the charcode
  for (var i=small; i <= large; i++) {
    // i variable of the charcode length is added to the open array
    array.push(i);
  }
  // return the result of array
  return array;
}

