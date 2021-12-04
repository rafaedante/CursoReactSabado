import React from 'react'
import './Entrada.css'

export default class Entrada extends React.Component {

    constructor(props) {
        super(props)

        console.log('Entrada -> constructor')
    }

    state = {
        mensaje : 'Soy un mensaje!!!!',
        valor1: 123,
        contador: 456
    }

    render() {
        let {titulo} = this.props
        let {mensaje, valor1, contador} = this.state
        return (
            <div className="Entrada">
                <div className="jumbotron">
                    <h3>Componente {titulo}</h3>
                    <hr/>

                    {/* ------------------------------- */}
                    <h4><u>Expresion</u></h4>
                    <p>{mensaje}</p>

                    {/* ------------------------------- */}
                    <h4><u>Property Binding</u></h4>
                    <input type="text" value="123" readOnly/> <br/>
                    <input type="text" value={'123'} readOnly/> <br/>
                    <input type="text" value={valor1} readOnly/> {valor1} <br/>
                    <br/>
                     {/* ------------------------------- */}
                     <h4><u>Event Binding</u></h4>
                     <button className="brn btn-success my-3" onClick= {
                         () => this.setState(prevstate => ({contador : prevstate.contador + 1}))
                     }>
                         Contar {contador}
                     </button>
                </div>
            </div>
        )
    }
}