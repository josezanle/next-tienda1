import { Reciente } from "../../utils/reciente";
import Bennefits from "../b-benefits";

const recents = Reciente;

const Recents = () => {
  return (
    <div className="recents">
      <div className="up">
        <h5>Carpe Diem</h5>
        <h2>Somos Distribuidores !</h2>
        <p>
          Carpediem distribuciones s.r.l. es una distribuidora de bebidas y
          anexos para kioscos, almacenes y supermercados. Venta minorista y
          mayorista con sede central en Villa Mercedes provincia de San Luis.
          Desde el año 2012 abastece a todo el país, llevando las mejores marcas
          al más bajo precio.s
        </p>
      </div>
      <Bennefits />
      {/* {recents.map(({ photo, material, peso, color }, i) => (
        <div className="card" key={i}>
          <div
            className="pic"
            style={{
              backgroundImage: `url( ${photo})`,
              backgroundSize: "contain",
              backgroundRepeat: "no-repeat",
              backgroundPosition: "center",
            }}
          ></div>
          <div className="text">
            <h4>{material}</h4>
            <h4>{peso}</h4>
            <h4>{color}</h4>
          </div>
        </div>
      ))} */}
      <div className="bottom">
        <button>Ver Galeria</button>
      </div>
      <style jsx>{`
        .recents {
          width: 100vw;
          height: 100vh;
          background: white;
          display: flex;
          justify-content: center;
          align-items: center;
          flex-wrap: wrap;
        }
        .up {
          display: flex;
          justify-content: center;
          align-items: center;
          flex-wrap: wrap;
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
        // .card {
        //   width: 250px;
        //   height: 400px;
        //   display: flex;
        //   flex-flow: column;
        //   background: white;
        //   border-radius: 0.5em;
        //   border: 3px solid #ebebeb;
        //   margin: 1em;
        //   cursor: pointer;
        // }
        // .card:hover {
        //   border: 3px solid #fda085;
        // }
        // ================
        // .pic,
        // .text {
        //   width: 100%;
        //   height: 100%;
        // }
        // .pic {
        //   flex: 3;
        // }
        // .text {
        //   flex: 1;
        //   padding: 1em;
        // }
        // h4 {
        //   margin: 0;
        // }
        // ========================================
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
