import { QuestionMarkCircleIcon } from "@heroicons/react/24/solid";
import Question from "./question";
import Answer from "./answer";
import PtRenderer from "@/components/pt-renderer";
import { ArticleType } from "@/lib/article";

const faqsComponent = (props: any, articles: ArticleType[]) => {
  const { title, questions } = props

  return (
    <div className="pt-4">
      <div className="">
        <div className="mb-5">
          <div className="text-2xl flex items-center">
            <QuestionMarkCircleIcon className="h-3 w-3 md:h-8 md:w-8 mr-2 text-primaryColor" />
            <h2>{title}</h2>
          </div>
        </div>

        <div className="flex flex-col gap-1 pb-8">
          {questions.map((question: any, index: any) => (
            <Question
              key={index}
              isActive={index === 0}
              question={question.title}

            >
              <Answer>
                <PtRenderer body={question.answer} articles={articles} />
              </Answer>
            </Question>
          ))}
        </div>
      </div>
    </div>
  );
};

export default faqsComponent;
