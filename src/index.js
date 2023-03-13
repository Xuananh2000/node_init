const express = require('express')
const morgan = require('morgan')
const app = express()
const path = require('path')
const db = require('./config/db')
const { engine } = require ('express-handlebars')
const port = 3000

db.connect()

app.use(express.static(path.join(__dirname, 'public/')))

app.use(morgan('combined'))

// app.engine('handlebars', engine())
// app.set('view engine', 'handlebars')

app.engine('hbs', engine({extname: '.hbs',}),)

app.set('view engine', 'hbs')
app.set('views', path.join(__dirname, 'resources/views'))

app.get('/', (req, res) => {
    res.render('home');
});

app.get('/news', (req, res) => {
    res.render('news');
});

app.get('/search', (req, res) => {
    res.render('search');
});

app.listen(port, () => {
    console.log(`Example app listening on port ${port}`)
})
