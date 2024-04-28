import "./styles.scss";

const Price = ({
  INPItaxes,
  INPItaxesCaptions,
  fees,
  feesCaptions,
  conjunction,
}) => {
  return (
    <div id="price-container">
      <h1 id="page-title">
        QUANTO VOU PRECISAR <br />
        INVESTIR?
      </h1>

      <div id="price-items">
        <div id="inpi-taxes" className="price-item">
          <span className="title-rectangle">Taxas INPI</span>

          {INPItaxes.length > 1 ? (
            INPItaxes.map((tax, index) => (
              <div key={index}>
                <span className="price">R$ {tax},00</span>
                <span className="taxe-caption">
                  {INPItaxesCaptions[index].includes("//") ? (
                    <>
                      {INPItaxesCaptions[index].split("//")[0]}
                      <span className="break-line" />
                      <span className="sub-caption">
                        {INPItaxesCaptions[index].split("//")[1]}
                      </span>
                    </>
                  ) : (
                    INPItaxesCaptions[index]
                  )}
                </span>
                {index !== INPItaxes.length - 1 && (
                  <span className="conjunction"> {conjunction} </span>
                )}
              </div>
            ))
          ) : (
            <div>
              <span className="price">R$ {INPItaxes[0]},00</span>
              <span className="taxe-caption">{INPItaxesCaptions[0]}</span>
            </div>
          )}
        </div>

        <div id="fees" className="price-item">
          <span className="title-rectangle">Honorários</span>

          {fees.map((fee, index) => (
            <div key={index}>
              <span className="price">R$ {fee},00</span>
              <span className="fee-caption">
                Parcelado no cartão <br />
                <span className="conjunction">ou</span> <br />À vista com 10% de
                desconto
              </span>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Price;
