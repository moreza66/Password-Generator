// Assignment code here

var generateBtn = document.querySelector("#generate");

function randomInt(min, max) {
  if (!max) {
    max = min
    min = 0
  }
  var rand = Math.random()
  return Math.floor(min*(1 - rand)+ rand*max)
}

function getRandomItem(list) {
  return list[randomInt(list.length)]
}

function generatePassword() {

  while (true) {
    var userInput = window.prompt("How long do you want your password to be?")
    // user exited the prompt
    if (userInput === null) {
      return
    }
  
    var passwordLength = parseInt(userInput)
  
    if (isNaN(passwordLength)) {
      window.alert("That's not a number!")
  } else if (passwordLength <8 || passwordLength > 128) {
    window.alert("invalid password lenght. lenght should be between 8 and 128 characters.")
   } else {
      break
    }
  }
  
  var userWantsNumbers = window.confirm("would you like to include numbers on your password?")
  var userWantsSymbols = window.confirm("would you like to include Symbols on your password?")
  var userWantLowercase = window.confirm("would you like to include Lowercase on your password?")
  var userWantsUppercase = window.confirm("would you like to include Uppercase on your password?")
  
  var numberList = ["0", "1", "2", "3", "4", "5", "6", "7", "8", "9"]
  var symbollist = [ "!", "@", "#", "$", "%", "^", "&", "*", "?", "=", "-", "+","_","."]
  var Lowercaselist = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z" ]
  var Uppercaselist = []
  
  var optionsCart = []
  
  for (var i = 0; i < Lowercaselist.length ; i++) {
    Uppercaselist[i] = Lowercaselist[i].toUpperCase()
  }
  
  if (userWantsNumbers) optionsCart.push(numberList)
  
  if (userWantsSymbols) optionsCart.push(symbollist)
  
  if (userWantsUppercase)optionsCart.push(Uppercaselist)
  
  if (userWantLowercase) optionsCart.push(Lowercaselist)
  
  if (userWantLowercase === true) {
    optionsCart.push(Lowercaselist)
  }
  
  if (optionsCart.length === 0) {
    optionsCart.push(Lowercaselist)
  }
  
  var generatedPassword = ""
  
  for (var i = 0; i < passwordLength; i++) {
    var randonlist = getRandomItem(optionsCart)
    var randonChar = getRandomItem(randonlist)
    generatedPassword += randonChar
  }
  
  return generatedPassword
  
  
  }
  
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
