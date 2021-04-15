const Banner = () => {
  return (
    <div className="banner">
      <h2>banner</h2>

      <style jsx>{`
        .banner {
          width: 100vw;
          height: 100vh;
          background-image: url(/images/banner-test.png);
          background-size: cover;
          background-position: center;
          background-repeat: no-repeat;
          position: relative;
          // linear-gradient(120deg, #f6d365 0%, #f8ac30 100%)
        }
      `}</style>
    </div>
  );
};

export default Banner;
