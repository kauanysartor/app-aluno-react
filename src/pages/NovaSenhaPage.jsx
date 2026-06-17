import { useState } from "react";
import { useNavigate } from "react-router-dom";

function NovaSenhaPage() {
  const [senha, setSenha] = useState("");
  const [confirmar, setConfirmar] = useState("");
  const [erro, setErro] = useState("");
  const navigate = useNavigate();

  function handleSubmit(e) {
    e.preventDefault();
    if (!senha || !confirmar) {
      setErro("Preencha ambos os campos.");
      return;
    }
    if (senha !== confirmar) {
      setErro("As senhas não coincidem.");
      return;
    }
    alert("Senha alterada com sucesso!");
    navigate("/");
  }

  return (
    <div className="container">
      <div className="formulario">
        <div>
          <h1>Nova Senha</h1>
          <form onSubmit={handleSubmit}>
            {erro && <div style={{ color: "red", marginBottom: "15px" }}>⚠️ {erro}</div>}
            <label htmlFor="senha">Nova Senha</label>
            <input type="password" id="senha" value={senha} onChange={e => setSenha(e.target.value)} />
            <label htmlFor="confirmar">Confirmar Senha</label>
            <input type="password" id="confirmar" value={confirmar} onChange={e => setConfirmar(e.target.value)} />
            <button type="submit">Redefinir Senha</button>
          </form>
        </div>
      </div>
    </div>
  );
}

export default NovaSenhaPage;