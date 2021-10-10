import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router'
import { apiData } from '../apiData';

export const SolarCityById = () => {

    let { id }  = useParams();
    const [data, setData] = useState({})

    const { key, baseUrl } = apiData;
    const URL = `${baseUrl}pvwatts/v5.json?api_key=${key}&file_id=${id}&azimuth=1&system_capacity=4&tilt=1&array_type=1&module_type=1&losses=1`;
    
    useEffect(() => {
        fetch(URL)
            .then((res) => res.json())
            .then(response => {
                let {outputs, station_info} = response;
                setData(data => ({...data, outputs, station_info}))
            });
    }, [URL]);

    console.log(data)


    return <div className="animate__animated animate__fadeIn">
        <div className="card container">
            <div className="card-body">
                <h6 className="card-title text-center fs-1">
                    { data.station_info?.city ? data.station_info?.city : 'GENERAL' }
                </h6>

            </div>
        </div>
    </div>
}
