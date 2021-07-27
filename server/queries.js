import pool from './db';

//list queries
//get all questions
const getQuestions = (req, res) => {
  pool.query('SELECT * FROM questions', (error, results) => {
    if (error) {
      throw error
    }

    res.status(200).json(results.rows);
  })
}
//get question based on question id

//delete question using ID

//post a new question

//put(update) a question

