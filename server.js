const express = require('express');
const dotenv = require('dotenv').config();
var path = require('path');

const {
  MongoClient
} = require('mongodb');
const {
  ObjectId
} = require('mongodb');

const app = express();
const port = 5000;
let db = null;

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

console.log(process.env.TESTVAR);

//static
app.use(express.static('static'));

//ejs
app.set('view engine', 'ejs');
app.set('views', path.join(__dirname, 'views'));


//Carousel
app.get('/', async (req, res) => {
  //FIND IMAGE
  const images = await db.collection('Images').find({}).toArray();
  res.render('Carousel', {
    images
  });
});


// review 1
app.get('/image/:id', async (req, res) => {
  const imageId = req.params.id;
  const query = {
    "id": imageId
  };
  const image = await db.collection('Images').findOne(query)
  // res.render('review.ejs', {
  //   image
  app.get('/review', async (req, res) => {
    res.render('review.ejs', {
      image
  });
});
});

//review 2
// app.get('/review', async (req, res) => {
//   res.render('review.ejs', {
//     image
//   });
// });

// Add review sturen
app.post('/review', async (req, res) => {
  console.log("Hij doet hetttttttt");
  const review = {
    "id": req.body.imageId,
    "review": req.body.review
  };
  await db.collection('Reviews').insertOne(review);
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