import React from 'react'

export default function Choices(props) {
  return (
    <div className='w-[100%] md:w-[100%] h-[100%] flex justify-center items-center pt-4 font-barlow font-semibold tracking-widest'>

    <div className='relative w-[100%] h-[100%] flex justify-center items-start gap-3'>
        <div className='md:w-[40%] w-[50%] h-[70%] flex flex-col md:justify-center items-center gap-10 md:order-first order-first'>

            <h1 className='text-white md:text-2xl order-last md:order-first'>YOU PICKED</h1>

            <div className={`${props.resultRound == "YOU WON" ? "myPulse" : ""} ${props.styleBtnSelected[0]} ${props.styleBtnSelected[1]}  relative rounded-full md:w-[210px] md:h-[210px] w-[150px] h-[150px] flex justify-center items-center top-5 left-0`}>

                <div className="cursor-pointer bg-white md:w-[170px] md:h-[170px] w-[110px] h-[110px] p-6 rounded-full flex justify-center items-center"><img className='w-[70px] h-[80px]' src={props.choicePlayer} alt="" /></div>
            </div>

        </div>

        <div className='md:w-[20%] w-[100%] md:h-[70%] h-[200px] absolute bottom-5 flex flex-col md:justify-start justify-center items-center md:gap-10 md:order-2 order-last'>

            <h1 className='text-white text-4xl'>{props.resultRound}</h1>
            
            <button onClick={()=> props.setMadeChoice(false)} className='bg-white text-red px-10 py-3 rounded-lg hover:text-[#C33442ff]'>PLAY AGAIN</button>

        </div>

        <div className='md:w-[40%] w-[50%] h-[70%] flex flex-col md:justify-center items-center gap-10 md:order-3 order-last'>

            <h1 className='text-white md:text-2xl order-last md:order-first'>THE HOUSE PICKED</h1>

            <div className={`${props.resultRound == "YOU LOST" ? "myPulse" : ""} ${props.styleBtnSelectedHouse[0]} ${props.styleBtnSelectedHouse[1]} relative rounded-full md:w-[210px] md:h-[210px] w-[150px] h-[150px]  flex justify-center items-center top-5 left-0 `}>

                <div className="cursor-pointer bg-white md:w-[170px] md:h-[170px] w-[110px] h-[110px] p-6 rounded-full flex justify-center items-center"><img className='w-[70px] h-[80px]' src={props.choiceHouse} alt="" /></div>
            
            </div>


        </div>

        </div>

    </div>
  )
}
