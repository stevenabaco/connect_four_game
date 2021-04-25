class Game {
  constructor() {
    this.board = new Board();
    this.players = this.createPlayers();
    this.ready = false;
  }
  
  /**
   * Returns active player.
   * @return {object} player - The active player 
   */
  get activePlayer() {
    return this.players.find(player => player.active);
  }

  /**
   * Creates two player objects
   * @return  {Array}    An array of two Player objects.
   */
  createPlayers() {
    const players = [
      new Player('Player 1', 1, '#e15258', true),
      new Player('Player 2', 3, '#e59a13'),
    ];
    return players;
  }
  
  /**
   * Initializes the game
   */
  startGame() {
    this.board.drawHTMLBoard()
    this.activePlayer.activeToken.drawHTMLToken();
    this.ready = true;
  };
};