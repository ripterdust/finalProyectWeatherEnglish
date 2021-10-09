import React from 'react'
import { useData } from '../hooks/useData'


export const Solar = () => {

    const data = useData('solar');
    return (
        <div>
            Solar
        </div>
    )
}
