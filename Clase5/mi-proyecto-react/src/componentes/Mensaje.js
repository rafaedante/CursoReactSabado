import './Mensaje.css'

/*****************************************************************/
/*Componente basado en una funcion (no guarda estado -> stateless*/
/*****************************************************************/
function Mensaje(props) {
    
    let {msj, fondo} = props.match.params // destructuring object
    return (
        <div className="Mensaje">
            <div className="jumbotron" style={{backgroundColor: fondo}}>
                <h3>{msj}</h3>                
                <hr/>
                <p>
                Lorem ipsum dolor sit, amet consectetur adipisicing elit. Accusantium fugit assumenda incidunt debitis cupiditate nostrum nisi aspernatur cum quisquam nihil. Excepturi sequi fugiat facilis aspernatur rerum voluptatem amet unde nemo!
                </p>
            </div>            
        </div>        
    )
}

export default Mensaje
 