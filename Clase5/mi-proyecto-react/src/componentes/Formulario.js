import React from 'react'
import './Formulario.css'

export default class Formulario extends React.Component {
    constructor(props) {
        super(props)

        console.log('Formulario ->  constructor')
    }

    state = {
        nombre : '',
        apellido: '',
        edad: '',
        email: '',
        password: '',
        notas: ''
    }

    enviar(e) {
        e.preventDefault()
        console.log(this.state)
    }

    render() {

        let {nombre, apellido, edad, email, password, notas} = this.state

        return (
            <div className="Formulario">
                <div className="jumbotron">
                    <h3>Componente Formulario</h3>
                    <hr/>

                    <form onSubmit= {e => this.enviar(e)}>

                       {/*  -----------------------------
                                Campo nombre
                        ------------------------------ */}
                        <div className="form-group">
                            <label htmlFor="nombre">Nombre</label>
                            <input
                                type="text"
                                id= "nombre"
                                className="form-control"
                                value={nombre}
                                onChange= {
                                    e => this.setState({nombre: e.target.value})
                                }
                            />
                        </div>

                        {/*  -----------------------------
                                Campo apellido
                        ------------------------------ */}
                        <div className="form-group">
                            <label htmlFor="apellido">Apellido</label>
                            <input
                                type="text"
                                id= "apellido"
                                className="form-control"
                                value={apellido}
                                onChange= {
                                    e => this.setState({apellido: e.target.value})
                                }
                            />
                        </div>

                        {/*  -----------------------------
                                Campo edad
                        ------------------------------ */}
                        <div className="form-group">
                            <label htmlFor="edad">Edad</label>
                            <input
                                type="number"
                                id= "edad"
                                className="form-control"
                                value={edad}
                                onChange= {
                                    e => this.setState({edad: e.target.value})
                                }
                            />
                        </div>

                         {/*  -----------------------------
                                Campo email
                        ------------------------------ */}
                        <div className="form-group">
                            <label htmlFor="email">Email</label>
                            <input
                                type="email"
                                id= "email"
                                className="form-control"
                                value={email}
                                onChange= {
                                    e => this.setState({email: e.target.value})
                                }
                            />
                        </div>

                         {/*  -----------------------------
                                Campo password
                        ------------------------------ */}
                        <div className="form-group">
                            <label htmlFor="password">Password</label>
                            <input
                                type="password"
                                id= "password"
                                className="form-control"
                                value={password}
                                onChange= {
                                    e => this.setState({password: e.target.value})
                                }
                            />
                        </div>

                         {/*  -----------------------------
                                Campo notas
                        ------------------------------ */}
                        <div className="form-group">
                            <label htmlFor="notas">Notas</label>
                            <textarea
                                id= "notas"
                                cols="30"
                                rows="10"
                                className="form-control"
                                value={notas}
                                onChange= {
                                    e => this.setState({notas: e.target.value})
                                }
                            />
                        </div>
                        
                        {/* ---Boton de envio------- */}
                        <button className= "btn btn-success mt-3">Enviar</button>
                    </form>
                </div>
            </div>
        )
    }
}