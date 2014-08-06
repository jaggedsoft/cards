require(['card', 'deck'], function (Card, Deck) {
  console.log(Card);
  console.log('test');

  var card1 = new Card('Clubs', 4);
  console.log(card1.toString());

  var deck1 = new Deck();
  console.log('deck1');
  console.log(deck1);
});