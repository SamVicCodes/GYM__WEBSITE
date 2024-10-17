import "./plans.css";
import Header from "../../components2/Header";
import plansImage from "../../images/header_bg_4.jpg";
import { plans } from "../../data";
import Card from "../../Card";
import { Link } from "react-router-dom";

const Plans = () => {
  return (
    <div className="about">
      <div className="about_container">
        <Header image={plansImage} title="Membership Plan">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Nesciunt
          saepe praesentium, nisi aspernatur ipsam veniam. Facilis, aut.
          Praesentium, itaque dolorum.
        </Header>

        <section className="plans">
          <div className="container plans_container">
            {plans.map((plan) => {
              const { id, name, desc, price, features } = plan;
              return (
                <Card key={id} className="plan">
                  <h4>{name}</h4>

                  <small>{desc}</small>

                  <h1>{`$${price}`}</h1>
                  <h2>/mo</h2>

                  {features.map(({ feature, available }, index) => {
                    return (
                      <p className={!available ? "disabled" : ""} key={index}>
                        {feature}
                      </p>
                    );
                  })}

                  <Link className="btn lg plans_btn">Choose Plan</Link>
                </Card>
              );
            })}
          </div>
        </section>
      </div>
    </div>
  );
};

export default Plans;
