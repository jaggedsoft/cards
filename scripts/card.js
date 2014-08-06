define(['utils'], function (Utils) {

  var CARDS = ['two', 'three', 'four', 'five', 'six', 'seven', 'eight', 'nine', 'ten', 'jack', 'queen', 'king', 'ace'];

  var Card = function (suit, number) {
    this.suit = suit;
    this.number = number;
    this.value = CARDS[number-2];
  };

  Card.prototype.toString = function() {
    // 'Jack of Clubs', '5 of Hearts'
    return Utils.capitalize(this.value) + " of " + Utils.capitalize(this.suit);
  };

  Card.prototype.compare = function () {
    // body...
  };

  return Card;

});