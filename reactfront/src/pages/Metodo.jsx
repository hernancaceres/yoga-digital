import  { useState } from 'react';
import metodoData from "../archivos/metodoData.json";

const Metodo = () => {
  const [paginaActual, setPaginaActual] = useState(1);
  const metodosPorPagina = 1;
  const listaMetodos = Object.values(metodoData);
  const indiceInicio = (paginaActual - 1) * metodosPorPagina;
  const indiceFin = indiceInicio + metodosPorPagina;
  const metodosEnPagina = listaMetodos.slice(indiceInicio, indiceFin);

  const cambiarPagina = (direccion) => {
    const nuevaPagina = paginaActual + direccion;
    if (nuevaPagina >= 1 && nuevaPagina <= Math.ceil(listaMetodos.length / metodosPorPagina)) {
      setPaginaActual(nuevaPagina);
    }
  };

  const [darkMode, setDarkMode] = useState(false);

  //console.log('usuario navbar:', user);
  const toggleDarkMode = () => {
    setDarkMode(prevDarkMode => !prevDarkMode);
    document.body.classList.toggle('dark-mode');
  };

  const getButtonColors = () => {
    if (darkMode) {
      return {
        backgroundColorClass: 'button-dark',
        hoverColorClass: 'button-dark:hover',
      };
    } else {
      return {
        backgroundColorClass: 'button-light',
        hoverColorClass: 'button-light:hover',
      };
    }
  };

  const buttonColors = getButtonColors();

  return (
    <div className={` ${darkMode ? 'dark-mode' : ''}`}>
      {metodosEnPagina.map((metodo, index) => (
        <div key={index} className="post-div my-3 p-4">
          <h1>{metodo.titulo}</h1>
          <p>{metodo.descripcion}</p>
        </div>
      ))}

 {/*      Mostrar el método2 solo en la primera página
      {paginaActual === 1 && (
        <div className="metodo2-list">
          <h2>{metodoData.metodo2.titulo}</h2>
          <ul>
            {metodoData.metodo2.descripcion.split('.').map((paso, index) => (
              <li key={index}>{paso.trim()}</li>
            ))}
          </ul>
        </div>
      )} */}

      {/* Botones de paginación */}
      <div className="pagination">
        <button
          onClick={() => cambiarPagina(-1)}
          disabled={paginaActual === 1}
          className={`px-2 md:px-4 py-2 rounded-lg ${darkMode ? 'button-dark' : 'button-light'}`}
        >
          Anterior
        </button>
        <span>Página {paginaActual}</span>
        <button
          onClick={() => cambiarPagina(1)}
          disabled={paginaActual === Math.ceil(listaMetodos.length / metodosPorPagina)}
          className={`px-2 md:px-4 py-2 rounded-lg ${darkMode ? 'button-dark' : 'button-light'}`}
        >
          Siguiente
        </button>
      </div>
    </div>
  );
};

export default Metodo;






// import metodoData from "../archivos/metodoData.json"


// const Metodo = () => {
//     // Selecciona el método que quieres mostrar (puedes cambiar el nombre)
//     const metodoActual = metodoData.metodo1;
//     return (
//         <div>
//             <div className="post-div my-3 p-4">
//                 <h1>{metodoActual.titulo}</h1>
//                 <p>{metodoActual.descripcion}</p>
//             </div>

//             <div className="post-div my-3 p-4">
//                 <ul>
//                     <li>Paso #1: Micromeditación de 5 minutos.</li>
//                     <li>Paso #2: Precalentamiento máximo 5 minutos.</li>
//                     <li>Paso #3: Asanas para el equilibrio de los chakras.</li>
//                     <li>Paso #4: Automasaje 5 minutos.</li>
//                     <li>Paso #5: Relajación máximo 10 minutos.</li>
//                     <li>Paso #6: Micromeditación de 5 a 10 minutos.</li>
//                 </ul>
//             </div>

//         </div>
//     );
// };

// export default Metodo;
