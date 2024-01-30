import React, { useContext } from 'react';
import { Input } from 'antd';
import { FaUser } from 'react-icons/fa';
import { FaKey } from "react-icons/fa";
import { IoIosMail } from "react-icons/io";
import { BiMaleFemale } from "react-icons/bi";
import PhotoUpload from './PhotoUpload';
import TextArea from 'antd/es/input/TextArea';
import { MyContext } from './PatientList';

const AddPatient = () => {
    const context = useContext(MyContext) || {};
    const { patientData = {}, handleChange, submitData } = context;
    
    const options = ['Male', 'Female', 'Other'];
    const blood = ['A+', 'A-', 'B+', 'B-', 'AB+', 'AB-', 'O+', 'O-',]

    return (
        <div className='bg-blue-100 flex justify-center items-center h-[92vh]'>
            <div className='w-[85%] bg-white rounded-2xl '>
            <h1 className='text-center p-2 text-xl font-bold'>Add Patient</h1>
            <div className=' grid grid-cols-2 mx-auto'>
                <div >
                    <legend className='ml-7'>Name</legend>
                    <div className='flex flex-col items-center justify-center'>
                    <Input
                        className='p-0 rounded-none  border-[#3F2860] w-[90%] '
                        prefix={<FaUser className='bg-blue-50 p-4 text-5xl text-[#3f2860]' />}
                        placeholder="Enter patient name"
                        name='name'
                        value={patientData.name}
                        onChange={handleChange}
                    />

                    </div>
                </div>

                <div >
                    <legend className='ml-7'>Password</legend>
                    <div className='flex flex-col items-center justify-center'>
                    <Input
                        className='p-0 rounded-none  border-[#3F2860] w-[90%] '
                        prefix={<FaKey className='bg-blue-50 p-4 text-5xl text-[#3f2860]' />}
                        placeholder="Enter Password"
                        type='password'
                        name='password'
                        value={patientData.password}
                        onChange={handleChange}
                    />

                    </div>
                </div>

                <div >
                    <legend className='ml-7'>Gender</legend>
                    <div className='flex flex-col items-center justify-center'>
                    <Input
                        className='p-0 rounded-none  border-[#3F2860] w-[90%] '
                        prefix={<BiMaleFemale className='bg-blue-50 p-4 text-5xl text-[#3f2860]' />}
                        placeholder="Select"
                        list="genderOptions"
                        name='gender'
                        value={patientData.gender}
                        onChange={handleChange}
                    />

                    </div>
                    <datalist id="genderOptions">
                        {options.map((option, index) => (
                            <option key={index} value={option} />
                        ))}
                    </datalist>
                </div>

                <div >
                    <legend className='ml-7'>Email</legend>
                    <div className='flex flex-col items-center justify-center'>

                    <Input
                        className='p-0 rounded-none  border-[#3f2860] w-[90%]'
                        prefix={<IoIosMail className='bg-blue-50 p-3 text-5xl text-[#3f2860]' />}
                        placeholder="Enter Email"
                        value={patientData.email}
                        name='email'
                        onChange={handleChange}
                    />
                    </div>
                </div>

                <div >
                    <legend className='ml-7'>Number</legend>
                    <div className='flex flex-col items-center justify-center'>
                    <Input
                        className='p-0 rounded-none  border-[#3f2860] w-[90%]'
                        type='number'
                        prefix={<IoIosMail className='bg-blue-50 p-3 text-5xl text-[#3f2860]' />}
                        placeholder="Enter Phone Number"
                        value={patientData.number}
                        name='number'
                        onChange={handleChange}
                    />

                    </div>
                </div>

                <div >
                    <legend className='ml-7'>Blood</legend>
                    <div className='flex flex-col items-center justify-center'>

                    <Input
                        className='p-0 rounded-none  border-[#3F2860] w-[90%] '
                        prefix={<BiMaleFemale className='bg-blue-50 p-4 text-5xl text-[#3f2860]' />}
                        placeholder="Select"
                        list="bloodOptions"
                        value={patientData.bloodType}
                        name='bloodType'
                        onChange={handleChange}
                    />
                    </div>
                    <datalist id="bloodOptions">
                        {blood.map((option, index) => (
                            <option key={index} value={option} />
                        ))}
                    </datalist>
                </div>

                <div >
                    <legend className='ml-7'>Photo</legend>
                    <div className='flex flex-col items-center justify-center'>
                    <PhotoUpload />

                    </div>
        
                </div>

                <div >
                    <legend className='ml-7'>Address</legend>

                    <div className='flex flex-col items-center justify-center'>

                    <TextArea value={patientData.address} name='address'
                        onChange={handleChange}  className='p-4 rounded-none  border-[#3F2860] w-[90%] '  rows={4} placeholder="Enter Address" maxLength={4}/> 
                    </div>
             
                </div>
            </div>

            <div className='space-x-3 p-12'>
                <button className='bg-blue-800 p-2 px-4 text-white' onClick={submitData}>Submit</button>
                <button className='bg-blue-800 p-2 px-4 text-white'>Cancel</button>
            </div>
            </div>
        </div>
    );
};

export default AddPatient;



