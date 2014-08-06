define(['card'], function (Card) {

  var suits = ['clubs', 'hearts', 'spades', 'diamonds'];

  var Deck = function () {
    this.cards = [];
    for(var i = 2; i <= 14; i++){
      _.each(suits, function (suit) {
        this.cards.push(new Card(suit, i));
      }, this);
    }
  };

  Deck.prototype.shuffle = function() {
    this.cards = _.shuffle(this.cards);
  };

  Deck.prototype.deal = function(numCards) {
    return this.cards.splice(0, numCards);
  };

  Deck.prototype.put = function(cards) {
    this.cards.push.apply(this.cards, cards);
  };

  Deck.prototype.cards = function() {
    return this.cards;
  };

  return Deck;

});