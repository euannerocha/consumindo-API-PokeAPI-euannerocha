async function renderizaPokemons(name = "") {
    const ulTag = document.querySelector('#ul')
    ulTag.innerText = ""
    const listaDePokemons = await consomePokeAPI(name)

    if (name.length > 0 && listaDePokemons) {
        const pokemon = listaDePokemons
        const numeroNaPokedex = pokemon.id

        ulTag.insertAdjacentHTML('beforeend', `
            <li>
                <img src="https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/${numeroNaPokedex}.png" alt=${pokemon.name}>
                <h3>${pokemon.name}</h3>
            </li>
        `)
    } else if (listaDePokemons) {
        listaDePokemons.results.forEach(pokemon => {

            const numeroNaPokedex = pokemon.url.slice(34, -1)

            ulTag.insertAdjacentHTML('beforeend', `
                <li>
                    <img src="https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/${numeroNaPokedex}.png" alt=${pokemon.name}>
                    <h3>${pokemon.name}</h3>
                </li>
            `)
        })
    }
}

renderizaPokemons()


function verificaInput() {
    const input = document.querySelector('.inputBusca')
    const button = document.querySelector('.buttonS')

    button.addEventListener('click', async (event) => {
        event.preventDefault()
        await renderizaPokemons(input.value)
    })
}

verificaInput()
