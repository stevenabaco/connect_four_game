const gameBoardUnderlay = document.getElementById('game-board-underlay');

class Token {
  constructor(index, owner) {
    this.owner = owner;
    this.id = `token-${index}-${owner.id}`;
    this.dropped = false
  }

  drawHTMLToken() {
    let tokenHTML = `<div></div>`;
    gameBoardUnderlay.appendChild(tokenHTML);
  }

  get 
}
