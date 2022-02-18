// Character arrays
var specialChar = "!\"#$%&'()*+,-./:;<=>?@[\\]^_`{|}~".split('');
var numericChar = "1234567890".split('');
var alphaChar = "abcdefghijklmnopqrstuvwxyz".split('');
var alphaUpChar = "abcdefghijklmnopqrstuvwxyz".toUpperCase().split('');

// Get references to the #generate element
var generateBtn = document.querySelector("#generate");

// Custom object holds user inputed customization info.
var customObject = {
  special: false,
  numbers: false,
  alpha: false,
  alphaUp: false,
  customization() {
    this.special = window.confirm("Would you like special characters in your password?");
    this.numbers = window.confirm("Would you like numbers in your password?");
    this.alpha = window.confirm("Would you like lowercase letters in your password?");
    this.alphaUp = window.confirm("Would you like uppercase letters in your password?");
  }
}
//math function that randomized characters
function generatePassword() {
  var password = ""
  if (customObject.special) {
    password = password + specialChar
  };
  if (customObject.numbers){
    password = password + numericChar
  };
  if (customObject.alpha) {
    password = password + alphaChar
  };
  if (customObject.alphaUp) {
    password = password + alphaUpChar
  };
  return password
}

// Write password to the #password input
function writePassword() {
  customObject.customization();

  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
