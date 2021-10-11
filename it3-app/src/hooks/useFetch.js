import { useEffect, useState } from "react"

export const useFetch = (url) => {

    const [state, setState] = useState({
        data: null
    });

    useEffect(() => {

        fetch(url)
            .then(resp => resp.json())
            .then(data => {
                setState({data})
            })

    },[url])

    return state

}