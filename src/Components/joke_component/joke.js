import React, { useState, useEffect } from "react";
import './joke.css'

const RandomJoke = () => {
    
   const [joke, setJoke] = useState([]);

   useEffect(() => {
    fetch('https://icanhazdadjoke.com/slack')
        .then(res => {
            return res.json()
        })
        .then(data => {
            console.log(data)
            setJoke(data[0])
        });
   }, []);

    return(
        <div className="App">
            <div className="test">
             {joke}
             <button onClick={fetch} className="btn">
                <p>test</p>
             </button>
            </div>
        </div>
    )
}
    
export default RandomJoke;