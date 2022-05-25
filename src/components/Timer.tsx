import React, { FC, useEffect, useRef, useState } from "react";
import { Colors } from "../models/Colors";
import { Player } from "../models/Player";

interface TimerProps {
  currentPlayer: Player | null;
  restart: () => void;
}

const Timer: FC<TimerProps> = ({currentPlayer, restart}) => {
  const [blackTime, setBlackTime] = useState(300);
  const [whiteTime, setWhiteTime] = useState(300);
  const timer = useRef<null | ReturnType<typeof setInterval>>(null);

  useEffect(() => {
    startTimer();
  }, [currentPlayer])

  function startTimer() {
    if(timer.current) {
      clearInterval(timer.current);
    }

    const callback = currentPlayer?.color === Colors.WHITE ? decrementWhiteTimer : decrementBlackTimer;
    timer.current = setInterval(callback, 1000);
  }

  function decrementBlackTimer() {
    setBlackTime(prev => prev  - 1);
  }

  function decrementWhiteTimer() {
    setWhiteTime(prev => prev - 1);
  }

  function handlerRestart() {
    setBlackTime(300);
    setWhiteTime(300);
    restart();
  }

  return(
    <div className="timer">
      <div className="timer__btn">
        <button onClick={handlerRestart}>Заново</button>
      </div>
      <div className="timer__players">
        <h3>Черные - {blackTime}</h3>
        <h3>Белые - {whiteTime}</h3>
      </div>
    </div>
  )
}

export default Timer;