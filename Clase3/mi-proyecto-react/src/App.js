import React from 'react'
import { BrowserRouter, Redirect, Route, Switch } from 'react-router-dom'
import './App.css';
import Contador from './componentes/Contador';
import Mensaje from './componentes/Mensaje';
import {Navbar} from './componentes/Navbar'
import { Rutanovalida } from './componentes/Rutanovalida';

function MostrarDatosHijo(props) {
   let {id, contador, contador2} = props.datos

   if(id) {
      return <h3 className="alert alert-success">Contador del Hijo({id}): (C1){contador} (C2){contador2}</h3>
   } else {
      return <h3 className="alert alert-danger">Contador del Hijo: No hay datos</h3>
   }            
}

/* function App() { */
  class App extends React.Component {

    constructor() {
      super()
      console.log(`App constructor`)

      //this.recibirDatosHijo = this.recibirDatosHijo.bind(this)
    }

    state = {
      //contador: null
      datos: {contador:null, contador2:null, id:null }
    }

    recibirDatosHijo(datos) {
        let {contador, contador2, id} = datos
        console.log(`> App recibirDatosHijo(${id}): (C1)${contador} (C2)${contador2}`)
        //this.setState({contador: contador})
        //this.setState({datos: datos})
        this.setState({datos})
    }

    render() {

      //let {contador, contador2, id} = this.state.datos

      return (
        <div className="App">
          <div className="container mt-3">
             <div className="jumbotron">
                <h1>Mi Proyecto React</h1>
                <hr/>
                <p>
                Lorem ipsum dolor sit, amet consectetur adipisicing elit. Accusantium fugit assumenda incidunt debitis cupiditate nostrum nisi aspernatur cum quisquam nihil. Excepturi sequi fugiat facilis aspernatur rerum voluptatem amet unde nemo!
                </p>
                <hr/>
                <hr/>

                <h2>Router</h2>
                <br />

                <BrowserRouter>
                    <Navbar />
                    <Switch>
                      {/* ----------------------
                        Redireccion
                      ---------------------- */}
                       <Route exact path="/">
                        <Redirect to="/mensaje2/Mensaje Nro 2/orangered" />
                       </Route>

                      {/* -------------------------------
                        Ruteado sin parametros 
                      ------------------------------- */}
                       <Route path="/mensaje" component ={Mensaje} />

                      {/* -------------------------------
                        Ruteado con parametros por props
                      ------------------------------- */}
                       
                       {/* <Route path="/mensaje1" component = {
                         () => <Mensaje msj="Mensaje Nro 1" fondo="green"/>
                       }/>
                       <Route path="/mensaje2" component = {
                         () => <Mensaje msj="Mensaje Nro 2" fondo="orangered"/>
                       }/>
                       <Route path="/mensaje3" component = {
                         () => <Mensaje msj="Mensaje Nro 3" fondo="blue"/>
                       }/> */}

                        {/* -------------------------------
                        Ruteado con parametros por ruta
                      ------------------------------- */}
                       
                       <Route path="/mensaje1/:msj/:fondo" component ={Mensaje} />
                       <Route path="/mensaje2/:msj/:fondo" component ={Mensaje} />
                       <Route path="/mensaje3/:msj/:fondo" component ={Mensaje} />

                      {/* -------------------------------
                        Componente para ruta no valida 
                      ------------------------------- */}
                       <Route component = {Rutanovalida}/>
                    </Switch>
                </BrowserRouter>

                
    
                {/* <hr/>
                <div className="row">
                  <div className="col-4"><Mensaje msj="Mensaje Nro 1" fondo="green"/></div>
                  <div className="col-4"><Mensaje msj="Mensaje Nro 2" fondo="orangered"/></div>
                  <div className="col-4"><Mensaje msj="Mensaje Nro 3" fondo="blue"/></div>
                </div>    */} 
                <hr/>
                <hr/>

                <h2>Up Lifting</h2>
                <br />

               {/*  -------------------------------------------------------------
                Render Condicional && (evalua si es distinto de null o undefined)
                ----------------------------------------------------------------- */}
                {/* { id &&
                <h3 className="alert alert-success">Contador del Hijo({id}): (C1){contador} (C2){contador2}</h3>
                }
                 { !id &&
                <h3 className="alert alert-danger">Contador del Hijo: No hay datos</h3>
                } */}

                {/*  -------------------------------------------------------------
                Render Condicional: Operador ternario ?:
                ----------------------------------------------------------------- */}
               {/*  { id?
                <h3 className="alert alert-success">Contador del Hijo({id}): (C1){contador} (C2){contador2}</h3>
                 :
                <h3 className="alert alert-danger">Contador del Hijo: No hay datos</h3>
                } */}

                 {/*  -------------------------------------------------------------
                Render Condicional: basado en un componente
                ----------------------------------------------------------------- */}
                <MostrarDatosHijo datos={this.state.datos} />

                {/* <Contador id="1" valor="123" fondo="brown" enviarContadorAlPadre={this.recibirDatosHijo}/>
                <Contador id="2" valor="321" fondo="black" enviarContadorAlPadre={this.recibirDatosHijo}/> */}

              <Contador id="1" valor="123" fondo="brown" enviarContadorAlPadre={
                    datos => this.recibirDatosHijo(datos)
                 }/>
              <Contador id="2" valor="321" fondo="black" enviarContadorAlPadre={
                  datos => this.recibirDatosHijo(datos)
                }/>
             </div>
          </div>       
        </div>
      );

    }  
}


export default App;
