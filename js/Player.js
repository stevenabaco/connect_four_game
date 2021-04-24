class Player {
	constructor(player, id, color, active = false) {
    this.player = player;
    this.id = id;
    this.color = color;
    this.active = active;
    this.tokens = [];
	}
}
