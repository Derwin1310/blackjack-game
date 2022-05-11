let deck = [];
const types = ['C', 'D', 'H', 'S'];
const cards = ['A', 'J', 'Q', 'K'];

let playerPoints = 0;
let computerPoints = 0;
const pointsToWin = 21;

const btnTake = document.querySelector('#btnTake');
const btnStop = document.querySelector('#btnStop');
const btnNewGame = document.querySelector('#btnNew');
const bothCounters = document.querySelectorAll('small');
const playerCard = document.querySelector('#player-card');
const computerCard = document.querySelector('#bot-card');
const modal = document.getElementById('modal');
const result = document.getElementById('result');

// funcion para tener el mazo revuelto
function createDeck() {
	for (let i = 2; i <= 10; i++) {
		for (const type of types) {
			deck.push(i + type);
		}
	}

	for (const card of cards) {
		for (const type of types) {
			deck.push(card + type);
		}
	}
	deck = _.shuffle(deck);
	return deck;
}
createDeck();

const takeCard = () => {
	if (!deck.length) throw 'Deck is out of cards';
	return deck.pop();
};

// funcion para tomar el valor de la carta
function getCardValue(card) {
	const value = card.substring(0, card.length - 1);
	// Solucion mia
	if (value === 'A') return 11;
	if (isNaN(value)) return 10;
	return parseInt(value);
}

// Turno de la pc
function showResult() {
	const isDraw = playerPoints === computerPoints;

	const pcWin =
		playerPoints > pointsToWin ||
		(computerPoints <= pointsToWin && computerPoints > playerPoints);

	modal.style.display = 'block';
	if (isDraw) return (result.innerHTML = 'Draw');

	if (pcWin) return (result.innerHTML = 'Computer wins');

	return (result.innerHTML = 'Player 1 wins');
}

function handlePcTurn() {
	do {
		const card = takeCard();
		computerPoints += getCardValue(card);
		bothCounters[1].innerHTML = computerPoints;

		const cardImg = document.createElement('img');
		cardImg.classList.add('cards');
		cardImg.src = `/assets/cartas/${card}.png`;
		computerCard.append(cardImg);

		if (playerPoints > pointsToWin) break;
	} while (computerPoints < playerPoints && playerPoints <= pointsToWin);
	showResult()
}

modal.addEventListener('click', () => {
	modal.style.display = 'none';
});



// Turno del jugador
btnTake.addEventListener('click', () => {
	const card = takeCard();
	playerPoints += getCardValue(card);
	bothCounters[0].innerHTML = playerPoints;

	const cardImg = document.createElement('img');
	cardImg.classList.add('cards');
	cardImg.src = `/assets/cartas/${card}.png`;
	playerCard.append(cardImg);

	if (playerPoints > pointsToWin) {
		btnTake.disabled = true;
		btnStop.disabled = true;
		handlePcTurn(playerPoints);
	}

	if (playerPoints === pointsToWin) {
		btnTake.disabled = true;
		btnStop.disabled = true;
		handlePcTurn(playerPoints);
	}
});

//Boton para detener la jugada
btnStop.addEventListener('click', () => {
	handlePcTurn(playerPoints);

	btnTake.disabled = true;
	btnStop.disabled = true;
});

btnNewGame.addEventListener('click', () => {
	deck = [];
	playerPoints = 0;
	computerPoints = 0;

	bothCounters[0].innerHTML = playerPoints;
	bothCounters[1].innerHTML = computerPoints;

	btnTake.disabled = false;
	btnStop.disabled = false;

	computerCard.innerHTML = '';
	playerCard.innerHTML = '';

	createDeck();
});

console.log(deck);
