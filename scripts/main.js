require(['card'], function (Card) {
  console.log(Card);
  console.log('test');

  var card1 = new Card('Clubs', 4);
  console.log(card1.toString());
});