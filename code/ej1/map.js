function() {
  emit('vote-trend', this.number_of_upvotes - this.number_of_downvotes);
}
