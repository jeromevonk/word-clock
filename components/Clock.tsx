import React from "react";
import styles from '@/components/clock.module.css'

const letterMatrix = [
  ['I', 'T', 'L', 'I', 'S', 'A', 'S', 'T', 'I', 'M', 'E'],
  ['A', 'C', 'Q', 'U', 'A', 'R', 'T', 'E', 'R', 'D', 'C'],
  ['T', 'W', 'E', 'N', 'T', 'Y', 'F', 'I', 'V', 'E', 'X'],
  ['H', 'A', 'L', 'F', 'B', 'T', 'E', 'N', 'F', 'T', 'O'],
  ['P', 'A', 'S', 'T', 'E', 'R', 'U', 'N', 'I', 'N', 'E'],
  ['O', 'N', 'E', 'S', 'I', 'X', 'T', 'H', 'R', 'E', 'E'],
  ['F', 'O', 'U', 'R', 'F', 'I', 'V', 'E', 'T', 'W', 'O'],
  ['E', 'I', 'G', 'H', 'T', 'E', 'L', 'E', 'V', 'E', 'N'],
  ['S', 'E', 'V', 'E', 'N', 'T', 'W', 'E', 'L', 'V', 'E'],
  ['T', 'E', 'N', 'S', 'E', 'O', 'C', 'L', 'O', 'C', 'K'],
];

const emptyState = [
  [1, 1, 0, 1, 1, 0, 0, 0, 0, 0, 0],
  [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
  [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
  [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
  [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
  [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
  [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
  [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
  [1, 1, 1, 1, 1, 0, 0, 0, 0, 0, 0],
  [0, 0, 0, 0, 0, 1, 1, 1, 1, 1, 1],
];

export default function Clock() {

  const [active, setActive] = React.useState(emptyState);

  const getRows = (): JSX.Element[] => {
    const rows = []
    for (let i = 0; i < 10; i++) {
      rows.push(getRow(i))
      // rows.push(<tr key={i}><td>oi</td></tr>)
    }

    return rows;
  }

  const getRow = (rowNumber: number): JSX.Element => {
    return (
      <tr key={`row-${rowNumber}`}>
        {
          letterMatrix[rowNumber].map((letter, columnNumber) => {
            let className = styles.generalCell;
            if (active[rowNumber][columnNumber] === 1) {
              className = styles.activeCell;
              console.log('ativo', rowNumber, columnNumber, className)
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