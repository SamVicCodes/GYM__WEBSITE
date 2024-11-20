import React, { useState } from "react";
import { ImQuotesLeft } from "react-icons/im";
import SectionHead from "./SectionHead";
import Card from "../Card";
import { testimonials } from "./../data";

import { BsArrowRightCircle } from "react-icons/bs";
import { BsArrowLeftCircle } from "react-icons/bs";

const Testimonial = () => {
  const [index, setIndex] = useState(0);
  const { name, quote, job, avatar } = testimonials[index];

  const setNextTestimonial = () => {
    setIndex((prev) => (prev + 1) % testimonials.length);
  };

  const setPrevTestimonial = () => {
    setIndex((prev) => (prev - 1 + testimonials.length) % testimonials.length);
  };

  return (
    <section className="testimonials">
      <div className="container testimonial_container">
        <SectionHead
          icon={<ImQuotesLeft />}
          title="Testimonials"
          className="testimonial_head"
        />

        <div className="testimonial_wrapper">
          <Card className="testimonial">
            <img src={avatar} alt={`${name}'s avatar`} />

            <p>{`"${quote}"`}</p>

            <h4>{name}</h4>

            <small>{job}</small>
          </Card>

          <div className="testimonials_btn">
            <button
              className="testimonials_btn_left"
              onClick={setPrevTestimonial}
              aria-label="Previous Testimonial"
            >
              <BsArrowLeftCircle />
            </button>
            <button
              className="testimonials_btn_right"
              onClick={setNextTestimonial}
              aria-label="Next Testimonial"
            >
              <BsArrowRightCircle />
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Testimonial;
