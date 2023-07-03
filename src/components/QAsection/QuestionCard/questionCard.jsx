import expandIcon from "../icons/expand.svg";
import closeIcon from "../icons/close.svg";
import { useState } from "react";

import "./style.css";

export default function QuestionCard({ question, answer }) {
  const [istoggle, setToggle] = useState(false);
  return (
    <>
      <div className="questionCard">
        <div className="questionCard-top">
          <div className="questionCard-Q">
            <h1>{question}</h1>
          </div>
          <div className="questionCard-icon">
            {istoggle ? (
              <img
                src={closeIcon}
                alt="close"
                onClick={() => setToggle(false)}
              />
            ) : (
              <img
                src={expandIcon}
                alt="expand"
                onClick={() => setToggle(true)}
              />
            )}
          </div>
        </div>
        {istoggle && (
          <div className="questionCard-down">
            <div className="questionCard-A">
              <div className="qaSection-answer">{answer}</div>
            </div>
          </div>
        )}
      </div>
    </>
  );
}
