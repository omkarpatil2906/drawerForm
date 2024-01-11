import React from 'react';
import Select from 'react-select';
import  templateData  from './ApiData';

function Consultant() {
  const arrayOptions = templateData.map(item => ({
    value: item.id,
    label: item.name
  }));
  
  return (
    <div className='flex justify-center '>
      <div className='w-[85%] mt-7'>
        <Select options={arrayOptions} />

        <div
          style={{
            color: 'hsl(0, 0%, 40%)',
            display: 'inline-block',
            fontSize: 12,
            fontStyle: 'italic',
            marginTop: '1em',
          }}
        ></div>
      </div>
    </div>
  );
}

export default Consultant;
