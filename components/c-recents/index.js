import { Reciente } from "../../utils/reciente";
import Bennefits from "../b-benefits";

const recents = Reciente;

const Recents = () => {
  return (
    <div className="recents">
      <h5>Bienvenido/a:</h5>
      <h2>Somos Distribuidores !</h2>
      <p>
        Carpediem Distribuciones s.r.l., es una distribuidora de bebidas y
        anexos para kioscos, almacenes y supermercados. Venta minorista y
        mayorista con sede central en
        <b> Villa Mercedes provincia de San Luis</b>. Desde el año 2012 abastece
        a todo el país, llevando las mejores marcas al más bajo precio.s
      </p>

      <Bennefits />

      <div className="bottom">
        <button>Ver Galeria</button>
      </div>
      <style jsx>{`
        .recents {
          width: 100vw;
          min-height: 100vh;
          padding: 0 0 5em 0;
          background: white;
          display: flex;
          justify-content: center;
          align-items: center;
          flex-wrap: wrap;
          background: #ebebeb;
        }

        h5 {
          width: 100vw;
          text-align: center;
          color: #fda085;
          font-size: 1.5em;
        }
        h2 {
          width: 100vw;
          text-align: center;
          margin: 0;
          font-size: 2em;
        }
        p {
          width: 50%;
          text-align: center;
          margin: 0;
          font-size: 1.5em;
        }

        .bottom {
          width: 100vw;
          display: flex;
          justify-content: center;
          align-items: center;
        }
        button {
          background-image: linear-gradient(120deg, #f6d365 0%, #ed8e2c 100%);
          border-radius: 9px;
          cursor: pointer;
          outline: none;
          border: none;
          width: 200px;
          height: 50px;
          font-weight: bold;
          font-size: 1.3em;
        }
        button:hover {
          color: white;
        }
      `}</style>
    </div>
  );
};

export default Recents;
