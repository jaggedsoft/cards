define(['card'], function (Card) {

  var suits = ['clubs', 'hearts', 'spades', 'diamonds'];

  var Deck = function () {
    this.cards = [];
    for(var i = 2; i <= 14; i++){
        for(var x = 0; x <= suits.length - 1; x++){
            var card = new Card(suits[x], i);
            this.cards.push(card);
        }
    }
  };

  return Deck;

});