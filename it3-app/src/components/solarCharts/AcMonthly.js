import React from 'react'
import { Bar } from 'react-chartjs-2';
import { chartInfo } from '../../helpers/chartInfo';
export const AcMonthly = ({ AcData }) => {

   let data = chartInfo({data: 'hola'});

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
