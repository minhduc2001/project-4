const express = require('express')
const bodyParser = require('body-parser')
const path = require('path')
const app = express()
const { engine } = require('express-handlebars')
const routes = require('./routes/route')
const cors = require('cors')
const morgan = require('morgan')

const db = require('./config/db');

app.use(morgan("dev"))
app.use(cors())
app.use(express.static(path.join(__dirname, 'public')));
app.use(express.json());

// app.engine('hbs', engine({ extname: '.hbs' }));
// app.set('view engine', '.hbs');
// app.set('views', path.join(__dirname, 'views'));

db.connect();
routes(app);
const port = process.env.PORT || 8080


app.listen(port, () => {
    console.log(`Example app listening at http://localhost:${port}`)
})