import "./styles.scss";

const Price = ({ INPItaxes, INPItaxesCaptions, fees, feesCaptions }) => {
  return (
    <div id="price-container">
      <h1>
        QUANTO VOU PRECISAR <br />
        INVESTIR?
      </h1>

      <div id="price-items">
        <div id="inpi-taxes" className="price-item">
          <span className="title-rectangle">Taxas INPI</span>

          <span className="price">R$ {INPItaxes[0]},00</span>
          <span className="taxe-caption">{INPItaxesCaptions[0]}</span>
        </div>

        <div id="fees" className="price-item">
          <span className="title-rectangle">Honorários</span>

          <span className="price">R$ {fees[0]},00</span>
          <span className="fee-caption">
            Parcelado no cartão <br />
            ou <br />À vista com 10% de desconto
          </span>
        </div>
      </div>
    </div>
  );
};

export default Price;
