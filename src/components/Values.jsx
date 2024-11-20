import React from "react";
import image from "../images/values.jpg";
import SectionHead from "./SectionHead";
import { GiCutDiamond } from "react-icons/gi";
import { values } from "../data";
import Card from "../Card";

const Values = () => {
  return (
    <section className="values">
      <div className="container values_container">
        {/* Left Section with Image */}
        <div className="values_left">
          <img src={image} alt="Gym values representation" />
        </div>

        {/* Right Section with Values */}
        <div className="values_right">
          <SectionHead icon={<GiCutDiamond />} title="Our Core Values" />

          <p>
            At our gym, we stand by a set of core values that drive everything we do. From empowering our members to fostering a community of wellness, these values shape your fitness journey.
          </p>

          <div className="values_wrapper">
            {values.map((value) => {
              const { id, icon, title, desc } = value;

              return (
                <Card className="value" key={id}>
                  <span>{icon}</span>
                  <h4>{title}</h4>
                  <small>{desc}</small>
                </Card>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Values;

