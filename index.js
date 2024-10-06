const express = require('express');
const app = express();
const port = 3000;
const fs = require('node:fs');

// Middleware to parse JSON bodies
app.use(express.json());

// Middleware to parse URL-encoded bodies
app.use(express.urlencoded({ extended: true }));

app.get('/', (req, res) => {
  res.send('Hello World!');

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
  } catch (err) {
    console.error(err);
  }

}

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`);
})

