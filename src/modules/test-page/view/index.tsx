import React, { memo, useEffect, useState } from "react";
import { useRouter } from 'next/router';
import { PartTestInterface, DetailQuestionInterface, DetailAnswerInterface } from "@/types/interfaces";
import { convertNumberToLetter } from "@/helpers/numbers";
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
  item: DetailAnswerInterface,
}

const AnswerComponent: React.FC<AnswerComponentInterface> = (props) => {
  return (
    <>
      <div>
        <div>
          {convertNumberToLetter(props?.item?.index)}. {props?.item?.content}
        </div>
      </div>
    </>
  )
}

const Detail: React.FC = () => {

  const router = useRouter();
  const { slug } = router.query;

  const [listQuestion, setListQuestion] = useState<PartTestInterface[]>([]);

  useEffect(() => {
    if (slug) {
      setListQuestion(LIST_TEST_DETAIL[slug as string])
    }
  }, [slug])

  return (
    <>
      <div className="p-5">
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
                          <AnswerComponent item={answer} />
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