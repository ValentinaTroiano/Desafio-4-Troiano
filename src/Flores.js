function Flores (props){
    return(
      <>
      <h2>{props.nombre}</h2>
      <div>Precio: ${props.precio}</div>
      <div>Cantidad: {props.cantidad}</div>
      </>
    )
  
}

export default Flores;