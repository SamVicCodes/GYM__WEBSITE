import Header from "../../components2/Header";
import "./about.css";
import aboutImage from "../../images/header_bg_1.jpg";
import storyImage from "../../images/about1.jpg"
import visionImage from "../../images/about2.jpg"
import missionImage from "../../images/about3.jpg"


const About = () => {
  return (
    <div className="about">
      <div className="about_container">
        <Header image={aboutImage} title="About Us">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Nesciunt
          saepe praesentium, nisi aspernatur ipsam veniam. Facilis, aut.
          Praesentium, itaque dolorum.
        </Header>

        <section className="story">
          <div className=" container story_container">
            <div className="story_img">
              <img src={storyImage} alt="" />
            </div>

            <div className="about_content">
              <h2>Our Story</h2>

              <p>
                Lorem ipsum dolor sit, amet consectetur adipisicing elit. Alias
                laborum natus asperiores? Reiciendis saepe eveniet velit
                laboriosam sed, accusamus voluptatibus!
              </p>

              <p>
                Lorem ipsum dolor sit, amet consectetur adipisicing elit. Alias
                laborum natus asperiores? Reiciendis saepe eveniet velit
                laboriosam sed, accusamus voluptatibus!
              </p>

              <p>
                Lorem ipsum dolor sit, amet consectetur adipisicing elit. Alias
                laborum natus asperiores? Reiciendis saepe eveniet velit
                laboriosam sed, accusamus voluptatibus!
              </p>
            </div>
          </div>
        </section>

        <section className="vision">
          <div className=" container vision_container">

            <div className="about_content">
              <h2>Our Vission</h2>

              <p>
                Lorem ipsum dolor sit, amet consectetur adipisicing elit. Alias
                laborum natus asperiores? Reiciendis saepe eveniet velit
                laboriosam sed, accusamus voluptatibus!
              </p>

              <p>
                Lorem ipsum dolor sit, amet consectetur adipisicing elit. Alias
                laborum natus asperiores? Reiciendis saepe eveniet velit
                laboriosam sed, accusamus voluptatibus!
              </p>

              <p>
                Lorem ipsum dolor sit, amet consectetur adipisicing elit. Alias
                laborum natus asperiores? Reiciendis saepe eveniet velit
                laboriosam sed, accusamus voluptatibus!
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
                Lorem ipsum dolor sit, amet consectetur adipisicing elit. Alias
                laborum natus asperiores? Reiciendis saepe eveniet velit
                laboriosam sed, accusamus voluptatibus!
              </p>

              <p>
                Lorem ipsum dolor sit, amet consectetur adipisicing elit. Alias
                laborum natus asperiores? Reiciendis saepe eveniet velit
                laboriosam sed, accusamus voluptatibus!
              </p>

              <p>
                Lorem ipsum dolor sit, amet consectetur adipisicing elit. Alias
                laborum natus asperiores? Reiciendis saepe eveniet velit
                laboriosam sed, accusamus voluptatibus!
              </p>
            </div>
          </div>
        </section>
      </div>
    </div>
  );
};

export default About;
