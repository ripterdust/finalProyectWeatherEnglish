import React from 'react'
import { Bar } from 'react-chartjs-2';
import { chartInfo } from '../../helpers/chartInfo';
export const AcMonthly = ({ Data }) => {

    let data = []

    let { outputs } = Data;
    let { ac_monthly } = outputs;

    let clg = chartInfo(ac_monthly, 'Ac Montly')
    console.log(clg)
    return <div>
        <Bar
            data={clg}
            height={400}
            width={600}
            options={{
                maintainAspectRatio: false,
                responsive: true
            }}
        />

    </div> 
    
}
