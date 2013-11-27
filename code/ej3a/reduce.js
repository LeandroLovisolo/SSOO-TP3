function (key, values) {
	total_score = 0;

	for(i = 0; i < values.length; i++) {
		total_score += values[i].score;
	}

	return {
		username: key,
		score:    total_score
	};
}