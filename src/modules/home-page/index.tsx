import { AppRoutes } from "@/utils/routes";
import Link from "next/link";
import React, { memo } from "react";

const HomePage: React.FC = () => {

  return (
    <>
      <div className="w-screen h-screen flex items-center justify-center">
        <Link className="font-bold text-lg" href={AppRoutes.test}>Click go to Test</Link>
      </div>
    </>
  )
}

export default memo(HomePage)