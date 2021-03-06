const express = require('express');
const bodyParser = require('body-parser');
const app = express();
const port = 3001;
const db = require("./queries.js");
const cors = require('cors');

app.use(bodyParser.json());
app.use(cors());

app.get('/', (req, res) => {

});

//Questions
//Get questions
app.get('/questions', db.getQuestions);

//Get random question
app.get('/random', db.getRandomQuestion);

//Get question by id
app.get('/question/:id', db.getQuestionById);

//Create a question
app.post('/question', db.postQuestion);

//Delete a question
app.delete('/question/:id', db.deleteQuestionById);

//Update a question
app.put('/question/:id', db.updateQuestionById);

//User
//Record result
app.post('/user', (req, res) => {

});

module.exports = app;
