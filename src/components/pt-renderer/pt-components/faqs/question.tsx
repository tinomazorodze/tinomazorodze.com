import { ChevronDownIcon } from '@sanity/icons';
import cn from 'clsx';
import { ReactNode, useState } from 'react';

export interface Props {
  question: string;
  isActive?: boolean;
  children: ReactNode;
}

const Question: React.FC<Props> = ({ question, children }) => {
  const [isActive, setIsActive] = useState(false);

  const toggleAnswer = () => {
    setIsActive(!isActive);
  };

  return (
    <div className="rounded-lg overflow-hidden">
      <div
        className={
          isActive
            ? 'bg-primaryColor text-white'
            : 'bg-accent-1 hover:bg-accent-2 ' +
            'faq-item border  border-accent-2'
        }
      >
        <h3
          onClick={toggleAnswer}
          className="flex flex-row justify-between items-center p-2 sm:p-3 w-full"
        >
          <span className="text-left">{question}</span>
          <span className={`block ${isActive && "rotate-180"}`}>
            <ChevronDownIcon className="w-4" />
          </span>
        </h3>
        <div className={cn('answer', { hidden: !isActive })}>{children}</div>
      </div>
    </div>
  );
};

export default Question;
