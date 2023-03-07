import React, { useEffect } from "react";
import { useState} from "react";
import './search.css'

const SearchList = () => {
    const [list, setList] = useState()

    useEffect(() => {
        fetch('https://icanhazdadjoke.com/search',
        {header: {Accept: 'application/json'}})
        .then(res => res.json())
        .then(json => setList(json))
       
    }, [])

    return(
        <div>
            <ul>
                {list && list.map(list => (
                    <li key= {list.page}>
                        <h2>{list.name}</h2>
                        <p>{list.term}</p>
                    </li>
                ))}
            </ul>
        </div>
    )
}


export default SearchList