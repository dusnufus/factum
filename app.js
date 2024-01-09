require('dotenv').config();

const express = require('express');
const mongoose = require('mongoose');
const playerRoutes = require('./routes/playerRoutes');

//express app
const app = express();

const port = 3000 || process.env.PORT;

mongoose.connect(process.env.DBURI)
  .then(result => app.listen(port))
  .catch(err => console.log(err));

//register view app
app.set('view engine', 'ejs');

// middleware & static files
app.use(express.static('public'));
app.use(express.urlencoded({ extended: true }));
app.use((req, res, next) => {
  res.locals.path = req.path;
  next();
});

// routes

// Homepage
/*app.get('/', (req, res) => {
  res.render('index', { title: 'Home' });
});*/

// blog routes
app.use('/', playerRoutes);

// 404 page
app.use((req, res) => {
  res.status(404).render('404', { title: '404' });
});
