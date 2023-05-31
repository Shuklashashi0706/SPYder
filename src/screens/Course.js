import React from 'react'

function Course() {
  return (
    <div className='bg-[#2699fb]  flex  h-screen'>
      <div className='max-w-[80%] pl-[30px] mt-[40px]'>
        <h1 className='font-bold text-black text-[80px]'>Coursed offered:</h1>
          <ul className='text-white font-semibold text-[50px]'>
            <li>Cyber Security</li>
            <li>Ethical Hacking</li>
            <li>Penteration Testing</li>
          </ul>
      </div>
    </div>
  )
}

export default Course