import React from "react";
import styles from '@/components/clock.module.css'
import { letterLayout, emptyState } from '@/helpers/wordMap'
import { convertTimeToWords, isEquivalent } from '@/helpers/util'

export default function Clock() {

  React.useEffect(() => {
    const timer = setInterval(() => {

      // Fetch time
      const time = new Date().toLocaleTimeString('en-GB', {
        hour12: true,
        hour: "numeric",
        minute: "numeric"
      });

      // Log for debugging purposes
      console.log(time)

      const newState = convertTimeToWords(time);
      if (!isEquivalent(active, newState)) {
        setActive(newState);
      }
    }, 1000);
    return () => clearInterval(timer);
  }, []);

  const [active, setActive] = React.useState(emptyState);

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
            if (active[rowNumber][columnNumber] === 1) {
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

  console.log('render')

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