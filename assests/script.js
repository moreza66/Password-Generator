// Password Criteria
let pwLength;
const loweCase = "abcdefhijklmnopqrstuvwxyz";
const uperCase = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
const number = "0123456789";
const specialCharacter = "!#$%&*+-=?@^_~";

// Generate Password Function
const generatePassword = function () {
  // Password length between 8 - 128 characters
  pwLength = parseInt(
    window.prompt(
      "Please enter desired password length between 8 - 128 characters"
    )
  );
  while (pwLength < 8 || pwLength > 128) {
    alert("Please follow the instructions.");
    pwLength = parseInt(
      window.prompt(
        "Please enter desired password length between 8 - 128 characters"
      )
    );
  }

  // Choose lowercase, uppercase, numeric, and/or special characters
  // uperrcase
  const uppercase = window.confirm(
    "Would you like your password to include lowercase letters?"
  );
  // lowercase
  const lowercase = window.confirm(
    "Would you like your password to include upercase letters?"
  );
  // Numbers
  const numbers = window.confirm(
    "Would you like your password to include numbers letters?"
  );
  //pecialCharacter
  const sChars = window.confirm(
    "Would you like your password to include special characters letters?"
  );

  let pw = "";

  if (lowercase == true) {
    pw += loweCase;
  }
  if (uppercase == true) {
    pw += uperCase;
  }
  if (numbers == true) {
    pw += number;
  }
  if (sChars == true) {
    pw += specialCharacter;
  }

  // Password For Loop
  let password = "";
  for (let i = 0; i < pwLength; i++) {
    password += pw.charAt(Math.floor(Math.random() * pw.length));
  }
  return password;
};

// Get references to the #generate element
const generateBtn = document.querySelector("#generate");

// Write password to the #password input
function writePassword() {
  const password = generatePassword();
  const passwordText = document.querySelector("#password");

  passwordText.value = password;
}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
