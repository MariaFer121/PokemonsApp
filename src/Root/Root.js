import React from "react"
import { Link, Outlet } from "react-router-dom"

const Root = (props) => {
    return (
        <>
            <Link to="/combat">
                Combate
            </Link>
            <Link to="/historial">
                Historial
            </Link>
            <Link to="/pokemon">
                Pokemon
            </Link>
            <Link to="/pokedex">
                PokeDex
            </Link>
            <br /><br /><br />
            <Outlet/>
        </>
    )
}

export default Root