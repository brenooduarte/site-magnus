import Price from "../Price";
import "./styles.scss";

const ServicePrice = ({
  INPItaxes,
  INPItaxesCaptions,
  fees,
  feesCaptions,
  conjunction,
}) => {
  return (
    <div className="service-price-container">
      <Price
        INPItaxes={INPItaxes}
        INPItaxesCaptions={INPItaxesCaptions}
        fees={fees}
        conjunction={conjunction}
      />

      <p>
        Nossa missão é ajudar pessoas e <br />
        empresas a se tornarem as únicas <br />e legítimas donas de suas marcas.
      </p>

      <button
        onClick={() =>
          window.open("https://wa.me/message/3UDZHQRBD4VDD1", "_blank")
        }
      >
        ENTRAR EM CONTATO
      </button>
    </div>
  );
};

export default ServicePrice;
