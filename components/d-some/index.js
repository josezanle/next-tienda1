const Some = () => {
  return (
    <div className="some">
      <style jsx>{`
        .some {
          width: 100vw;
          height: 70vh;
          background-attachment: fixed;
          background-image: url(/images/paying.jpg);
          background-size: cover;
          background-repeat: no-repeat;
          background-position: center;
          display: flex;
          justify-content: center;
          align-items: center;
        }
      `}</style>
    </div>
  );
};

export default Some;
