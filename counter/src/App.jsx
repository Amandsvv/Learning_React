import { useState } from 'react'
import './App.css'

function App() {
  const [color, setColor] = useState('olive');
  function changeColor(changeToColor) {
    console.log(changeToColor)
   setColor(changeToColor)
  }
  return (
    <>
      <div className='flex justify-around w-full h-screen allign-center' style={{ backgroundColor: color }}>
      </div>
      <div className='fixed flex flex-wrap justify-center bottom-12 inset-x-0 px-2 gap-12 bg-white w-full p-5'>
        <button onClick={() => {changeColor('red')}} className='bg-red-600 cursor-pointer p-2 rounded border'>Red</button>
        <button onClick={() => {changeColor('blue')}} className='bg-blue-600 cursor-pointer pointer p-2 rounded border'>Blue</button>
        <button onClick={() => {changeColor('green')}} className='bg-green-600 cursor-pointer pointer p-2 rounded border'>Green</button>
        <button onClick={() => {changeColor('white')}} className='bg-white cursor-pointer pointer p-2 rounded border'>White</button>
        <button onClick={() => {changeColor('orange')}} className='bg-orange-600 cursor-pointer pointer p-2 rounded border'>Orange</button>
        <button onClick={() => {changeColor('yellow')}} className='bg-yellow-600 cursor-pointer pointer p-2 rounded border'>Yellow</button>
        <button onClick={() => {changeColor('violet')}} className='bg-violet-600 cursor-pointer pointer p-2 rounded border'>Violet</button>
      </div>

    </>
  )
}

export default App
