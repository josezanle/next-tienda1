import { Reciente } from "../../utils/reciente";

const recents = Reciente;

const Recents = () => {
  return (
    <div className="recents">
      {recents.map(({ photo, material, peso, color }, i) => (
        <div className="card" key={i}>
          <div
            className="pic"
            style={{
              backgroundImage: `url( ${photo})`,
              backgroundSize: "cover",
              backgroundRepeat: "no-repeat",
              backgroundPosition: "top",
            }}
          ></div>
          <div className="text">
            <h4>{material}</h4>
            <h4>{peso}</h4>
            <h4>{color}</h4>
          </div>
        </div>
      ))}
      <style jsx>{`
        .recents {
          width: 100vw;
          height: 70vh;
          background: white;
          display: flex;
          justify-content: center;
          align-items: center;
        }
        .card {
          width: 250px;
          height: 300px;
          display: flex;
          flex-flow: column;
          background: white;
          border-radius: 0.5em;
          border: 1px solid black;
          margin: 1em;
        }
        // ================
        .pic,
        .text {
          width: 100%;
          height: 100%;
        }
        .pic {
          flex: 3;
        }
        .text {
          flex: 1;
        }
      `}</style>
    </div>
  );
};

export default Recents;
