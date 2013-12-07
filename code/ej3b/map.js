function() {
	emit('max-score-user', {
		username: this.value.username,
		score:    this.value.score
	});
}