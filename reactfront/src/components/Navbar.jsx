import { Link } from "react-router-dom";
import { useUser } from "../context/UserContext";
import { useNavigate } from "react-router-dom";
import { useState } from "react";

function Navbar() {
  const { user, dispatch } = useUser();
  const navigate = useNavigate();

  const [darkMode, setDarkMode] = useState(false);

  //console.log('usuario navbar:', user);
  const toggleDarkMode = () => {
    setDarkMode(prevDarkMode => !prevDarkMode);
    document.body.classList.toggle('dark-mode');
  };


  return (
    <nav className="my-3 flex flex-col md:flex-row justify-between py-5 px-4 md:px-10 rounded-lg bg-green-100" >
      <Link to="/">
        <h1 className="text-1xl font-bold">YOGA DIGITAL</h1>
      </Link>
      <ul className="flex flex-col md:flex-row gap-x-2 items-center">

        <li>
          <button
            onClick={() => navigate('/home')}
            className={"bg-red-500 text-white py-2 px-4 rounded-md hover:bg-red-600 focus:outline-none focus:ring focus:border-red-300"}
          >
            Ver Las publicaciones
          </button>
        </li>
        {/* Mostrar el botón "Crear un Post" solo si el usuario está autenticado */}
        <li>
          <button
            onClick={() => navigate('/home')}
            className={"bg-red-500 text-white py-2 px-4 rounded-md hover:bg-red-600 focus:outline-none focus:ring focus:border-red-300"}
          >
            Crear una Publicación
          </button>
        </li>
        <li>
          <button onClick={toggleDarkMode} className=" px-2 md:px-4 py-2 rounded-lg">
            {darkMode ? 'Modo Claro' : 'Modo Oscuro'}
          </button>
        </li>
      </ul>
    </nav>
  );
}

export default Navbar;
