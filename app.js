
const express = require('express')



const app = express()

app.use(express.json())
app.use(express.urlencoded({ extended: false }))
app.set('views', path.join(__dirname, 'views'));

app.get('/signup',
    function(req, res, next) {
      res.render('signup');
    });