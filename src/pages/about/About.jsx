import Header from "../../components2/Header";
import "./about.css";
import aboutImage from "../../images/header_bg_1.jpg";
import storyImage from "../../images/about1.jpg";
import visionImage from "../../images/about2.jpg";
import missionImage from "../../images/about3.jpg";
import { useEffect } from "react";

const About = () => {
  useEffect(() => {
    window.scroll(0, 0);
  }, []);

  
  return (
    <div className="about">
      <div className="about_container">
        <Header image={aboutImage} title="About Us">
          We are passionate about delivering excellent services, inspiring
          stories, and a clear mission and vision to achieve growth and success.
        </Header>

        <section className="story">
          <div className=" container story_container">
            <div className="story_img">
              <img src={storyImage} alt="" />
            </div>

            <div className="about_content">
              <h2>Our Story</h2>

              <p>
                Our journey began with a dream to create impactful solutions and
                deliver excellence in every aspect.
              </p>

              <p>
                Over the years, we've grown into a team of dedicated
                professionals with a passion for innovation.
              </p>

              <p>
                Our story is one of resilience, creativity, and commitment to
                our clients and community.
              </p>
            </div>
          </div>
        </section>

        <section className="vision">
          <div className=" container vision_container">
            <div className="about_content">
              <h2>Our Vission</h2>

              <p>
                To be a global leader in delivering innovative solutions that
                empower individuals and organizations to achieve their goals.
              </p>

              <p>
                We strive to create sustainable growth through creativity,
                resilience, and a commitment to excellence.
              </p>

              <p>
                Our vision is to inspire and drive positive change in
                communities and industries worldwide.
              </p>
            </div>

            <div className="story_img">
              <img src={visionImage} alt="vision image" />
            </div>
          </div>
        </section>

        <section className="mission">
          <div className=" container mission_container">
            <div className="story_img">
              <img src={missionImage} alt="mission image" />
            </div>

            <div className="about_content">
              <h2>Our Mission</h2>

              <p>
                Our mission is to empower individuals and organizations by
                providing innovative and effective solutions that make a
                positive impact on their growth and success.
              </p>

              <p>
                We aim to create an environment where creativity, collaboration,
                and integrity drive continuous progress, helping our clients
                navigate their most complex challenges.
              </p>

              <p>
                We are dedicated to delivering excellence, fostering long-term
                partnerships, and leading with a customer-first mindset in all
                our endeavors.
              </p>
            </div>
          </div>
        </section>
      </div>
    </div>
  );
};

export default About;
