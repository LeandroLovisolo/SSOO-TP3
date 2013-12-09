function() {
	// Ignorar usernames vacíos. Algunas entradas en el cuerpo de datos
	// no tienen usuarios. Probablemente correspondan a las entradas cuyo
	// autor aparece como [deleted] en reddit.
	if(!this.username) return;

    emit(this.username, {
    	username: this.username,
    	score:    this.score
    });
}