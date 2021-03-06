console.log("Up and running!");

var cards = [
{
	rank: "queen",
	suit: "hearts",
	cardImage: "images/queen-of-hearts.png",
},
{
	rank: "queen",
	suit: "diamonds",
	cardImage: "images/queen-of-diamonds.png",
},
{
	rank: "king",
	suit: "hearts",
	cardImage: "images/king-of-hearts.png",
},
{
	rank: "king",
	suit: "diamonds",
	cardImage: "images/king-of-diamonds.png",
}
];

var cardsInPlay = [];

var checkForMatch = function() {
	if (cardsInPlay[0] === cardsInPlay[1]) {
	alert("You found a match!");
	} else {
	alert("Sorry, try again.");
	}
};

var flipCard = function() {
	// 56% page
	var cardId = this.getAttribute('data-id');
	// 62% page
	this.setAttribute('src', cards[cardId].cardImage);
	cardsInPlay.push(cards[cardId].rank);
	console.log("User flipped " + cards[cardId].rank);
	console.log("User flipped " + cards[cardId].cardImage);
	console.log("User flipped " + cards[cardId].suit);

	if (cardsInPlay.length === 2) {
		checkForMatch();
	}
};

var createBoard = function() {
	for (var i = 0; i <cards.length; i++) {
		var cardElement = document.createElement('img');
		// 37% page
		cardElement.setAttribute('src', 'images/back.png');
		cardElement.setAttribute('data-id', i);
		//%43 page
		cardElement.addEventListener('click', flipCard);
		document.getElementById('game-board').appendChild(cardElement);
	}
};

createBoard();

