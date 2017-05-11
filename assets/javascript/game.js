var characters=["spiderman","hulk","ironman","thor","wolverine","cyclops","venom","magneto","daredevil","deadpool"];
;


function getRandomInt(min, max) {
  min = Math.ceil(min);
  max = Math.floor(max);
  return Math.floor(Math.random() * (max - min)) + min;
}

var randomIndex = getRandomInt(0, 9);
var randomlyChosenWord = characters[randomIndex];

var arr = [randomlyChosenWord.length];
var test = document.getElementById("word");

for (var i = 0; i < randomlyChosenWord.length; i++) {
	arr[i] =  "_ ";
}

test.textContent = arr.join('');

var rem = document.getElementById("remaining");
var gue = document.getElementById("guessed");
var w = document.getElementById("wi");


// w.textContent = 0;

console.log(randomlyChosenWord);
console.log(rem.textContent);

document.onkeyup = function(event) {

var x = 0;
var n = 0;


gue.textContent = gue.textContent + event.key;

	for(i=0;i<randomlyChosenWord.length;i++) {

		if(randomlyChosenWord.charAt(i) == event.key) {

			arr[i] = event.key;
								
	    }

	    else {

	    	x = x + 1
	    }

	    if(arr[i] == "_ ") {

	    	arr[i] = "_ ";

	    }

	    if(randomlyChosenWord.length == x) {

	    	rem.textContent = rem.textContent - 1;

	    	   if(rem.textContent == 0) {
                  
                  alert("YOU ARE NO MARVEL FAN! TRY AGAIN!");

	    	   }
	    }

        test.textContent = arr.join('');

    }
    
    for(i=0;i<randomlyChosenWord.length;i++) {
       
       if(arr.includes("_ ")) {
       
       }

       else {
         
         n = n + 1;
 
       }	

    }	
       if(randomlyChosenWord.length == n) {
                
	    		alert("YOU WON! MARVEL FAN!")
                document.location.reload();
                score();
	    }

}

var a = w.textContent;
function score(a) {
	a = a + 1;
	w.textContent = a;
}


