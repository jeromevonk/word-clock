import React from "react";
import styles from '@/components/buttonmode.module.css'

type ButtonModeProps = {
  setWordMode: Function,
};

export default function ButtonMode({ setWordMode }: Readonly<ButtonModeProps>) {
  return (
    <button
      className={styles.buttonMode}
      onClick={() => setWordMode((prev: boolean) => !prev)}
    >
      M
    </button>
  )
}