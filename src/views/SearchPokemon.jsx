import { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';

const SearchPokemon = () => {

    const [personajes, setPersonajes] = useState([]);
    const [name, setName] = useState("");

    const navigate = useNavigate()

    useEffect(() => {
        const getAPI = async () => {
            const resp = await fetch('https://pokeapi.co/api/v2/pokemon/?limit=2000');
            const datos = await resp.json();

            if (datos && datos.results) {
                const idYNames = datos.results.map(({ name }) => ({ name }))
                setPersonajes(idYNames.sort((a, b) =>
                a.name > b.name ? 1 : a.name < b.name ? -1 : 0
              ))
            }
        }

        getAPI();
    }, [])

    const handleID = (event) => {
        const idPersonaje = event.target.value;
        if (idPersonaje && idPersonaje !== "") {
            setName(idPersonaje)
        }
    }

    const irAlPersonaje = () => {
        navigate(`/pokemones/${name}`);
    }

    return (
        <>
            <h1>SearchPokemon</h1>
            <select onChange={handleID}>

                <option value="">Seleccione un personaje</option>
                {personajes.map((personaje) => (
                    <option key={personaje.name} value={personaje.name}>{personaje.name}</option>
                ))}
            </select>
            <button onClick={irAlPersonaje} >Buscar Pokemon</button>
        </>
    )
}
export default SearchPokemon;
