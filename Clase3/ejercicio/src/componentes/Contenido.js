import React from 'react'
import './Contenido.css'

function getColorFondo(indice) {
    let colores = ['yellow', 'cyan', 'orange']
    return {backgroundColor: indice>=0? colores[indice%3] : '' }
}

class Contenido extends React.Component {

    state = {
        indice : -1
    }

    cambiarColor() {
        this.setState(prevstate => ({indice : prevstate.indice+1}))
    }

    render() {
        let {texto} = this.props
        let {indice} = this.state

        return (
            <div className="Contenido">
                <p style={getColorFondo(indice)}>{texto}</p>

                <button className="btn btn-warning" onClick={() => this.cambiarColor()}>
                    Cambiar Color
                </button>
            </div>
        )
    }

}

export default Contenido