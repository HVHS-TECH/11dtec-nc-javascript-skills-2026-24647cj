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

function start() {

OUTPUT.innerHTML = "<h2>Added by JavaScript</h2>";
OUTPUT.innerHTML +=("<p>Hi "+Username+" as of " +year+ " you are " +age+ " years old. You have " +money+ " dollars.</p>");
OUTPUT.innerHTML +=("<p>you were born in " + birthyear+"</p>");
OUTPUT.innerHTML +=("<p>in ten years you will be "+ oldage + " yeras old</p>");
OUTPUT.innerHTML +=("<p>You have " +money+ " dollars</p>");
OUTPUT.innerHTML +=("<p>you spent half your money, now you have " + halfmoney + " dollars</p>" );
OUTPUT.innerHTML +=("<p>Then you got 3 dollars, now you have " +(halfmoney+3)+" dollars</p>");

}

function displayProduct(_name, _price) {
    OUTPUT.innerHTML += "<p>" + _name + ": $" + _price + "</p>";
}
displayProduct("Chocolate bar", 4);
displayProduct("Chips", 3);
displayProduct("Drink", 2.50);

<form onsubmit="return false; ">
 <input type="text" id="nameField">
 <input type="submit" onClick=getFormInput()>
</form>