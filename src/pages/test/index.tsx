import TestListPage from "@/modules/test-page";
import React, { memo } from "react";

const TestPage: React.FC = () => {

  return (
    <>
      <div className="lg:px-[15rem]">
        <TestListPage />
      </div>
    </>
  )
}

export default memo(TestPage)