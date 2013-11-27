function (key, values) { 
	total_number_of_comments = 0;

	for(i = 0; i < values.length; i++) {
		total_number_of_comments += values[i].number_of_comments;
	}

	return { 
		subreddit:          key,
		number_of_comments: total_number_of_comments
	};
}
