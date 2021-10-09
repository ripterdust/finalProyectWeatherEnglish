import axios from "axios";
import { useState } from "react";

export const useData = async ({ energyType }) => {

    const [state, setstate] = useState()

    const apiSettings = {
        key: '7wSzdNBdgWZi6vFUjnJ7rtyV79AbipCMLRWh3vZs',
        url: 'https://developer.nrel.gov/api/'
    }

    // await axios();

    return state;
};