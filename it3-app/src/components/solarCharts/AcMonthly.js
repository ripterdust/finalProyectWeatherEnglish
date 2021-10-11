import React from 'react'
import { Bar } from 'react-chartjs-2';
import { chartInfo } from '../../helpers/chartInfo';
export const AcMonthly = ({ Data }) => {

    let { outputs } = Data;
    let { ac_monthly } = outputs;

    let data = chartInfo(ac_monthly, 'Ac Montly')
    return <div>
        <Bar
            data={data}
            height={400}
            width={600}
            options={{
                maintainAspectRatio: false,
                responsive: true
            }}
        />

    </div> 
    
}
