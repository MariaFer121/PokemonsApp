import { Breadcrumbs } from "@mui/material"
import React from "react"
import { Link, Outlet } from "react-router-dom"

//Import de los iconos
//icono de combate
import SportsKabaddiIcon from '@mui/icons-material/SportsKabaddi';
//icono de historial
import HistoryIcon from '@mui/icons-material/History';
//icono de pokemon
import AndroidIcon from '@mui/icons-material/Android';
//icono de pokedex
import CatchingPokemonIcon from '@mui/icons-material/CatchingPokemon';



const Root = (props) => {
    return (
        <>
            {/* Breadcrumbs ayuda a visualizar de mejor manera los enlaces pesarandolos por un / */}
            <Breadcrumbs aria-label="breadcrumb">
                <Link underline="hover"
                    sx={{ display: 'flex', alignItems: 'center' }}
                    color="inherit" to="/pokedex">

                    {/* Ingreso del icono */}
                    <CatchingPokemonIcon sx={{ mr: 0.5 }} fontSize="inherit" />
                    PokeDex
                </Link>
                <Link underline="hover"
                    sx={{ display: 'flex', alignItems: 'center' }}
                    color="inherit" to="/pokemon">
                    <AndroidIcon sx={{ mr: 0.5 }} fontSize="inherit" />
                    Pokemon
                </Link>

                <Link underline="hover"
                    sx={{ display: 'flex', alignItems: 'center' }}
                    color="inherit" to="/combat">
                    <SportsKabaddiIcon sx={{ mr: 0.5 }} fontSize="inherit" />
                    Combate
                </Link>

                <Link underline="hover"
                    sx={{ display: 'flex', alignItems: 'center' }}
                    color="inherit" to="/historial">
                    <HistoryIcon sx={{ mr: 0.5 }} fontSize="inherit" />
                    Historial
                </Link>
            </Breadcrumbs>
            <br /><br /><br />
            <Outlet />

        </>
    )
}

export default Root