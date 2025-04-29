import {useState, useEffect} from "react";

const useFetch = (url, method='get', body=null) =>{
    const[data, setData] = useState(null)
    const[loading, setLoading] = useState(false)
    const[error, setError] = useState(null)

    useEffect(() =>{
        const controller = new AbortController

        const fetchData = async () =>{
            setLoading(true)
            try{
                const options = {
                    method,
                    headers:{
                        'Content-type':'application/json'
                    },
                    signal:controller.signal
                }

                if(body &&(method === 'POST' || method === 'PUT')){
                    options.body = JSON.stringify(body)
                }

                const response = await fetch(url, options)
                if(!response.ok)
                    throw new Error(`errore:${response.status}`)

                const responseJson = await response.json()
                setData(responseJson)
            }
            catch(err){
                setError(err.message)
            }
            finally{
                setLoading(false)
            }
        }

        fetchData()
        return () => controller.abort()

    },[url,method,body])
        
    return {data, loading, error}

}

export default useFetch