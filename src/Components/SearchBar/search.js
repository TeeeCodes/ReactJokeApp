import React from "react";
import './search.css'

function SearchBar() {
    return (
        <div className="search">
            <div className="searchInputs">
                <input type="text"/>
                <div className="icon"></div>
            </div>
            <div className="searchResult"></div>
        </div>
    )
}

export default SearchBar