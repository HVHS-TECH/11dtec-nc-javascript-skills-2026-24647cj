// Variables - Initial default values
let username = "Chamath";
let year = 2026;
let age = 16;
let money = 20;

// Grab the HTML output element
const OUTPUT = document.getElementById("spaceForJavaScriptOutput");

/*********************************
 Main Code
*********************************/
// You can leave this empty or use it to initialize default text if needed

/*********************************
 Functions
*********************************/
function getFormInput() {
    
const NAME_FIELD = document.getElementById("nameField");
const AGE_FIELD = document.getElementById("ageField");
const MONEY_FIELD = document.getElementById("moneyField");

let userName = NAME_FIELD.value;
let userAge = Number(AGE_FIELD.value);       
let userMoney = Number(MONEY_FIELD.value);   
let birthYear = year - userAge;
let oldage = userAge + 10;
let halfmoney = userMoney / 2;

OUTPUT.innerHTML = "<p>Your name is " + userName + "</p>";
OUTPUT.innerHTML += "<p>Hi " + userName + " as of " + year + " you are " + userAge + " years old. You have " + userMoney + " dollars.</p>";
OUTPUT.innerHTML += "<p>You were born in " + birthYear + "</p>";
OUTPUT.innerHTML += "<p>In ten years you will be " + oldage + " years old</p>";
OUTPUT.innerHTML += "<p>You have " + userMoney + " dollars</p>";
OUTPUT.innerHTML += "<p>You spent half your money, now you have " + halfmoney + " dollars</p>";
OUTPUT.innerHTML += "<p>Then you got 3 dollars, now you have " + (halfmoney + 3) + " dollars</p>";

if(userMoney >= 4){
 OUTPUT.innerHTML = "<p>A coffee costs 4 dollars, You can afford a coffee!</p>"
} else{
    OUTPUT.innerHTML = "<p>A coffee costs 4 dollars, You can't afford a coffee!</p>"
}
}

