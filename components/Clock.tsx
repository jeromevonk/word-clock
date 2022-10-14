import React from "react";
import styles from '@/components/clock.module.css'
import { letterLayout, emptyState } from '@/helpers/wordMap'
import { convertTimeToWords } from '@/helpers/util'

export default function Clock() {

  React.useEffect(() => {
    const timer = setInterval(() => {

      // Fetch time
      const time = new Date().toLocaleTimeString('en-GB', {
        hour12: true,
        hour: "numeric",
        minute: "numeric"
      });

      // Log for debuggind purposes
      console.log(time)

      const newState = convertTimeToWords(time);
      setActive(newState);
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
          // TODO letterLayout não ser exportada?
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

  return (
    <div className={styles.clock}>
      <table className={styles.generalTable}>
        <tbody>
          {getRows()}
        </tbody>
      </table>
    </div>
  )
}