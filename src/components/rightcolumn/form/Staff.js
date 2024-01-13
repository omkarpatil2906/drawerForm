import React from 'react'
import Select from 'react-select';


function Staff() {
  const options = [
    { id:1, value: 'chocolate', label: 'Chocolate' },
    { id:2, value: 'strawberry', label: 'Strawberry' },
    {  id:3, value: 'vanilla', label: 'Vanilla' }
  ]
  return (
    <div className='flex justify-center '>
      <div className='w-[85%] mt-7 space-y-3'>
        <Select label="select department" placeholder="" />
        <Select options={options} defaultMenuIsOpen />
        <div style={{color: 'hsl(0, 0%, 40%)',display: 'inline-block', fontSize: 12, fontStyle: 'italic', marginTop: '1em', }}></div>
      </div>
    </div>
  )
}

export default Staff
