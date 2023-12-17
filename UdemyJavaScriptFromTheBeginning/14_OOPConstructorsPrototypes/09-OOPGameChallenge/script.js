// OOP Game Challenge

// Make the Player object
function Player(name) {
	this.name = name;
	this.lvl = 1;
	this.points = 0;
}

// Add methods to the Player prototype
Player.prototype.gainXp = function(xp) {
	this.points += xp;

	if (this.points >= 10) {
		this.lvl++;
		this.points -= 10;
	}
}

Player.prototype.describe = function() {
	return `${this.name} is level ${this.lvl} with ${this.points} experience points`;
}

// Test and run
let player1 = new Player('Bob');
let player2 = new Player('Alice');

player1.gainXp(5);
player2.gainXp(7);
player1.gainXp(3);
player2.gainXp(2);
player1.gainXp(8);
player2.gainXp(4);

console.log(player1.describe()); // Bob is level 2 with 6 experience points
console.log(player2.describe()); // Alice is level 2 with 3 experience points