import { useState } from "react";
import { useNavigate } from "react-router-dom";

function RecuperarSenhaPage() { // Nome atualizado da função
  const [email, setEmail] = useState("");
  const [erro, setErro] = useState("");

  function handleSubmit(event) {
    event.preventDefault();

    if (!email) {
      setErro("Por favor, insira o seu e-mail.");
      return;
    }

    if (!email.includes("@")) {
      setErro("Por favor, insira um e-mail válido.");
      return;
    }

    setErro("");
    alert("Link de redefinição enviado para o seu e-mail com sucesso!");
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
          <h1>Esqueci minha senha</h1>
          <p>Informe seu e-mail para enviarmos o link para redefinir sua senha.</p>

          <form onSubmit={handleSubmit}>
            {erro && (
              <div style={{ color: "red", marginBottom: "15px", fontWeight: "500", fontSize: "0.9rem" }}>
                ⚠️ {erro}
              </div>
            )}

            <label htmlFor="email">Endereço de e-mail</label>
            <input
              name="email"
              id="email"
              type="text"
              placeholder="user@email.com"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />

            <button type="submit">Enviar</button>
          </form>
        </div>
      </div>
    </div>
  );
}

export default RecuperarSenhaPage; // Export atualizado