const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');
const session = require('express-session');
const config = require('./config');
const userCtrl = require('./controllers/userCtrl');
const profileCtrl = require('./controllers/profileCtrl');

const app = express();

const corsOptions = {
	origin: 'http://localhost:3117'
};

app.use(cors(corsOptions));
app.use(session({
  resave: true,
  saveUninitialized: true,
  secret: config.sessionSecret
}));
app.use(bodyParser.json());
app.use(express.static(__dirname + '/public'));

app.get('/api/profiles', profileCtrl.getFriendsProfiles);

app.post('/api/login', userCtrl.login);

app.listen(3117);
