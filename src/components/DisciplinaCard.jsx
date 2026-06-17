function DisciplinaCard({
  nome,
  professor,
  status,
  progresso
}) {
  return (
    <div className="card">
      <div className="card__body">

        <div style={{ display: "flex", justifyContent: "space-between" }}>
          <div>
            <h3 className="card__title">{nome}</h3>

            <p className="card__description">
              {professor}
            </p>
          </div>

          <span className="card__badge">
            {status}
          </span>
        </div>

        <div style={{ marginTop: "20px" }}>
          <p>
            Progresso: {progresso}%
          </p>

          <div className="card__progress">
            <div style={{ width: `${progresso}%` }}>
              {progresso}%
            </div>
          </div>
        </div>

        <button className="card__button">
          Acessar Disciplina
        </button>

      </div>
    </div>
  );
}

export default DisciplinaCard;