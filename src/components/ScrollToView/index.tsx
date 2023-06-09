import { alt_main } from "@/helpers/contants";
import React, { memo } from "react";
import styles from './styles.module.css'

const ScrollToView: React.FC = () => {
  return (
    <>
      <div className="flex justify-start items-center gap-[10px]">
        {/* eslint-disable-next-line */}
        <img src='/images/icons/mouse.svg' alt={alt_main} />
        <p className={`${styles.text}`}>Scroll to view more</p>
      </div>
    </>
  )
}

export default memo(ScrollToView)