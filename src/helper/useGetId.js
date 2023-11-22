import { useState, useEffect } from "react";
import axios from "axios";

export const useGetId = (endpoint) => {
    const [id, setid] = useState([]); 
    useEffect(() => {
        axios.get(endpoint)
        .then((response) => setid(response.data))
        .catch((error) => console.log(error))
    },[])

    const ID = id.map((data) => {
        return data._id;
    })

    return ID[0]; 
}
