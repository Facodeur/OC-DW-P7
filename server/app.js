const express = require('express');
const dotenv = require('dotenv').config();
const bodyParser = require('body-parser');
const userRoutes = require('./routes/user');
const postsRoutes = require('./routes/posts');
const auth = require('./middleware/auth');
//const path = require('path');
//const SauceRoutes = require('./routes/sauce');

const app = express();

app.use((req, res, next) => {
    res.setHeader('Access-Control-Allow-Origin', '*');
    res.setHeader('Access-Control-Allow-Headers', 'Origin, X-Requested-With, Content, Accept, Content-Type, Authorization');
    res.setHeader('Access-Control-Allow-Methods', 'GET, POST, PUT, DELETE, PATCH, OPTIONS');
    next();
});



app.use(bodyParser.json());

//app.use('/images', express.static(path.join( __dirname, 'images' )));

//app.use('/api/sauces', SauceRoutes);
app.use('/api/post', postsRoutes);
app.use('/api/user', userRoutes);

module.exports = app;
