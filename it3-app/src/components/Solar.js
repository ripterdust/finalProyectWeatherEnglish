import React, {useEffect, useState} from 'react'
import { apiData } from '../apiData';

export const Solar = () => {

    const [data, setData] = useState({});

    const {key, baseUrl} = apiData;

    useEffect(() => {

        let request = `${baseUrl}solar/data_query/v1.json?api_key=${key}&lat=40&lon=-105&radius=50&all=1`;
        console.log(request)
        fetch(request)
            .then(res => res.json())
            .then(response => {
                let {outputs} = response;
                let {all_stations} = outputs;
                console.log(all_stations)
                setData(all_stations);
            });
    }, [key, baseUrl]);

    console.log(data)
    return (
        <div>
            Solar
        </div>
    )
}
