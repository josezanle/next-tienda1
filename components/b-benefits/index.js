import { Items } from "../../utils/items";

const items = Items;

const Bennefits = () => {
  return (
    <div className="bennefits">
      <h2>Compromiso</h2>
      <svg
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 1440 320"
        className="wave"
      >
        <path
          fill="#ebebeb"
          fill-opacity="1"
          d="M0,224L80,202.7C160,181,320,139,480,128C640,117,800,139,960,154.7C1120,171,1280,181,1360,186.7L1440,192L1440,320L1360,320C1280,320,1120,320,960,320C800,320,640,320,480,320C320,320,160,320,80,320L0,320Z"
        ></path>
      </svg>

      {items.map(({ icon, title, description }, i) => (
        <div key={i} className="card">
          <div className="item">
            <img src={icon} alt={icon} />
          </div>
          <div className="text">
            <h4>{title}</h4>
            <p>{description}</p>
          </div>
        </div>
      ))}

      <style jsx>{`
        .bennefits {
          width: 100vw;
          min-height: 30vh;
          background: #ebebeb;
          display: flex;
          justify-content: center;
          align-items: center;
          flex-wrap: wrap;
          padding: 0 0 5em 0;
          position: relative;
        }
        .wave {
          position: absolute;
          bottom: 0;
          width: 100vw;
        }
        h2 {
          width: 100vw;
          text-align: center;
        }
        .card {
          width: 300px;
          height: 170px;
          display: flex;
          justify-content: center;
          align-items: center;
          background: white;
          border-radius: 1em;
          margin: 0 1em;
          padding: 1em;
          cursor: pointer;
        }
        img {
          width: 60px;
          height: 60px;
        }
        .text {
          padding: 0.5em;
        }
      `}</style>
    </div>
  );
};

export default Bennefits;
