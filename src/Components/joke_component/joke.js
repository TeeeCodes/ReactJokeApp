import React, { useEffect, useState} from "react";
import './joke.css'

function RandomJoke() {
    
   const [joke, setJoke] = useState([]);

   async function jokeHandler() {

        
     const response = await fetch('https://icanhazdadjoke.com/slack')
     const data = await response.json();
               console.log(data)
               setJoke(data.attachments[0].fallback)  
   }

    useEffect(() => {
        jokeHandler();
    }, [])

    return(
        <div className="App">
            <div className="test">
        
             <button onClick={jokeHandler} className="btn">
             </button>
                <p>{joke}</p>
            </div>
        </div>
    )
}
    
export default RandomJoke;