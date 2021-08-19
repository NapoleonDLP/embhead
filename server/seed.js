// Trivia API https://opentdb.com/api.php?amount=50&category=9&difficulty=easy
const fetch = require('node-fetch');
const db = require('./queries');

const storeInDB = function(list) {
  list.map((question) => {

    const req = {
      body: {
        question: question.question,
        answer: question.correct_answer,
        wrong_answers: question.incorrect_answers
      }
    };

    db.postQuestion(req);
  });
};

fetch('https://opentdb.com/api.php?amount=10&category=10&difficulty=easy')
  .then(data => data.json())
  .then(data => {
    storeInDB(data.results);
  })
  .catch(error => {
    console.log(error)
  })

