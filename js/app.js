const startButton = document.getElementById('begin-game');

const game = new Game();

/**
 * Listens for click on `#begin-game` and calls startGame() on game object
 */

startButton.addEventListener('click', () => {
	game.startGame();
	this.style.display = 'none';
	document.getElementById('play-area').style.opacity = '1';
});
