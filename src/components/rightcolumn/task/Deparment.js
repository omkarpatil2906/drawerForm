import React from 'react';
import Select from 'react-select';

function Department({ selectedDepData, setSelectedDepData }) {
  const depData = [
    
    { id:1, department:"pharmacy"},
    { id:2, department:"Casualty/Emergency"},
    { id:3, department:"Neonatal"},
    { id:4, department:"Dietetics"},
    { id:5, department:"Hematology1"},
    { id:6, department:"Oncology"},
    { id:7, department:"Physiotherapy"},
    { id:8, department:"Pathology"},
    { id:9, department:"Critical Care"},
    { id:10,department:"Cardiology"},
  ];



  const options = [
    { value: 'Multispeciality', label: 'Alliance Multispeciality Hospital' },
  ];

  const handleDepDataSelect =  (department) => {
    if (selectedDepData.includes(department)) {
        setSelectedDepData(selectedDepData.filter(dep => dep !== department));
    } else {
        setSelectedDepData([...selectedDepData, department]);
        console.log(department);
    }
};

  return (
    <div className='m-2'>
      <Select
        options={options}
        onChange={handleDepDataSelect}
        defaultValue={options}
      />
      <div className='mt-3 border'>
        <table>
          <thead>
            <tr>
              <th className='bg-[#3F2860] text-white text-center p-2 w-[100vh]'>Department</th>
            </tr>
          </thead>
          <tbody>
            {depData.map((user) => (
              <tr key={user.id}>
                <td className={`border p-2 cursor-pointer ${selectedDepData.includes(user.department) ? 'bg-[#34568B] text-white' : ''}`}
                onClick={()=>handleDepDataSelect(user.department)}>
                  {user.department}
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}

export default Department;
