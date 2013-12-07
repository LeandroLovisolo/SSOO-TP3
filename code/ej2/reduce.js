function (key, values) { 
	total_comments = 0; 
	total_posts = 0;

	for(i = 0; i < values.length; i++) {
		total_comments += values[i].comments;
		total_posts    += values[i].posts;
	}

	return {
		comments:    total_comments,
		posts:       total_posts,
		avgComments: total_comments / total_posts
	};
}
