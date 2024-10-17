import headerImage from "../images/main_header.png";

const MainHeader = () => {
  return (
    <header>
      <div className="container main_header_container">
        <div className="header_left">
          <small>#100DaysOfWorkOut</small>

          <h2>join the legend of the fitness world</h2>

          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Eum harum
            repellat repellendus veniam qui, deleniti itaque a consequatur iusto
            quo.
          </p>

          <button className="btn lg">Get Started</button>
        </div>

        <div className="header_right">
          <div className="header_circle"></div>

          <div className="avatar">
            <img src={headerImage} alt="" />
          </div>
        </div>
      </div>
    </header>
  );
};

export default MainHeader;
