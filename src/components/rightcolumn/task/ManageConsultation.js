import React, { useState } from 'react'
import Deparment from './Deparment'
import ConsultationCharges from './ConsultationCharges'

function ManageConsultation() {
  const [selectedDepData, setSelectedDepData] = useState([]);
  return (
    <div>
      <h1 className=' text-center text-2xl font-bold text-indigo-600'>Manage Consultation Charge</h1>
    <div className='flex'>
      <div className='w-[20%]'>
      <Deparment selectedDepData={selectedDepData} setSelectedDepData={setSelectedDepData} />
      </div>
      <div className='w-[80%]'>
      <ConsultationCharges selectedDepData={selectedDepData} />
      </div>
      </div>
    </div>
  )
}

export default ManageConsultation
