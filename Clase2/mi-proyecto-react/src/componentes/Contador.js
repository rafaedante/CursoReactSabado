import React from 'react';

import './Contador.css'

/*****************************************************************/
/*Componente basado en una clase (guarda estado -> statefull*/
/*****************************************************************/

class Contador extends React.Component{

    constructor(props) {
        super(props)
        console.log(`Contador ${props.id} Constructor`)

        //this.incrementar = this.incrementar.bind(this)

        this.state = {
            contador : Number(props.valor)
        }
    }

    /*state = {
        contador : Number(this.props.valor)
    }*/

    incrementar() {
        console.log(`Contador ${this.props.id} Incrementar`)
        this.setState(prevstate => ({contador: prevstate.contador + 1}))
    }

    render() {
        console.log('Contador render')

        //let contador = 123
        let {id, fondo} = this.props
        let {contador} = this.state
        return (
            <div className="Contador">
                <div className="jumbotron" style={{backgroundColor: fondo}}>
                    <h3>Contador {id}</h3>
                    <hr/>
                    <h4 className="alert alert-info w-50">
                        Valor: {contador}
                    </h4>

                   {/* <button className="btn btn-success my-1" onClick={this.incrementar}>
                        Incrementar</button> */}
                    
                   {/*  <button className="btn btn-success my-1" onClick={
                        () => this.incrementar()}>
                        Incrementar</button> */}
                    
                    {/* <button className="btn btn-success my-1" onClick={ () => {
                            //NO ES LA FORMA DE ACTUALIZAR UNA PROPIEDAD DE ESTADO
                            //this.state.contador = this.state.contador + 1
                            //this.forceUpdate() 

                            // FORMA 1 - CORRECTA                            
                            //this.setState({contador : this.state.contador + 1})

                            // FORMA 2 - CORRECTA
                            this.setState(prevstate => ({contador: prevstate.contador + 1}))
                            
                    }}>
                        Incrementar</button> */}

                       <button className="btn btn-success my-1" onClick={
                        () => this.incrementar()}>
                        Incrementar</button>
                </div>
            </div>            
        )
    }
}

export default Contador