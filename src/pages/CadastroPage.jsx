import { useState } from "react";
import { useNavigate } from "react-router-dom";

function CadastroPage() {
  const [cpf, setCpf] = useState("");
  const [erro, setErro] = useState(""); // Validação dinâmica cobrada pelo professor
  const navigate = useNavigate();

  function handleSubmit(event) {
    event.preventDefault();
    
    // Validação do campo exigida nos critérios técnicos
    if (!cpf) {
      setErro("Por favor, preencha o campo de CPF.");
      return;
    }
    
    if (cpf.length < 11) {
      setErro("Insira um CPF válido.");
      return;
    }

    setErro(""); // Limpa o erro caso esteja tudo certo
    navigate("/cadastro-dados"); // Direciona para o Passo 2 de dados
  }

  return (
    <div className="container">
      <div className="hero">
        <p>
          "Educação não é o aprendizado de fatos, mas treinamento da mente para
          pensar."
          <span>Albert Einstein</span>
        </p>
      </div>

      <div className="formulario">
        <div>
          <h1>Cadastre-se</h1>
          <p>
            Passo 1 de 2. <br />
            Por favor insira seu CPF para prosseguir.
          </p>

          <form onSubmit={handleSubmit}>
            {/* Renderização condicional com && para mensagens de erro */}
            {erro && <div style={{ color: 'red', marginBottom: '15px', fontWeight: '500' }}>{erro}</div>}

            <label htmlFor="cpf">CPF</label>
            <input
              name="cpf"
              id="cpf"
              type="text"
              placeholder="000.000.000-00"
              value={cpf}
              onChange={(e) => setCpf(e.target.value)}
            />

            {/* Transformamos o link em um botão de submit para acionar a validação */}
            <button type="submit" className="btn-prosseguir">
              Prosseguir
            </button>
          </form>
        </div>
      </div>
    </div>
  );
}

export default CadastroPage;