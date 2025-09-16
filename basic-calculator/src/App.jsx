
import { useState } from 'react'
import './App.css'

function App() {
  const [expression, setExpression] = useState("");

  const handleClick = (value) => {
    setExpression((prev) => prev + value);
  };

  const handleClear = () => setExpression("");

  const handleBackspace = () => {
    setExpression((prev) => prev.slice(0, -1));
  };

  const handleEqual = () => {
    try {
      const result = eval(expression);
      setExpression(String(result));
    } catch {
      setExpression("Error");
    }
  };

  const handleDecimal = () => {
    const parts = expression.split(/[\+\-\*\/%]/);
    const lastPart = parts[parts.length - 1];

    if (lastPart.includes(".")) return;

    setExpression((prev) => prev + ".");
  };


  return (
    <div className='calculator-container'>
      <div className='input-box'>{expression || "0"}</div>
      <div className='btn-container' >
        <div className='row-btns'>
          <button onClick={() => handleClear()}>AC</button>
          <button onClick={() => handleClick("%")}>%</button>
          <button onClick={handleBackspace}>⌫</button>
          <button onClick={() => handleClick("/")}>/</button>
        </div>

        <div className='row-btns'>
          <button onClick={() => handleClick("7")}>7</button>
          <button onClick={() => handleClick("8")}>8</button>
          <button onClick={() => handleClick("9")}>9</button>
          <button onClick={() => handleClick("*")}>X</button>
        </div>

        <div className='row-btns'>
          <button onClick={() => handleClick("4")}>4</button>
          <button onClick={() => handleClick("5")}>5</button>
          <button onClick={() => handleClick("6")}>6</button>
          <button onClick={() => handleClick("-")}>-</button>
        </div>

        <div className='row-btns'>
          <button onClick={() => handleClick("1")}>1</button>
          <button onClick={() => handleClick("2")}>2</button>
          <button onClick={() => handleClick("3")}>3</button>
          <button onClick={() => handleClick("+")}>+</button>
        </div>

        <div className='row-btns'>
          <button onClick={() => handleClick("00")}>00</button>
          <button onClick={() => handleClick("0")}>0</button>
          <button onClick={handleDecimal}>.</button>
          <button className='equalTo-btn' onClick={() => handleEqual()}>=</button>
        </div>
      </div>
    </div>
  )
}

export default App
