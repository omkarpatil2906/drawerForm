import React from 'react'
import { FcDepartment } from "react-icons/fc";
import { FaUserDoctor } from "react-icons/fa6";
import { FaRegCalendarPlus } from "react-icons/fa6";
import { IoNewspaperOutline } from "react-icons/io5";
import { FaFileInvoiceDollar } from "react-icons/fa";
import { GiMedicines } from "react-icons/gi";
import { RiSecurePaymentLine } from "react-icons/ri";
import CountUp from 'react-countup';

function DashInfo() {

    const dashObj = [
        {
            id: 1,
            title: "Department",
            count: 8,
            icon: <FcDepartment />
        },
        {
            id: 2,
            title: "Doctor",
            count: 14,
            icon: <FaUserDoctor />
        },
        {
            id: 3,
            title: "Patient",
            count: 15,
            icon: <FcDepartment />
        },
        {
            id: 4,
            title: "Patient Appoinment",
            count: 53,
            icon: <FaRegCalendarPlus />
        },

        {
            id: 5,
            title: " Case Studies",
            count: 1,
            icon: <IoNewspaperOutline />
        },

        {
            id: 6,
            title: "Invoice",
            count: 0,
            icon: <FaFileInvoiceDollar />
        },

        {
            id: 7,
            title: "Prescription",
            count: 3,
            icon: <GiMedicines />
        },

        {
            id: 8,
            title: "Payment",
            count: 0,
            icon: <RiSecurePaymentLine />
        },
    ]
    return (
        <div>

            <div className='grid grid-cols-4 gap-2 mt-4 ' >
                {
                    dashObj.map((item, i) => (
                        <div className=' flex justify-between items-center w-[80%]  rounded-xl shadow-md bg-white p-2' key={i}>
                            <div className='space-y-2' >
                                <h1 >{item.title}</h1>
                                <h2 className='text-xl'><CountUp start={0} end={item.count}/></h2>
                            </div>
                            <div>
                            <h3 className='text-5xl text-[#3F2860] ' >{item.icon}</h3>
                            </div>
                        </div>
                    ))
                }
            </div>

        </div>
    )
}

export default DashInfo
