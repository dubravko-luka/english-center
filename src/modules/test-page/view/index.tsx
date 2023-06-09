import React, { memo, useEffect, useState } from "react";
import { useRouter } from 'next/router';
import { PartTestInterface, DetailQuestionInterface, DetailAnswerInterface } from "@/types/interfaces";
import { convertNumberToLetter } from "@/helpers/numbers";
import { WrapperAnswer } from "./styled";
import Svg from '@/components/react-svg'
import { AppRoutes } from "@/utils/routes";
import Link from "next/link";
const { LIST_TEST_DETAIL } = require("@/config/data/test/list");

interface PartComponentInterface {
  item: PartTestInterface;
}

const PartComponent: React.FC<PartComponentInterface> = (props) => {
  return (
    <>
      <div className="border-b-[1px] border-[#000000] pb-3">
        <div className="font-bold text-lg">{props?.item?.name}</div>
        <div className="font-bold text-sm">{props?.item?.description}</div>
      </div>
    </>
  )
}

interface QuestionComponentInterface {
  item: DetailQuestionInterface;
}

const QuestionComponent: React.FC<QuestionComponentInterface> = (props) => {
  return (
    <>
      <div>
        <div className="font-bold text-md leading-5">Question {props?.item?.id + 1}: {props?.item?.content}</div>
      </div>
    </>
  )
}

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
          {convertNumberToLetter(props?.item?.index)}. {props?.item?.content}
        </WrapperAnswer>
      </div>
    </>
  )
}

interface ChooseAnswerInterface {
  question: number,
  answer: number,
}

const Detail: React.FC = () => {

  const router = useRouter();
  const { slug } = router.query;

  const [listQuestion, setListQuestion] = useState<PartTestInterface[]>([]);
  const [choose, setChoose] = useState<ChooseAnswerInterface[]>([])

  useEffect(() => {
    if (slug) {
      setListQuestion(LIST_TEST_DETAIL[slug as string])
    }
  }, [slug])


  return (
    <>
      <div className="p-5">
        <div className="mb-5">
          <Link href={AppRoutes.test}>
            <Svg name="arrow-left-black" />
          </Link>
        </div>
        {
          listQuestion.map((item, l_index) => (
            <div key={l_index} className="grid grid-cols-12 gap-10">
              <div className="col-span-12">
                <PartComponent item={item} />
              </div>
              {
                item.questions?.map((question, q_index) => (
                  <div key={q_index} className="xl:col-span-6 col-span-12">
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
            </div>
          ))
        }
      </div>
    </>
  )
}

export default memo(Detail)