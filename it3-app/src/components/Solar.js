import React, {useEffect, useState} from 'react'
import { apiData } from '../apiData';

export const Solar = () => {

    const [data, setData] = useState();
    const {key, baseUrl} = apiData;


    useEffect(() => {
        fetch(`${baseUrl}pvwatts/v5.json?api_key=${key}`)
            .then(res => res.json())
            .then(response => {
                console.log(response)
            });
    }, []);


    return (
        <div>
            Solar
        </div>
    )
}
