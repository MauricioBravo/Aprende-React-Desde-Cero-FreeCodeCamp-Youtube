import React from "react";
import '../style-sheets/Testimonio.css';

export function Testimonio(){ //un componente funcional es una funcion de js

  return ( //un componente funcional de react retorna un elemento  de jsx
    <div className='contenedor-testimonio'>
        <img className='imagen-testimonio' src={require('../imagenes/Con los Pibes.jpg')} alt='foto con amigos'/>
        <div className='contenedor-texto-testimonio'>
          <p className='nombre-testimonio'>Uno de los mejores días de mi vida</p>
          <p className="historia-testimonio">Mis amigos, mi novia y la patineta</p>
          <p className="texto-testimonio">Esta foto inmortaliza el día que cumplí un sueño, desde chico lo buscaba.</p> {/* si no anda probar con comillas simples */}
        </div>
    </div>
  );    
}

 export default Testimonio; //esto está comentado para una exportacion nombrada, descomentado es uan exportacion por defecto
