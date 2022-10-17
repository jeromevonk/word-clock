import React from "react";
import { format } from "date-fns"
import styles from '@/components/clock.module.css'
import { letterLayout } from 'src/helpers/wordMap'
import { convertTimeToWords } from 'src/helpers/util'
import { NumberMatrix } from "src/helpers/types"
import useDateTime from 'src/components/use-datetime'

export default function Clock() {

  let activeLetters: NumberMatrix;

  const getRows = (): JSX.Element[] => {
    const rows = []
    for (let i = 0; i < 10; i++) {
      rows.push(getRow(i))
    }

    return rows;
  }

  const getRow = (rowNumber: number): JSX.Element => {
    return (
      <tr key={`row-${rowNumber}`}>
        {
          letterLayout[rowNumber].map((letter: string, columnNumber: number) => {
            let className = styles.generalCell;
            if (activeLetters[rowNumber][columnNumber] === 1) {
              className = styles.activeCell;
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
  activeLetters = convertTimeToWords(time);
  
  return (
    <div className={styles.clock}>
      <table className={styles.generalTable} id='clock-table'>
        <tbody>
          {getRows()}
        </tbody>
      </table>
    </div>
  )
}