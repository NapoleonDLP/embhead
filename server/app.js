const express = require('express');
const bodyParser = require('body-parser');
const app = express();
const port = 3000;
const db = require("./queries.js");

app.use(bodyParser.json());

app.get('/', (req, res) => {

});

//Questions
//Get questions
app.get('/questions', (req, res) => {
  db.getQuestions(req, res);
});

//Get question by id
app.get('/question/:id', db.getQuestionById)
//Create a question
app.post('/question', (req, res) => {
  db.postQuestion(req, res);
});
//Delete a question
app.delete('/question', (req, res) => {

});
//Update a question
app.put('/question', (req, res) => {

});

//User
//Record result
app.post('/user', (req, res) => {

});


app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`);
});
