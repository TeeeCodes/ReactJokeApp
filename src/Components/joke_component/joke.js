import React, { useState, useEffect } from "react";

// const URL = ('https://icanhazdadjoke.com/',{header:{Accept:"application/json"}}) 

const RandomJoke = () => {
    
   const [joke, setJoke] = useState();

   useEffect(() => {
    fetch('https://api.dictionaryapi.dev/api/v2/entries/en/hello')
        .then((response) => response.json())
        .then((data) => {
            setJoke();
            console.log(data)
        });
        
   }, []);

    return(
        <div className="App">
            test: {joke}
        </div>
    )
}
    
export default RandomJoke;