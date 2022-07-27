import React, { useEffect, useState } from "react";
import {
    Input,
    Button
} from "@mui/material"
const Combat = (props) => {
    //variables por usar 
    const [search, setSearch] = useState()
    const [pokemon, setPokemon] = useState()

    const [pokemon1, setPokemon1] = useState()
    const [pokemon2, setPokemon2] = useState()

    const [pokemonInput, setPokemonInput] = useState("")

    const [HP1, setHp1] = useState(0)
    const [HP2, setHp2] = useState(0)

    const [Attack1, setAttack1] = useState()
    const [Attack2, setAttack2] = useState()
    //llamado a la api
    useEffect(() => {
        fetch('https://pokeapi.co/api/v2/pokemon?limit=10')
            .then(res => res.json())
            .then(
                (data) => {
                    setPokemon(data.name);
                });
    }, []);
    //input de pokemon 1
    const handleChange = (e) => {
        setPokemonInput(e.target.value)
    }
    //input de pokemon 2
    const handleChange1 = (e) => {
        setSearch(e.target.value)
    }
    //boton pokemon1
    const handleClick = async (e) => {
        setPokemonInput(e.target.value)
        setPokemon1(data)
    }
    //boton de pokemon
    const handleClick1 = async (e) => {
        const data = await searchPokemon(search)
        setPokemon2(data)

    }
    //ataque 1
    const attack1 = () => {
        return
    }
    //ataque 2 
    const attack2 = () => {
        return
    }


    return (
        <>
            <h1>Combat Pokemon</h1>
            <div className="container">
                <div>
                    <div>
                        <h3>Primer Pokemon</h3>
                        <Input onChange={(e) => handleChange(e)} placeholder="Buscar Pokemon.." />
                        <Button onClick={handleClick}>Escoger</Button>
                    </div>
                    <div>
                        <div>
                            {pokemon1 &&
                                <div>
                                    <div className="name"> {pokemon1.name} </div>
                                    <img src={pokemon1.sprites.front_default} />
                                </div>}
                            <div>
                                <div>
                                    <Button>Ataque!!</Button>
                                    <div>
                                        {pokemon1.stats.map((pokemon) => {
                                            return (<div>{pokemon.name}</div>)
                                        })}
                                    </div>
                                    Vida: {HP1}
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div>
                    <h1>VS</h1>
                </div>
                <div>
                    <div>
                        <h3>Segundo Pokemon</h3>
                        <Input onChange={(e) => handleChange1(e)} placeholder="Buscar Pokemon..." />
                        <Button onClick={handleClick1}>Escoger</Button>
                    </div>
                    <div>
                        <div>
                            {pokemon2 &&
                                <div>
                                    <div> {pokemon2.name} </div>
                                    <img src={pokemon2.sprites.front_default} />
                                    <div> </div>
                                </div>}
                            <div>
                                <Button>Ataque!!!</Button></div>
                            <div>
                                {pokemon2.stats.map((pokemon) => {
                                    return (<div>{pokemon.name}</div>)
                                })}
                            </div>
                            Vida: {HP2}
                        </div>
                    </div>
                </div>
            </div>

        </>
    )


}
export default Combat