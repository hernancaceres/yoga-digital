const Asanas2SidebarMenu = ({ asanas2Data, onAsanaClick }) => {
  return (
    <div className="sidebar-menu">
      <h2>Serie de Asanas 2</h2>
      <ul>
        {asanas2Data.asanas.map((asana) => (
          <li key={asana.id} onClick={() => onAsanaClick(asana.nombre)}>
            {asana.nombre}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Asanas2SidebarMenu;
