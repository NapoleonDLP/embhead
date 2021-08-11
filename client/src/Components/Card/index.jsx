import { useState, useEffect } from 'react';
//Card will have the question and the possible answers

export default function Card() {
  // make a call to the server requesting the question based on question id
  // if no id is found request a random question
  const [wrongAnswers, setWrongAnswers] = useState(null);
  const [question, setQuestion] = useState(null);
  const [id, setId] = useState(null); //should this be set to null or to id? if an id is present we would want this specific question to be retrieved. Or a random.
  const [answer, setAnswer] = useState(null);

  // make fetch request
  useEffect(() => {
    const endpoint = (id === null) ? '/random' : `/:${id}`;
    const url = `http://localhost:3001${endpoint}`;

    fetch(url, { credentials: 'omit' })
    .then(response => response.json())
    .then(data => {
      console.log('DATA:', data)
      setWrongAnswers(data[0].wrong_answers);
      setQuestion(data[0].question);
      setAnswer(data[0].answer);
      setId(data[0].id);
    })
    .catch((error) => {
      console.error("ERROR:", error)
    })


  }, []);

  return (
    <div>
      THIS IS THE QUESTION { question, answer, id, wrongAnswers }
    </div>
  )
};
