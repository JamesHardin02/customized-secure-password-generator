// Character arrays
var specialArray = "!\"#$%&'()*+,-./:;<=>?@[\\]^_`{|}~".split('');
var numericArray = "1234567890".split('');
var alphaArray = "abcdefghijklmnopqrstuvwxyz".split('');
var alphaUpArray = "abcdefghijklmnopqrstuvwxyz".toUpperCase().split('');

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
    password = password + specialArray
  };
  if (customObject.numbers){
    password = password + numericArray
  };
  if (customObject.alpha) {
    password = password + alphaArray
  };
  if (customObject.alphaUp) {
    password = password + alphaUpArray
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
