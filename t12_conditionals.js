/*********************************
Name of Task: Task 12 - Conditional Statements
*********************************/
console.log("Running t12_conditional_statements.js");
console.log("Hello World");

// Global Variables / Defaults
let Username = "Chamath";
let year = 2026;
let age = 16;
let money = 20;

const OUTPUT = document.getElementById("spaceForJavaScriptOutput");

/*********************************
 Main Code
*********************************/
// Initial product display as defined in your code
displayProduct("Chocolate bar", 4);
displayProduct("Chips", 3);
displayProduct("Drink", 2.50);

/*********************************
 Functions
*********************************/

function start() {
    // Basic calculation using default values
    let birthyear = year - age;
    let oldage = age + 10;
    let halfmoney = money / 2;

    OUTPUT.innerHTML = "<h2>Added by JavaScript</h2>";
    OUTPUT.innerHTML += "<p>Hi " + Username + " as of " + year + " you are " + age + " years old. You have " + money + " dollars.</p>";
    OUTPUT.innerHTML += "<p>You were born in " + birthyear + "</p>";
    OUTPUT.innerHTML += "<p>In ten years you will be " + oldage + " years old</p>";
    OUTPUT.innerHTML += "<p>You have " + money + " dollars</p>";
    OUTPUT.innerHTML += "<p>You spent half your money, now you have " + halfmoney + " dollars</p>";
    OUTPUT.innerHTML += "<p>Then you got 3 dollars, now you have " + (halfmoney + 3) + " dollars</p>";
}

function displayProduct(_name, _price) {
    OUTPUT.innerHTML += "<p>" + _name + ": $" + _price + "</p>";
}

function getFormInput() {
    // 1. Grab DOM element inputs correctly (Fixed duplicate NAME_FIELD declarations)
    const NAME_FIELD = document.getElementById("nameField");
    const AGE_FIELD = document.getElementById("ageField");
    const MONEY_FIELD = document.getElementById("moneyField");

    // 2. Safely capture values and cast numerical text strings to actual Numbers
    let userName = NAME_FIELD.value;
    let userAge = Number(AGE_FIELD.value);
    let userMoney = Number(MONEY_FIELD.value);

    // 3. Clear output box and print standard profile summary
    OUTPUT.innerHTML = "<h2>Form Submission Results</h2>";
    OUTPUT.innerHTML += "<p>Your name is " + userName + "</p>";
    OUTPUT.innerHTML += "<p>Your age is " + userAge + "</p>";
    OUTPUT.innerHTML += "<p>Your pocket money balance is $" + userMoney + "</p>";
    OUTPUT.innerHTML += "<hr>";

    // 4. TASK 12: Conditional Check (If / Else Logic)
    OUTPUT.innerHTML += "<p><strong>A chocolate bar costs $4</strong></p>";

    if (userMoney >= 4) {
        // If the user has $4 or more
        OUTPUT.innerHTML += "<p>You CAN afford a chocolate bar</p>";
    } else {
        // If the user has less than $4
        OUTPUT.innerHTML += "<p>Sorry you CAN'T afford a chocolate bar</p>";
    }
}