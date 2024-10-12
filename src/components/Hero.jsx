import React from "react";
import AnimatedSection from "./AnimatedSection";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

function Hero() {
  const images = [
    "https://external-preview.redd.it/fhD7u-HHroDQQJLJmEkOj0oNXpJJhPlf0ZRW7gRs6eU.png?auto=webp&s=d1b2acfa4751c1f8bfade4f3485fa953b62437ba",
    "https://th.bing.com/th/id/OIP.UH1XHRYHMJWb2zxHn0IxNAHaEV?w=277&h=180&c=7&r=0&o=5&dpr=1.3&pid=1.7",
    "https://external-preview.redd.it/fhD7u-HHroDQQJLJmEkOj0oNXpJJhPlf0ZRW7gRs6eU.png?auto=webp&s=d1b2acfa4751c1f8bfade4f3485fa953b62437ba",
   "https://th.bing.com/th/id/OIP.UH1XHRYHMJWb2zxHn0IxNAHaEV?w=277&h=180&c=7&r=0&o=5&dpr=1.3&pid=1.7"
  ];

  const settings = {
    dots: true,
    infinite: true,
    autoplay: true,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 1,
    centerMode: true,
    centerPadding: "0",
    beforeChange: (current, next) => console.log(next),
    responsive: [
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          centerMode: false,
        }
      }
    ]
  };

  return (
    <section className="relative bg-benri-green-400 bg-opacity-90 text-white py-20 overflow-hidden" id="hero">
      <div className="container mx-auto px-6 text-center relative z-10">
        <AnimatedSection>
          <h1 className="text-4xl md:text-6xl font-bold mb-2">
            Đi chợ thông minh cùng Benri
          </h1>
          <p className="text-xl mb-8">Tiết kiệm thời gian và tiền bạc mỗi ngày</p>
          
          <div className="max-w-[900px] object-center mx-auto mb-16">
            <Slider {...settings}>
              {images.map((src, index) => (
                <div key={index} className="px-2 object-ce w-[120px] h-[220px]">
                  <img
                    src={src}
                    alt={`Benri App Mockup ${index + 1}`}
                    className="w-full h-auto rounded-lg shadow-lg transition-all duration-300"
                  />
                </div>
              ))}
            </Slider>
          </div>

          <a
            href="#"
            className="bg-white text-benri-green-400 font-bold py-3 px-6 rounded-full hover:bg-benri-green-100 transition duration-300 text-lg"
          >
            Tải xuống ngay
          </a>
        </AnimatedSection>
      </div>
    </section>
  );
}

export default Hero;
