const express = require('express');
const app = express();
var hbs = require('hbs');

require('./hbs/helpers');

const port = process.env.PORT || 3000;

app.use(express.static(__dirname + '/public'))
    //express hbs
hbs.registerPartials(__dirname + '/views/partials'); //para segmentar la pagina en pagina pequeñas y unirlas

app.set('view engine', 'hbs');
// respond with "hello world" when a GET request is made to the homepage
app.get('/', (req, res) => {

    res.render('home', {
        nombre: 'Hector',
    });

});

app.get('/abaut', (req, res) => {

    res.render('abaut', {
        nombre: 'Hector',
        anio: new Date().getFullYear()


    });

});

app.listen(port);