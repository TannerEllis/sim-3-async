const express = require('express');
const bodyParser = require('body-parser');
const massive = require('massive');
const app = express();
const controller = require('./controller');
const sessions = require('express-session');
require('dotenv').config();

massive(process.env.CONNECTION_STRING)
.then((db)=> {
    console.log('database connected')
    app.set('db', db)
}).catch(err => console.log(err))

const port = 3012;

app.use(bodyParser.json());
app.use(sessions({
    secret: 'supersecretsecret',
    resave: false,
    saveUninitialized: false,
    cookie: {
      maxAge: 60000000
    }
  }));



  // app.get('/api/auth/login')
  // app.get('/api/auth/setUser')
  // app.get('/api/auth/authenticated')
  // app.post('/api/auth/logout')
  app.get('/api/friend/list', controller.getUsers)
  // app.post('/api/friend/add')
  // app.post('/api/friend/remove')
  // app.patch('/api/user/patch/:id')
  // app.get('/api/user/list')
  // app.get('/api/user/search')
  // app.post('/api/recommended')
  // app.post('/api/recommended/add')


  app.listen(port, () => console.log('Listening on port', port))