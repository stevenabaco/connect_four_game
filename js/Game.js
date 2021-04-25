class Game {
  constructor(board, players) {
    this.board = new Board();
    this.players = this.createPlayers();
    this.ready = false;
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
   * Gets game ready for play
   */
  startGame() {
    
  };

  /**
   * Gets all tokens that haven't been dropped.
   * @return {array} Array of unused tokens.
   */
  get unusedTokens() {
    return this.tokens.filter(token => !token.dropped);
  }

  /**
   * Gets active tokens by returning first token in the array of unused tokens.
   * @return {Object} First token object in the array of unused tokens.
   */

  get activeToken() {
    return this.unusedTokens[0]
  }

};