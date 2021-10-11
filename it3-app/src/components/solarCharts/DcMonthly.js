import React from 'react'
import { chartInfo } from '../../helpers/chartInfo';
import { Bar } from 'react-chartjs-2';
export const DcMonthly = ({Data}) => {

    let { outputs } = Data;
    let { dc_monthly } = outputs;

    let data = chartInfo(dc_monthly, 'Dc Montly')

    return (
        <div className="mt-4">
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
    )
}
