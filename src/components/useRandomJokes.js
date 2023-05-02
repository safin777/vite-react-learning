import { useState,useEffect } from "react";


function useRendomJokes(){
    const [jokes,setJokes] = useState([]);

    useEffect(()=>{
        
        const fetchJokes = async () => {
            await fetch(`https://official-joke-api.appspot.com/random_ten`)
            .then((res)=>res.json())
            .then((data)=>{ 
                console.log(data);
                 setJokes(data);
            });
        }
        fetchJokes();
    },[]);

    return jokes;
}

export default useRendomJokes;  