import React from 'react'
import { BrowserRouter, Redirect, Route, Switch } from 'react-router-dom'
import './App.css';
import Atributo from './componentes/Atributo';
import Entrada from './componentes/Entrada';
import Estructura from './componentes/Estructura';
import Formulario from './componentes/Formulario';
import Mensaje from './componentes/Mensaje';
import {Navbar} from './componentes/Navbar'
import { Rutanovalida } from './componentes/Rutanovalida';

function App() {   

      return (
        <div className="App">
          <div className="container mt-3">
             <div className="jumbotron">
                <h1>Mi Proyecto React</h1>
                <hr/>               

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

export default App;
