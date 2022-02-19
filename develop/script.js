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

// garuntee at least one of slection char to be built in
function generatePassword() {
  // Shuffle arrays then add to AllPossPassword
  var AllPossPassword = "";
  var ActPassword = "";
  var valid = false;
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
    // switch
    //  case (customObject.special):
    //    var notMatched = true
    //    while (notMatch){
    //      if (AllPossPassword[Math.floor(Math.random() * AllPossPassword.length)].match("/W")){
    //           
    //      };
    //    }
    //  case(customObject.numeric):
    //    var notMatched = true
    //    while (notMatch){
    //      if (AllPossPassword[Math.floor(Math.random() * AllPossPassword.length)].match("/D")){
    //           
    //      };
    //    }

    ActPassword = AllPossPassword[Math.floor(Math.random() * AllPossPassword.length)];
    // test if special char matches at any index
    console.log(ActPassword[ActPassword.search("\W")])
    console.log(ActPassword[ActPassword.search(special)])
    if (ActPassword[ActPassword.search(special)] === //search through special array for that character ) {
      valid = true;
      console.log(valid)
    }
  };

  // check function
  // if customObject.special === true then check actpassword has 1 special character
  // 
  if (valid){
    return ActPassword
  }
}

// Write AllPossPassword to the #AllPossPassword input
function writePassword() {
  customObject.customization();

  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);