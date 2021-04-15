import Arrow from "../k-flecha";
import Left from "./left";
import Right from "./right";

const Banner = () => {
  return (
    <div className="banner">
      <Left />
      <Right />

      <Arrow />

      <style jsx>{`
        .banner {
          width: 100vw;
          height: 100vh;
          display: flex;
          justify-content: center;
          align-items: center;
          flex-flow: column;
          position: relative;
        }
        .wave {
          position: absolute;
          bottom: 0;
          width: 100vw;
        }
      `}</style>
    </div>
  );
};

export default Banner;
