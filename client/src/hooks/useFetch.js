import React, {useState, useEffect} from 'react'
import {makeRequest} from '../util/makeRequest';

const useFetch = (url) => {

    const [data, setData] = useState([]);
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState(false);

    useEffect(()=>{
        const fetchData = async () => {
            setLoading(true);
            try { 
                const response = await makeRequest.get(url);
                setData(response.data.data);
            } catch (error) {
                setError(error);
            }
            setLoading(false);
        }
  
        fetchData();
  
    }, [url]);

    return {data, loading, error}

}

export default useFetch
