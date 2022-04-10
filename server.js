const express = require('express');
const dotenv = require('dotenv').config();
var path = require('path');
var bodyParser = require('body-parser')

const { MongoClient } = require('mongodb');
const { ObjectId } = require('mongodb');

const app = express();
const port = process.env.PORT || 5000;
let db = null;

app.use(bodyParser.urlencoded({ extended: false }))


//parse application/json
app.use(bodyParser.json())

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

//static
app.use(express.static('static'));


//ejs
app.set('view engine', 'ejs');
app.set('views', path.join(__dirname, 'views'));


//Carousel
app.get('/', async (req, res) => {
  //FIND IMAGE
  const images = await db.collection('imageList').find({}).toArray();
  res.render('Carousel', {
    images: images
  });
});


// review 
app.get('/image/:id', async (req, res) => {
  let imageId = Number(req.params.id);
  console.log('imageId regel 58 :' + imageId);
  const query = {
    "id": imageId
  }; 
  const image = await db.collection('imageList').findOne(query);
  console.log('image regel 62: ' + image);
  res.render('review', {
    image: image
  });
});


// Review versturen
app.post('/review-submit', (req, res) => {
  res.status(204).send();
  db.collection('Reviews').insertOne(req.body);
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


//favorieten
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
 * Start webserver
 ****************************************************/

app.listen(port, () => {
  console.log('=============================================\n\n')
  console.log(`Webserver running on http://localhost:${port}\n\n`)
  console.log('=============================================\n\n')

  connectDB()
    .then(() => console.log("We have a connection to mongo!"))
    .catch(err => console.log(err))
});