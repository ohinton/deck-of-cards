$(document).ready(function() {

  var deck = [];
  var suits = ["spades", "clubs", "hearts", "diamonds"];
  var ranks = ["2", "3", "4", "5", "6", "7", "8", "9", "10", "jack", "queen", "king", "ace"];

  suits.forEach(function(suit){
    ranks.forEach(function(rank){
    deck.push(rank + " of " + suit)
    });
  });

  deck.forEach(function(card) {
    $("ul#deck-of-cards").append("<li>" + card + "</li>")
  })
  
});
