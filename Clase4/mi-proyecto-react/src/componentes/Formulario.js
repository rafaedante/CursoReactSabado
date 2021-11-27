import React from 'react'
import './Formulario.css'

export default class Formulario extends React.Component {

    constructor(props) {
        super(props)

        console.log('Formulario -> constructor')
    }

    state = {

    }

    render() {
        return (
            <div className="Formulario">
                <div className="jumbotron">
                    <h3>Componente Formulario</h3>
                    <hr/>
                </div>
            </div>
        )
    }
}