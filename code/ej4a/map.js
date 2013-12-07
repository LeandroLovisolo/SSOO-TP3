function() {
	emit(this.subreddit, {
		subreddit:          this.subreddit,
		number_of_comments: this.number_of_comments	
	});
}