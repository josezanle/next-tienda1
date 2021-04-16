import { Targets } from "../../utils/targets";

const targets = Targets;

const Services = () => {
  return (
    <div className="targets">
      {targets.map(({ photo, description }, i) => (
        <div className="card" key={i}>
          <div
            className="top"
            style={{
              backgroundImage: `url( ${photo})`,
              backgroundSize: "cover",
              backgroundRepeat: "no-repeat",
              backgroundPosition: "top",
            }}
          ></div>
          <div className="text">
            <h4>{description}</h4>
          </div>
        </div>
      ))}

      <style jsx>{`
        .targets {
          width: 100vw;
          height: 100vh;
          background: white;
          display: flex;
          justify-content: center;
          align-items: center;
          flex-wrap: wrap;
        }
        .card {
          width: 350px;
          height: 400px;
          display: flex;
          flex-flow: column;
          margin: 1em;
          border: 1px solid black;
          border-radius: 1em;
        }

        .top,
        .text {
          flex: 1;
          width: 100%;
          height: 100%;
        }
      `}</style>
    </div>
  );
};

export default Services;
