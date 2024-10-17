import "./trainers.css";

import Header from "../../components2/Header";
import plansImage from "../../images/header_bg_5.jpg";
import { trainers } from "./../../data";
import Card from "../../Card";
import { Link } from "react-router-dom";


const Trainers = () => {
  return (
    <div className="trainers">
      <div className="trainers_container">
        <Header image={plansImage} title="Our Trainers">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Nesciunt
          saepe praesentium, nisi aspernatur ipsam veniam. Facilis, aut.
          Praesentium, itaque dolorum.
        </Header>

        <section className="trainers_wrapper container">
          {trainers.map((trainer) => {
            const { id, image, name, job, socials } = trainer;

            return (
              <Card className="trainer" key={id}>
                <div className="trainer_image">
                  <img src={image} alt="" />
                </div>

                <div className="trainer_info">
                  <h4>{name}</h4>

                  <small>{job}</small>
                </div>

                <div className="trainer_socials">
                  {socials.map(({ icon, link }, index) => {

                    return (
                      <Link
                        key={index}
                        to={link}
                        target="_blank"
                        rel="noreferrer noopener"
                      >
                        {icon}
                        {/* <BsWhatsapp /> */}
                      </Link>
                    );
                  })}
                </div>
              </Card>
            );
          })}
        </section>
      </div>
    </div>
  );
};

export default Trainers;
