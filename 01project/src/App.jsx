import { useState } from 'react'
import Todo from './Todo'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <div className='w-50 mx-auto mt-40 flex flex-col gap-10'>
        <h1 className='text-xl text-center'>Vite + React</h1>
        <div className="card bg-red-500 p-5 rounded-2xl text-center">
          <button className='bg-white text-black p-2 rounded-xl mb-5 pointer-cursor' onClick={() => setCount((count) => count + 1)}>
            count is {count}
          </button>
          <p>
            Edit <code>src/App.jsx</code> and save to test HMR
          </p>
        </div>
        <p className="text-2xl">
          Click on the Vite and React logos to learn more
        </p>
      </div>
      <Todo/>
    </>
  )
}

export default App
