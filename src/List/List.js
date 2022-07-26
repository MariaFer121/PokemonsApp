import React, { useEffect, useState } from 'react';
import Card from '../Card/Card';
import './List.css';
import { Input } from "@mui/material"
const List = () => {
    const [search, setSearch] = useState('');
    const [pokemons, setPokemons] = useState(null);
    //filta los pokemones por el nombre 
    const s = search && search.toLowerCase();
    const filtered =
        !pokemons || !s
            ? pokemons
            : pokemons.filter(({ name }) =>
                name.toLowerCase().includes(s)
            );

    useEffect(() => {
        fetch('https://pokeapi.co/api/v2/pokemon?limit=100000&offset=0')
            .then((r) => r.json())
            .then((json) => {
                setPokemons(json.results);
            });
    }, []);

    if (!pokemons) {
        return null;
    }

    return (
        <>
            <Input
                placeholder="Buscar Pokemon"
                type="search"
                value={search}
                onChange={(ev) => setSearch(ev.tanger.name)}

            />
            {/* Muestra la lista de pokemones */}
            {filtered && (
                <ul className="PokemonList">
                    {filtered.map(({ name }) => (
                        <Card key={name} name={name} />
                    ))}
                </ul>
            )}
        </>
    );
};

export default List;