import axios from "axios";
import {useContext, useEffect, useState } from "react";
import { inputContext } from "../App";

axios.defaults.baseURL = 'https://api.dictionaryapi.dev/api/v2/entries/en';

const ResultList = () => {
    const {inputValue} = useContext(inputContext);
    const [response,setResponse] =useState(null);
    const [error,setError] =useState("");
    const [loading , setLoading] = useState(False);

    const fetcData = async () => {
        try{
            setLoading(true);
            const res = await axios ('/${param}');
            setResponse(res.data);
            setError(null);
        }catch (err) {
            setError(err);
        }finally{
            setLoading(false)
        }
        }

        useEffect(() => {
            if(inputValue.length){
                fetcData(inputValue)
            }
        } )

return (
    <div className="container mx-auto p-4 max-w-2xl">
    <div>
    <h3 className="text-2xl font-bold mt-4">Meaning & definisions:</h3>
    <h3 className="text-2xl font-bold mt-4">Example:</h3>
    <h3 className="text-2xl font-bold mt-4">Synonym:</h3>
    <h3 className="text-2xl font-bold mt-4">Antonym:</h3>
    </div>
    </div>
);
};

export default ResultList;