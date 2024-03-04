import { useState, useEffect } from "react";

function useFetch(url, apiKey) {
    const [data, setData] = useState([]);
    const [isLoading, setIsLoading] = useState(true);
    const [error, setError] = useState(null);

    useEffect(() => {
        setIsLoading(true);
        fetch(url, {
            method: 'GET',
            headers: {
                'X-API-KEY': apiKey
            }
        })
        .then(response => response.json())
        .then(fetched => {
             setData(fetched);
        })
        .catch(err => {
            setError(err)
            console.log(err);
        })
        .finally(() => {
            setIsLoading(false);
        })
    },[url, apiKey]);

    return { data, isLoading, error };
}

export { useFetch };