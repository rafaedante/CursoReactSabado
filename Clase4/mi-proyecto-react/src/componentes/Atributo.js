import React from 'react'
import './Atributo.css'

export default class Atributo extends React.Component {

    constructor(props) {
        super(props)

        console.log('Atributo -> constructor')
    }

    state = {
        estado1 : true,
        estado2 : true
    }

    cambiarEstilo(estado) {
        return {
            backgroundColor : estado? 'green':'red',
            color: 'white',
            padding: '10px',
            borderRadius: '10px'
        }
    }

    cambiarClase(estado){
        return `btn btn-${estado?'success':'danger'}`
    }

    render() {
        let {estado1, estado2} = this.state
        return (
            <div className="Atributo">
                <div className="jumbotron">
                    <h3>Componente Atributo</h3>
                    <hr/>

                    {/* ----------------------------------- */}
                    <h4><u>Propiedades CSS Condicionales</u></h4>
                    <button className="btm btn-secondary mt-4 mb-1" onClick= {
                        () => this.setState(prevstate => ({estado1: !prevstate.estado1}))
                    }>{estado1? 'Fondo 1':'Fondo 2'}

                    </button>

                    <p style= {this.cambiarEstilo(estado1)}>
                        Lorem ipsum dolor sit, amet consectetur adipisicing elit. Accusantium fugit assumenda incidunt debitis cupiditate nostrum nisi aspernatur cum quisquam nihil. Excepturi sequi fugiat facilis aspernatur rerum voluptatem amet unde nemo!
                    </p>

                    <hr/>

                    {/* ----------------------------------- */}
                    <h4><u>Clases CSS Condicionales</u></h4>
                    <button className="btm btn-secondary mt-4 mb-1" onClick= {
                        () => this.setState(prevstate => ({estado2: !prevstate.estado1}))
                    }>{estado2? 'Fondo 1':'Fondo 2'}

                    </button>

                    <p className= {this.cambiarClase(estado2)}>
                        Lorem ipsum dolor sit, amet consectetur adipisicing elit. Accusantium fugit assumenda incidunt debitis cupiditate nostrum nisi aspernatur cum quisquam nihil. Excepturi sequi fugiat facilis aspernatur rerum voluptatem amet unde nemo!
                    </p>
                </div>
            </div>
        )
    }
}