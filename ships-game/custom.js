var location1,
	location2,
	location3,
	guess,
	guesses,
	hits,
	isSunk;

// start game state
	hits = 0;
	guesses = 0;
	isSunk = false;

// first ship - "Cruiser 3-elemnts class of ships"  - location:
	location1 = 3;
	location2 = 4;
	location3 = 5;

while (isSunk == false) {
	guess = prompt('Search: Cruiser(3-size) class of ships. Enter position to shot(from 0-6): ');
	console.log(guess);
	if (guess < 0 || guess > 6) {
		alert('it is not number from 0-6 pleas enter corect position.');
	} else {
		guesses = guesses + 1;

		if 	(guess == location1 || guess == location2 || guess == location3) {
			hits = hits + 1;
			alert("shot corect");

			if (hits == 3) {
				isSunk = true;
				alert("Ship die");
			}
		} else {
			alert('fail shot');
		}
	}
}
var stats = "You need " + guesses + " shots to destroy cruiser(3-size) ship. Your effective is: " + (3/guesses) + ".";
alert(stats);