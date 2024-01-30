import React, { useState } from 'react'
import Deparment from './Deparment'
import ConsultationCharges from './ConsultationCharges'

function ManageConsultation() {
  const [selectedDepData, setSelectedDepData] = useState([]);
  return (
    <div>
      <h1 className=' text-center text-2xl font-extrabold text-[#3F2860]'>Manage Consultation Charge</h1>
      <div className='flex mt-4'>
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
