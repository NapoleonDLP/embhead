const pool = require('./db.js');

//list queries
//get all questions
const getQuestions = (req, res) => {
  pool.pool.query('SELECT * FROM questions', (error, results) => {
    if (error) {
      throw error
    }

    res.status(200).json(results.rows);
  })
}

//get question based on question id
const getQuestionById = (req, res) => {
  const id = parseInt(req.params.id);
  pool.pool.query('SELECT * FROM questions WHERE id = $1', [id], (error, results) => {
    if (error) throw error;

    res.status(200).json(results.rows);
  })
};

//delete question using ID

//post a new question
const postQuestion = (req, res) => {
  const { question, answer, wrong_answers } = req.body;
  pool.pool.query('INSERT INTO questions (question, answer, wrong_answers) VALUES ($1, $2, $3)', [question, answer, wrong_answers], (error, results) => {
    if (error) {
      throw error;
    };
    res.status(201).send(`Question added with ID:${results.insertId}`)
  })
};

//put(update) a question
module.exports = {
  getQuestions,
  postQuestion,
  getQuestionById
};
