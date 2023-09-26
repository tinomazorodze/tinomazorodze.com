import { ProsNCons, TextAnswer } from "./answers";
import Question from "./question";

export type AccordionType = {
  answers: {
    why: string[];
    pros: string[];
    cons: string[];
    details: string[];
  };
};

export default function Accordion(props: AccordionType) {
  const { answers } = props;
  return (
    <ul className="mb-4">
      <Question question="Why We Picked It">
        <TextAnswer>
          {answers.why.map((answer, index) => (
            <p key={index}>{answer}</p>
          ))}
        </TextAnswer>
      </Question>
      <Question
        question="Likes and Dislikes"
      >
        <ProsNCons pros={answers.pros} cons={answers.cons} />
      </Question>
      <Question question="Details">
        <TextAnswer>
          {answers.details.map((answer, index) => (
            <p key={index}>{answer}</p>
          ))}
        </TextAnswer>
      </Question>
    </ul>
  );
}
