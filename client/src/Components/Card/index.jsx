import { useState } from 'react';
//Card will have the question and the possible answers

export default function Card() {
  // make a call to the server requesting the question based on question id
  // if no id is found request a random question
  const [question, setQuestion] = useState(null);

  // make fetch request

  return (
    <div>
      THIS IS THE QUESTION { question }
    </div>
  )
};
