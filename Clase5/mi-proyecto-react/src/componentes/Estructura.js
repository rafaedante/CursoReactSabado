import React from 'react'
import './Estructura.css'

export default class Estructura extends React.Component {

    constructor(props) {
        super(props)

        console.log('Estructura -> constructor')
    }

    state = {
        mostrar: true,
        personas : [
            'Pedro',
            'Juan',
            'Ana',
            'Diego',
            'Cecilia'
        ],
        alumnos : [
            {nombre: 'Pedro', apellido: 'Gomez', edad:23, curso: true, foto: 'https://cdn3.iconfinder.com/data/icons/business-avatar-1/512/10_avatar-128.png'},
            {nombre: 'Pablo', apellido: 'Pico', edad:25, curso: false, foto: 'https://cdn3.iconfinder.com/data/icons/business-avatar-1/512/3_avatar-128.png'},
            {nombre: 'Ana', apellido: 'Gonzalez', edad:32, curso: true, foto: 'https://cdn3.iconfinder.com/data/icons/business-avatar-1/512/4_avatar-128.png'},
            {nombre: 'Lucia', apellido: 'Mei', edad:41, curso: false, foto: 'https://cdn3.iconfinder.com/data/icons/business-avatar-1/512/9_avatar-128.png'},
        ]

    }

    cambiar() {
        this.setState(prevstate => ({mostrar: !prevstate.mostrar}))
    }

    render() {
        let {mostrar, personas, alumnos} = this.state
        return (
            <div className="Estructura">
                <div className="jumbotron">
                    <h3>Componente Estructura</h3>
                    <hr/>

                    {/* ------------------------------ */}
                    <h4><u>Rendering Condicional</u></h4>
                    <button className="btn btn-primary my-2" onClick= {
                            () => this.cambiar()
                    }>
                        Ocultar
                    </button>

                    { mostrar &&
                    <p className="alert alert-info">
                    Lorem ipsum dolor sit, amet consectetur adipisicing elit. Accusantium fugit assumenda incidunt debitis cupiditate nostrum nisi aspernatur cum quisquam nihil. Excepturi sequi fugiat facilis aspernatur rerum voluptatem amet unde nemo!
                    </p>
                    }

                     {/* ------------------------------ */}
                     <h4><u>Loop Rendering</u></h4>

                     <h5>Array de strings en una lista</h5>
                     
                     {/* <ul>
                         <li>{personas[0]}</li>
                         <li>{personas[1]}</li>
                         <li>{personas[2]}</li>
                         <li>{personas[3]}</li>
                     </ul> */}

                     <ul>
                     {
                         personas.map( (persona, indice) => <li key={indice}>{persona}</li>)
                     }                        
                     </ul>
                     <br/>

                     <h5>Array de objetos en una lista</h5>
                     <ul>
                     {
                         alumnos.map(
                             (alumno, indice) => <li key={indice}>
                                 {alumno.nombre} {alumno.apellido}
                            </li>
                         )
                     }                        
                     </ul>

                     <br/>

                     <h5>Array de objetos en una tabla</h5>

                     <table className="table">
                         <thead>
                             <tr className= "bg-success text-white">
                                 <th>Nombre</th>
                                 <th>Apellido</th>
                                 <th>Edad</th>
                                 <th>Curso</th>
                                 <th>Foto</th>
                             </tr>
                         </thead>
                         <tbody>
                         {
                            /*Mostrar todos los alumnos */
                            //alumnos.map((alumno, indice) => 
                            /*Mostrar los alumnos que hicieron el curso */
                            alumnos.filter(alumno => alumno.curso).map((alumno, indice) =>
                                <tr key={indice} className= "bg-info text-white">
                                    <td>{alumno.nombre}</td>
                                    <td>{alumno.apellido}</td>
                                    <td>{alumno.edad}</td>
                                    <td>{alumno.curso?'Si':'No'}</td>
                                    <td>
                                        <img src={alumno.foto} width="50" alt={alumno.nombre} />
                                    </td>
                                </tr>
                            )
                         }       
                         </tbody>
                     </table>

                </div>
            </div>
        )
    }
}