import React, {useState, useEffect} from 'react';
import './App.css';

function App() {

  const [seconds, setSeconds] = useState(5)
  const [minutes, setMinutes] = useState(0)
  const [displayMessage, setDisplayMessage] = useState(false)

  useEffect(()=> {
    let interval = setInterval(() => {
      clearInterval(interval)

      if(seconds === 0){
      if(minutes !== 0){
        setSeconds(59);
        setMinutes(minutes - 1);
      }else{
        let minutes = displayMessage ? 24 : 4
        let seconds = 59

        setMinutes(minutes)
        setSeconds(seconds)
        setDisplayMessage(!displayMessage)
      }}else{
        setSeconds(seconds - 1)
      }
    }, 1000)
  },[seconds])

  const handleAdd = () => {
    setMinutes((prev) => 
      prev + 1
    )
  }
  const handleSubtract = () => {
    setMinutes((prev) => 
      prev - 1
    )
  }

  const timerMinute = minutes < 10 ? `0${minutes}` : minutes;
  const timerSecond = seconds < 10 ? `0${seconds}` : seconds;

  return (
    <div className="pomodoro">
      {displayMessage && <h1 className='message'>Break time. your next session starts in:</h1>}
      <div className='main'>
        <p>Increase timer below</p>
        <button className="buttons" onClick={handleAdd}>+</button>
        <button className="buttons" onClick={handleSubtract}>-</button>
        <p className='timer'>{timerMinute}:{timerSecond}</p>
      </div>
    </div>
  );
}

export default App;
