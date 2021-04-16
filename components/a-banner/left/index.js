const Left = () => {
  return (
    <div className="left">
      <img src="/images/logo-white.png" alt="logo-white" className="img" />
      <h2>Mira los mejores precios.</h2>

      <style jsx>
        {`
          .left {
            width: 100vw;
            height: 100%;
            display: flex;
            justify-content: center;
            align-items: center;
            flex-flow: column;
            overflow: hidden;
          }
          .img {
            width: 700px;
            height: 260px;
          }

          h2 {
            color: white;
            font-size: 3em;
            overflow: hidden;
          }
        `}
      </style>
    </div>
  );
};

export default Left;
