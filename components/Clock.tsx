import React from "react";
import { format } from "date-fns"
import styles from '@/components/clock.module.css'
import { getLayout, ROWS } from '@/helpers/letterLayout'
import { convertTimeToWords, convertTimeToDigits } from '@/helpers/util'
import { NumberMatrix } from "@/types/types"
import { v4 as uuidv4 } from 'uuid';
import useDateTime from '@/components/use-datetime'

type ClockProps = {
  wordMode: boolean,
  language: string,
};

export default function Clock({ wordMode, language }: Readonly<ClockProps> ) {
  const getRows = (activeLetters: NumberMatrix): JSX.Element[] => {
    const rows = []
    for (let i = 0; i < ROWS; i++) {
      rows.push(getRow(i, activeLetters));
    }

    return rows;
  }

  const getRow = (rowNumber: number, activeLetters: NumberMatrix): JSX.Element => {
    const letterLayout = getLayout(language);
    return (
      <tr key={`row-${rowNumber}`}>
        {
          letterLayout[rowNumber].map((letter: string, columnNumber: number) => {
            let className = styles.generalCell;
            if (activeLetters[rowNumber][columnNumber] === 1) {
              className += ` ${styles.activeCell}`;
            }
            return (
              <td key={uuidv4()} className={className}>{letter}</td>
            )
          })
        }
      </tr>
    )
  }

  // ------------------------------------
  // useDateTime custom hook
  // This will render every minute change
  // ------------------------------------
  const date = useDateTime("minute");
  const time = format(date, 'hh:mm aa');

  let activeLetters;

  if (wordMode) {
    activeLetters = convertTimeToWords(time, language);
  } else {
    activeLetters = convertTimeToDigits(time);
  }
  
  const rows = getRows(activeLetters);

  return (
    <div className={styles.clock}>
      <table className={styles.generalTable} id='clock-table'>
        <tbody>
          {rows}
        </tbody>
      </table>
    </div>
  )
}