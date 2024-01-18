import React from 'react'
import Deparment from './Deparment'
import ConsultationCharges from './ConsultationCharges'

function ManageConsultation() {
  return (
    <div>
      <h1 className=' text-center text-2xl font-bold text-indigo-600'>Manage Consultation Charge</h1>
    <div className='flex'>
      <div className='w-[20%]'>
        <Deparment/>
      </div>
      <div className='w-[80%]'>
        <ConsultationCharges />
      </div>
      </div>
    </div>
  )
}

export default ManageConsultation
