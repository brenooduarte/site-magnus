import "./styles.scss";

const CardStage = ({ position, stageNumber, text }) => {
  return (
    <div className={`card-stage ${position}`}>
      <div className="card-stage-retangle">
        <p className="card-text">{text}</p>

        <div className="card-stage-circle">
          <span>{stageNumber}ª</span> etapa
        </div>
      </div>
    </div>
  );
};

export default CardStage;
