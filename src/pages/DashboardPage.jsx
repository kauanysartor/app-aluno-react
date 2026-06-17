import { useContext } from 'react'; // 1. Importamos o hook useContext
import { UsuarioContext } from '../context/UsuarioContext'; // 2. Importamos o contexto
import Header from "../components/Header";
import Card from "../components/Card";

function DashboardPage() {
  // 3. Ativamos o contexto para ler os dados do aluno globalmente
  const { usuario } = useContext(UsuarioContext);

  return (
    <>
      <Header />

      <div className="dashboard__container">

        <div className="welcome">
          <h2 id="greeting">
            {/* 4. Trocamos o nome fixo. O split(' ')[0] serve para mostrar apenas o primeiro nome */}
            Boa noite, {usuario?.nome ? usuario.nome.split(' ')[0] : "Aluno"}
          </h2>

          <p>
            Bem-vindo de volta a sua sessão de estudos focado no curso de {usuario?.curso || "Graduação"}. 
            Você tem 2 tarefas para essa semana e está atualmente 
            adiantado em seu cronograma de leitura.
          </p>
        </div>

        <Card
          titulo="Front-end"
          descricao="Aula 2 - Conceitos de desenvolvimento Front-end e Git + Github"
          progresso={65}
        />

        <Card
          titulo="UX Design"
          descricao="Aula 3 - Usabilidade"
          progresso={34}
        />

        <div className="card__group">

          <div className="card">
            <div className="card__body">
              <span className="card__badge">
                Tempo de estudo
              </span>

              <h3 className="card__title">
                12h 45m
              </h3>

              <p className="card__description">
                Esta semana
              </p>
            </div>
          </div>

          <div className="card">
            <div className="card__body">
              <span className="card__badge">
                Tarefas pendentes
              </span>

              <h3 className="card__title">
                2
              </h3>

              <p className="card__description">
                Próximo vencimento em 2 dias
              </p>
            </div>
          </div>

          <div className="card">
            <div className="card__body">
              <span className="card__badge">
                Discussão com a IA
              </span>

              <h3 className="card__title">
                8
              </h3>

              <p className="card__description">
                Tópicos ativos
              </p>
            </div>
          </div>

        </div>

      </div>
    </>
  );
}

export default DashboardPage;