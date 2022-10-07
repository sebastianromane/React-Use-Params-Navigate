import { useEffect, useState } from 'react';
import {useParams} from 'react-router-dom';

const DetailsPokemon = () => {
    const [personaje, setPersonaje] = useState();
    const {name} = useParams();


        try {
            useEffect(() => {
            getAPI()
            }, [name]) 
        } catch (error) {
            alert('Not Found connect with server')   
        }

        const getAPI = async () => {
            const resp = await fetch(`https://pokeapi.co/api/v2/pokemon/${name}`);
            const datos = await resp.json();
            setPersonaje(datos)
        }


    return (
        <div className='hability'>
            <h1 className="titledetails">Habilidades Pokemon</h1>
            {personaje && (
                <div className='sect'>
                    <p>Nombre: {personaje.name}</p>
                    <img src={`https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/${personaje.id}.png`} />
                </div>
                
            )
             }
            <div className='sect'>
                {personaje? <p>🔴Hp   {personaje.stats[0].base_stat}</p> : ""  }
                {personaje? <p>🔴Type {personaje.types[0].type.name}</p> : ""  }
                {personaje? <p>🔴Speed {personaje.stats[3].base_stat}</p> : ""  }
                {personaje? <p>🔴Attack {personaje.stats[1].base_stat}</p>: ""  }
                {personaje? <p>🔴Defensa {personaje.stats[2].base_stat}</p>: ""  }
            </div>
        </div>
    );
}
export default DetailsPokemon;
