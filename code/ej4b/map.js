function() {
	emit('popular-subreddits', {
		subreddit:          this.value.subreddit,
		number_of_comments: this.value.number_of_comments	
	});
}