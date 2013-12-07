function() {
    emit(this.username, {
    	username: this.username,
    	score:    this.score
    });
}