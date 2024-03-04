import { useFetch } from "../../hooks/useFetch";

const apiKey = import.meta.env.VITE_API_KEY;
const apiUrl = `${import.meta.env.VITE_API}/v1.4/movie?lists=top250`;

 const {data, isLoading, error} = useFetch(apiUrl, apiKey)

 console.log(data);



