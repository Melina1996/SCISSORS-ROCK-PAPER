import React from 'react'

export default function Score(props) {
  return (
    <div className='w-[600px] h-[150px] border-[#5E6F89ff] border-4 border-solid rounded-xl bg-transparent flex justify-center items-center'>

        <div className='w-[50%] h-[100%] text-white font-barlow font-semibold text-4xl flex flex-col justify-center pl-5'>

            <h1 className='p-0 m-0'>ROCK</h1>
            <h1 className='p-0 m-0'>PAPER</h1>
            <h1 className='p-0 m-0'>SCISSORS</h1>

        </div>

        <div className='w-[50%] h-[100%] flex justify-end items-center pr-5'>
 
            <div className='w-[130px] h-[80%] shadow-lg rounded-lg bg-white flex flex-col justify-start items-center pt-3 gap-1'>

                <h1 className='text-[#374699ff] font-barlow font-semibold tracking-widest'>SCORE</h1>
                <h1 className='text-6xl text-[#565269ff] font-barlow font-semibold'>{props.scorePlayer}</h1>

            </div>

        </div>

    </div>
  )
}
