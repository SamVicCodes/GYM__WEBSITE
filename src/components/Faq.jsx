import React from "react";
import { AiOutlinePlus } from "react-icons/ai";
import { AiOutlineMinus } from "react-icons/ai";
import { useState } from "react";

const Faq = ({ question, answer }) => {
  const [isShowingAnswer, setIsShowingAnswer] = useState(false);

  return (
    <div className="faq" onClick={() => setIsShowingAnswer((prev) => !prev)}>
      <div className="question_container">
        <h4>{question}</h4>

        <span>{isShowingAnswer ? <AiOutlineMinus /> : <AiOutlinePlus />}</span>
      </div>

      <p className={isShowingAnswer ? "show_answer" : "hide_answer"}>
        {answer}
      </p>
    </div>
  );
};

export default Faq;
