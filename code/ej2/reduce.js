function (key, values) { 
	total_comments = 0; 
	total_submissions = 0;

	for(i = 0; i < values.length; i++) {
		total_comments    += values[i].comments;
		total_submissions += values[i].submissions;
	}

	return {
		comments:    total_comments,
		submissions: total_submissions,
		avgComments: total_comments / total_submissions
	};
}
