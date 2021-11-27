import { NavLink } from "react-router-dom";

export const Navbar = () => 
<nav className="navbar navbar-expand-lg navbar-light bg-light">
  <NavLink className="navbar-brand" to="/">Inicio</NavLink>
  <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
    <span className="navbar-toggler-icon"></span>
  </button>
  <div className="collapse navbar-collapse" id="navbarNav">
    <ul className="navbar-nav"> 

    {/*  -------------------
      Ruta entrada
      ------------------ */}
      <li className="nav-item">
        <NavLink className="nav-link" activeStyle = {{
            color: 'gold',
            fontWeight: 'bold'
        }}
        to="/entrada">Entrada</NavLink>
      </li>

      {/*  -------------------
      Ruta estructura
      ------------------ */}
      <li className="nav-item">
        <NavLink className="nav-link" activeStyle = {{
            color: 'gold',
            fontWeight: 'bold'
        }}
        to="/estructura">Estructura</NavLink>
      </li>

      {/*  -------------------
      Ruta atributo
      ------------------ --------*/}
      <li className="nav-item">
        <NavLink className="nav-link" activeStyle = {{
            color: 'gold',
            fontWeight: 'bold'
        }}
        to="/atributo">Atributo</NavLink>
      </li>

      {/*  -------------------
      Ruta formulario
      ------------------ --------*/}
      <li className="nav-item">
        <NavLink className="nav-link" activeStyle = {{
            color: 'gold',
            fontWeight: 'bold'
        }}
        to="/formulario">Formulario</NavLink>
      </li>

     {/*  -------------------
      Ruta mensaje 1
      ------------------ */}
      <li className="nav-item">
        <NavLink className="nav-link" activeStyle = {{
            color: 'gold',
            fontWeight: 'bold'
        }}
        to="/mensaje1/Mensaje Nro 1/green">Msj 1</NavLink>
      </li>

       {/*  -------------------
      Ruta mensaje 2
      ------------------ */}
      <li className="nav-item">
        <NavLink className="nav-link" activeStyle = {{
            color: 'gold',
            fontWeight: 'bold'
        }}
        to="/mensaje2/Mensaje Nro 2/orangered">Msj 2</NavLink>
      </li>

       {/*  -------------------
      Ruta mensaje 3
      ------------------ */}
      <li className="nav-item">
        <NavLink className="nav-link" activeStyle = {{
            color: 'gold',
            fontWeight: 'bold'
        }}
        to="/mensaje3/Mensaje Nro 3/blue">Msj 3</NavLink>
      </li>
      
    </ul>
  </div>
</nav>