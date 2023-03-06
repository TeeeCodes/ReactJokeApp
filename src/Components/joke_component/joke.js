import React, { useEffect, useState} from "react";
import './joke.css'

function RandomJoke() {
    
   const [joke, setJoke] = useState([]);

   async function jokeHandler() {

     const response = await fetch('https://icanhazdadjoke.com/slack')
     const data = await response.json();
               console.log(data)
               setJoke(data.text)  
   }

    useEffect(() => {
        jokeHandler();
    })

    return(
        <div className="App">
            <div className="test">
             {joke}
             <button onClick={jokeHandler} className="btn">
                <p>{joke}</p>
             </button>
            </div>
        </div>
    )
}
    
export default RandomJoke;