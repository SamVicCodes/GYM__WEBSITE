import React from "react";
import SectionHead from "./SectionHead";
import { FaQuestion } from "react-icons/fa";
import { faqs } from "../data";
import Faq from "./Faq";

const Faqs = () => {
  return (
    <section className="faqs">
      <div className="container faqs_container">
        <SectionHead icon={<FaQuestion />} title="FAQs" />

        <div className="faqs_wrapper">
          {
            //

            faqs.map((faq) => {
              const { id, question, answer } = faq;

              return <Faq question={question} answer={answer} key={id} />;
            })

            //
          }
        </div>
      </div>
    </section>
  );
};

export default Faqs;
