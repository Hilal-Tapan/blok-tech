const express = require('express');
const camelCase = require('camelCase');
const dotenv = require('dotenv').config();
var path = require('path');

const { MongoClient } = require('mongodb');
const { ObjectId } = require('mongodb');

const app = express();
const port = 5000;
let db = null;

console.log(process.env.TESTVAR);

//static
app.use(express.static('static'));

//ejs
app.set('view engine', 'ejs');
app.set('views', path.join(__dirname, 'views'));

// Carousel
app.get('/', (req, res) => {
  //res.send('<p>home page</p>')
  res.render('Carousel', {
    images
  });
});

// logIn
app.get('/login', (req, res) => {
  res.render('logIn.ejs', {
    root: __dirname
  });
});

// makeAcc
app.get('/account', (req, res) => {
  res.render('makeAcc.ejs', {
    root: __dirname
  });
});

//Favorieten
app.get('/favorieten', (req, res) => {
  res.render('favorieten.ejs', {
    root: __dirname
  });
});

app.get('/about', (req, res) => {
  res.sendFile('./views/about.html', {
    root: __dirname
  });
});

//Redirects
app.get('/about-us', (req, res) => {
  res.redirect('/about');
});

//404 page
app.use((req, res) => {
  res.status(404).sendFile('./views/404.html', {
    root: __dirname
  });
});

// Listen for requists
app.listen(3000);

app.get('/Image/:Images', async (req, res) => {

  // FIND IMAGE
    const id = req.params.ImageId;
    const query = {_id: ObjectId(req.params.movieId)}
    const Image = await db.collection('Image').findOne(query);


/*****************************************************
* Connect to database
****************************************************/
async function connectDB() {
  const uri = process.env.DB_URI;
  const client = new MongoClient(uri, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
  });
  try {
  await client.connect();
  db = client.db(process.env.DB_NAME);
  } catch (error) {
  throw error;
  }
  }

/*****************************************************
* Start webserver
****************************************************/

app.listen(port, () => {
  console.log('=============================================\n\n')
  console.log('Webserver running on http://localhost:${port}\n\n')
  console.log('=============================================\n\n')

  connectDB().then( () => console.log("We have a connection to mongo!"));
})