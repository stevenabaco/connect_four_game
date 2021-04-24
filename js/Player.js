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
}
