import { ChevronDownIcon } from '@sanity/icons'
import cn from 'clsx'
import { ReactNode, useState } from 'react'

export interface Props {
  question: string
  isActive?: boolean
  children: ReactNode
}

const Question: React.FC<Props> = ({ question, children }) => {
  const [isActive, setIsActive] = useState(true)

  const toggleAnswer = () => {
    setIsActive(!isActive)
  }

  return (
    <div
      className={
        'faq-item overflow-hidden rounded-md border border-zinc-200 dark:border-zinc-700'
      }
    >
      <h3
        onClick={toggleAnswer}
        className={`flex w-full cursor-pointer flex-row items-center justify-between p-2 sm:p-3 ${
          isActive
            ? 'bg-[#008080] text-white'
            : 'bg-zinc-100 hover:bg-zinc-200 dark:bg-zinc-800 dark:hover:bg-zinc-700'
        }`}
      >
        <span className="text-left">{question}</span>
        <span className={`block ${isActive && 'rotate-180'}`}>
          <ChevronDownIcon className="w-4" />
        </span>
      </h3>
      <div className={cn('answer', { hidden: !isActive })}>{children}</div>
    </div>
  )
}

export default Question
