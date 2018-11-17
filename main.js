const express = require('express');
const path = require('path');
const PORT = process.env.PORT || 5000;
const post = require('./services/post');

var app = express();

app.set('views', path.join(__dirname, 'views'));

app.set('view engine', 'ejs');

app.get('/', (req, res) => {
    var types = post.TYPES;
    res.render('pages/index', {types: types});
});

app.get('/types', (req, res) => {
    var types = post.TYPES;
    res.end(JSON.stringify(types));
});

app.get('/cost', (req, res) => {
    var type = req.query.type;
    var weight = req.query.weight;
    res.end(JSON.stringify(post.calcTotal(type, weight)));
});

app.listen(PORT, () => console.log(`Listening on ${ PORT }`));