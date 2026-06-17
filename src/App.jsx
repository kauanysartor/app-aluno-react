import { BrowserRouter, Routes, Route } from "react-router-dom";

import LoginPage from "./pages/LoginPage";
import CadastroPage from "./pages/CadastroPage";          
import CadastroDadosPage from "./pages/CadastroDadosPage"; 
import RecuperarSenhaPage from "./pages/RecuperarSenhaPage";
import NovaSenhaPage from "./pages/NovaSenhaPage";

import DashboardPage from "./pages/DashboardPage";
import PerfilPage from "./pages/PerfilPage";
import DisciplinasPage from "./pages/DisciplinasPage";
import TutorIAPage from "./pages/TutorIAPage";

import { UsuarioProvider } from "./context/UsuarioContext";

function App() {
  return (
    <UsuarioProvider>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<LoginPage />} />
          <Route path="/registro" element={<CadastroPage />} />
          <Route path="/cadastro-dados" element={<CadastroDadosPage />} />
          <Route path="/esqueceu" element={<RecuperarSenhaPage />} />
          <Route path="/nova-senha" element={<NovaSenhaPage />} />
          <Route path="/dashboard" element={<DashboardPage />} />
          <Route path="/perfil" element={<PerfilPage />} />
          <Route path="/disciplinas" element={<DisciplinasPage />} />
          <Route path="/tutoria" element={<TutorIAPage />} />
        </Routes>
      </BrowserRouter>
    </UsuarioProvider>
  );
}

export default App;