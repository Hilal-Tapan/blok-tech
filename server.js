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

  // CAROUSEL
  // app.get('/', (req, res) => {res.render('Carousel', {images});
// });

app.get('/', async (req, res) => {
  //FIND IMAGE
  const images = await db.collection('Image').find({}).toArray();
  res.render('Carousel', {images});

  // // FIND IMAGE
  //   const id = req.params.ImageId;
  //   const query = {_id: ObjectId(req.params.movieId)}
  //   const Image = await db.collection('Image').findOne(query);
});

// review
app.get('/image/:id', async (req, res) => {
  const imageId = req.params.id;
  const query = {"id": imageId }
  // const Reviews = await db.collection('Reviews').find({}).toArray();
  const image = await db.collection('Images').findOne( query)
  res.render('review.ejs', {image});
});

// Add review sturen
app.post('/review', async (req, res) => {
  console.log("Hij doet hetttttttt");
  const review = {
    "id": req.body.imageId,
    "review": req.body.reviewtje
  };
  await db.collection('Reviews').insertOne(review);
});

//


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
});