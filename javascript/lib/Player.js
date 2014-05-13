function Player(name) {
  // initialize
  this.name = name;
};

Player.prototype.picks = function(pick) {
  this.pick = pick;
};

Player.prototype.reveal = function() {
  return this.pick;
};

Player.prototype.randomChoice = function() {
	i = Math.floor(Math.random()*5);
	array = ['rock', 'paper', 'scissors', 'spock', 'lizard']
	this.pick = array[i];
};