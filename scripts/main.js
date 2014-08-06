require(['card', 'deck'], function (Card, Deck) {

  var deck1 = new Deck();
  deck1.shuffle();

  var hand = deck1.deal(10);
  console.log(hand);

  _.each(deck1.cards, function (card){
    // try{
      console.log(card.toString());
    // } catch(e) {
      // console.log('error ' + card);
    // }
  })
});