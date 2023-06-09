import { AppRoutes } from "@/utils/routes";
import Link from "next/link";
import { useRouter } from "next/router";
import React, { memo, useEffect } from "react";

const HomePage: React.FC = () => {

  const router = useRouter()

  useEffect(() => {
    router.push(AppRoutes.test)
  }, [])

  return (
    <>
      <div className="w-screen h-screen flex items-center justify-center">
        <Link className="font-bold text-lg" href={AppRoutes.test}>Click go to Test</Link>
      </div>
    </>
  )
}

export default memo(HomePage)