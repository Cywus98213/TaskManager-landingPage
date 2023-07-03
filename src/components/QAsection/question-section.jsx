import "./style.css";
import QuestionCard from "./QuestionCard/questionCard";

export default function QaSection() {
  return (
    <>
      <div className="qaSection-wrapper">
        <div className="qaSection-header">
          <h1>Find Answers To Your Confusion</h1>
        </div>
        <div className="qaSection-questions">
          <QuestionCard
            question="Do I Need To Pay To Use Productivity Apps?"
            answer="Test"
          />
          <QuestionCard
            question="What Are The Main Features To Look For In A Productivity App?"
            answer="Test"
          />
          <QuestionCard
            question="Can Productivity Apps Really Increase My Productivity?"
            answer="Test"
          />
          <QuestionCard
            question="Can i Use Productivity Apps To Organize My Personal And Professional Tasks?"
            answer="Test"
          />
          <QuestionCard
            question="Do I Have To Keep Track Of My Productivity App Usage?"
            answer="Test"
          />
        </div>
      </div>
    </>
  );
}
