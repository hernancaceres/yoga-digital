import { useState } from 'react';
import Asanas1SidebarMenu from '../components/Asanas1SidebarMenu';
import asanas1Data from '../archivos/asanas1Data';

const Asanas1 = () => {
  const [paginaActual, setPaginaActual] = useState(1);
  const asanasPorPagina = 1;
  const listaAsanas = asanas1Data.asanas;
  const indiceInicio = (paginaActual - 1) * asanasPorPagina;
  const indiceFin = indiceInicio + asanasPorPagina;
  const asanasEnPagina = listaAsanas.slice(indiceInicio, indiceFin);

  const cambiarPagina = (direccion) => {
    const nuevaPagina = paginaActual + direccion;
    if (nuevaPagina >= 1 && nuevaPagina <= Math.ceil(listaAsanas.length / asanasPorPagina)) {
      setPaginaActual(nuevaPagina);
    }
  };

  const [darkMode, setDarkMode] = useState(false);

  const toggleDarkMode = () => {
    setDarkMode((prevDarkMode) => !prevDarkMode);
    document.body.classList.toggle('dark-mode');
  };

  const handleAsanaClick = (asanaKey) => {
    console.log('Clic en la Asana:', asanaKey);
    // ... (resto de la lógica para cambiar de asana)
  };

  return (
    <div className={`main-container ${darkMode ? 'dark-mode' : ''} flex flex-wrap`}>
      <div className="w-full md:w-1/4 p-4">
        <Asanas1SidebarMenu asanas1Data={asanas1Data} onAsanaClick={handleAsanaClick} />
      </div>
      <div className="w-full md:w-3/4 p-4">
        {asanasEnPagina.map((asana, index) => (
          <div key={index} className="post-div my-3 p-4 flex flex-wrap">
            
              <img className="h-300 w-full md:w-1/2  mb-4" src={asana.imagenURL} alt={`Imagen ${asana.nombre}`} />
            
            <div className="w-full md:w-1/2">
              <h2 className="text-xl font-bold mb-2">{asana.nombre}</h2>
              <p className="mb-4">{asana.descripcion}</p>
              <h4>Pasos:</h4>
              <ul>
                {asana.pasos.map((paso, i) => (
                  <li key={i} className="ml-4">{paso}</li>
                ))}
              </ul>
            </div>
          </div>
        ))}
        <div className="pagination mt-4">
          <button
            onClick={() => cambiarPagina(-1)}
            disabled={paginaActual === 1}
            className={`px-2 md:px-4 py-2 rounded-lg ${darkMode ? 'button-dark' : 'button-light'}`}
          >
            <i className="fa-regular fa-less-than"></i> Anterior
          </button>
          <span className="mx-4">Página {paginaActual}</span>
          <button
            onClick={() => cambiarPagina(1)}
            disabled={paginaActual === Math.ceil(listaAsanas.length / asanasPorPagina)}
            className={`px-2 md:px-4 py-2 rounded-lg ${darkMode ? 'button-dark' : 'button-light'}`}
          >
            Siguiente <i className="fa-regular fa-greater-than"></i>
          </button>
        </div>
      </div>
    </div>
  );
};

export default Asanas1;




// import { useState } from 'react';
// import Asanas1SidebarMenu from '../components/Asanas1SidebarMenu';
// import asanas1Data from '../archivos/asanas1Data';

// const Asanas1 = () => {
//   const [paginaActual, setPaginaActual] = useState(1);
//   const asanasPorPagina = 1;
//   const listaAsanas = asanas1Data.asanas;
//   const indiceInicio = (paginaActual - 1) * asanasPorPagina;
//   const indiceFin = indiceInicio + asanasPorPagina;
//   const asanasEnPagina = listaAsanas.slice(indiceInicio, indiceFin);

//   const cambiarPagina = (direccion) => {
//     const nuevaPagina = paginaActual + direccion;
//     if (nuevaPagina >= 1 && nuevaPagina <= Math.ceil(listaAsanas.length / asanasPorPagina)) {
//       setPaginaActual(nuevaPagina);
//     }
//   };

//   const [darkMode, setDarkMode] = useState(false);

//   const toggleDarkMode = () => {
//     setDarkMode((prevDarkMode) => !prevDarkMode);
//     document.body.classList.toggle('dark-mode');
//   };

//   const handleAsanaClick = (asanaKey) => {
//     console.log('Clic en la Asana:', asanaKey);
//     // ... (resto de la lógica para cambiar de asana)
//   };

//   return (
//     <div className={`main-container ${darkMode ? 'dark-mode' : ''}`}>
//       <div className="sidebar-menu">
//         <Asanas1SidebarMenu asanas1Data={asanas1Data} onAsanaClick={handleAsanaClick} />
//       </div>
//       <div className="content-container">
//         {asanasEnPagina.map((asana, index) => (
//           <div key={index} className="post-div my-3 p-4">
//             <img src={asana.imagenURL} alt={`Imagen ${asana.nombre}`} />
//             <h2>{asana.nombre}</h2>
//             <p className="my-3">{asana.descripcion}</p>
//             <h4>Pasos:</h4>
//             <ul>
//               {asana.pasos.map((paso, i) => (
//                 <li key={i}>{paso}</li>
//               ))}
//             </ul>
//           </div>
//         ))}
//         <div className="pagination">
//           <button
//             onClick={() => cambiarPagina(-1)}
//             disabled={paginaActual === 1}
//             className={`px-2 md:px-4 py-2 rounded-lg ${darkMode ? 'button-dark' : 'button-light'}`}
//           >
//             <i className="fa-regular fa-less-than"></i> Anterior
//           </button>
//           <span>Página {paginaActual}</span>
//           <button
//             onClick={() => cambiarPagina(1)}
//             disabled={paginaActual === Math.ceil(listaAsanas.length / asanasPorPagina)}
//             className={`px-2 md:px-4 py-2 rounded-lg ${darkMode ? 'button-dark' : 'button-light'}`}
//           >
//             Siguiente <i className="fa-regular fa-greater-than"></i>
//           </button>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default Asanas1;
