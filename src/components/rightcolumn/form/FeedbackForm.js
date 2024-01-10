import React from 'react'
import {Link, Outlet} from 'react-router-dom'
function FeedbackForm() {
  return (
    <div className='lg:flex'>

        <div className='w-full space-y-32'>
            <div>
            <h1 className='font-bold lg:text-3xl '>Please Select FeedBack Form</h1>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Tenetur, aspernatur.</p>

            </div>

            <div className='mt-3 flex justify-center'>
                <img src="https://www.culturemonkey.io/employee-engagement/content/images/size/w1200/2023/05/employee-feedback-program.png" className='lg:h-[300px] lg:w-[440px] border border-[#3F2860] rounded-md' alt="" />
            </div>
        </div>

        <div className='w-full border  border-[#3F2860] max-h-screen p-5'>
            <ul className='flex justify-around'>
                <Link to="consultant"><li className='p-2 w-32 border  border-[#3F2860] rounded-xl text-center'>Consultant</li></Link>
                <Link to="staff"> <li className='p-2 w-32 border  border-[#3F2860] rounded-xl text-center'>Staff</li></Link>
                <Link to="patient">  <li className='p-2 w-32 border  border-[#3F2860] rounded-xl text-center'>Patient</li></Link> 
            </ul>
            <Outlet/>
        </div>
      
    </div>
  )
}

export default FeedbackForm
