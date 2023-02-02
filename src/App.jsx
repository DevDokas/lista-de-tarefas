import React, { useState } from 'react'

function App() {
  const [count, setCount] = useState(0)

  return (
    <div className='container'>
      <div>
        <header>
          <h1>Tarefas</h1>
        </header>
        <section>
          <button> + </button>
        </section>
      </div>
    </div>
  )
}

export default App
