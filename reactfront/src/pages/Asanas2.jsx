import { useState } from 'react';
import Asanas2SidebarMenu from '../components/Asanas2SidebarMenu';
import asanas2Data from '../archivos/asanas2Data.json';

const Asanas2 = () => {
  const [paginaActual, setPaginaActual] = useState(1);
  const asanasPorPagina = 1;
  const listaAsanas = asanas2Data.asanas;
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
        <Asanas2SidebarMenu asanas2Data={asanas2Data} onAsanaClick={handleAsanaClick} />
      </div>
      <div className="w-full md:w-3/4 p-4">
        {asanasEnPagina.map((asana, index) => (
          <div key={index} className="post-div my-3 p-4 flex flex-wrap">

<img
              className="w-full md:w-1/2 object-cover md:pr-4 mb-4 md:h-82"
              src={asana.imagenURL}
              alt={`Imagen ${asana.nombre}`}
            />


            <div className="w-full md:w-1/2">
              <h2 className="text-xl font-bold mb-2">{asana.nombre}</h2>
              <p className="mb-4">{asana.descripcion}</p>
              <h2>Pasos:</h2>
              <h4 className="mb-3">{asana.paso1}</h4>
              <h4 className="mb-3">{asana.paso2}</h4>
              <h4 className="mb-3">{asana.paso3}</h4>
              <h4 className="mb-3">{asana.paso4}</h4>
              <h4 className="mb-3">{asana.paso5}</h4>
              <h4 className="mb-3">{asana.paso6}</h4>
              <h4 className="mb-3">{asana.paso7}</h4>
              <h4 className="mb-3">{asana.paso8}</h4>
              <h4 className="mb-3">{asana.paso9}</h4>
              <h4 className="mb-3">{asana.paso10}</h4>
              <h4 className="mb-3">{asana.paso11}</h4>
              <h4 className="mb-3">{asana.paso12}</h4>
              <h4 className="mb-3">{asana.paso13}</h4>
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

export default Asanas2;
