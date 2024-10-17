import "./contact.css";
import Header from "../../components2/Header";
import contactImage from "../../images/header_bg_2.jpg";

import { FaFacebookF } from "react-icons/fa6";
import { FaLinkedinIn } from "react-icons/fa6";
import { BsWhatsapp } from "react-icons/bs";
import { FaXTwitter } from "react-icons/fa6";
const Contact = () => {
  return (
    <div className="about">
      <div className="about_container">
        <Header image={contactImage} title="Get In Touch">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Nesciunt
          saepe praesentium, nisi aspernatur ipsam veniam. Facilis, aut.
          Praesentium, itaque dolorum.
        </Header>

        <section className="contact">
        <ul class="links icon-links">
              <li>
                <a
                  href="https://www.facebook.com/akpobasa.victor?mibextid=rS40aB7S9Ucbxw6v"
                  target="_blank"
                  rel="noreferrer noopener"
                >
                  <FaFacebookF />
                </a>
              </li>
              <li>
                <a
                  href="https://www.linkedin.com/in/samviccodes"
                  target="_blank"
                  rel="noreferrer noopener"
                >
                  <FaLinkedinIn />
                </a>
              </li>
              <li>
                <a
                  href="https://wa.me/2348146557494"
                  target="_blank"
                  rel="noreferrer noopener"
                >
                  <BsWhatsapp />
                </a>
              </li>
              <li>
                <a
                  href="https://x.com/SamVicCodes"
                  target="_blank"
                  rel="noreferrer noopener"
                >
                  <FaXTwitter />
                </a>
              </li>
            </ul>
        </section>
      </div>
    </div>
  );
};

export default Contact;
