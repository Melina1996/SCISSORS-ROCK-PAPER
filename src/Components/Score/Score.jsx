import React from 'react'

export default function Score() {
  return (
    <div className='w-[600px] h-[150px] border-[#5E6F89ff] border-4 border-solid rounded-xl bg-transparent flex justify-center items-center'>

        <div className='w-[50%] h-[100%] text-white text-4xl flex flex-col justify-center pl-5'>

            <h1>ROCK</h1>
            <h1>PAPER</h1>
            <h1>SCISSORS</h1>

        </div>

        <div className='w-[50%] h-[100%] flex justify-end items-center pr-5'>
 
            <div className='w-[130px] h-[80%] shadow-lg rounded-lg bg-white flex flex-col justify-start items-center pt-3 gap-1'>

                <h1 className='text-[#374699ff]'>SCORE</h1>
                <h1 className='text-6xl text-[#565269ff]'>0</h1>

            </div>

        </div>

    </div>
  )
}
