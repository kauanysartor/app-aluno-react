import { useState } from "react";
import { useNavigate } from "react-router-dom";

function CadastroDadosPage() {
  // 1. Estados para controlar cada campo do formulário (Exigência Técnica)
  const [nome, setNome] = useState("");
  const [telefone, setTelefone] = useState("");
  const [email, setEmail] = useState("");
  const [senha, setSenha] = useState("");
  const [erro, setErro] = useState(""); // Estado para validação

  const navigate = useNavigate();

  function handleSubmit(event) {
    event.preventDefault();

    // 2. Validação obrigatória com mensagens de erro
    if (!nome || !telefone || !email || !senha) {
      setErro("Por favor, preencha todos os campos.");
      return;
    }

    if (!email.includes("@")) {
      setErro("Insira um endereço de e-mail válido.");
      return;
    }

    if (senha.length < 6) {
      setErro("A senha deve ter pelo menos 6 caracteres.");
      return;
    }

    setErro(""); // Limpa os erros se passar na validação
    
    // Aqui você simularia o salvamento dos dados. 
    // Em seguida, redireciona o usuário para a tela de Login
    alert("Cadastro realizado com sucesso!");
    navigate("/"); 
  }

  return (
    <div className="container">
      <div className="hero">
        <p>
          "Educação não é o aprendizado de fatos, mas treinamento da mente para pensar."
          <span>Albert Einstein</span>
        </p>
      </div>

      <div className="formulario">
        <div>
          <h1>Cadastre-se</h1>
          <p>
            Passo 2 de 2. <br />
            Por favor insira seus dados para finalizar e prosseguir.
          </p>

          <form onSubmit={handleSubmit}>
            {/* 3. Renderização Condicional com && para o erro (Exigência Técnica) */}
            {erro && (
              <div style={{ color: "red", marginBottom: "15px", fontWeight: "500", fontSize: "0.9rem" }}>
                ⚠️ {erro}
              </div>
            )}

            <label htmlFor="nome">Nome</label>
            <input
              name="nome"
              id="nome"
              type="text"
              placeholder="Nome completo"
              value={nome}
              onChange={(e) => setNome(e.target.value)}
            />

            <label htmlFor="telefone">Telefone</label>
            <input
              name="telefone"
              id="telefone"
              type="tel"
              placeholder="(99) 99999-9999"
              value={telefone}
              onChange={(e) => setTelefone(e.target.value)}
            />

            <label htmlFor="email">E-mail</label>
            <input
              name="email"
              id="email"
              type="email"
              placeholder="user@email.com"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />

            <label htmlFor="senha">Senha</label>
            <input
              name="senha"
              id="senha"
              type="password"
              value={senha}
              onChange={(e) => setSenha(e.target.value)}
            />

            <button type="submit">Cadastrar</button>
          </form>
        </div>
      </div>
    </div>
  );
}

export default CadastroDadosPage;