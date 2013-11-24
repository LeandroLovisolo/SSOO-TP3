function (key, values) { 
    return values.sort(function(a, b) {
       return b.score - a.score;
    })[0];
}
