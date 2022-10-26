import React from "react";
import { format } from "date-fns"
import styles from '@/components/clock.module.css'
import { letterLayout, ROWS } from '@/helpers/letterLayout'
import { convertTimeToWords, convertTimeToDigits } from '@/helpers/util'
import { NumberMatrix } from "@/types/types"
import useDateTime from '@/components/use-datetime'

type ClockProps = {
  wordMode: boolean,
};

export default function Clock({ wordMode }: ClockProps ) {
  const getRows = (activeLetters: NumberMatrix): JSX.Element[] => {
    const rows = []
    for (let i = 0; i < ROWS; i++) {
      rows.push(getRow(i, activeLetters));
    }

    return rows;
  }

  const getRow = (rowNumber: number, activeLetters: NumberMatrix): JSX.Element => {
    return (
      <tr key={`row-${rowNumber}`}>
        {
          letterLayout[rowNumber].map((letter: string, columnNumber: number) => {
            let className = styles.generalCell;
            if (activeLetters[rowNumber][columnNumber] === 1) {
              className += ` ${styles.activeCell}`;
            }
            return (
              <td key={`cell-${rowNumber}-${columnNumber}`} className={className}>{letter}</td>
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
    activeLetters = convertTimeToWords(time);
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