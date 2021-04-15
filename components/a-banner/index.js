import Arrow from "../k-flecha";

const Banner = () => {
  return (
    <div className="banner">
      <Arrow />

      <style jsx>{`
        .banner {
          width: 100vw;
          height: 100vh;
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
