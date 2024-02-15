import React from 'react'

export default function ResultRound(props) {
  return (

    <div className='md:w-[24%] w-[100%] md:h-[70%] h-[200px] absolute bottom-5 flex flex-col md:justify-start justify-center items-center md:gap-10 md:order-2 order-last'>

    <h1 className='text-white text-4xl'>{props.resultRound}</h1>
    
    <button onClick={()=> props.setMadeChoice(false)} className='bg-white text-red px-10 py-3 rounded-lg hover:text-[#C33442ff]'>PLAY AGAIN</button>

    </div>
  )
}
