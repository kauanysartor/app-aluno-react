import { NavLink } from "react-router-dom";
import { useContext } from 'react';
import { UsuarioContext } from '../context/UsuarioContext';

function Header() {
  {/* CORREÇÃO: O useContext deve ficar EXATAMENTE aqui dentro */}
  const { usuario } = useContext(UsuarioContext);

  return (
    <header className="menu">
      <div className="menu__body">
        <h1 className="menu__title">
          Academia
          <span>Portal do aluno</span>
        </h1>

        <nav className="menu__links">
          <NavLink className="menu__item" to="/dashboard">
            Painel
          </NavLink>

          <NavLink className="menu__item" to="/disciplinas">
            Disciplinas
          </NavLink>

          <NavLink className="menu__item" to="/tutoria">
            Tutor IA
          </NavLink>

          <NavLink className="menu__item" to="/perfil">
            Perfil
          </NavLink>
          
          {/* REQUISITO TÉCNICO: Exibindo o nome do usuário vindo do Context global */}
          <span className="menu__user-name" style={{ marginLeft: '20px', fontWeight: '600', color: '#137333' }}>
            👤 {usuario?.nome}
          </span>
        </nav>
      </div>
    </header>
  );
}

export default Header;