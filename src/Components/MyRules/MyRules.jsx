import React from 'react'

export default function MyRules(props) {
  return (

    <div className='absolute w-screen h-screen bg-opacity-40 bg-black flex justify-center items-center'>
        <div className='bg-[white] rounded-xl w-[400px] h-[400px] flex flex-col justify-center items-center relative'>

        <div className='flex w-[100%] h-[20%]'>
        <h1 className='text-3xl text-[#3C4060ff] w-[100%] md:w-[50%] h-[100%] md:pl-6 flex justify-center md:justify-start items-center font-barlow font-semibold'>RULES</h1>

        <button className='absolute md:w-[50%] md:items-center md:relative bottom-6 left-[190px] md:justify-end md:flex md:pr-6' onClick={()=>{props.openRules == true ? props.setOpenRules(false) : ""}}><img src="../../../assets/img/icon-close.svg" alt="" /></button>
        </div>

        <div className='w-[100%] h-[80%] flex justify-center items-start md:items-center'>

            <img className='w-[300px] h-auto' src="../../../assets/img/image-rules.svg" alt="" />

        </div>

        </div>
    </div>
  )
}
