import React from 'react'
import { Bar } from 'react-chartjs-2';
import { chartInfo } from '../../helpers/chartInfo';
export const AcMonthly = ({ Data }) => {

    let { outputs } = Data;
    let { ac_monthly } = outputs;

    let data = chartInfo(ac_monthly, 'Ac Montly')
    return <div className="mb-4">

        <p className="text-center">
            
        </p>
        <Bar
            data={data}
            height={200}
            width={600}
            options={{
                maintainAspectRatio: true,
                responsive: true
            }}
        />

    </div> 
    
}
