// Assignment code here
// Create Arrays for each character types
var lowerCase =["a", "b", "C", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"]
var upperCase =["A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z"]
var numericalValues =["0", "1", "2", "3", "4", "5", "6", "7", "8", "9"]
var specialchar =["@", "#", "!", "$", "%", "&", "?", "*", "^"]

function generatePassword() {
var passwordLength = prompt("How Many Characters Do You Want?")
if (passwordLength <8 || passwordLength >128){
  alert("Password Must Be Between 8 and 128")
  return
}
var askLowerCase = confirm("Would You Like to Use Lower Case?")

var askNumerical = confirm("Would You Like to Use Numbers?")

var askUpperCase = confirm("Would You Like to Use Upper Case?")

var askSpecialChar = confirm("Would You Like to Use Special Characters?")

if (askLowerCase === false && askNumeric === false && askUpperCase === false && askSpecial === false){
  alert("Must Select at Least One!")
  return
}
var finalCharacters = []
var finalPassword = []
for (var i = 0; i <passwordLength; i++){

if (askNumerical === true) {
var numericalIndex = Math.floor(Math.random()*numericalValues.length)
var numericalElement = numericalValues[numericalIndex]
finalCharacters.push(numericalElement)
console.log(finalCharacters)
}

if (askLowerCase === true) {
  var lowerCaseIndex = Math.floor(Math.random()*lowerCase.length)
  var lowerCaseElement = lowerCase[lowerCaseIndex]
  finalCharacters.push(lowerCaseElement)
  console.log(finalCharacters)
  }

  if (askUpperCase === true) {
    var upperCaseIndex = Math.floor(Math.random()*upperCase.length)
    var upperCaseElement = upperCase[upperCaseIndex]
    finalCharacters.push(upperCaseElement)
    console.log(finalCharacters)
    }

    if (askSpecialChar === true) {
      var SpecialIndex = Math.floor(Math.random()*specialchar.length)
      var SpecialElement = specialchar[SpecialIndex]
      finalCharacters.push(SpecialElement)
      console.log(finalCharacters)
      }
      var characterIndex = Math.floor(Math.random()*finalCharacters.length)
      var characterElement = finalCharacters[characterIndex]
      finalPassword.push(characterElement)
    }
return finalPassword.join("")
}



// Get references to the #generate element
var generateBtn = document.querySelector("#generate");

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
