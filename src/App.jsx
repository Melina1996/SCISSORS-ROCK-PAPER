import { useState } from 'react'
import Score from './Components/Score/Score'
import Buttons from './Components/Buttons/Buttons'


function App() {


  return (
    <div className='w-screen h-screen bg-[#182343ff] flex flex-col justify-center items-center'>

    <div className='w-[80%] h-[30%] flex justify-center items-center'>
      <Score />
    </div>

    <div className='w-[80%] h-[70%] flex justify-center items-center'>
      <Buttons />
    </div>

    </div>
  )
}

export default App
