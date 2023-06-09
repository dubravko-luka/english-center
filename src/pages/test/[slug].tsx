import DetailTestPage from "@/modules/test-page/view";
import React, { memo } from "react";

const DetailTest: React.FC = () => {

  return (
    <>
      <div className="lg:px-[15rem]">
        <DetailTestPage />
      </div>
    </>
  )
}

export default memo(DetailTest)