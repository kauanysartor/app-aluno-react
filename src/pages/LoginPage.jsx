import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { Link } from 'react-router-dom';

function LoginPage() {
  const [email, setEmail] = useState("");
  const [senha, setSenha] = useState("");
  const [erro, setErro] = useState(""); // Requisito do prof: estado para guardar mensagens de erro

  const navigate = useNavigate();

  function handleSubmit(event) {
    event.preventDefault();
    
    // Critério técnico de validação antes de mudar de página
    if (!email || !senha) {
      setErro("Por favor, preencha todos os campos obrigatórios.");
      return;
    }
    
    if (!email.includes("@")) {
      setErro("O formato do e-mail inserido é inválido.");
      return;
    }

    setErro(""); // Limpa os erros caso passe na validação
    navigate("/dashboard");
  }

  return (
    <div className="container">
      <div className="hero">
        <p>
          "Educação não é o aprendizado de fatos,
          mas treinamento da mente para pensar."
          <span>Albert Einstein</span>
        </p>
      </div>

      <div className="formulario">
        <div>
          <h1>Bem-vindo de volta</h1>

          <p>
            Por favor, insira suas credenciais para acessar seu painel acadêmico
          </p>

          <form onSubmit={handleSubmit}>
            {/* Renderização condicional com && para exibir mensagens de erro na tela */}
            {erro && (
              <div style={{ color: 'red', marginBottom: '15px', fontWeight: '500', fontSize: '0.9rem' }}>
                ⚠️ {erro}
              </div>
            )}

            <label htmlFor="email">Endereço de e-mail</label>
            <input
              id="email"
              type="text"
              placeholder="user@email.com"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />

            <label htmlFor="senha">
              Senha
              {/* CORREÇÃO 1: Trocamos <a> por <Link to="/esqueceu"> para usar o React Router */}
              <Link to="/esqueceu"> Esqueceu?</Link>
            </label>

            <input
              id="senha"
              type="password"
              value={senha}
              onChange={(e) => setSenha(e.target.value)}
            />

            <button type="submit">Entrar</button>
          </form>

          {/* CORREÇÃO 2: Removidas as tags <p> duplicadas que quebravam o CSS */}
          {/* CORREÇÃO 3: Mudamos o link de /cadastro para /registro para sincronizar com seu App.jsx */}
          <p className="registre-se">
            Não tem uma conta? <Link to="/registro" className="seu-estilo-link">Registre-se agora.</Link>
          </p>
        </div>
      </div>
    </div>
  );
}

export default LoginPage;