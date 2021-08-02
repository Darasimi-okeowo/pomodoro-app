import React, {useState, useEffect} from 'react';
import './App.css';

function App() {
  const [input, setInput] = useState('')
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
  const handleInput = (e) => {
    setInput(e.target.value)
  }
  const handleSubmit = () => {
    if (input === '') return
    setMinutes(+input)
  }

  const timerMinute = minutes < 10 ? `0${minutes}` : minutes;
  const timerSecond = seconds < 10 ? `0${seconds}` : seconds;

  return (
    <div className="pomodoro">
      <input className='inputs' type='number' name="input" onChange={handleInput} value={input} placeholder='enter the amount of minutes3'/>
      <button onClick={handleSubmit}>Set Minute</button>
      {displayMessage && <h1 className='message'>Break time. your next session starts in:</h1>}
        <p className='timer'>{timerMinute}:{timerSecond}</p>
      <div className='main'>
        <p>Increase timer above</p>
        <button className="buttons" onClick={handleAdd}>+</button>
        <button className="buttons" onClick={handleSubtract}>-</button>
      </div>
    </div>
  );
}

export default App;
