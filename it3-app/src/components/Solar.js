import React, {useEffect, useState} from 'react'
import { apiData } from '../apiData';
import {Link} from 'react-router-dom';


export const Solar = () => {

    const [data, setData] = useState([]);

    const {key, baseUrl} = apiData;

    useEffect(() => {

        let request = `${baseUrl}solar/data_query/v1.json?api_key=${key}&lat=40&lon=-105&radius=50&all=1`;
        fetch(request)
            .then(res => res.json())
            .then(response => {
                let {outputs} = response;
                let {all_stations} = outputs;
                setData(all_stations);
            });
    }, [key, baseUrl]);
    return <div className="container mt-4 ">
    <div className="row animate__animated animate__fadeInUp">
        {
            data.map((city, i) => <div className="col-sm-4" key={i}>
                <div className="card">
                    <div className="card-body">
                        <h5 className="card-title">
                            { city.city ? city.city : 'GENERAL' }
                        </h5>
                        <p className="card-text">
                            This station is on { city.state }
                        </p>

                        <Link to={`/solar/${city.id}`} className='btn btn-danger'>See information</Link>
                    </div>
                </div>
            </div>)
        }
        
    </div>
    </div>
}
