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
import { toast, Bounce } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

function ConsultationCharges({ selectedDepData }) {
  const d = new Date();
  const daysOfWeek = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];
  const defaultDay = daysOfWeek[d.getDay()];
  console.log(defaultDay);

  const obj = {
    fromTime: "",
    toTime: "",
    consultationCharges: "",
    followCharges: "",
    isFree: false,
    followUpApplication: false,
    day: defaultDay
  };

  const [formData, setFormData] = useState(obj);
  const [tableData, setTableData] = useState([]);

  const HandleChange = (event) => {
    const { name, value, type, checked } = event.target;

    setFormData((prevFormData) => {
      if (type === 'checkbox') {
        return { ...prevFormData, [name]: checked };
      } else {
        return { ...prevFormData, [name]: value, day: name === 'week' ? value : defaultDay };
      }
    });
  };

  const AddFromTime = (e) => {
    setFormData({ ...formData, fromTime: e.format("HH:MM A") });
  };

  const AddToTime = (e) => {
    setFormData({ ...formData, toTime: e.format("HH:MM A") });
  };

  const submitData = () => {
    if (selectedDepData.length === 0) {
      toast.warning('Please select at least one department!', {
        position: 'top-right',
        autoClose: 1000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: "dark",
        transition: Bounce,
      });
      return;
    }

    const isTimeSlotExists = tableData.some((item) => {
      const sameDay = item.day === formData.day;
      return sameDay && (
        (formData.fromTime >= item.fromTime && formData.fromTime < item.toTime) ||
        (formData.toTime > item.fromTime && formData.toTime <= item.toTime) ||
        (formData.toTime <= item.fromTime && formData.toTime >= item.toTime)
      );
    });
    if (isTimeSlotExists) {
      toast.warning('Time slot already booked!', {
        position: 'top-right',
        autoClose: 1000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: "dark",
        transition: Bounce,
      });
    }
    else if (
      formData.fromTime === "" ||
      formData.toTime === "" ||
      (formData.isFree ? false : formData.consultationCharges === "") ||
      (formData.followUpApplication && formData.followCharges === "")


    ) {
      toast.error('Fill all input Fields!', {
        position: "top-right",
        autoClose: 1000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: "dark",
        transition: Bounce,
      });
    } else {
      setTableData([...tableData, { ...formData, day: formData.day }]);

      toast.success('Appointment Successful!', {
        position: "top-right",
        autoClose: 1000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: "dark",
        transition: Bounce,
      });
    }
  };


  const resetData = () => {
    setFormData({
      fromTime: "",
      toTime: "",
      consultationCharges: "",
      followCharges: "",
      isFree: false,
      followUpApplication: false,
    })
  }

  const handleDelete = (i) => {
    let Data = [...tableData];
    Data.splice(i, 1);
    setTableData(Data);
  };

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
              <Select label="Week" onChange={HandleChange} defaultValue={defaultDay} name="week">
                <MenuItem value="Monday">Monday</MenuItem>
                <MenuItem value="Tuesday">Tuesday</MenuItem>
                <MenuItem value="Wednesday">Wednesday</MenuItem>
                <MenuItem value="Thursday">Thursday</MenuItem>
                <MenuItem value="Friday">Friday</MenuItem>
                <MenuItem value="Saturday">Saturday</MenuItem>
                <MenuItem value="Sunday">Sunday</MenuItem>
              </Select>

            </FormControl>
          </div>

          <div>
            <LocalizationProvider dateAdapter={AdapterDayjs}>
              <DemoContainer components={['TimePicker']}>
                <TimePicker
                  label="From Time"
                  viewRenderers={{ hours: renderTimeViewClock, minutes: renderTimeViewClock, seconds: renderTimeViewClock, }}
                  onChange={AddFromTime}
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
                  onChange={AddToTime}
                  className='w-[100%]'
                />
              </DemoContainer>
            </LocalizationProvider>
          </div>

          <div>
            <TextField
              type='number'
              name='consultationCharges'
              disabled={formData.isFree}
              value={formData.consultationCharges}
              onChange={HandleChange}
              fullWidth
              label="Consultation Charges"
            />
          </div>
          <div>
            <TextField
              type='number'
              disabled={!formData.followUpApplication}
              onChange={HandleChange}
              name='followCharges'
              value={formData.followCharges}
              fullWidth
              label="Follow up Charges"
            />
          </div>

        </div>
        <div className='flex flex-col justify-end '>
          <div>
            <FormControlLabel
              control={<Checkbox />}
              checked={formData.isFree}
              onChange={HandleChange}
              name="isFree"
              label="Is Free"
            />
            <FormControlLabel
              control={<Checkbox />}
              checked={formData.followUpApplication}
              onChange={HandleChange}
              name="followUpApplication"
              label="Follow up Application"
            />
          </div>
          <div>
            <FormControlLabel control={<Checkbox defaultChecked />} label="Active" />
            <Button onClick={resetData}>Reset</Button>
            <Button onClick={submitData}>Add</Button>
          </div>
        </div>
      </div>

      {tableData.length > 0 ? (
      <div className="overflow-hidden rounded-lg border border-gray-200 shadow-md mt-5">
        <table className="w-full border-collapse bg-white text-left text-sm text-gray-500">
          <thead className="bg-blue-200">
            <tr>
              <th scope="col" className="px-6 py-4 font-medium text-gray-900">Action</th>
              <th scope="col" className="px-6 py-4 font-medium text-gray-900">From Time</th>
              <th scope="col" className="px-6 py-4 font-medium text-gray-900">To time</th>
              <th scope="col" className="px-6 py-4 font-medium text-gray-900">Consultation Charge</th>
              <th scope="col" className="px-6 py-4 font-medium text-gray-900">Follow Up charge</th>
              <th scope="col" className="px-6 py-4 font-medium text-gray-900">Active</th>
              <th scope="col" className="px-6 py-4 font-medium text-gray-900">isfree</th>
              <th scope="col" className="px-6 py-4 font-medium text-gray-900">Day</th>
            </tr>
          </thead>
          <tbody>
            {tableData.map((item, i) => (
              <tr className='text-center' key={i}>
                <td className='p-3 text-red-600 text-2xl text-center' onClick={() => handleDelete(i)}><MdDelete /></td>
                <td className="px-6 py-4">{item.fromTime}</td>
                <td className="px-6 py-4">{item.toTime}</td>
                <td className="px-6 py-4">{item.isFree === true ? 0 : item.consultationCharges}</td>
                <td className="px-6 py-4">{item.followUpApplication === true ? item.followCharges : 0}</td>
                <td className="px-6 py-4"><button className='border-2 border-green-500 px-4 text-green-500 font-semibold pb-1 rounded-md'> Active</button></td>
                <td className="px-6 py-4">{item.isFree === true ? 'Yes' : 'No'}</td>
                <td className="px-6 py-4">{item.day}</td>
              </tr>
            ))}
          </tbody>
        </table> 
      </div>
       ) : (
       <p></p>
      )}

    </div>
  )
}

export default ConsultationCharges

