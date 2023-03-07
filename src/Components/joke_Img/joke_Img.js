function JokeImg() {



    fetch('https://icanhazdadjoke.com/j/<joke_id>',
    {header:{Accept:"application/json"}})
    .then((res) => res.json())
    .then((json) => console.log(json));

    console.log(JokeImg)


    
    
    return (
        <button onClick={JokeImg}></button>
    )
}


export default JokeImg