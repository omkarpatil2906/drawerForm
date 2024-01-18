import React from 'react'
import Select from 'react-select'

function Deparment() {
   
  const depData =[
    "pharmacy" , 
    "Casualty/Emergency" ,
    "Neonatal",
    "Dietetice",
    "Hematology1",
    "Oncology",
    "Physiotheraphy",
    "Pathalogy",
    "Critic Care",
    "Cardiology",
  ]

    const options = [
        { value: 'Multispeciality', label: 'Allience Multispeciality Hospital' }
      ]
  return (
    <div className='m-2'>
      <Select options={options} defaultValue={options[0]} />

      <div className='mt-3 border'>
        <table>
          <tr>
            <th className='bg-blue-200 text-center p-2 w-[100vh]'>Deparment</th>
          </tr>
          {
            depData.map((user)=>(
              <tr>
                <td className='border p-2'>{user}</td>
              </tr>
            ))
          }
        </table>
      </div>
    </div>
  )
}

export default Deparment
