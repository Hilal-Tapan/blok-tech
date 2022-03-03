const express = require('express')
const camelCase = require('camelCase')

// Express app
const app = express()
const port = 3000

// Listen for requists
app.listen(3000);

app.get('/', (req, res) => {
  res.send('<p>home page</p>')
});



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


