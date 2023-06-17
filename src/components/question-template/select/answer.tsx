import { memo } from "react"
import { WrapperAnswer } from "./styled"
import { DetailAnswerInterface } from "@/types/interfaces"
import { convertNumberToLetter } from "@/helpers/numbers"
import { ChooseAnswerInterface } from "."

interface AnswerComponentInterface {
  choose: Array<ChooseAnswerInterface>,
  setChoose: (data: ChooseAnswerInterface[]) => void,
  item: DetailAnswerInterface,
  question: number
}

const AnswerComponent: React.FC<AnswerComponentInterface> = (props) => {
  const isChooseExists = props.choose.findIndex((item) => item.question === props.question)

  return (
    <>
      <div className={isChooseExists !== -1 ? 'cursor-not-allowed' : ''}>
        <WrapperAnswer
          onClick={async () => {
            if (isChooseExists === -1) {
              const d = {
                question: props.question,
                answer: props.item.index
              }
              props.setChoose([...props.choose, d])
            }
          }}
          className={`
            ${isChooseExists !== -1
              ? props.item.isCorrect
                ? 'correct'
                : props.item.index === props.choose[isChooseExists].answer
                  ? 'choose-wrong'
                  : ''
              : ''
            }
          `}
        >
          <span className="index-answer">{convertNumberToLetter(props?.item?.index)}.</span> {props?.item?.content}
        </WrapperAnswer>
      </div>
    </>
  )
}

export default memo(AnswerComponent)