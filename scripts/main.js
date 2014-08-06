require(['card', 'deck'], function (Card, Deck) {

  var deck1 = new Deck();
  deck1.shuffle();

  var player = deck1.deal(26);
  var enemy  = deck1.deal(26);

  console.log(player);
  console.log(enemy);
  console.log(deck1.cards.length);

  while(player.length){
    var playerCard = player.pop();
    var enemyCard  = enemy.pop();

    // Who wins
    console.log(playerCard + ' vs ' + enemyCard);

    if(playerCard.number > enemyCard.number){
      console.log(playerCard + ' wins');
    } else {
      console.log(enemyCard + ' wins');
    }

    deck1.cards.push(playerCard, enemyCard);
  }

  console.log(deck1.cards.length);
});