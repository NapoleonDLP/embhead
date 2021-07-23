const express = require('express');
const app = express();
const port = 3000;

app.get('/', (req, res) => {
  res.send('Hello World!');
});

//Questions
  //Create a question
  app.post('/questions', (req, res) => {

  });
  //Delete a question
  app.delete('/questions', (req, res) => {

  });
  //Update a question
  app.put('/questions', (req, res) => {

  })

//User
  //Record result
  app.post('/user', (req, res) => {

  })


app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`);
});
