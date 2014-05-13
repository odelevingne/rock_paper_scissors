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