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
function calculateChange(_money, _price) {
    let change = _money - _price;
    return change; 
}

function getFormInput() {
    
const NAME_FIELD = document.getElementById("nameField");
const AGE_FIELD = document.getElementById("ageField");
const MONEY_FIELD = document.getElementById("moneyField");
const BIRTHY_FIELD = document.getElementById("birthyField");
const CHOC_FIELD = document.getElementById("chocField");


let userName = NAME_FIELD.value;
let userAge = AGE_FIELD.value;       
let userMoney = MONEY_FIELD.value;
let birthYear = BIRTHY_FIELD.value
let chocScale = CHOC_FIELD.value;
let oldage = userAge + 10;
let halfmoney = userMoney / 2;
let coffeeprice = 4
let charray = ["You loath chocolate","Chocolate is meh","Chocolate is pretty good","Chocolate is the best thing EVER!!!!"];

OUTPUT.innerHTML = "<p>Your name is " + userName + "</p>";
OUTPUT.innerHTML += "<p>Hi " + userName + " as of " + year + " you are " + userAge + " years old. You have " + userMoney + " dollars.</p>";
OUTPUT.innerHTML += "<p>You were born in " + birthYear + "</p>";
OUTPUT.innerHTML += "<p>In ten years you will be " + oldage + " years old</p>";
OUTPUT.innerHTML += "<p>You have " + userMoney + " dollars</p>";
OUTPUT.innerHTML += "<p>You spent half your money, now you have " + halfmoney + " dollars</p>";
OUTPUT.innerHTML += "<p>Then you got 3 dollars, now you have " + (halfmoney + 3) + " dollars</p>";



if(userMoney >= coffeeprice){
    let changeDue = calculateChange(userMoney, coffeeprice);

    OUTPUT.innerHTML += "<p>A coffee costs 4 dollars, You can afford a coffee!</p>"
    OUTPUT.innerHTML += "<p>You will get $" + changeDue + " change</p>"; 
} else{
    OUTPUT.innerHTML += "<p>A coffee costs 4 dollars, You can't afford a coffee!</p>"
}

OUTPUT.innerHTML += "<p>Your likeness towrds choclate:"
}



