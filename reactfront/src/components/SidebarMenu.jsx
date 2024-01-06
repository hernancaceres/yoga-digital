
const SidebarMenu = ({ metodoData, onMethodClick }) => {
  return (
    <div className="sidebar-menu">
      <h2>Métodos</h2>
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



// const SidebarMenu = ({ metodoData, onMethodClick }) => {
//   return (
//     <div >
//       <h2>Pasos del Método</h2>
//       <ul>
//         {Object.keys(metodoData).map((metodoKey) => (
//           <li key={metodoKey} onClick={() => onMethodClick(metodoKey)}>
//             {metodoData[metodoKey].titulo}
//           </li>
//         ))}
//       </ul>
//     </div>
//   );
// };

// export default SidebarMenu;
