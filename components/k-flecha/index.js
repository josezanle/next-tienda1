const Arrow = () => {
  return (
    <div className="flecha">
      <h4>V</h4>
      <style jsx>
        {`
          .flecha {
            width: 50px;
            height: 50px;
            display: flex;
            justify-content: center;
            align-items: center;
            background-image: linear-gradient(120deg, #f6d365 0%, #ed8e2c 100%);
            color: white;
            border-radius: 50%;
            position: absolute;
            bottom: 6em;
            left: 50%;
            z-index: 200;
            overflow: hidden;
            cursor: pointer;
          }
          .flecha:hover {
            border: 2px solid white;
          }
        `}
      </style>
    </div>
  );
};

export default Arrow;
