$(document).ready(function(){
	
	var newGame = function() {
		newNumber = Math.floor(Math.random()*100);
		guessNum = [];
		$('#guessButton').attr('value', 'Guess');
		$('#guessList').empty();
		$('#count').text(0);
		$('#feedback').text('New Game! Make a guess..');
		$('#guessButton').removeAttr("disabled"); 
	};

	var newNumber = Math.floor(Math.random()*100);
	guessNum = [];

	$('#userGuess').on('input', function (event) {
	    this.value = this.value.replace(/[^0-9]/g, '');
	});
	
	$('input[type="text"]').attr({ maxLength : 2 });

	$('#guessButton').click(function() {
		var guess = parseInt($('input[name="userGuess"]').val()) || 0;
		var difference = Math.abs(guess - newNumber);
		if ( guess === newNumber ) {
			$('#feedback').text('The Number is '+guess+' - You Win!!');
			$('#guessButton').attr('value', 'Try New Game');
			$('#guessButton').attr('disabled', 'disabled');
		} else if ( difference <= 3 ) {
			$('#feedback').text('WHITE HOT!');
		} else if ( difference <= 5 ) {
			$('#feedback').text('HOT HOT!');
		} else if ( difference <= 10 ) {
			$('#feedback').text('HOT.');
		} else if ( difference <= 20 ) {
			$('#feedback').text('WARM.');
		} else if ( difference <= 40 ) {
			$('#feedback').text('COLD.');
		} else { $('#feedback').text('You are freezing to death..');
		}

		guessNum.push(guess);
		$('input[type="text"]').val("");
		
		if (guessNum.length <= 12) {
			$('#count').text(guessNum.length);
			$('#guessList').append('<li>'+guess+'</li>');
		} else {
			$('#count').text(0);
			$('#guessList').empty();
			$('#feedback').text('You Lost. Try a New Game..');
			$('#guessButton').attr('value', 'Try New Game');
			$('#guessButton').attr('disabled', 'disabled');
			newNumber = Math.floor(Math.random()*100);
			guessNum = [];
		}
		event.preventDefault();
	});

	$('.new').click(function() {
		newGame();
		$('#guessButton').removeAttr("disabled"); 
	});
});