var express = require('express');
const bodyParser = require('body-parser');
const path = require('path');
const dirname = path.join(__dirname, 'images', 'selfie.png');
const data = require('./data.json');

var app = express();

app.use(bodyParser.urlencoded({extended: false}));
app.use('/static', express.static('public'));
app.use('/images', express.static('images'));

app.set('view engine', 'pug');

app.set('port', process.env.PORT || 8080);

app.get('/images', (req, res) => {
    console.log(dirname);
})

app.get('/', (req, res) => {
    res.render('index', { data: data.projects});
});

app.get('/about', (req, res) => {
    res.render('about');
});

app.get('/layout', (req, res) => {
    res.render('layout');
});

app.get('/project/:projectId', (req, res) => {
    res.render('project', {projectId: req.params.projectId, data: data.projects}); //This will send the projectId as a param when the user clicks on a project.
});

app.listen(process.env.PORT || 3000, () => {
    console.log('App running on port 3000');
})
