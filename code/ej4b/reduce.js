function (key, values) { 
    return values.sort(function(a, b) {
       return b.number_of_comments - a.number_of_comments;
    })[0];
}