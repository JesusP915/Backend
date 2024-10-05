const express = require('express');
const app = express();
const port = 3000;
const fs = require('node:fs');
// To read our request (body)
const bodyParser = require('body-parser');

// Middleware to parse JSON bodies
app.use(bodyParser.json());

// Middleware to parse URL-encoded bodies
app.use(bodyParser.urlencoded({ extended: true }));

//localhost:3000
app.get('/', (req, res) => {
  res.send('Hello World!');

})

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`);
})


app.post('/contact-us', (req, res) => {

  console.log("What is the request", req.body);

  // This is our response message
  let response = {
    name: req.body.name,
    age: req.body.age
  };

  // save this information into a file (example)
  let content = response.name + ":" + response.age;
  writeToFile(content);
  

  // Send a json representation of our response
  res.json(response);

});


function writeToFile(content) {

  try {

    fs.writeFileSync('./form.txt', content);
    // file written successfully
  } catch (err) {
    console.error(err);
  }

}
