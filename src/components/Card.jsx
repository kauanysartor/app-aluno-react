function Card({
  titulo,
  descricao,
  progresso
}) {
  return (
    <div className="card">
      <div className="card__body">

        <span className="card__badge">
          Em progresso
        </span>

        <h3 className="card__title">
          {titulo}
        </h3>

        <p className="card__description">
          {descricao}
        </p>

        <div className="card__progress">
          <div style={{ width: `${progresso}%` }}>
            {progresso}%
          </div>
        </div>

      </div>

      <button className="card__button">
        Retomar estudo
      </button>
    </div>
  );
}

export default Card;