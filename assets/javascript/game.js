//Pseudo Code - Crystal Game

// - Computer to generate a Random Number (randomComputer) between 19 and 120.
// - Create 4 crystals
// - Each crystal to Randomly Generate a number (crystal1, crystal2, crystal3, crystal4) between 1 and 12 which is hidden from you.
// - Sum the numbers generated on crystals (crystal1, crystal2, crystal3, crystal4) when clicked and store the sum to a variable crystalSum. keep on summing until it equals the computer generated random number (randomComputer).
// - If the Sum of numbers generated on crytsals (totalCrystal) are equal to computer generated random number (randomComputer), then you win.
// - Capture the number of wins and increment wins
// - Game is restarted, which means that all the randomly generated numbers (randomComputer and crystal1, crystal2, crystal3 & crystal4) are reset and a new random number is generated.
// - If the Sum of numbers generated on crytsals (totalCrystal) are greater than the computer generated random number (randomComputer), then you loose.
// - Capture the number of losses  and increment losses.
// - Game is restarted, which means that all the randomly generated numbers (randomComputer and crystal1, crystal2, crystal3 & crystal4) are reset and a new random number is generated.

	var randomComputer; // Array to store computer generated random number.
	var Wins = 0; //Array to capture the number of wins.
	var Losses = 0; // Array to capture the number of losses.

// Computer to generate a Random Number between 19 and 120.

	randomComputer = Math.floor(Math.random() * 101 ) + 19;
	console.log(randomComputer);

// Store the randomComputer to randomNumber id.

	$("#randomNumber").text("Target Number: " + randomComputer);

 //Generate random number between 1 and 12 for each crystal

	var crystal1 = Math.floor(Math.random() * 11) + 1;
	var crystal2 = Math.floor(Math.random() * 11) + 1;
	var crystal3 = Math.floor(Math.random() * 11) + 1;
	var crystal4 = Math.floor(Math.random() * 11) + 1;

	console.log(crystal1);
	console.log(crystal2);
	console.log(crystal3);
	console.log(crystal4);
	
	var  score = 0; //Array to store the sum of random numbers generated on crystals.

	$("#numberOfWins").text(Wins);
	$("#numberOfLosses").text(Losses);

	function reset(){
		randomComputer = Math.floor(Math.random() * 101 ) + 19;
      console.log(randomComputer);

		$("#randomNumber").text("Target Number: " + randomComputer);
		crystal1 = Math.floor(Math.random() * 11) + 1;
		crystal2 = Math.floor(Math.random() * 11) + 1;
		crystal3 = Math.floor(Math.random() * 11) + 1;
		crystal4 = Math.floor(Math.random() * 11) + 1;

      console.log(crystal1);
      console.log(crystal2);
      console.log(crystal3);
      console.log(crystal4);	
    
      score = 0;
      $("#finalScore").text(score);
      } 


	function yay(){
	alert("You won!");
  	Wins++; 
  	$('#numberOfWins').text(Wins);
  	reset();
	}


	function loser(){
	alert ("You lose!");
  	Losses++;
  	$('#numberOfLosses').text(Losses);
  	reset()
	}

//sets up click for jewels
  $('#crystal1').on ('click', function(){
    score = score + crystal1;
    console.log("New score= " + score);
    $('#finalScore').text(score); 
          //sets win/lose conditions
        if (score == randomComputer){
          yay();
        }
        else if ( score > randomComputer){
          loser();
        }   
  })  
  $('#crystal2').on ('click', function(){
    score = score + crystal2;
    console.log("New score= " + score);
    $('#finalScore').text(score); 
          //sets win/lose conditions
        if (score == randomComputer){
          yay();
        }
        else if ( score > randomComputer){
          loser();
        }   
  })  
  $('#crystal3').on ('click', function(){
    score = score + crystal3;
    console.log("New score= " + score);
    $('#finalScore').text(score); 
          //sets win/lose conditions
        if (score == randomComputer){
          yay();
        }
        else if ( score > randomComputer){
          loser();
        }   
  })  
  $('#crystal4').on ('click', function(){
    score = score + crystal4;
    console.log("New score= " + score);
    $('#finalScore').text(score); 
          //sets win/lose conditions
        if (score == randomComputer){
          yay();
        }
        else if ( score > randomComputer){
          loser();
        }   
  })  


//Issues to fix:
// RandomTarget is not getting displayed on screen when game resets- fixed
//Random number on crystala are not getting reset in every game, whcih means that the crystals are nto generating new number every game - fixed
//Wins and Losses gets overwritten with the number of wins and losses - Fixed
// Total Score is not updating. - Fixed