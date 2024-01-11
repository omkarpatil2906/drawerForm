import React from 'react'
import {NavLink, Outlet} from 'react-router-dom'
function FeedbackForm() {
  return (
    <div className='lg:flex'>

        <div className='w-full space-y-32'>
            <div>
            <h1 className='font-bold lg:text-3xl '>Please Select FeedBack Form</h1>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Tenetur, aspernatur.</p>

            </div>

            <div className='mt-3 flex justify-center'>
                <img src="https://www.culturemonkey.io/employee-engagement/content/images/size/w1200/2023/05/employee-feedback-program.png" className='lg:h-[300px] lg:w-[440px] shadow-xl' alt="" />
            </div>
        </div>

        <div className='w-full border-2 rounded-md  border-[#3F2860] max-h-screen p-5'>
            <ul className='flex font-bold justify-around'>
                <NavLink to="consultant"><li className='p-2 text-[8px] md:w-32 md:text-base border-2 border-[#3F2860] rounded-md text-center'>Consultant</li></NavLink>
                <NavLink to="staff"> <li className='p-2 text-[8px] md:w-32 border-2 md:text-base border-[#3F2860] rounded-md text-center'>Staff</li></NavLink>
                <NavLink to="patient">  <li className='p-2 md:w-32 text-[8px] border-2 md:text-base  border-[#3F2860] rounded-md text-center'>Patient</li></NavLink> 
            </ul>
            <Outlet/>
        </div>
      
    </div>
  )
}

export default FeedbackForm
