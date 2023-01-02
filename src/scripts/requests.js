async function consomePokeAPI(name = "") {

    const loading = document.querySelector('#loading')

    const url = name.length > 0 ? `https://pokeapi.co/api/v2/pokemon/${name}` : 'https://pokeapi.co/api/v2/pokemon'

    const pokemonsDaAPI = await fetch(url)
      .then(
        response => response.json()
      )
      .catch(
        error => console.log(error)
      )

    loading.style.display = 'none'

    return pokemonsDaAPI
}
