$(document).ready(function () {

	//select a random number to be dsiplayed at the start of the game
	// This number should be between  19-120
	//
	var Random = Math.floor(Math.random() * 101 + 19)

	// Will want to append the random number to the randomNumber id in the html  doc
	//
	$('#randomNumber').text(Random);
	// To set up random numbers for each jewel 
	// Random number has to be between 1 and 12
	//
	var num1 = Math.floor(Math.random() * 11 + 1)
	var num2 = Math.floor(Math.random() * 11 + 1)
	var num3 = Math.floor(Math.random() * 11 + 1)
	var num4 = Math.floor(Math.random() * 11 + 1)
	//
	//Declaring variables for the scores
	var userTotal = 0;
	var wins = 0;
	var losses = 0;
	// 
	//Will append the results of the wins and losses on the html doc 
	$('#numberWins').text(wins)
	$('numberLosses').text(losses)
	//
	// Reset the game
	function reset() {
		Random = Math.floor(Math.random() * 101 + 19)
		console.log(Random)
		$('#randomNumber').text(Random);
		num1 = Math.floor(Math.random() * 11 + 1)
		num2 = Math.floor(Math.random() * 11 + 1)
		num3 = Math.floor(Math.random() * 11 + 1)
		num4 = Math.floor(Math.random() * 11 + 1)

		$('#finalTotal').text(userTotal);
	}
	//
	// adds the total wins to the userTotal 
	function winner() {
		alert("you won!");
		wins++;
		$('#numberWins').text(wins);
		reset();
	}
	// set up function that adds the losses to the userTotal
	function Loser() {
		alert("you lost")
		losses++;
		$('#numberLosses').text(losses);
		reset()
	}
	// Sets up clicks to the jewels
	//
	$('#one').on('click', function () {
		userTotal = userTotal + num1;

		console.log(NewuserTotal = " + userTotal")
		$('#finalTotal').text(userTotal);

		if (userTotal == Random) {
			winner()
		} else if (userTotal > Random) {
			loser()
		}


	});




	$('#two').on('click', function () {
		userTotal = userTotal + num2;

		console.log(NewuserTotal = " + userTotal")

		$('#finalTotal').text(userTotal);

		if (userTotal == Random) {
			winner()
		} else if (userTotal > Random) {
			loser()
		}
	

	});

	
	$('#three').on('click', function () {
		userTotal = userTotal + num3;

		console.log(NewuserTotal = " + userTotal")

		$('#finalTotal').text(userTotal);



		if (userTotal == Random) {
			winner()
		} else if (userTotal > Random) {
			loser()
		}

	})

	$('#four').on('click', function () {
		userTotal = userTotal + num4;

		console.log(NeuserTotal = " + userTotal")

		$('#finalTotal').text(userTotal);




		if (userTotal == Random) {
			winner()
		} else if (userTotal > Random) {
			loser()
		};

	});

});