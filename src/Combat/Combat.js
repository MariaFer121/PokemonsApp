import { Button, ThemeProvider } from '@mui/material'
import React from 'react'
import theme from '../theme'
import DeleteIcon from '@mui/icons-material/Delete'
import SportsKabaddiIcon from '@mui/icons-material/SportsKabaddi';



const Combat = (props) => {

    const handleClick = () => {
        console.log("Funciona desde la funcion prehecha")
    }
    return (
        <>
            Combate Pokemon !
            <ThemeProvider theme={theme} >
                <Button
                    startIcon={<SportsKabaddiIcon />}
                    onClick={handleClick}
                    color="pokemon"
                    size="small"
                    variant="contained">Combate</Button>

            </ThemeProvider>
            <Button size="medium" color="success" variant="contained">Combate</Button>
            <Button size="large" variant="outlined">Combate</Button>
        </>
    )
}
export default Combat