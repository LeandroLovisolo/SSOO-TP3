function() {
    emit('vote-trend', {upvotes: this.number_of_upvotes, total_votes: this.total_votes});
}
