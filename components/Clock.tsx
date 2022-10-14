import React from "react";
import styles from '@/components/clock.module.css'
import { letterMatrix, emptyState } from '@/helpers/wordMap'
import { convertTimeToWords } from '@/helpers/util'

export default function Clock() {

  React.useEffect(() => {
    const timer = setInterval(() => {
      console.log("Interval");
      
      setDummyTime(prev => {
        let next = prev + 1
        console.log(next);
        // convertTimeToWords to time
        const hour = Math.floor(next / 60);
        const minute = next % 60;
        const strTime = `${hour}:${minute}`
        console.log(strTime);
        const newState = convertTimeToWords(strTime);
        setActive(newState)

        return next;
      });

      


    }, 400);
    return () => clearInterval(timer);
  }, []);

  const [dummyTime, setDummyTime] = React.useState(0);
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
          // TODO letterMatrix não ser exportada?
          letterMatrix[rowNumber].map((letter: string, columnNumber: number) => {
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

  // Set state
  // const newState = convertTimeToWords(strTime);

  // TODO: mudar de 0h00 - 23h59 para 1h00 - 12:59

  // new Date().toLocaleTimeString('en-US', {
    // hour12: true,
    // hour: "numeric",
    // minute: "numeric"
  // });
  
  

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