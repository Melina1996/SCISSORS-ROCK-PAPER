import React from 'react'

export default function Result(props) {
  return (
    <div className='w-[500px] h-[500px] flex flex-col justify-start items-center pt-5 gap-5'>
        <h1 className='text-6xl text-white font-barlow'>GAME OVER!</h1>
        {/* onClick (1)the player's score is set to 0, (2) madeChoice is set to false */}
        <button className='text-black text-lg font-barlow w-[150px] h-[50px] rounded bg-[white]' onClick={()=>{props.setScorePlayer(0);props.setMadeChoice(false)}}>PLAY AGAIN</button>
    </div>
  )
}
