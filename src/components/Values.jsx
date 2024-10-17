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
        {/*  */}

        <div className="values_left">
          <img src={image} alt="values image" />
        </div>

        <div className="values_right">
          <SectionHead icon={<GiCutDiamond />} title="Our Values" />

          <p>
            Lorem, ipsum dolor sit amet consectetur adipisicing elit. Labore
            temporibus, natus nihil delectus corrupti rerum.
          </p>

          <div className="values_wrapper">
            {values.map((value) => {
              
              const { id, icon, title, desc } = value;

              return (
                <Card className="value" key={id}>
                  <span>
                    {icon}
                  </span>

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
