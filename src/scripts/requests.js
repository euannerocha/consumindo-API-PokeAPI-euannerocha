async function consomePokeAPI() {

    const loading = document.querySelector('#loading')

    const pokemonsDaAPI = await fetch('https://pokeapi.co/api/v2/pokemon')
      .then(
        response => response.json()
      )
      .catch(
        error => console.log(error)
      )

    loading.style.display = 'none'

    return pokemonsDaAPI
}

consomePokeAPI()