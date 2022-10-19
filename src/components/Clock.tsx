import React from "react";
import { format } from "date-fns"
import styles from '@/components/clock.module.css'
import { letterLayout, ROWS } from 'src/helpers/wordMap'
import { convertTimeToWords } from 'src/helpers/util'
import { NumberMatrix } from "src/helpers/types"
import useDateTime from 'src/components/use-datetime'

export default function Clock() {
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
              <td key={`cell-${rowNumber}-${columnNumber}`} className={className}>X</td>
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
  console.log(time);

  const activeLetters = convertTimeToWords(time);
  const rows = getRows(activeLetters);
  console.log(rows);
  
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