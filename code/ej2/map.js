function() {
  	emit('avg-comments', {
  		comments:    this.number_of_comments,
  		posts:       1,
  		avgComments: 0
  	});
}
