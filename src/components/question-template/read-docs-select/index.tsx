import { DocsQuestionInterface } from "@/types/interfaces"
import { memo, useState } from "react"
import AnswerComponent from './answer'
import Docs from './docs'

interface TemplaceReadDocsSelectInterface {
  docs: DocsQuestionInterface[],
}

export interface ChooseAnswerInterface {
  question: number,
  answer: number,
}

const ReadDocsSelectTemplate: React.FC<TemplaceReadDocsSelectInterface> = ({ docs }) => {

  const [choose, setChoose] = useState<ChooseAnswerInterface[]>([])

  return (
    <>
      {
        docs?.map((doc, q_index) => (
          <div key={q_index} className={`col-span-12`}>
            <Docs name={doc?.name ?? ''} content={doc.content ?? ''} />
            <div className="grid grid-cols-12 xl:gap-x-10 gap-y-10">
              {
                doc?.questions?.map((question, q_index) => (
                  <div key={q_index} className={`xl:col-span-6 col-span-12 flex gap-3`}>
                    <div className="mb-3 font-bold">{question?.id + 1}. </div>
                    <div>
                      {
                        question?.answers?.map((answer, ans_index) => (
                          <div key={ans_index} className="mb-2">
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
                  </div>
                ))
              }
            </div>
          </div>
        ))
      }
    </>
  )
}

export default memo(ReadDocsSelectTemplate)