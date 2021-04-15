const Logo = () => {
  return (
    <div className="logo">
      <img src="/images/logo.png" alt="logo" />
      <style jsx>{`
        img {
          min-width: 100px;
          height: 50px;
        }
      `}</style>
    </div>
  );
};

export default Logo;
