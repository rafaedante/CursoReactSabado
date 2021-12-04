import React from 'react'
import './Contador.css'
import {store} from '../state/store'
import {accionDecrementar, accionIncrementar} from '../state/actions'

export default class Contador extends React.Component {

    constructor(props) {
        super(props)

        console.log('Contador -> constructor')
    }

    state = {       
        contador: 456
    } 

    /* -------------------------------------------
        LIFE CYCLE HOOKS
    ------------------------------------------- */
    // El componente tiene su vista lista (HTML esta cargando)
    componentDidMount() {
        console.log('Contador -> componentDidMount')

        store.subscribe(()=> {
            let {contador} = store.getState()
            this.setState({contador})
        })
    }

    // Cambió algo en la vista del componente
    /* componentDidUpdate() {
        console.log('Contador -> componentDidUpdate')
    } */

    // El componente sera desmontado (borrado de la vista)
    componentWillUnmount() {
        this.unsubscriber()
        console.log('Contador -> componentWillUnmount')
    }

    //---------------------------------------------------------

    render() {
        //let {contador} = this.state
        let {contador} = store.getState()
        return (
            <div className="Contador">
                <div className="jumbotron">
                    <h2>Componente Contador</h2>
                    <hr/>                   
                    
                     <h3>Contador: {contador}</h3>

                     <button className="brn btn-success my-3 mr-2" onClick= {
                        // () => this.setState(prevstate => ({contador : prevstate.contador - 1}))
                        () => {
                            console.log('---------------------------')
                            console.log('DISPATCH -> Contador Decrementar')
                            store.dispatch(accionDecrementar(1))
                        }
                     }>Decrementar</button>

                     <button className="brn btn-success my-3" onClick= {
                        // () => this.setState(prevstate => ({contador : prevstate.contador + 1}))
                        () => {
                            console.log('---------------------------')
                            console.log('DISPATCH -> Contador Incrementar')
                            store.dispatch(accionIncrementar(1))
                        }
                     }>Incrementar</button>
                </div>
            </div>
        )
    }
}