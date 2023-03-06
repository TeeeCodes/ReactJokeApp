import React from "react";
import { useState } from "react";
import './search.css'


function SearchBar() {

    const [title, setTitle] = useState();

    return (
        <div className="search">
            <div className="searchInputs">
                <input type="text" onChange={e => setTitle(e.target.value)} />
                <div className="icon"></div>
            </div>
            <div className="searchResult">{title}</div>
        </div>
    )
}

export default SearchBar