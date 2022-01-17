import React, { useState } from "react";
import AdminNavBar from "./AdminNavBar";
import QuestionForm from "./QuestionForm";
import QuestionList from "./QuestionList";

function App() {
  const [page, setPage] = useState("List");

  function handlePassThrough (newQuestion){
    return newQuestion
  }
  
  return (
    <main>
      <AdminNavBar onChangePage={setPage} />
      {page === "Form" ? <QuestionForm onAddQuestion={handlePassThrough}/> 
      :
       <QuestionList onAddQuestion={handlePassThrough}/>}
    </main>
  );
}

export default App;
