import { LIST_TEST } from "@/config/data/test/list";
import { AppRoutes } from "@/utils/routes";
import Link from "next/link";
import React, { memo } from "react";
import Svg from '@/components/react-svg'
import { LinkTest } from "./styled";

const TestListPage: React.FC = () => {

  return (
    <>
      <div className="py-5 container">
        {
          LIST_TEST.map((item, index) => (
            <LinkTest key={index}>
              <div className="test-link inline-flex">
                <Link className="pb-1 inline-flex items-center text-md font-bold whitespace-nowrap gap-2" href={AppRoutes.testDetail(item.slug)}>
                  <Svg name="test" />
                  {item.name}
                </Link>
              </div>
            </LinkTest>
          ))
        }
      </div>
    </>
  )
}

export default memo(TestListPage)