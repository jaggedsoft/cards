require(['card', 'deck', 'utils'], function (Card, Deck, Utils) {
  // Fuck you

  function sameSuit(hand) {
    return _.every(hand, {'suit': hand[0].suit});
  }

  function isStraight(hand) {
    return Utils.consecutive(_.sortBy(_.map(hand, 'number')));
  }

  function winner (a, b) {
    return a;
  }

  function mc (str) {
    var number = str.substr(0,1);
    var suit = str.substr(1);

    var numberMap = {
      'T' : 10,
      'J' : 11,
      'Q' : 12,
      'K' : 13,
      'A' : 14
    }

    var suitMap = {
      'C' : 'clubs',
      'H' : 'hearts',
      'S' : 'spades',
      'D' : 'diamonds'
    }

    if(numberMap.hasOwnProperty(number)){
      number = numberMap[number];
    } else {
      number = parseInt(number);
    }

    return new Card(suitMap[suit], number);
  }

  function m (str) {
    return _.map(str.split(" "), mc);
  }

  // var testCard = mc('5H');
  // console.log(testCard.number === 5);
  // console.log(testCard.suit === 'hearts');
  // console.log(typeof testCard.number);

  // var testCard = mc('TH');
  // console.log(testCard.number === 10);

  console.log(sameSuit(m('5H 5H 6H 7H KH')));
  console.log(sameSuit(m('5H 5H 6H 7H KS')));

  console.log(Utils.consecutive([1,2,3,4,5]));
  console.log(Utils.consecutive([2,1,3,4,5]));

  console.log(isStraight(m('5H 6H 7H 8H 9H')));
  console.log(isStraight(m('9H 8H 6H 7H 5H')));
  console.log(isStraight(m('5H 3H 6H 7H KH')));
  console.log(isStraight(m('5H 5D 6H 7H 8H')));
});