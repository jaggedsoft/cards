define([], function () {

  var CARDS = ['one', 'two', 'three', 'four', 'five', 'six', 'seven', 'eight', 'nine', 'ten', 'jack', 'queen', 'king'];

  var Card = function (suit, number) {
    this.suit = suit;
    this.number = number;
    this.value = CARDS[number-1];
  };

  Card.prototype.toString = function() {
    // 'Jack of Clubs', '5 of Hearts'

  };

  Card.prototype.compare = function () {
    // body...
  };

  return Card;

});