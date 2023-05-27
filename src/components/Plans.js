import React from 'react'

function Plans() {
  return (
    <div className='py-[10px] md:py-[100px]'>
        <div className='max-w-[1600px] gap-3  mx-auto md:grid grid-cols-3'>
            <div className='bg-gray-100 shadow-2xl border  h-[500px] hover:scale-105 duration-500'>1</div>
            <div className='mt-[5px] bg-gray-100 shadow-2xl border h-[500px] hover:scale-105 duration-500'>2</div>
            <div className='mt-[5px] bg-gray-100 shadow-2xl border  h-[500px] hover:scale-105 duration-500'>3</div>
        </div>
    </div>
  )
}

export default Plans