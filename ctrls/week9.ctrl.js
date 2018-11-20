function Week9() {
    
};

Week9.prototype.startTeam = function( req, res ) {
    res.render('pages/week9Team');
};

var week9 = new Week9();

module.exports = week9;
