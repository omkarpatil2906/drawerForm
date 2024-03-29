import React from 'react'
import Select from 'react-select';
import { useNavigate } from 'react-router-dom'


function Staff() {
  const options = [
    { id: 1, value: 'Radiology template for consultant', label: 'Radiology template for consultant', path: '/temp' },
    { id: 2, value: 'Pathiology template for consultant', label: 'Pathiology template for consultant', path: '/temp' },
    { id: 3, value: 'Cardiology template for consultant', label: 'Cardiology template for consultant', path: '/temp' },
    { id: 4, value: 'Radiology template for consultant', label: 'Radiology template for consultant', path: '/temp' },
    { id: 5, value: 'Pathiology template for consultant', label: 'Pathiology template for consultant', path: '/temp' },
    { id: 6, value: 'Cardiology template for consultant', label: 'Cardiology template for consultant', path: '/temp' },
  ]
  const options1 = [
    { id: 1, label: "All" }
  ]


  const navigate = useNavigate()
  const handleSelectChange = (option) => {
    if (option && option.path) {
      navigate(option.path)
    }
  };

  return (
    <div className='m-5 space-y-3'>
      <Select options={options1} defaultValue={options1} isDisabled />
        <Select options={options}  onChange={handleSelectChange}  menuIsOpen  />
    </div>
  )
}

export default Staff
