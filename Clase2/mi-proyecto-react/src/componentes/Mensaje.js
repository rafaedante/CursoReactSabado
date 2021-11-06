import './Mensaje.css'

/*****************************************************************/
/*Componente basado en una funcion (no guarda estado -> stateless*/
/*****************************************************************/

//export function Mensaje() {
function Mensaje(props) {
    //let msj = 'Mensaje Nro 1'
    //let msj = props.msj
    //let fondo = props.fondo
    let {msj, fondo} = props // destructuring object
    return (
        <div className="Mensaje">
            <div className="jumbotron" style={{backgroundColor: fondo}}>
                <h3>{msj}</h3>
                {/* {4+3} */}
                {/* {new Date().toLocaleString()} */}
                {/* {Date.now()} */}
                <hr/>
                <p>
                Lorem ipsum dolor sit, amet consectetur adipisicing elit. Accusantium fugit assumenda incidunt debitis cupiditate nostrum nisi aspernatur cum quisquam nihil. Excepturi sequi fugiat facilis aspernatur rerum voluptatem amet unde nemo!
                </p>
            </div>            
        </div>        
    )
}

export default Mensaje
 /* export {
    Mensaje
} */