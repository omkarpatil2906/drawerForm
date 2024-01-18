import React, { useState } from 'react';
import MenuItem from '@mui/material/MenuItem';
import Select from '@mui/material/Select';
import InputLabel from '@mui/material/InputLabel';
import FormControl from '@mui/material/FormControl';
import { Button, TextField } from '@mui/material';
import FormControlLabel from '@mui/material/FormControlLabel';
import Checkbox from '@mui/material/Checkbox';
import { DemoContainer } from '@mui/x-date-pickers/internals/demo';
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs';
import { LocalizationProvider } from '@mui/x-date-pickers/LocalizationProvider';
import { TimePicker } from '@mui/x-date-pickers/TimePicker';
import { renderTimeViewClock } from '@mui/x-date-pickers/timeViewRenderers';
import { MdDelete } from "react-icons/md";



function ConsultationCharges() {

  const obj = {
    fromTime: "",
    toTime: "",
  }

  const [formData, setFormData] = useState(obj);
  const [tableData, setTableData] = useState([]);
  const[followCharges, setFollowCharges] = useState(false)

  let d = new Date();
  let day = d.getDay()

  const handleOnChange = (key, value) => {
    setFormData({...formData, [key]: value});
  };

  const submitData = () => {
    setTableData([...tableData, formData])
  }


  const handleDelete = (i) => {
   let Data = [...tableData]
   Data.splice(i,1) 
   setTableData(Data)
  }
 



  return (
    <div className='m-3 '>
      <div className='flex gap-3'>
        <div className='grid grid-cols-2 gap-3 w-[60%]'>
          <div>
            <FormControl fullWidth>
              <InputLabel id="demo-simple-select-label">Tariff</InputLabel>
              <Select label="Tariff" defaultValue={1}>
                <MenuItem value={"1"}  >Hosptal</MenuItem>
              </Select>
            </FormControl>

          </div>

          <div>
            <FormControl fullWidth>
              <InputLabel id="demo-simple-select-label">Week</InputLabel>
              <Select label="Week" defaultValue={day}>
                <MenuItem value={7}>Sunday</MenuItem>
                <MenuItem value={1}>Monday</MenuItem>
                <MenuItem value={2}>Tuesday</MenuItem>
                <MenuItem value={3}>Wednesday</MenuItem>
                <MenuItem value={4}>Thursday</MenuItem>
                <MenuItem value={5}>Friday</MenuItem>
                <MenuItem value={6}>Saturday</MenuItem>
              </Select>
            </FormControl>
          </div>

          <div>
            <LocalizationProvider dateAdapter={AdapterDayjs}>
              <DemoContainer components={['TimePicker']}>
                <TimePicker
                  label="From Time"
                  viewRenderers={{
                    hours: renderTimeViewClock,
                    minutes: renderTimeViewClock,
                    seconds: renderTimeViewClock,
                  }}
                  onChange={(value) => handleOnChange('fromTime', value)}
                  className='w-[100%]'
                />

              </DemoContainer>
            </LocalizationProvider>
          </div>

          <div>
            <LocalizationProvider dateAdapter={AdapterDayjs}>
              <DemoContainer components={['TimePicker']}>
                <TimePicker
                  label="To Time"
                  viewRenderers={{
                    hours: renderTimeViewClock,
                    minutes: renderTimeViewClock,
                    seconds: renderTimeViewClock,
                  }}
                  onChange={(value) => handleOnChange('toTime', value)}
                  className='w-[100%]'
                />
              </DemoContainer>
            </LocalizationProvider>
          </div>

          <div>
            <TextField type='number' fullWidth label="Consultation Charges" />
          </div>

          <div>
            <TextField type='number' disabled={!followCharges}  fullWidth label="Follow up Charges" />
          </div>

        </div>
        <div className='flex flex-col justify-end '>
          <div>
            <FormControlLabel control={<Checkbox />} label="Is Free" />
            <FormControlLabel control={<Checkbox />} onChange={(e) => setFollowCharges(e.target.checked)} label="Follow up Application" />
          </div>
          <div>
            <FormControlLabel control={<Checkbox defaultChecked />} label="Active" />
            <Button>Reset</Button>
            <Button onClick={submitData}>Add</Button>

          </div>
        </div>

      </div>


      <div className='mt-7'>
        <table className='w-full'>
          <tr className='bg-blue-300  '>
            <th className='p-3'>Action</th>
            <th className='p-3'>From Time</th>
            <th className='p-3'>To time</th>
            <th className='p-3'>Consultation Charge</th>
            <th className='p-3'>Follow Up charge</th>
            <th className='p-3'>Active</th>
            <th className='p-3'>isfree</th>
          </tr>
          {
            tableData.map((item , i) => (
              <tr className='text-center' key={i} >
                <td className='p-3 text-red-600 text-2xl text-center' onClick={()=>handleDelete(i)}><MdDelete/></td>
                <td className='p-3 '>{item.fromTime.format("HH:MM A")}</td>
                <td className='p-3'>{item.toTime.format("HH:MM A")}</td>
              </tr>
            ))
          }

        </table>
      </div>

    </div>
  )
}

export default ConsultationCharges
