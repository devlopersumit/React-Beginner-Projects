
import './App.css'

function App() {
  return (
    <div className='calculator-container'>
      <input type='text' className='input-box' />
      <div className='btn-container' >
        <div className='row-btns'>
          <button>AC</button>
          <button>%</button>
          <button>x</button>
          <button>/</button>
        </div>

        <div className='row-btns'>
          <button>7</button>
          <button>8</button>
          <button>9</button>
          <button>X</button>
        </div>

        <div className='row-btns'>
          <button>4</button>
          <button>5</button>
          <button>6</button>
          <button>-</button>
        </div>

        <div className='row-btns'>
          <button>1</button>
          <button>2</button>
          <button>3</button>
          <button>+</button>
        </div>

        <div className='row-btns'>
          <button>00</button>
          <button>0</button>
          <button>.</button>
          <button className='equalTo-btn'>=</button>
        </div>
      </div>
    </div>
  )
}

export default App
