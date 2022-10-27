import './App.css';
import Testimonio from './componentes/Testimonio.js'; //en exportacion nombrada debemos ser más especificos y por eso usa {}

function App() {
  return (
    <div className="App">
      <div className='contenedor-principal'>
        <h1>Esta es mi página sobre Longboard</h1>
      </div>

      <Testimonio 
      nombre='Uno de los mejores días de mi vida'
      historia='Mis amigos, mi novia y la patineta'
      texto='Esta foto inmortaliza el día que cumplí un sueño, desde chico lo buscaba, y lo logré con estas personas cerca. 
      Soy el del casco verde, fue una competencia en Cacheuta, Mendoza, como les voy a contar en los siguientes componentes.'
      imagen='con-amigos'
      />
      <Testimonio 
      nombre='Bajando a alta velocidad'
      historia='Así se ve mi deporte, soy yo a casi 80km/h.'
      texto='Fue un duro fin de semana, no había entrenado hace 2 años salvo por una bajada con amigos en un spot o pista privada, pero fue solo 1 día literalmente.
      La competencia era Sabado (tomas de tiempo) y Domingo (carreras). Ese sábado me enfrenté a muchos miedos e inseguridades. La primer bajada me caí por el miedo y el "speed wooble".'
      imagen='doblando-izquierda'>

      </Testimonio>
      <Testimonio 
      nombre='Corriendo contra un hermano'
      historia='Esta fue la foto por la 5ta posición de amateur, casualmente contra mi amigo de años Santi.'
      texto='Finalmente el sábado algo adolorido logré dominar la pista y estaba listo aunque nervioso para el domingo.
      Ese día luego de terminar las tomas de tiempo y negarme a bajar la pista un par de veces por cansacio muscular, y con la intención de tener cuadriceps para el domingo fui directo a la farmacia. "Deme calmantes más fuertes que ibuprofeno 600" le dije JAJAJA. No discutió nada, tenía el traje puesto, tierra y cara de haber dado todo.'
      imagen='full-tuck'>

      </Testimonio>
      
    </div>
  );
}

export default App;
