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

OUTPUT.innerHTML = "<h2>Added by JavaScript</h2>";
OUTPUT.innerHTML +=("Hi "+Username+" as of " +year+ " you are " +age+ " years old. You have " +money+ " dollars.");
OUTPUT.innerHTML +=("<p>you were born in</p> " + birthyear);
OUTPUT.innerHTML +=("in ten years you will be "+ oldage + " yeras old");
OUTPUT.innerHTML +=("in ten years you will be "+ oldage + " yeras old");
OUTPUT.innerHTML +=("You have " +money+ " dollars");
OUTPUT.innerHTML +=("you spent half your money, now you have " + halfmoney + " dollars" );
OUTPUT.innerHTML +=("Then you got 3 dollars, now you have " +(halfmoney+3)+" dollars");



/****************************
Functions
****************************/
