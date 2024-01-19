import { useState } from 'react'

import './App.css'

function App() {
  const [count, setCount] = useState(0)

  const addButton = ()=> {
    if(count<10){
      setCount((count)=>count+1);
    }
  }
  
  const subButton = ()=> {
    if(count>0){
      setCount((count)=>count-1);
    }
  }
          
          

  return (
    <>
      
      <h1>your count is</h1>
      <div className="card">
        <p>
          {count}
        </p>
        <button onClick={addButton}>
          +
        </button>
        <button onClick={subButton}>
          -
        </button>
        
      </div>
      
    </>
  )
}

export default App
