import { DetailQuestionInterface } from "@/types/interfaces";
import { memo, useState } from "react"
import QuestionComponent from './question'
import AnswerComponent from './answer'

interface TemplaceSelectInterface {
  questions: DetailQuestionInterface[],
}

export interface ChooseAnswerInterface {
  question: number,
  answer: number,
}

const TemplaceSelect: React.FC<TemplaceSelectInterface> = ({ questions }) => {

  const [choose, setChoose] = useState<ChooseAnswerInterface[]>([])

  return (
    <>
      {
        questions?.map((question, q_index) => (
          <div key={q_index} className={`xl:col-span-6 col-span-12`}>
            <div className="mb-3">
              <QuestionComponent item={question} />
            </div>
            {
              question?.answers?.map((answer, a_index) => (
                <div key={a_index} className="mb-2">
                  <AnswerComponent
                    question={question?.id}
                    choose={choose}
                    setChoose={setChoose}
                    item={answer}
                  />
                </div>
              ))
            }
          </div>
        ))
      }
    </>
  )
}

export default memo(TemplaceSelect)