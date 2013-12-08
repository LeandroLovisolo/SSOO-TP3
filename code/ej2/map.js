function() {
  	emit('avg-comments', {
  		comments:    this.number_of_comments,
  		submissions: 1,
  		avgComments: 0
  	});
}
