import React, { useState } from 'react';
import { createContext } from 'react';
import { FaPencil } from "react-icons/fa6";
import { MdRemoveRedEye } from "react-icons/md";
import { MdDelete } from "react-icons/md";
import {Link , useNavigate} from 'react-router-dom'

export const MyContext = createContext()

function PatientList() {

    const [patientData, setPatientData] = useState({
        name: '',
        password: '',
        gender: '',
        email: '',
        number: '',
        bloodType: '',
        photo: null,
        address: '',
    });

    const handleChange = (e) =>{
        setPatientData({ ...patientData, [e.target.name]: e.target.value})
    }
    const navigate = useNavigate();
    const [patientObj, setPatientObj] = useState([
        {
            id: 1,
            name: "Mr.Patient",
            email: "smith@gmail.com"
        },
        {
            id: 2,
            name: "Mr.Patient",
            email: "smith@gmail.com"
        },
        {
            id: 3,
            name: "Mr.Patient",
            email: "smith@gmail.com"
        },
        {
            id: 4,
            name: "Mr.Patient",
            email: "smith@gmail.com"
        },
        {
            id: 5,
            name: "Mr.Patient",
            email: "smith@gmail.com"
        },
        {
            id: 6,
            name: "Mr.Patient",
            email: "smith@gmail.com"
        }
    ]);

    const submitData = () =>{
        setPatientObj([...patientObj, { ...patientData, id: patientObj.length + 1 }]);
        // navigate('/patient/patient_list');
        console.log(patientObj);
      
    }

    const handleDelete = (index) => {
        const updatedPatients = [...patientObj];
        updatedPatients.splice(index, 1);
        setPatientObj(updatedPatients);
    };

    return (
        <MyContext.Provider value={{ patientData, patientObj, handleChange, submitData }}>
        <div className='p-2'>
            <h1>Patient List</h1>
            <Link to="/add_patient"><button className='bg-[#3F2860] text-white text-xs p-1 px-2 flex gap-2'>+ Add Patient</button></Link>
            
            <div className="overflow-x-scroll rounded-lg border border-gray-200 shadow-md mt-5 max-w[300px]">
                <table className="w-full border-collapse bg-white text-left text-sm text-gray-500 min-w-max ">
                    <thead className="bg-blue-200">
                        <tr>
                            <th scope="col" className="px-6 py-4 font-medium text-gray-900">ID</th>
                            <th scope="col" className="px-6 py-4 font-medium text-gray-900">Name</th>
                            <th scope="col" className="px-6 py-4 font-medium text-gray-900">Email</th>
                            <th scope="col" className="px-6 py-4 font-medium text-gray-900">Phone</th>
                            <th scope="col" className="py-4">Department</th>
                            <th scope="col" className="px-6 py-4 font-medium text-gray-900">Status</th>
                            <th scope="col" className="px-6 py-4 font-medium text-gray-900 pl-12">Action</th>
                        </tr>
                    </thead>
                    <tbody className="divide-y shadow-lg divide-gray-100 border-t border-gray-100">
                        {patientObj.map((data, i) => (
                            <tr key={i} className="hover:bg-gray-50">
                                <td className="px-6 py-4">{data.id}</td>
                                <td className="px-6 py-4">{data.name}</td>
                                <td className="px-6 py-4">{data.email}</td>
                                <td className="px-6 py-4">(406) 555-0120</td>
                                <td className="py-4">Outpatient department (OPD)</td>
                                <td className="px-6 py-4">Outpatient department (OPD)</td>
                                <td className="px-6 py-4 flex gap-5 text-[#3F2860]">
                                    <MdRemoveRedEye className='bg-orange-100 p-2 text-4xl'/>
                                    <FaPencil className='bg-orange-100 p-2 text-4xl'/>
                                    <MdDelete className='bg-orange-100 p-2 text-4xl' onClick={() => handleDelete(i)}/>
                                </td>
                            </tr>
                        ))}
                    </tbody>
                </table>
            </div>
        </div>
       
        </MyContext.Provider>
    );
}

export default PatientList;
