import React from "react"
import Letra from "../img/Letra.png"
import '../img/img.css'
//funcion para poder subir una imagen
const Imagen = (props) => {
    return (
        <nav>
            <img src={Letra} alt="imagen de prueba" className="nav-img" />
        </nav>

    )
}

export default Imagen