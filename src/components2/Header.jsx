import React from "react";

const Header = ({ image, title, children }) => {
  return (
    <header className="header2">
      <div className="header2_container">
        {/*  */}


        <div className="main_header2_image">
          <img src={image} alt="main header2 image" />
        </div>


        <div className="header2_content">
          <h2>{title}</h2>
         <p> {children}</p>
        </div>
      </div>
    </header>
  );
};

export default Header;
