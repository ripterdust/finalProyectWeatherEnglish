import React from 'react'
import { useParams } from 'react-router'
import { apiData } from '../apiData';
import { useFetch } from '../hooks/useFetch';
import { AcMonthly } from './solarCharts/AcMonthly';

export const SolarCityById = () => {

    let { id }  = useParams();

    const { key, baseUrl } = apiData;
    const URL = `${baseUrl}pvwatts/v5.json?api_key=${key}&file_id=${id}&azimuth=1&system_capacity=4&tilt=1&array_type=1&module_type=1&losses=1`;
    let { data } = useFetch(URL);

    return <div className="animate__animated animate__fadeInUp">
        <div className="container">
            <div className="card-body">
                <h6 className="card-title text-center fs-1">
                    { 'GENERAL '}
                </h6>

                <p className="text-center">Ac Annual: { data?.outputs?.ac_annual }</p>

                {(data === null) ? 'No data' : <AcMonthly Data={data} />   }

            </div>
        </div>
    </div>
}
