import { useEffect, useState } from "react"

export const useFetch=(apiPath , queryTerm="") =>{
    const [data,setData] = useState([]);
    // const apiKey = process.env.REACT_APP_API_KEY;
    const url=`https://api.themoviedb.org/3/${apiPath}?api_key=2f77aa7e44a2c0b4f3b97d7de955ee6f&query=${queryTerm}`;

    useEffect(() => {
        async function fetchMovies(){
            const response = await fetch(url);
            const data = await response.json();
            setData(data.results);
        }
        fetchMovies();
    },[url]);

    return {data}
}