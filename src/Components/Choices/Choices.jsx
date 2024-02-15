import React from 'react'

export default function Choices(props) {
  return (
    <div className='w-[70%] h-[100%] flex justify-center items-center pt-4'>

        <div className='w-[30%] h-[100%] flex flex-col justify-start items-center gap-10'>

            <h1 className='text-white text-2xl'>YOU PICKED</h1>

            <div className={`${props.resultRound == "YOU WON!" ? "myPulse" : ""} relative rounded-full w-[210px] h-[210px] flex justify-center items-center top-5 left-0 ${props.choicePlayer == props.Scissors? "bg-[#EFA41Cff]" 
        : props.choicePlayer == props.Rock ? "bg-[#DF405Eff]" 
        : props.choicePlayer == props.Paper ? "bg-[#4F6BF3ff]" 
        : ""}`}>

                <div className="cursor-pointer bg-white w-[170px] h-[170px] p-6 rounded-full flex justify-center items-center"><img className='w-[70px] h-[80px]' src={props.choicePlayer} alt="" /></div>
            </div>

        </div>

        <div className='w-[30%] h-[100%] flex flex-col justify-center items-center gap-10'>

            <h1 className='text-white text-2xl'>{props.resultRound}</h1>
            <button onClick={()=> props.setMadeChoice(false)} className='bg-white text-red px-10 py-3 rounded-lg'>PLAY AGAIN</button>

        </div>

        <div className='w-[30%] h-[100%] flex flex-col justify-start items-center gap-10'>

            <h1 className='text-white text-2xl'>THE HOUSE PICKED</h1>

            <div className={`${props.resultRound == "YOU LOST!" ? "myPulse" : ""} relative rounded-full w-[210px] h-[210px] flex justify-center items-center top-5 left-0 ${props.choiceHouse == props.Scissors? "bg-[#EFA41Cff]" 
        : props.choiceHouse == props.Rock ? "bg-[#DF405Eff]" 
        : props.choiceHouse == props.Paper ? "bg-[#4F6BF3ff]" 
        : ""}`}>

                <div className="cursor-pointer bg-white w-[170px] h-[170px] p-6 rounded-full flex justify-center items-center"><img className='w-[70px] h-[80px]' src={props.choiceHouse} alt="" /></div>
            
            </div>

        </div>

    </div>
  )
}
