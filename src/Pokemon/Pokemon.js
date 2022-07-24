import React, { useEffect, useState } from "react"
import { Input, Button } from "@mui/material"
import SearchIcon from '@mui/icons-material/Search';


const List = (props) => {
    //url de pokemon frontal
    const [urlpokemon, setUrlPokemon] = useState("")
    //url de pokemon detras
    const [urlPokemonBack, setUrlPokemonBack] = useState("")
    // url de el nombre el pokemon
    const [pokemonName, setPokemonName] = useState("")
    //pokemon shiny de frente
    const [urlPokemonShiny, setUrlPokemonShiny]=useState("")
    //pokemon shiny de espalda
    const [urlPokemonShinyback, setUrlPokemonShinyback]=useState("")
    //pokemon femenino frontal 
    const [urlPokemonFemale, setUrlPokemonFemale]=useState("")
    //pokemon femenino detras
    const [urlPokemonFemaleback, setUrlPokemonFemaleback]=useState("")


    //const para usar lo que se ingresa en el input y mostarlo con el boton
    const [pokemonInput, setPokemonInput] = useState("")
    useEffect(() => {
        fetch(`https://pokeapi.co/api/v2/pokemon/${pokemonName}`)
            .then(res => res.json())
            .then(
                (data) => {
                    //pokemon en frontal
                    setUrlPokemon(data.sprites.front_default)
                    //pokemon de espalda
                    setUrlPokemonBack(data.sprites.back_default)

                    //pokemon shiny frontal
                    setUrlPokemonShiny(data.sprites.front_shiny)
                    //pokemon shiny de espalda
                    setUrlPokemonShinyback(data.sprites.back_shiny)

                    //pokemon femenino frontal 
                    setUrlPokemonFemale(data.sprites.front_female)
                    //pokemon femenino espalda
                    setUrlPokemonFemaleback(data.sprites.back_female) 

                }
            )
    }, [pokemonName])

    const handleChange = (event) => {
        setPokemonInput(event.target.value)
    }

    const handleClick = (event) => {
        setPokemonName(pokemonInput)
    }

    return (
        <>
            <Input type="text" placeholder="Buscar Pokemon"
                onChange={(e) => handleChange(e)}
            />
            {/* pokemon normal */}
            <img src={urlpokemon} />
            <img src={urlPokemonBack} />
            {/* pokemon shiny */}
            <img src={urlPokemonShiny}/>
            <img src={urlPokemonShinyback}/>
            {/* pokemon femenino */}
            <img src={urlPokemonFemale}/>
            <img src={urlPokemonFemaleback}/>


            <Button variant="contained" endIcon={<SearchIcon />} onClick={handleClick}>
                Buscar
            </Button>
        </>

    )
}

export default List
