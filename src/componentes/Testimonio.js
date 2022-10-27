import React from "react";
import '../style-sheets/Testimonio.css';

export function Testimonio(props){ //un componente funcional es una funcion de js, entre parentecis van los "props"

  return ( //un componente funcional de react retorna un elemento  de jsx
    <div className='contenedor-testimonio'>
        <img className='imagen-testimonio' src={require(`../imagenes/${props.imagen}.jpg`)} alt='foto con amigos'/>
        <div className='contenedor-texto-testimonio'>
          <p className='nombre-testimonio'>{props.nombre}</p>
          <p className="historia-testimonio">{props.historia}</p> 
          <p className="texto-testimonio">{props.texto} </p> {/* si no anda probar con comillas simples */}
        </div>
    </div>
  );    
}

 export default Testimonio; //esto está comentado para una exportacion nombrada, descomentado es uan exportacion por defecto
