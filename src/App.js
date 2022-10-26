import './App.css';
import Testimonio from './componentes/Testimonio.js'; //en exportacion nombrada debemos ser más especificos y por eso usa {}

function App() {
  return (
    <div className="App">
      <div className='contenedor-principal'>
        <h1>Esta es mi página sobre Longboard</h1>
      </div>

      <Testimonio />
      
    </div>
  );
}

export default App;
