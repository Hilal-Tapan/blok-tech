const express = require('express')
const camelCase = require('camelCase')

// Express app
const app = express()
const port = 3000

const images = [
  { "id":1,
    "name": "Suppen",
    "url": "suppen2.png",
    "categories": ["Ontspanning", "Natuur", "Sport", "Avontuur"],
    "Storyline": "Suppen bij zonsondergang, extreem ontspannend en een herinnering om nooit te vergeten"
},
{   "id":2,
    "name": "Alpacas",
    "url": "alpacas.png",
    "categories": ["Dieren", "Natuur", "Avontuur"],
    "Storyline": "Alpacas uitlaten in een prachtig natuurgebied"
}
];


//ejs
app.set('view engine', 'ejs');


app.get('/', (req, res) => {
  //res.send('<p>home page</p>')
  res.render('index', {images});
});

app.get('/about', (req, res) => {
  //res.send('<p>About page</p>')
  res.sendFile('./views/about.html', { root: __dirname });
});

//Redirects
app.get('/about-us', (req, res)=> {
  res.redirect('/about');
});




//404 page
app.use((req, res) => {
  res.status(404).sendFile('./views/404.html', { root: __dirname });
});

// Listen for requists
app.listen(3000);




// app.listen(port, () => {
//   console.log(`Example app listening on port ${port}`)
// })

// // Register view engine
// app.set('view engine', 'ejs');
// app.set('views','myviews');


// // Listen for requists


// app.get('/', (req, res) => {
//   res.render('index');
// });

// app.get('/about', (req, res) => {
//   res.sendFile(./views/)
// }


