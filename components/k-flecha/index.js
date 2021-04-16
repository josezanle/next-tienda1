const Arrow = () => {
  return (
    <div className="flecha">
      <svg
        aria-hidden="true"
        focusable="false"
        data-prefix="fas"
        data-icon="arrow-down"
        className="svg-inline--fa fa-arrow-down fa-w-14"
        role="img"
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 448 512"
      >
        <path
          fill="currentColor"
          d="M413.1 222.5l22.2 22.2c9.4 9.4 9.4 24.6 0 33.9L241 473c-9.4 9.4-24.6 9.4-33.9 0L12.7 278.6c-9.4-9.4-9.4-24.6 0-33.9l22.2-22.2c9.5-9.5 25-9.3 34.3.4L184 343.4V56c0-13.3 10.7-24 24-24h32c13.3 0 24 10.7 24 24v287.4l114.8-120.5c9.3-9.8 24.8-10 34.3-.4z"
        ></path>
      </svg>
      <style jsx>
        {`
          .flecha {
            width: 80px;
            height: 80px;
            display: flex;
            justify-content: center;
            align-items: center;
            background-image: linear-gradient(120deg, #8c52ff 0%, #563c7e 100%);
            position: absolute;
            bottom: 6em;
            left: 10%;
            z-index: 200;
            cursor: pointer;
          }

          svg {
            width: 60px;
            height: 60px;
            color: white;
          }
        `}
      </style>
    </div>
  );
};

export default Arrow;
