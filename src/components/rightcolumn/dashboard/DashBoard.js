
import React from 'react'
import DashInfo from './DashInfo'
import DashChart from './DashChart'


function DashBoard() {
 
  return (
    <div className='bg-violet-100 '>
      <div className='w-[95%] h-screen mx-auto'>
        <h1 className=" text-2xl font-bold uppercase p-3">Dashboard</h1>

        <div>
         <DashInfo/>
         <DashChart/>
        </div>

      </div>
    </div>
  )
}

export default DashBoard


// react google Chat
// react count up


