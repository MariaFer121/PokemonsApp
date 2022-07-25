import {
    React,
    useEffect,
    useState
} from "react"
//Import de los elemntos para poder crear la carta
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import Typography from '@mui/material/Typography';
// el input, button, etc importados desde mui
import {
    Input,
    Button,
    CardMedia,
    Radio
} from "@mui/material"
// icono de buscar
import SearchIcon from '@mui/icons-material/Search';
import '../Pokemon/Pokemon.css'



const Pokemon = (props) => {


    //url de pokemon frontal
    const [urlpokemon, setUrlPokemon] = useState("")
    //url de pokemon detras
    const [urlPokemonBack, setUrlPokemonBack] = useState("")
    // url de el nombre el pokemon
    const [pokemonName, setPokemonName] = useState("")
    //pokemon shiny de frente
    const [urlPokemonShiny, setUrlPokemonShiny] = useState("")
    //pokemon shiny de espalda
    const [urlPokemonShinyback, setUrlPokemonShinyback] = useState("")
    //pokemon femenino frontal 
    const [urlPokemonFemale, setUrlPokemonFemale] = useState("")
    //pokemon femenino detras
    const [urlPokemonFemaleback, setUrlPokemonFemaleback] = useState("")
    //const para usar lo que se ingresa en el input y mostarlo con el boton
    const [pokemonInput, setPokemonInput] = useState("")
    //numero pokemon
    const [numero, setNumero] = useState("")
    //nombre P
    const [nombre, setNombre] = useState("")
    //tipo P
    const [tipo, setTipo] = useState("")
    //pesp P
    const [peso, setPeso] = useState("")
    //Altura P
    const [altura, setAltura] = useState("")
    //Hablidad P
    const [habilidad, setHabilidad] = useState("")
    //Movimiento P
    const [movimeiento, setMovimiento] = useState("")
    //Experiencia P
    const [experiencia, setExperiencia] = useState("")
    //estaditicas P
    const [estadisticas, setEstadisticas] = useState("")
    //radio
    const [radio, setRadio] = useState('Normal')



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
                    // de caracteriticas de los Pokemones 
                    setNumero(data.id)
                    setNombre(data.name)
                    setTipo(data.types.map(t => (t.type.name + (', '))))
                    setPeso(data.weight)
                    setAltura(data.height)
                    setHabilidad(data.abilities.map(e => ((e.ability.name + ' '))))
                    setMovimiento(data.moves.map(m => (m.move.name + ', ')))
                    setEstadisticas(data.stats.map(s => (s.stat.name + ': ' + s.base_stat + ' ')))
                    setExperiencia(data.base_experience)
                }
            )
    }, [pokemonName])

    const handleChange = (e) => {
        setPokemonInput(e.target.value)
    }

    const handleClick = () => {
        setPokemonName(pokemonInput)
    }

    const handleRadio = (e) => {
        setRadio(e.target.value)
    }
    //Variables para validar el uso de radio
    let
        url, url1, descripcion, oculto, oculto1, oculto2

    if (urlpokemon === null || urlPokemonBack === null) {
        oculto = true
    } else {
        oculto = false
        if (radio === 'Normal') {
            url = urlpokemon
            url1 = urlPokemonBack
            descripcion = 'Pokemon Normal'
        }
    }

    if (urlPokemonShiny === null || urlPokemonShinyback === null) {
        oculto1 = true
    } else {
        oculto1 = false

        if (radio === 'Shiny') {
            url = urlPokemonShiny
            url1 = urlPokemonShinyback
            descripcion = 'Pokemon Shiny'
        }
    }

    if (urlPokemonFemale === null || urlPokemonFemaleback === null) {
        oculto2 = true
    } else {
        oculto2 = false
        if (radio === 'Female') {
            url = urlPokemonFemale
            url1 = urlPokemonFemaleback
            descripcion = 'Pokemon Female'
        }
    }


    return (
        <> {
            /* Buscardor */}

            <Input type="text"
                placeholder="Buscar Pokemon"
                onChange={
                    (e) => handleChange(e)
                }
            /> {
            /* Boton de busqueda */}
            <Button variant="contained"
                endIcon={
                    < SearchIcon />
                }
                onClick={
                    handleClick
                } >
                Buscar </Button> {
            /* Carta en la cual se ve la imagen del pokemon y sus atrivutos */}
            <Card sx={{ minWidth: 275 }} >
                <CardContent className="Imagen" >
                    <CardMedia component="img"
                        image={
                            url
                        }
                        alt={
                            descripcion
                        }
                    /> <CardMedia component="img"
                        image={
                            url1
                        }
                        alt={
                            descripcion
                        }
                    /> </CardContent>
                {/* RadioButton */}
                <Radio checked={
                    radio === 'Normal' ? true : false
                }
                    onChange={
                        handleRadio
                    }
                    value='Normal'
                    hidden={
                        oculto
                    }

                /> <Radio checked={
                    radio === 'Shiny' ? true : false
                }
                    onChange={
                        handleRadio
                    }
                    value='Shiny'
                    hidden={
                        oculto1
                    }
                /> <Radio checked={
                    radio === 'Female' ? true : false
                }
                    onChange={
                        handleRadio
                    }
                    value='Female'
                    hidden={
                        oculto2
                    }
                /> <CardContent >
                    {/* Muestra el nombre y el numero del pokemon */}
                    <Typography align="center"
                        gutterBottom variant="h5"
                        component='div' > {
                            nombre
                        }# {
                            numero
                        }
                    </Typography>
                    <Typography align="center"
                        variant="body2"
                        color='text.secundary' >

                    </Typography> {
            /* contiene las caracteristicas del pokemon buscado */}
                    <CardContent >

                        <Typography paragraph >
                            Caracteriticas:
                        </Typography>
                        <Typography paragraph >
                            Tipo: {
                                tipo
                            } <br />
                            Peso: {
                                peso
                            } <br />
                            Altura: {
                                altura
                            }
                            <br />
                            Habilidades: {
                                habilidad
                            }
                            <br />
                            Movimientos: {
                                movimeiento[0]
                            }
                            <br />
                            Exp.Base: {
                                experiencia
                            }
                            <br />
                            Stat:

                            <br /> {
                                estadisticas[0]
                            }
                            <br /> {
                                estadisticas[1]
                            }
                            <br /> {
                                estadisticas[2]
                            }
                            <br /> {
                                estadisticas[3]
                            }
                            <br /> {
                                estadisticas[4]
                            }
                        </Typography>
                    </CardContent>
                </CardContent>
            </Card>
        </>
    )
}

export default Pokemon;