function JokeImg() {


const ImgJoke = () => {

    fetch('https://icanhazdadjoke.com/j/<joke_id>',
    {header:{Accept:"application/json"}})
    .then((res) => res.json())
    .then((json) => console.log(json));

    // <img src="https://icanhazdadjoke.com/j/R7UfaahVfFd.png" />
    console.log(JokeImg)
}


    
    
    return (
        
        <button onClick={ImgJoke}></button>
    )
}


export default JokeImg