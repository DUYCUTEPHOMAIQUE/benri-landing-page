import React from "react";

function Hero() {
  return (
    <section className="relative bg-benri-green-400 bg-opacity-90 text-white py-20 overflow-hidden" id="hero">
      <div className="container mx-auto px-6 text-center relative z-10">
        <h1 className="text-4xl md:text-6xl font-bold mb-2">
          Đi chợ thông minh cùng Benri
        </h1>
        <p className="text-xl mb-8">Tiết kiệm thời gian và tiền bạc mỗi ngày</p>
        <img
          src="/path-to-your-mockup-image.png"
          alt="Benri App Mockup"
          className="max-w-md mx-auto mb-8 rounded-lg shadow-lg"
        />
        <a
          href="#"
          className="bg-white text-benri-green-400 font-bold py-3 px-6 rounded-full hover:bg-benri-green-100 transition duration-300 text-lg"
        >
          Tải xuống ngay
        </a>
      </div>
    </section>
  );
}

export default Hero;
