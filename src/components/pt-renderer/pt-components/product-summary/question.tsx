import { PlusCircleIcon } from '@heroicons/react/24/outline';
import { useState } from 'react';
import cn from 'clsx';

type QuestionProps = {
  question: string;
  children: React.ReactNode;
};

export default function Question(props: QuestionProps) {
  const { question, children } = props;
  const [isActive, setIsActive] = useState(false);

  const toggleAnswer = () => {
    setIsActive(!isActive);
  };

  return (
    <li className="rounded-lg overflow-hidden mt-2">
      <div
        className={
          isActive
            ? 'bg-mainColor text-white'
            : 'bg-accent-1 hover:bg-accent-2 ' +
            'faq-item border  border-accent-1'
        }
      >
        <button
          onClick={toggleAnswer}
          className="flex flex-row justify-between items-center p-2 sm:p-3 w-full"
        >
          <h4 className="text-left text-sm">{question}</h4>
          <div className="block ">
            <PlusCircleIcon className="h-4 w-4" />
          </div>
        </button>
        <div className={cn('answer', { hidden: !isActive })}>{children}</div>
      </div>
    </li>
  );
}
