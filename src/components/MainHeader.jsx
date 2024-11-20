import headerImage from "../images/main_header.png";

const MainHeader = () => {
  return (
    <header>
      <div className="container main_header_container">
        <div className="header_left">
          <small>#100DaysOfWorkOut</small>

          <h2>Transform Your Body, Transform Your Life</h2>

          <p>
            Join our community of fitness enthusiasts and achieve your goals
            with expert trainers, world-class facilities, and tailored workout
            plans designed just for you.
          </p>

          <button className="btn lg">Get Started</button>
        </div>

        <div className="header_right">
          <div className="header_circle"></div>

          <div className="avatar">
            <img src={headerImage} alt="Fitness Enthusiast" />
          </div>
        </div>
      </div>
    </header>
  );
};

export default MainHeader;
