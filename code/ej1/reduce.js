function (key, values) { 
	sum_upvotes = 0;
	sum_total_votes = 0;

	for(i = 0; i < values.length; i++) {
		sum_upvotes += values[i].upvotes;
		sum_total_votes += values[i].total_votes;
	}

	return {upvotes: sum_upvotes, total_votes: sum_total_votes};
}