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
    // 1. Get the DOM elements
    const NAME_FIELD = document.getElementById("nameField");
    const AGE_FIELD = document.getElementById("ageField");
    const MONEY_FIELD = document.getElementById("moneyField");

    // 2. Extract values and convert numeric strings into actual Numbers
    let userName = NAME_FIELD.value;
    let userAge = Number(AGE_FIELD.value);       // Crucial conversion!
    let userMoney = Number(MONEY_FIELD.value);   // Crucial conversion!

    // 3. Perform calculations using the freshly inputted user data
    let birthYear = year - userAge;
    let oldage = userAge + 10;
    let halfmoney = userMoney / 2;

    // 4. Update the HTML page with the new calculations
    OUTPUT.innerHTML = "<p>Your name is " + userName + "</p>";
    OUTPUT.innerHTML += "<p>Hi " + userName + " as of " + year + " you are " + userAge + " years old. You have " + userMoney + " dollars.</p>";
    OUTPUT.innerHTML += "<p>You were born in " + birthYear + "</p>";
    OUTPUT.innerHTML += "<p>In ten years you will be " + oldage + " years old</p>";
    OUTPUT.innerHTML += "<p>You have " + userMoney + " dollars</p>";
    OUTPUT.innerHTML += "<p>You spent half your money, now you have " + halfmoney + " dollars</p>";
    OUTPUT.innerHTML += "<p>Then you got 3 dollars, now you have " + (halfmoney + 3) + " dollars</p>";
}