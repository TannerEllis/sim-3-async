const express = require('express');
const bodyParser = require('body-parser');
const axios = require('axios');
const massive = require('massive');
const app = express();
const controller = require('./controller');
const session = require('express-session');
require('dotenv').config();

massive(process.env.CONNECTION_STRING)
.then((db)=> {
    console.log('database connected')
    app.set('db', db)
}).catch(err => console.log(err))

const port = 3012;

app.use(bodyParser.json());

const {
  SERVER_PORT,
  SESSION_SECRET,
  REACT_APP_DOMAIN,
  REACT_APP_CLIENT_ID,
  CLIENT_SECRET
} = process.env

app.use(session({
    secret: SESSION_SECRET,
    resave: false,
    saveUninitialized: false,
    cookie: {
      maxAge: 60000000
    }
  }));


  app.get('/auth/callback', async (req, res) => {
    //code ---> req.query.code
    let payload = {
        client_id: REACT_APP_CLIENT_ID,
        client_secret: CLIENT_SECRET,
        code: req.query.code,
        grant_type: 'authorization_code',
        redirect_uri: `http://${req.headers.host}/auth/callback`
    }

    //post request with code for token
    let tokenRes = await axios.post(`https://${REACT_APP_DOMAIN}/oauth/token`, payload)

    // use token to get user data
    let userRes = await axios.get(`https://${REACT_APP_DOMAIN}/userinfo?access_token=${tokenRes.data.access_token}`)

    const db = req.app.get('db');
    const { name, sub } = userRes.data;

    username = name.split(' ')
    firstName = username[0] 
    lastName = username[1]

    let existingUser = await db.check_user([sub])

    if (existingUser[0]) {
        req.session.user = existingUser[0]
    } else {
        let createdUser = await db.create_user([sub, firstName, lastName])
        
        req.session.user = createdUser[0]
    }
    res.redirect('/#/dashboard');
})

app.get('/api/user-data', (req, res) => {
  if (req.session.user) {
      res.status(200).send(req.session.user)
  } else {
      res.status(401).send('User Must Login')
  }
})

app.get('/logout', (req, res) => {
  req.session.destroy()
  res.redirect('http://localhost:3000/')
})



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


  app.listen(port, () => console.log(`${port} Dragons flying overhead`))