import React from "react";
import { useState, useEffect} from "react";
import './search.css'

const SearchList = () => {
    const [list, setList] = useState(1);
    

    useEffect(() => {
        fetch('https://icanhazdadjoke.com/search',
        {headers: {
            'Accept': 'application/json',
            'Content-Type': 'application/json'
            }
        })
        .then(res => res.json())
        .then(json => setList(json))
    }, [])
    console.log(list)

    return(
        <div>
            <button onClick={() => setList(1)}>Page 1</button>
            
            
        </div>
    )
}


export default SearchList