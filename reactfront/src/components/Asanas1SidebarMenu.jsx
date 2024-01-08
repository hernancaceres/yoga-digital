const Asanas1SidebarMenu = ({ asanas1Data, onAsanaClick }) => {
    return (
      <div className="sidebar-menu">
        <h2>Serie de Asanas 1</h2>
        <ul>
          {asanas1Data.asanas.map((asana) => (
            <li key={asana.id} onClick={() => onAsanaClick(asana.nombre)}>
              {asana.nombre}
            </li>
          ))}
        </ul>
      </div>
    );
  };
  
  export default Asanas1SidebarMenu;
  