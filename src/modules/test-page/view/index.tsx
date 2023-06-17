import React, { memo, useEffect, useState } from "react";
import { useRouter } from 'next/router';
import { DetailQuestionInterface, DocsQuestionInterface, PartTestInterface } from "@/types/interfaces";
import Svg from '@/components/react-svg'
import { AppRoutes } from "@/utils/routes";
import Link from "next/link";
import { TYPE_QUESTION } from "@/types/enum";
import QuestionSelect from '@/components/question-template/select'
import QuestionReadDocsSelect from '@/components/question-template/read-docs-select'
const { LIST_TEST_DETAIL } = require("@/config/data/test/list");

interface PartComponentInterface {
  item: PartTestInterface;
}

const PartComponent: React.FC<PartComponentInterface> = (props) => {
  return (
    <>
      <div className="pb-3">
        <div className="font-bold text-lg">{props?.item?.name}</div>
        <div className="font-bold text-sm">{props?.item?.description}</div>
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

  const renderTemplate = (_questions: PartTestInterface) => {
    switch (_questions.type) {
      case TYPE_QUESTION.SELECT:
        return <QuestionSelect questions={_questions.questions as DetailQuestionInterface[]} />;
      case TYPE_QUESTION.READ_DOCS_SELECT:
        return <QuestionReadDocsSelect docs={_questions.questions as DocsQuestionInterface[]} />;

      default:
        return <></>;
    }
  }


  return (
    <>
      <div className="py-5 container">
        <div className="mb-5">
          <Link href={AppRoutes.test}>
            <Svg name="arrow-left-black" />
          </Link>
        </div>
        {
          listQuestion.map((item, l_index) => (
            <div key={l_index} className={`grid grid-cols-12 xl:gap-x-10 gap-y-10 ${l_index > 0 ? 'mt-5 pt-5 border-t border-black' : ''}`}>
              <div className="col-span-12">
                <PartComponent item={item} />
              </div>
              {
                renderTemplate(item)
              }
            </div>
          ))
        }
      </div>
    </>
  )
}

export default memo(Detail)