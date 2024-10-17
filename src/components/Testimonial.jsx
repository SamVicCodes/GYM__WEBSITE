import React, { useState } from "react";
import { ImQuotesLeft } from "react-icons/im";
import SectionHead from "./SectionHead";
import Card from "../Card";
import { testimonials } from "./../data";

import { BsArrowRightCircle } from "react-icons/bs";
import { BsArrowLeftCircle } from "react-icons/bs";

const Testimonial = () => {
  const [index, setIndex] = useState(0);
  const { id, name, quote, job, avatar } = testimonials[index];

  const setNextTestimonial = () => {
    setIndex((prev) => prev + 1);

    if (index >= testimonials.length - 1) {
      setIndex(0);
    }
  };

  const setPrevTestimonial = () => {
    setIndex((prev) => prev - 1);

    if (index <= 0) {
      setIndex(testimonials.length - 1);
    }
  };

  return (
    <section className="testimonials">
      <div className="container testimonial_container">
        <SectionHead
          icon={<ImQuotesLeft />}
          title="Testimonial"
          className="testimonial_head"
        />

        <div className="testimonial_wrapper">
          <Card className="testimonial" key={id}>
            <img src={avatar} alt="testimonial image" />

            <p>{`"${quote}"`}</p>

            <h4>{name}</h4>

            <small>{job}</small>
          </Card>

          <div className="testimonials_btn">
            <button
              className="testimonials_btn_left"
              onClick={setPrevTestimonial}
            >
              {<BsArrowLeftCircle />}
            </button>
            <button
              className="testimonials_btn_right"
              onClick={setNextTestimonial}
            >
              {<BsArrowRightCircle />}
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Testimonial;
