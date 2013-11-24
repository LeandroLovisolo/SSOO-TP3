function() {
    emit('user-with-max-score', {username: this.username, score: this.score});
}
