import Flores from './Flores.js';
import Florales from './Florales';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';



function App() {
  return (
    <>
    <body className="body">
     <h1 className="titulo">La Floreria</h1>
     <div class="row justify-content-end">
      <div class="col-4">
        <div class="dropdown  " id="carritoEstilo" >
          <button class="btn btn-secondary dropdown-toggle" type="button" id="botonCarrito" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
            Mi Carrito <span id="carritoCantidad" class="badge badge-light">0</span>
          </button>
          <div  id= "carritoProductos" class="dropdown-menu" aria-labelledby="dropdownMenuButton">
            
          </div>
        </div>
      </div>
    </div>
    <nav class="navbar navbar-expand-lg navbar-light bg-light" id="menu" >
    
    
    <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNavAltMarkup" aria-controls="navbarNavAltMarkup" aria-expanded="false" aria-label="Toggle navigation">
      <span class="navbar-toggler-icon"></span>
      
    </button>
    <div class="collapse navbar-collapse" id="navbarNavAltMarkup">
      <div class="navbar-nav">
        <a class="nav-link active" href="#"> <button id="home"> Home</button> <span class="sr-only"></span></a>
        <a class="nav-link"  href="#"> <button id="nosotros">Sobre Nosotros</button></a>
        <a class="nav-link" href="#"> <button id="contacto">Contacto</button> </a>
        
      </div>
    </div>
  </nav>
     <hr />
     <Flores nombre="Jazmines" precio="120" cantidad="10"></Flores>
     <button type="button" className="btn btn-outline-danger">Buy</button>
     <hr />
     <Flores nombre="Rosas" precio="150" cantidad="5"></Flores>
     <button type="button" className="btn btn-outline-danger">Buy</button>
     <hr />
     <Florales nombre="Petunias" precio="2500"></Florales>
     <button type="button" className="btn btn-outline-danger">Buy</button>
     <hr />
     <Florales nombre="Claveles" precio="3750"></Florales>
     <button type="button" className="btn btn-outline-danger">Buy</button>
     <hr />

     <footer className="footer">Copyright 2021 | Terminos y condiciones | Politica de privacidad</footer>
     </body>


    </>
  );
}

export default App;
