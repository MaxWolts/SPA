const API = 'https://rickandmortyapi.com/api/character/'

const getData = async (id) => {
    //si no recibe una id retorna todos los personajes para hacer render del home
    const apiURL = id ? `${API}${id}` : API
    try {
        const response = await fetch(apiURL)
        const data = await response.json();
        return data
    } catch (error) {
        console.log('Fetch Error', error)
    }
}

export default getData