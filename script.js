var el_down = document.getElementById("password"); 

///// Function to generate combination of password */ 
function generatePassword() { 
    var password = ''; 
    var userChoices = ''

    //////prompts for user
    var userUpper = confirm("Do you want to use uppercase letters?");
    var userLower = confirm("Do you want to use lowercase letters?");
    var userNum = confirm("Do you want to use numbers?");
    var userChar = confirm("Do you want to use special characters?");
    ////////password length prompt---reloads page cancelling generator if length is under 8 characters or above 128/////
    var passLength = prompt("Type a password length (8-128 characters): ");
        if (passLength < 8) {
          alert("Error!!! Can not generate password! You need to select at least 8 characters.");
          window.location.reload(true);
        }
        if (passLength > 128) {
          alert("Error!!! Can not generate password! Your password can only be a max of 128 characters.");
          window.location.reload(true);
        }

    
    /////adds character types chosen by user in to the userChoices string
    if (userUpper === true) {
      userChoices += "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
      }
    if (userLower === true) {
      userChoices += "abcdefghijklmnopqrstuvwxyz'";
      }
    if (userNum === true) {
      userChoices += '1234567890';
      }
    if (userChar === true) {
      userChoices += '!@#$%^&*';
      }
    /////Error message if user chooses no/cancel on all of the prompts/////
    if (userUpper === false && userLower === false && userNum === false && userChar === false) {
      alert("Error!!! Can not generate password! You need at least one type of character!");
    }

    /////Randomizes the characters added to the userChoice string after user answers prompts////////
    for (i = 1; i <= passLength; i++) { 
      var char = Math.floor(Math.random() 
                  * userChoices.length + 1); 
          
      password += userChoices.charAt(char) 
      
    } 
      
    return password; 
} 

function generatorRun() { 
    el_down.innerHTML = generatePassword(); 
} 
