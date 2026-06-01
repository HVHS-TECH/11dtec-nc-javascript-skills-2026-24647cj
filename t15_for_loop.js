console.log("Running t15_for_loop.js");

const OUTPUT = document.getElementById("spaceForJavaScriptOutput");

/*********************************
 Functions
*********************************/

function generateLyrics() {
   
    const VERSES_FIELD = document.getElementById("versesField");

   
    let startVerses = Number(VERSES_FIELD.value);


    if (isNaN(startVerses) || startVerses <= 0) {
        OUTPUT.innerHTML = "<p style='color: red;'>Please enter a valid number of verses greater than 0.</p>";
        return;
    }

   
    OUTPUT.innerHTML = "<h2>Song Lyrics:</h2>";

    for (let i = startVerses; i > 0; i--) {
        let nextNum = i - 1;
        
   
        let currentBottleText = (i === 1) ? "bottle" : "bottles";
        let nextBottleText = (nextNum === 1) ? "bottle" : "bottles";
        let nextNumDisplay = (nextNum === 0) ? "no more" : nextNum;

       
        OUTPUT.innerHTML += "<p>" + i + " " + currentBottleText + " of milk on the wall, " + i + " " + currentBottleText + " of milk.<br>";
        OUTPUT.innerHTML += "Take one down and pass it around, " + nextNumDisplay + " " + nextBottleText + " of milk on the wall.</p>";
    }

   
    OUTPUT.innerHTML += "<p>No more bottles of milk on the wall, no more bottles of milk.<br>Go to the store and buy some more, 99 bottles of milk on the wall.</p>";
}