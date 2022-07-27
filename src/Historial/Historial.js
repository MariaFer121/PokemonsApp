import React from "react"
import {
    Input,
    Button
} from "@mui/material"

const Historial = (props) => {
    const [busqueda, setBusqueda] = useState('')
    const [pokemon, setPokemon] = useState('')
    // funcion busqueda de pokemon 
    const busquedaPokemon = async (pokemon) => {
        try {
            let url = `https://pokeapi.co/api/v2/pokemon/${pokemon}`;
            const response = await fetch(url);
            const data = await response.json();
            return data;
        } catch (err) { }
    }


    const onChange = (e) => {
        setBusqueda(e.target.value)
    }
    const onClick = async (e) => {
        const data = await busquedaPokemon(busqueda)
        setPokemon(data)
    }

    return (
        <>
            <Input
                placeholder="Buscar Pokemon"
                type='text'
                onChange={onChange}
                value={busqueda}>
            </Input>
            <Button
                type='submit'
                onClick={(e) => onClick(e)}>Buscar</Button>


        </>
    )
}

export default Historial