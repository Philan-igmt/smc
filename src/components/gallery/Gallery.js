import React from "react";
// import ImageGallery from "react-image-gallery";
import Gallery from "react-grid-gallery";
import "./Gallery.css";
import Footer from "../footer/Footer";

const Pallery = () => {
  const photos = [
    {
      src: "https://source.unsplash.com/2ShvY8Lf6l0/800x599",
      width: "400px",
      height: "350px",
    },
    {
      src: "https://source.unsplash.com/Dm-qxdynoEc/800x799",
      width: "400px",
      height: "300px",
    },
    {
      src: "https://source.unsplash.com/qDkso9nvCg0/600x799",
      width: "700px",
      height: "400px",
    },
    {
      src: "https://source.unsplash.com/iecJiKe_RNg/600x799",
      width: "600px",
      height: "350px",
    },
    {
      src: "https://source.unsplash.com/epcsn8Ed8kY/600x799",
      width: "300px",
      height: "400px",
    },
    {
      src: "https://source.unsplash.com/NQSWvyVRIJk/800x599",
      width: "400px",
      height: "300px",
    },
    {
      src: "https://source.unsplash.com/zh7GEuORbUw/600x799",
      width: "300px",
      height: "400px",
    },
    {
      src: "https://source.unsplash.com/PpOHJezOalU/800x599",
      width: "400px",
      height: "350px",
    },
    {
      src: "https://source.unsplash.com/I1ASdgphUH4/800x599",
      width: "400px",
      height: "300px",
    },
    {
      src: "https://source.unsplash.com/XiDA78wAZVw/600x799",
      width: "300px",
      height: "500px",
    },
    {
      src: "https://source.unsplash.com/x8xJpClTvR0/800x599",
      width: "400px",
      height: "300px",
    },
    {
      src: "https://source.unsplash.com/qGQNmBE7mYw/800x599",
      width: "400px",
      height: "500px",
    },
    {
      src: "https://source.unsplash.com/NuO6iTBkHxE/800x599",
      width: "400px",
      height: "300px",
    },
    {
      src: "https://source.unsplash.com/pF1ug8ysTtY/600x400",
      width: "400px",
      height: "200px",
    },
    {
      src: "https://source.unsplash.com/A-fubu9QJxE/800x533",
      width: "400px",
      height: "300px",
    },
    {
      src: "https://source.unsplash.com/5P91SF0zNsI/740x494",
      width: "900px",
      height: "400px",
    },
  ];

  const image = photos.map((photo) => (
    <div className="image">
      <img src={photo.src} alt="" width={photo.width} height={photo.height} />
    </div>
  ));
  return (
    <div className="App">
      {/*    */}
      <div className="parallax-container">
        <h1>Gallery</h1>
        <div className="parallax">
          <img
            className="gal-image"
            src="https://cdn.pixabay.com/photo/2014/05/05/19/53/keyboard-338505_1280.jpg"
          />
        </div>
      </div>
      <div className="all">{image}</div>
      <Footer />
    </div>
  );
};
export default Pallery;
