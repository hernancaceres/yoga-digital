import { useState } from 'react';
import metodoData from "../archivos/metodoData.json";
import SidebarMenu from '../components/SidebarMenu';

const Metodo = () => {
  const [paginaActual, setPaginaActual] = useState(1);
  const metodosPorPagina = 1;
  const listaMetodos = Object.values(metodoData);
  // Actualizar la lista de métodos en página después de cambiar la página
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

  const handleMethodClick = (metodoKey) => {
    console.log('Clic en el método:', metodoKey);

    // Encontrar el índice del método seleccionado en la lista completa
    const metodoIndex = listaMetodos.findIndex(metodo => metodo.titulo === metodoKey);

    // Calcular la nueva página según el índice del método
    const nuevaPagina = Math.floor(metodoIndex / metodosPorPagina) + 1;

    // Establecer la nueva página solo si es válida
    if (nuevaPagina >= 1 && nuevaPagina <= Math.ceil(listaMetodos.length / metodosPorPagina)) {
      setPaginaActual(nuevaPagina);
    }
  };




  const getButtonColors = () => {
    if (darkMode) {
      console.log('Dark Mode: Applying button-dark');
      return {
        backgroundColorClass: 'button-dark',
        hoverColorClass: 'button-dark:hover',
      };
    } else {
      console.log('Light Mode: Applying button-light');
      return {
        backgroundColorClass: 'button-light',
        hoverColorClass: 'button-light:hover',
      };
    }
  };

  const buttonColors = getButtonColors();
  console.log('buttonColors:', buttonColors);

  return (
    <div className={`main-container ${darkMode ? 'dark-mode' : ''}`}>

      <div className="sidebar-menu">
        <SidebarMenu metodoData={metodoData} onMethodClick={handleMethodClick} />
      </div>

      <div className="content-container">
        {metodosEnPagina.map((metodo, index) => (
          <div key={index} className="post-div my-3 p-4">
            <h1>{metodo.titulo}</h1>
            <p>{metodo.descripcion}</p>
          </div>
        ))}

        <div className="pagination">
          <button
            onClick={() => cambiarPagina(-1)}
            disabled={paginaActual === 1}
            className={`px-2 md:px-4 py-2 rounded-lg ${buttonColors.backgroundColorClass}`}
          >
            Anterior
          </button>
          <span>Página {paginaActual}</span>
          <button
            onClick={() => cambiarPagina(1)}
            disabled={paginaActual === Math.ceil(listaMetodos.length / metodosPorPagina)}
            className={`px-2 md:px-4 py-2 rounded-lg ${buttonColors.backgroundColorClass}`}
          >
            Siguiente
          </button>
        </div>
      </div>

    </div>
  );
};

export default Metodo;
