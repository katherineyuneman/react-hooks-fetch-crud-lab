import React, { useEffect, useState } from "react";
import QuestionItem from "./QuestionItem";

function QuestionList({onPassThrough}) {

  const [questions, setQuestions] = useState([])

  

  useEffect(() => {
    fetch("http://localhost:4000/questions")
    .then((r) => r.json())
    .then((questions) => setQuestions(questions));
  }, []);

  function handleDeleteQuestion(deletedQuestion){
    const updatedQuestions = questions.filter((question) => question.id !== deletedQuestion.id);
    setQuestions(updatedQuestions);

  }

  function onPassThrough (newQuestion){
    console.log("newQuestion inside QuestionList:",newQuestion)
    const updatedQuestionList = [...questions, newQuestion]
    setQuestions(updatedQuestionList)
    
  }

  function handleUpdatedAnswer(updatedAnswer){
    const updatedQuestionList = questions.map((question) => {
      if (question.id === updatedAnswer.id) {
        return updatedAnswer;
      } else {
        return question;
      }
    })
    setQuestions(updatedQuestionList)
  }

  return (
    <section>
      <h1>Quiz Questions</h1>
      <ul>
      {questions.map((question) => (
          <QuestionItem
            key={question.id}
            question={question}
            onDeleteItem={handleDeleteQuestion}
            onUpdateCorrectAnswer={handleUpdatedAnswer}
          />
        ))}
      </ul>
    </section>
  );
}

export default QuestionList;
