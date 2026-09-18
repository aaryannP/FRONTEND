import { useEffect, useState } from "react";

export function useCurrentTime() {
  const [timer, setTimer] = useState(new Date());

  useEffect(() => {
    const timerInterval = setInterval(() => {
      setTimer(new Date());
    }, 1000);

    return () => clearInterval(timerInterval);
  }, []);

  return timer;
}
