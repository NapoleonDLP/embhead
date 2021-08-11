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

//get random question
const getRandomQuestion = (req, res) => {
  pool.pool.query('SELECT * FROM questions ORDER BY RANDOM() LIMIT 1', (error, results) => {
    if (error) throw error;

    res.status(200).json(results.rows);
  })
};

//delete question using ID
const deleteQuestionById = (req, res) => {
  const id = parseInt(req.params.id);
  pool.pool.query('DELETE FROM questions WHERE id = $1', [id], (error, result) => {
    if (error) throw error;

    res.status(200).json(`Question with id: ${id} deleted`)
  });
};

//post a new question
const postQuestion = (req, res) => {
  const { question, answer, wrong_answers } = req.body;
  pool.pool.query('INSERT INTO questions (question, answer, wrong_answers) VALUES ($1, $2, $3) RETURNING *', [question, answer, wrong_answers], (error, results) => {
    if (error) {
      throw error;
    };

    res.status(201).send(`Question added with ID:${results.rows[0].id}`)
  })
};

//put(update) a question
const updateQuestionById = (req, res) => {
  const id = parseInt(req.params.id);
  let query = 'UPDATE questions SET ';
  let values = [];

  for (let column in req.body) {
    values.push(req.body[column]);
    query += `${column} = $${values.length}, `;
  }

  values.push(id);
  query = query.slice(0, -2) + ` WHERE id = $${values.length} RETURNING *`;

  pool.pool.query(query, values, (error, result) => {
    if (error) throw error;

    res.status(201).send(result.rows[0])
  })
};

module.exports = {
  getQuestions,
  postQuestion,
  getQuestionById,
  deleteQuestionById,
  updateQuestionById,
  getRandomQuestion
};
