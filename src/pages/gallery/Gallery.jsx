import "./gallery.css";
import Header from "../../components2/Header";
import galleryImage from "../../images/header_bg_3.jpg";

import galleryImage1 from "../../images/gallery1.jpg";
import galleryImage2 from "../../images/gallery2.jpg";
import galleryImage3 from "../../images/gallery3.jpg";
import galleryImage4 from "../../images/gallery4.jpg";
import galleryImage5 from "../../images/gallery5.jpg";
import galleryImage6 from "../../images/gallery6.jpg";
import galleryImage7 from "../../images/gallery7.jpg";
import galleryImage8 from "../../images/gallery8.jpg";
import galleryImage9 from "../../images/gallery9.jpg";
import galleryImage10 from "../../images/gallery10.jpg";
import galleryImage11 from "../../images/gallery11.jpg";
import galleryImage12 from "../../images/gallery12.jpg";
import galleryImage13 from "../../images/gallery13.jpg";
import galleryImage14 from "../../images/gallery14.jpg";
import galleryImage15 from "../../images/gallery15.jpg";

const Gallery = () => {
  // Create an array of all the imported images
  const images = [
    galleryImage1,
    galleryImage2,
    galleryImage3,
    galleryImage4,
    galleryImage5,
    galleryImage6,
    galleryImage7,
    galleryImage8,
    galleryImage9,
    galleryImage10,
    galleryImage11,
    galleryImage12,
    galleryImage13,
    galleryImage14,
    galleryImage15,
  ];

  return (
    <div className="about">
      <div className="about_container">
        <Header image={galleryImage} title="Our Gallery">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Nesciunt
          saepe praesentium, nisi aspernatur ipsam veniam. Facilis, aut.
          Praesentium, itaque dolorum.
        </Header>

        <section>
          <div className="container gallery_container">
            {images.map((image, index) => {
              return <img src={image} key={index} alt={`gallery image ${index + 1}`} />;
            })}
          </div>
        </section>
      </div>
    </div>
  );
};

export default Gallery;
