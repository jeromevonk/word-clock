import React from "react";
import styles from '@/components/buttonmode.module.css'

type ButtonModeProps = {
  setWordMode: Function,
};

export default function ButtonMode({ setWordMode }: ButtonModeProps) {
  return (
    // <div
    //   className={styles.buttonMode} 
    //   
    // </div>
    <button
      className={styles.buttonMode}
      onClick={() => setWordMode((prev: boolean) => !prev)}
    >
      {/* empty */}
    </button>
  )
}