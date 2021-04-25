class Player {
	constructor(player, id, color, active = false) {
		this.player = player;
		this.id = id;
		this.color = color;
		this.active = active;
		this.tokens = this.createTokens(21);
	}

	/**
	 * Creates token objects for player
	 * @param {number} num - number of token objects to be created
	 * @return {array} tokens - an array of the newly created token objects
	 */
	createTokens(num) {
		const tokens = [];

		for (let i = 0; i < num; i++) {
			let token = new Token(i, this);
			tokens.push(token);
		}

		return tokens;
	}

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
		return this.unusedTokens[0];
  }
  
}

