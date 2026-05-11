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
OUTPUT.innerHTML +=("<p>Hi "+Username+" as of " +year+ " you are " +age+ " years old. You have " +money+ " dollars.</p>s");
OUTPUT.innerHTML +=("<p>You were born in " + birthyear+"</p>");
OUTPUT.innerHTML +=("<p>In ten years you will be "+ oldage + " yeras old</p>");
OUTPUT.innerHTML +=("<p>You have " +money+ " dollars</p>");
OUTPUT.innerHTML +=("<p>You spent half your money, now you have " + halfmoney + " dollars</p>" );
OUTPUT.innerHTML +=("<p>Then you got 3 dollars, now you have " +(halfmoney+3)+" dollars</p>");



/****************************
Functions
****************************/
