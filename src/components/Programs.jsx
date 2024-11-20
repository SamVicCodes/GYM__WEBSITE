import React from "react";
import SectionHead from "./SectionHead";
import { FaCrown } from "react-icons/fa";
import Card from "../Card";
import { programs } from "../data";
import { Link } from "react-router-dom";
import { AiFillCaretRight } from "react-icons/ai";

const Programs = () => {
  return (
    <section className="programs">
      <div className="container programs_container">
        <SectionHead icon={<FaCrown />} title="Our Programs" />

        <div className="programs_wrapper">
          {programs.map((program) => {
            const { id, icon, title, info, path } = program;

            return (
              <Card key={id} className="program">
                <span>{icon}</span>

                <h4>{title}</h4>

                <small>{info}</small>

                <Link className="btn sm" to={path}>
                  Learn more <AiFillCaretRight />
                </Link>
              </Card>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default Programs;


