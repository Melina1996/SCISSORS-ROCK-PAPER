import React from 'react'


export default function Buttons(props) {
  return (
    <div className='bg-triangle bg-no-repeat w-[370px] h-[370px] md:w-[420px] md:h-[420px] bg-center flex relative'>

        <div className="bg-[#4F6BF3ff] rounded-full w-[140px] h-[140px] md:w-[160px] md:h-[160px] flex justify-center items-center absolute md:top-5 top-[-2px] left-[-2px] md:left-0">
            <button onClick={()=>{props.round(props.Paper);props.setMadeChoice(true)}}  className="cursor-pointer bg-white w-[100px] h-[100px] md:w-[120px] md:h-[120px] p-6 rounded-full flex justify-center items-center"><img className='w-[40px] h-[50px] md:w-[70px] md:h-[80px]' src="../../../assets/img/icon-paper.svg" alt="" /></button>
        </div>
        <div className="bg-[#EFA41Cff] rounded-full w-[140px] h-[140px] md:w-[160px] md:h-[160px] flex justify-center items-center absolute md:top-5 md:right-0 top-[-2px] right-[-2px]">
            <button onClick={()=>{props.round(props.Scissors);props.setMadeChoice(true)}} className="cursor-pointer bg-white w-[100px] h-[100px] md:w-[120px] md:h-[120px] p-6 rounded-full flex justify-center items-center"><img className='w-[40px] h-[50px] md:w-[70px] md:h-[80px]' src="../../../assets/img/icon-scissors.svg" alt="" /></button>
        </div>        
        <div className="bg-[#DF405Eff] rounded-full w-[140px] h-[140px] md:w-[160px] md:h-[160px] flex justify-center items-center absolute md:bottom-5 bottom-8 left-1/2 transform -translate-x-1/2">
            <button onClick={()=>{props.round(props.Rock);props.setMadeChoice(true)}} className="cursor-pointer bg-white w-[100px] h-[100px] md:w-[120px] md:h-[120px] p-6 rounded-full flex justify-center items-center"><img className='w-[40px] h-[50px] md:w-[70px] md:h-[80px]' src="../../../assets/img/icon-rock.svg" alt="" /></button>
        </div>

    </div>
  )
}
