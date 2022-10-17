import {
  differenceInMilliseconds,
  startOfSecond,
  startOfMinute,
  startOfHour,
  startOfDay,
  addSeconds,
  addMinutes,
  addHours,
  addDays
} from "date-fns";

// kudos to:
// https://dev.to/dcwither/tracking-time-with-react-hooks-4b8b

import { useEffect, useState, useRef } from "react";

// second | minute | hour | day

const thresholdMap = {
  second: {
    start: startOfSecond,
    add: addSeconds
  },
  minute: {
    start: startOfMinute,
    add: addMinutes
  },
  hour: {
    start: startOfHour,
    add: addHours
  },
  day: {
    start: startOfDay,
    add: addDays
  }
};

function msUntilNext(threshold: string) {
  const { start, add } = thresholdMap[threshold as keyof typeof thresholdMap];
  const date = new Date();
  return differenceInMilliseconds(
    add(start(date), 1),
    date
  );
}

function startOfThreshold(threshold: string) {
  if (!threshold) {
    return new Date();
  } else {
    return thresholdMap[threshold as keyof typeof thresholdMap].start(new Date());
  }
}

export default function useDateTime(threshold: string) {
  const [date, setDate] = useState(startOfThreshold(threshold));

  const timer = useRef<ReturnType<typeof setTimeout>>();

  useEffect(() => {
    if (threshold) {
      const delayedTimeChange = () =>  {
        timer.current = setTimeout(() => {
          delayedTimeChange();
        }, msUntilNext(threshold));

        setDate(startOfThreshold(threshold));
      }

      delayedTimeChange();
    }
    return () => clearTimeout(timer.current);
  }, [threshold]);

  return date;
}
