import { createContext, useContext, useReducer } from 'react';
import PropTypes from 'prop-types';

const UserContext = createContext();

const userReducer = (state, action) => {
  switch (action.type) {

    case 'SET_USER':
      console.log('Reducer: Setting user:', action.payload);
      // Lógica para establecer el usuario
      return {
        ...state,
        user: action.payload,
        isAuthenticated: true, // Asegúrate de actualizar isAuthenticated según tus necesidades
      };

    // Otros casos para manejar acciones como  'UPDATE_USER', etc.

    default:
      return state;
  }
};

export const UserProvider = ({ children }) => {
  // Intenta obtener la información del usuario y el token del almacenamiento local
  const storedUserId = localStorage.getItem('userId');
  const storedUsername = localStorage.getItem('username');
  const storedAvatarURL = localStorage.getItem('avatarURL');
  const storedToken = localStorage.getItem('token');

  // Configura el estado inicial en función de la información almacenada
  const initialState = {
    user: storedUserId ? { id: storedUserId, username: storedUsername, avatarURL: storedAvatarURL } : null,
    isAuthenticated: !!storedToken,
  };

  const [state, dispatch] = useReducer(userReducer, initialState);

 // console.log('UserProvider: User context state:', state);

  return (
    <UserContext.Provider value={{ ...state, dispatch }}>
      {children}

    </UserContext.Provider>
  );


};

UserProvider.propTypes = {
  children: PropTypes.node.isRequired,
};

export const useUser = () => {
  const context = useContext(UserContext);

  console.log('useUser: User context:', context);

  if (!context) {
    throw new Error('useUser debe usarse dentro de un UserProvider');
  }
  return context;
};
