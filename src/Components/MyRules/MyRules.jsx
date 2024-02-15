import React from 'react'

export default function MyRules(props) {
  return (

    <div className='absolute w-screen h-screen bg-opacity-40 bg-black flex justify-center items-center'>
        <div className='bg-[white] rounded-xl w-[400px] h-[400px] flex flex-col justify-center items-center'>

            <div className='w-[100%] h-[20%] flex justify-center items-center'>

                <h1 className='text-2xl w-[50%] h-[20%] pl-6 flex justify-start items-center'>RULES</h1>

                <div className='text-2xl w-[50%] h-[20%] pr-6 justify-end flex items-center'>

                    <button onClick={()=>{props.openRules == true ? props.setOpenRules(false) : ""}}><img src="../../../assets/img/icon-close.svg" alt="" /></button>

                </div>


            </div>

            <div className='w-[100%] h-[80%] flex justify-center items-center'>

                <img className='w-[300px] h-auto' src="../../../assets/img/image-rules.svg" alt="" />

            </div>

        </div>
    </div>
  )
}
