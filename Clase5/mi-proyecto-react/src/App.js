import React from 'react'
import { BrowserRouter, Redirect, Route, Switch } from 'react-router-dom'
import './App.css';
import Atributo from './componentes/Atributo';
import Contador from './componentes/Contador';
import Entrada from './componentes/Entrada';
import Estructura from './componentes/Estructura';
import Formulario from './componentes/Formulario';
import Mensaje from './componentes/Mensaje';
import {Navbar} from './componentes/Navbar'
import { Rutanovalida } from './componentes/Rutanovalida';
import {store} from './state/store'

//function App() {  
class App extends React.Component { 
  
  state = {
    contador : 456
  }

  /* -------------------------------------------
        LIFE CYCLE HOOKS
    ------------------------------------------- */
    // El componente tiene su vista lista (HTML esta cargando)
    componentDidMount() {
      console.log('App -> componentDidMount')

      store.subscribe(()=> {
          let {contador} = store.getState()
          this.setState({contador})
      })
  } 

  // El componente sera desmontado (borrado de la vista)
  componentWillUnmount() {
      this.unsubscriber()
      console.log('App -> componentWillUnmount')
  }

  //---------------------------------------------------------

  render() {     

      let {contador} = store.getState()
      return (
        <div className="App">
          <div className="container mt-3">
             <div className="jumbotron">
                <h1>Mi Proyecto React</h1>
                <hr/>

                {/* ---------------CONTADOR REDUX--------------- */}
                <h2>Contador Redux : {contador}</h2> 
                <hr/>            
                {/* ------------------------------------------------ */}

                <BrowserRouter>
                    <Navbar />
                    <Switch>
                      {/* ----------------------
                        Redireccion
                      ---------------------- */}
                       <Route exact path="/">
                        <Redirect to="/entrada" />
                       </Route> 

                       {/* -------------------------------
                        Ruteado con parametros por props
                      ------------------------------- */} 
                      <Route path="/entrada" component ={
                        () => <Entrada titulo="Entrada!!!!" />} />

                        {/* -------------------------------
                        Ruteado sin parametros 
                      ------------------------------- */}                       
                      <Route path="/estructura" component ={Estructura} />
                      <Route path="/atributo" component ={Atributo} />
                      <Route path="/formulario" component ={Formulario} />
                      <Route path="/contador" component ={Contador} />

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
             </div>
          </div>       
        </div>
    );
  }  
}

export default App;
