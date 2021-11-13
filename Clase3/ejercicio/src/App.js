import './App.css';
import Encabezado from './componentes/Encabezado';
import Contenido from './componentes/Contenido';

function App() {
  return (
    <div className="App">
      <div className="container mt-3">
        <div className="jumbotron">
          <Encabezado titulo="Este es el encabezado" />
          <Contenido texto = "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Fugit culpa non velit pariatur quod consequuntur, fuga voluptates praesentium explicabo maiores ipsa? Suscipit dolorem, dicta ratione ab quos vel cum autem!" />          
        </div>
      </div>
    </div>
  );
}

export default App;
