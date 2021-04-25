const gameBoardUnderlay = document.getElementById('game-board-underlay');

class Token {
  constructor(index, owner) {
    this.owner = owner;
    this.id = `token-${index}-${owner.id}`;
    this.dropped = false
  }

  /**
   * Draw new HTML token
   */
  drawHTMLToken() {
    const token= document.createElement('div');
    gameBoardUnderlay.appendChild(token);
    token.setAttribute('id', this.id);
    token.setAttribute('class', 'token');
    token.style.backgroundColor = this.owner.color;
  }

  get 
}
