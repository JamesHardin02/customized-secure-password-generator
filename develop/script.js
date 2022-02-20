// Character arrays
var special = "!\"#$%&'()*+,-./:;<=>?@[\\]^_`{|}~";
var numeric = "1234567890";
var alpha = "abcdefghijklmnopqrstuvwxyz";
var alphaUp = "abcdefghijklmnopqrstuvwxyz".toUpperCase();

// Get references to the #generate element
var generateBtn = document.querySelector("#generate");

// Custom object holds user inputed customization info.
var customObject = {
  lengthSelect: 0,
  special: false,
  numbers: false,
  alpha: false,
  alphaUp: false,
  customization() {
    this.lengthSelect = window.prompt("How long would you like your password?")
    this.special = window.confirm("Would you like special characters in your password?");
    this.numbers = window.confirm("Would you like numbers in your password?");
    this.alpha = window.confirm("Would you like lowercase letters in your password?");
    this.alphaUp = window.confirm("Would you like uppercase letters in your password?");
  }
}

function validatePassword(ActPassword) {
  debugger;
  if (customObject.special){

    if (!ActPassword[ActPassword.search(/\W/)]){
      ActPassword = ActPassword.replace(ActPassword[Math.floor(Math.random() * ActPassword.length)], special[Math.floor(Math.random() * special.length)]);
    }
  };

  if (customObject.numeric){
    if (!ActPassword.search(/\d/)){
      ActPassword = ActPassword.replace(ActPassword[Math.floor(Math.random() * ActPassword.length)], numeric[Math.floor(Math.random() * numeric.length)]);
    }
  };

  if (customObject.alpha){
    if (!ActPassword.search(/[a-z]/)){
      ActPassword = ActPassword.replace(ActPassword[Math.floor(Math.random() * ActPassword.length)], alpha[Math.floor(Math.random() * alpha.length)]);
    }
  };

  if (customObject.alphaUp){
    if (!ActPassword.search(/[A-Z]/)){
      ActPassword = ActPassword.replace(ActPassword[Math.floor(Math.random() * ActPassword.length)], alphaUp[Math.floor(Math.random() * alphaUp.length)]);
    }
  };
  return ActPassword
};

// garuntee at least one of slection char to be built in
function generatePassword() {
  // Shuffle arrays then add to AllPossPassword
  var AllPossPassword = "";
  var ActPassword = "";
  // divide chosen strings to input evenly

  if (customObject.special) {
    AllPossPassword = AllPossPassword + special
  };
  if (customObject.numbers){
    AllPossPassword = AllPossPassword + numeric
  };
  if (customObject.alpha) {
    AllPossPassword = AllPossPassword + alpha
  };
  if (customObject.alphaUp) {
    AllPossPassword = AllPossPassword + alphaUp
  };

    // loop through each selection seperately
    // gathers random characters from each selection 
    // then concatenate together
  for (i = 0; i < customObject.lengthSelect; i++){
    ActPassword = ActPassword + AllPossPassword[Math.floor(Math.random() * AllPossPassword.length)];
    console.log(ActPassword)
  };

  // test if special char matches at any index
  ActPassword = validatePassword(ActPassword);

  return ActPassword
};

// Write AllPossPassword to the #AllPossPassword input
function writePassword() {
  customObject.customization();

  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);