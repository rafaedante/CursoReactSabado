import './App.css';
import Contador from './componentes/Contador';
import Mensaje from './componentes/Mensaje';
//import {Mensaje} from './componentes/Mensaje';

function App() {
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
            <div className="row">
              <div className="col-4"><Mensaje msj="Mensaje Nro 1" fondo="green"/></div>
              <div className="col-4"><Mensaje msj="Mensaje Nro 2" fondo="orangered"/></div>
              <div className="col-4"><Mensaje msj="Mensaje Nro 3" fondo="blue"/></div>
            </div>

            <hr/>
            <Contador id="1" valor="123" fondo="brown" />
            <Contador id="2" valor="321" fondo="black" />
         </div>
      </div>       
    </div>
  );
}

export default App;
