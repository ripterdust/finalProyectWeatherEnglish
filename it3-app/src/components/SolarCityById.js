import React from 'react'
import { useParams } from 'react-router'

export const SolarCityById = () => {

    let { id }  = useParams();

    return <div className="animate__animated animate__fadeIn">
        El id es: {id}
    </div>
}
