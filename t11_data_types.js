/****************************
Name of Task: ja
****************************/
console.log("Running t01_introduction.js")
console.log("Hello World")

// Variables
let Username = "Chamath";
let year = 2026;
let age = 16;
let money = 20;
let birthyear;
let  oldage;
oldage = age+10;
birthyear = year - age;
halfmoney  = money / 2;
const OUTPUT = document.getElementById("spaceForJavaScriptOutput");
/****************************
Main Code
****************************/

writeLine()

/****************************
Functions
****************************/

function getFormInput(){

const NAME_FIELD = document.getElementById("nameField");
const AGE_FIELD = document.getElementById("ageField");
const BIRTHY_FIELD = document.getElementById("birthyField");
const MONEY_FIELD = document.getElementById("moneyField");

let userName = NAME_FIELD.value;
let userAge = AGE_FIELD.value;
let birthYear = BIRTHY_FIELD.value;
let userMoney = MONEY_FIELD.value;


OUTPUT.innerHTML = "<p>Your name is "+userName+"</p>";
OUTPUT.innerHTML +=("<p>Hi "+userName+" as of " +year+ " you are " +userAge+ " years old. You have " +usermoney+ " dollars.</p>");
OUTPUT.innerHTML +=("<p>you were born in " + birthYear+"</p>");
OUTPUT.innerHTML +=("<p>in ten years you will be "+ oldage + " yeras old</p>");
OUTPUT.innerHTML +=("<p>You have " +userMoney+ " dollars</p>");
OUTPUT.innerHTML +=("<p>you spent half your money, now you have " + (userMoney/2) + " dollars</p>" );
OUTPUT.innerHTML +=("<p>Then you got 3 dollars, now you have " +(halfmoney+3)+" dollars</p>");

}


