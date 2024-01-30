import React from 'react'
import { Chart } from "react-google-charts";

function DashChart() {
    const data = [
        ["Month", "Resistration"],
        ["January", 10],
        ["February", 11],
        ["March", 17],
        ["April", 12],
        ["May", 10],
        ["Jun", 25],
        ["July", 45],
        ["August", 24],
        ["September", 30],
        ["October", 22],
        ["November", 40],
        ["December", 35],


    ];

    const options = {
        chart: {
            title: "Monthly Registered Users", 
        },       
    };
    return (
        <div className='mt-5 '>
            <div className='bg-white p-12'>

            <Chart 
                chartType="Bar"
                width="80%"
                height="400px"
                data={data}
                options={options}
            />
            </div>

        </div>
    )
}

export default DashChart
