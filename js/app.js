const startButton = document.getElementById('begin-game');

const game = new Game();

/**
 * Listens for click on `#begin-game` and calls startGame() on game object
 */

startButton.addEventListener('click', (e) => {
	game.startGame();
	e.target.style.display = 'none';
	document.getElementById('play-area').style.opacity = '1';
});

/**
 * Event listener for keyboard presses
 */

document.addEventListener('keydown', (e) => {
  game.handleKeydown(e);
})
