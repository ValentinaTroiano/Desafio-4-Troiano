import React from 'react';

class Florales extends  React.Component{
    render(){
        return(
            <>
            <h2>Arreglos Florales</h2>
            <div> {this.props.nombre}</div>
            <div>Precio: ${this.props.precio} </div>


            </>

        )
    }
    

}
export default Florales;