import Header from "../components/Header";
import DisciplinaCard from "../components/DisciplinaCard";

function DisciplinasPage() {

  const disciplinas = [
    {
      id: 1,
      nome: "Front-end",
      professor: "PROF. MARCO SILVA",
      status: "EM CURSO",
      progresso: 75
    },
    {
      id: 2,
      nome: "UX Design",
      professor: "PROF. ANA SOUZA",
      status: "EM CURSO",
      progresso: 50
    },
    {
      id: 3,
      nome: "Banco de Dados",
      professor: "PROF. JOÃO COSTA",
      status: "PRÓXIMO SEMESTRE",
      progresso: 0
    }
  ];

  return (
    <>
      <Header />

      <div className="dashboard__container">

        <div className="welcome">
          <h2>Minhas Disciplinas</h2>
        </div>

        {
          disciplinas.map((disciplina) => (
            <DisciplinaCard
              key={disciplina.id}
              nome={disciplina.nome}
              professor={disciplina.professor}
              status={disciplina.status}
              progresso={disciplina.progresso}
            />
          ))
        }

      </div>
    </>
  );
}

export default DisciplinasPage;