import { DetailQuestionInterface } from "@/types/interfaces";
import { memo } from "react"

interface QuestionComponentInterface {
  item: DetailQuestionInterface;
}

const QuestionComponent: React.FC<QuestionComponentInterface> = (props) => {
  return (
    <>
      <div>
        <div className="text-md flex gap-2">
          <div className="font-bold">{props?.item?.id + 1}. </div>
          <span className="leading-tight" dangerouslySetInnerHTML={{ __html: props?.item?.content?.replace(/\n/g, '<br />') ?? '' }} />
        </div>
      </div>
    </>
  )
}

export default memo(QuestionComponent)