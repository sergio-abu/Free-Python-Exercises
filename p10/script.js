const jokeElement = document.getElementById('joke')
const jokeButton = document.getElementById('jokeBtn')

jokeButton.addEventListener('click', generateJoke)

// USING ASYNC WAIT

function generateJoke() {
    const config = {
        headers: {
            'Accept': 'application/json'
        }
    }

    const res = await fetch('https://icanhazdadjoke.com', config)

    const data = await res.json()

    jokeElement.innerHTML = data.joke
}



/* USING .THEN
function generateJoke() {
    const config = {
        headers: {
            'Accept': 'application/json'
        }
    }

    fetch('https://icanhazdadjoke.com', config).then(res => res.json()).then(data => 
    {jokeElement.innerHTML = data.joke})
}
 */