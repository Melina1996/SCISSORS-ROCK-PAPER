import React from 'react'


export default function Buttons() {
  return (
    <div className='bg-triangle  bg-no-repeat w-[420px] h-[420px] bg-center flex relative'>

        <div className="bg-[#4F6BF3ff] rounded-full w-[160px] h-[160px] flex justify-center items-center absolute top-5 left-0">
            <buttons className="bg-white w-[120px] h-[120px] p-6 rounded-full flex justify-center items-center"><img className='w-[70px] h-[80px]' src="../../../assets/img/icon-paper.svg" alt="" /></buttons>
        </div>
        <div className="bg-[#EFA41Cff] rounded-full w-[160px] h-[160px] flex justify-center items-center absolute top-5 right-0">
            <buttons className="bg-white w-[120px] h-[120px] p-6 rounded-full flex justify-center items-center"><img className='w-[70px] h-[80px]' src="../../../assets/img/icon-scissors.svg" alt="" /></buttons>
        </div>        
        <div className="bg-[#DF405Eff] rounded-full w-[160px] h-[160px] flex justify-center items-center absolute bottom-5 left-1/2 transform -translate-x-1/2">
            <buttons className="bg-white w-[120px] h-[120px] p-6 rounded-full flex justify-center items-center"><img className='w-[70px] h-[80px]' src="../../../assets/img/icon-rock.svg" alt="" /></buttons>
        </div>

    </div>
  )
}
