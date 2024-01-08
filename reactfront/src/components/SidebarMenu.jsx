
const SidebarMenu = ({ metodoData, onMethodClick }) => {
  return (
    <div className="sidebar-menu">
      <h2>Pasos del Método</h2>
      <ul>
        {Object.entries(metodoData).map(([key, metodo]) => (
          <li key={key} onClick={() => onMethodClick(key)}>
            {metodo.titulo}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default SidebarMenu;

