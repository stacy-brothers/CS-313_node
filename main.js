const express = require('express');
const path = require('path');
const PORT = process.env.PORT || 5000;
const post = require('./services/post');
const personSrvc = require('./services/person.service');

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

app.get('/week10Team', (req, res) => {
    res.render('pages/week10Team');
});

app.get('/person/:id', (req, res) => {
    var id = req.params.id;
    personSrvc.getPersonById(id)
        .then(resp => {
            console.log("Response:" + JSON.stringify(resp.rows[0]));
            res.end(JSON.stringify(resp.rows[0]));
        })
        .catch(e => {
            console.log("Error:" + e);
        });   
});

app.get('/person/:id/parents', (req, res) => {
    var id = req.params.id;
    personSrvc.getParentsByPersonId(id)
        .then(resp => {
            res.end(JSON.stringify(resp.rows));
        })
        .catch(e => {
            console.log("Error:" + e);
        });   
});

app.get('/person/:id/children', (req, res) => {
    var id = req.params.id;
    personSrvc.getChildrenByPersonId(id)
        .then(resp => {
            console.log( JSON.stringify(resp) );
            res.end(JSON.stringify(resp.rows));
        })
        .catch(e => {
            console.log("Error:" + e);
        });   
});


app.listen(PORT, () => console.log(`Listening on ${ PORT }`));
