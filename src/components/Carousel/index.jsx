import React, { useRef } from "react";
import "./style.css";
import Slider from "react-slick";
import ImageOne from "../../assets/imgphoto1.png";
import ImageTwo from "../../assets/imgphoto2.png";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCircleChevronLeft } from "@fortawesome/free-solid-svg-icons";
import { faCircleChevronRight } from "@fortawesome/free-solid-svg-icons";

const CarouselTestimonial = () => {
  let sliderRef = useRef(null);
  const next = () => {
    sliderRef.slickNext();
  };
  const previous = () => {
    sliderRef.slickPrev();
  };

  var settings = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    variableWidth: true,
  };
  return (
    <div id="testimonial" className="carousel-container">
      <div className="carousel-text">
        <h1>Testimonial</h1>
        <p>Berbagai review positif dari para pelanggan kami</p>
        <Slider
          ref={(slider) => {
            sliderRef = slider;
          }}
          {...settings}
        >
          <div style={{ width: 700 }}>
            <div className="carousel-card">
              <div className="carousel-img">
                <img src={ImageOne} alt="" />
              </div>
              <div className="carousel-content">
                <p>★★★★★</p>
                <p>
                  “Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                  do eiusmod lorem ipsum dolor sit amet, consectetur adipiscing
                  elit, sed do eiusmod lorem ipsum dolor sit amet, consectetur
                  adipiscing elit, sed do eiusmod”
                </p>
                <p>John Dee 32, Bromo</p>
              </div>
            </div>
          </div>
          <div style={{ width: 700 }}>
            <div className="carousel-card">
              <div className="carousel-img">
                <img src={ImageOne} alt="" />
              </div>
              <div className="carousel-content">
                <p>★★★★★</p>
                <p>
                  “Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                  do eiusmod lorem ipsum dolor sit amet, consectetur adipiscing
                  elit, sed do eiusmod lorem ipsum dolor sit amet, consectetur
                  adipiscing elit, sed do eiusmod”
                </p>
                <p>John Dee 32, Bromo</p>
              </div>
            </div>
          </div>
          <div style={{ width: 700 }}>
            <div className="carousel-card">
              <div className="carousel-img">
                <img src={ImageOne} alt="" />
              </div>
              <div className="carousel-content">
                <p>★★★★★</p>
                <p>
                  “Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                  do eiusmod lorem ipsum dolor sit amet, consectetur adipiscing
                  elit, sed do eiusmod lorem ipsum dolor sit amet, consectetur
                  adipiscing elit, sed do eiusmod”
                </p>
                <p>John Dee 32, Bromo</p>
              </div>
            </div>
          </div>
        </Slider>
        <div>
          <button className="button" onClick={previous}>
            <FontAwesomeIcon icon={faCircleChevronLeft} />
          </button>
          <button className="button-two" onClick={next}>
            <FontAwesomeIcon icon={faCircleChevronRight} />
          </button>
        </div>
      </div>
    </div>
  );
};

export default CarouselTestimonial;
