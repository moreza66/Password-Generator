// Assignment code here

var generateBtn = document.querySelector("#generate");


// Write password to the #password input
function writePassword() {
  var password = generatePassword();

  var passwordText = document.querySelector("#password");

  if (password) {
    passwordText.value = password;
  }
    


}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
