const express = require('express');
const mysql = require('mysql2');
const myconnection = require('express-myconnection');
const bodyParser = require('body-parser');
const {engine} = require('express-handlebars');
const taskRoutes = require('./routes/tasks');


const app = express();
app.set('port', 3000);


app.use(bodyParser.urlencoded({extended: true}));

app.use(bodyParser.json());

app.listen(app.get('port'), () => {
  console.log('Server on port', app.get('port'));
});


app.use(myconnection( mysql, {
  host: 'localhost',
  user: 'root',
  password: 'admin',
  port: 3306,
  database: 'crud_db'
  }, 'single'));

  app.set('views', __dirname + '/views');
  app.engine('hbs', engine({
    extname: 'hbs',
  }));
  app.set('view engine', 'hbs');

  app.use('/', taskRoutes);

  app.get('/', (req, res) => {
    res.render('index');
  });