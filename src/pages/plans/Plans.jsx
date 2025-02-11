import "./plans.css";
import Header from "../../components2/Header";
import plansImage from "../../images/header_bg_4.jpg";
import { plans } from "../../data";
import Card from "../../Card";
import { Link } from "react-router-dom";
import { useEffect } from "react";


const Plans = () => {
   useEffect(() => {
      window.scroll(0, 0);
    }, []);


  return (
    <div className="about">
      <div className="about_container">
        <Header image={plansImage} title="Membership Plan">
          Explore our flexible membership plans tailored to suit your needs.
          Whether you're looking for basic access or premium features, we offer
          options designed to help you get the most out of our services. Choose
          the plan that works best for you and start enjoying the benefits
          today!
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
