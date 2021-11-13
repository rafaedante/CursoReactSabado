import './Encabezado.css'

function Encabezado(props) {

    let { titulo } = props

    return (
        <div className="Encabezado">
            <h1 style= {{color: 'blue'}}>{titulo}</h1>
        </div>
    )
}

export default Encabezado