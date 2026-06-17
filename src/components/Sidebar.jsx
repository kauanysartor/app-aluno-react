import { NavLink } from "react-router-dom";

function Sidebar() {
  return (
    <nav>
      <NavLink to="/dashboard">Dashboard</NavLink>
      <br />

      <NavLink to="/disciplinas">Disciplinas</NavLink>
      <br />

      <NavLink to="/perfil">Perfil</NavLink>
      <br />

      <NavLink to="/tutoria">TutorIA</NavLink>
    </nav>
  );
}

export default Sidebar;