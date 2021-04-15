const Left = () => {
  return (
    <div className="left">
      <h2>Somos una distribuidora de bebidas</h2>

      <style jsx>
        {`
          .left {
            width: 100vw;
            height: 100%;
            display: flex;
            justify-content: center;
            align-items: center;
            overflow: hidden;
          }
          h2 {
            color: white;
            font-size: 3em;
          }
        `}
      </style>
    </div>
  );
};

export default Left;
