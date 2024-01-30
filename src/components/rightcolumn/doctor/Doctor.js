import React from 'react'

function Doctor() {
    const doctorObj = [
        {
            id: 1,
            name: "Dr. Smith",
            email: "smith@gmail.com"
        },
        {
            id: 2,
            name: "Dr. Smith",
            email: "smith@gmail.com"
        },
        {
            id: 3,
            name: "Dr. Smith",
            email: "smith@gmail.com"
        },
        {
            id: 4,
            name: "Dr. Smith",
            email: "smith@gmail.com"
        },
        {
            id: 5,
            name: "Dr. Smith",
            email: "smith@gmail.com"
        },
        {
            id: 6,
            name: "Dr. Smith",
            email: "smith@gmail.com"
        }
    ]
    return (
        <div className='p-2'>
            <h1>Doctor List</h1>
                <div className="overflow-x-scroll  rounded-lg border border-gray-200 shadow-md mt-5 max-w[300px]">
                    <table className="w-full border-collapse bg-white text-left text-sm text-gray-500 min-w-max ">
                        <thead className="bg-blue-200">
                            <tr>
                                <th scope="col" className="px-6 py-4 font-medium text-gray-900">ID</th>
                                <th scope="col" className="px-6 py-4 font-medium text-gray-900">Name</th>
                                <th scope="col" className="px-6 py-4 font-medium text-gray-900">Email</th>
                                <th scope="col" className="px-6 py-4 font-medium text-gray-900">Phone</th>
                                <th scope="col" className="px-6 py-4 font-medium text-gray-900">Department</th>
                                <th scope="col" className="px-6 py-4 font-medium text-gray-900">Status</th>
                                <th scope="col" className="px-6 py-4 font-medium text-gray-900">Action</th>
                            </tr>
                        </thead>
                        <tbody className="divide-y shadow-lg divide-gray-100 border-t border-gray-100">
                            {doctorObj.map((data, index) => (
                                <tr key={index} className="hover:bg-gray-50">
                                    <td className="px-6 py-4">
                                        {data.id}
                                    </td>
                                    <td className="px-6 py-4">
                                        {data.name}
                                    </td>
                                    <td className="px-6 py-4">
                                        {data.email}
                                    </td>
                                    <td className="px-6 py-4">
                                        (406) 555-0120
                                    </td>
                                    <td className="py-4">
                                        Outpatient department (OPD)
                                    </td>
                                    <td className="px-6 py-4">
                                        Outpatient department (OPD)
                                    </td>
                                    <td className="px-6 py-4">
                                        Action
                                    </td>
                                </tr>
                            ))}
                        </tbody>
                    </table>
                </div>
          
        </div>
    )
}
export default Doctor




// devias table
