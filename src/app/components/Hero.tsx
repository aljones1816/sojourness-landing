"use client";

import React, { useState, useEffect } from "react";
import Image from "next/image";

const Hero: React.FC = () => {
  const images = ["/hero_photo1.jpg", "/hero_photo2.jpg", "/hero_photo3.jpg"];
  const [currentImage, setCurrentImage] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentImage((prevImage) => (prevImage + 1) % images.length);
    }, 8000); // Change every 8 seconds
    return () => clearInterval(interval);
  }, [images.length]);

  return (
    <section className="relative h-[500px] md:h-[700px] overflow-hidden mt-16">
      {/* Background Photos */}
      {images.map((image, index) => (
        <div
          key={index}
          className={`absolute inset-0 transition-opacity duration-[4000ms] ease-in-out ${
            currentImage === index ? "opacity-100" : "opacity-0"
          }`}
        >
          <Image
            src={image}
            alt={`Background ${index + 1}`}
            fill
            className="object-cover"
            priority={index === 0} // Prioritize the first image
          />
        </div>
      ))}

      {/* Overlay */}
      <div className="absolute inset-0 bg-sjBlueBlack bg-opacity-40"></div>

      {/* Content */}
      <div className="relative z-10 flex flex-col justify-center items-center text-center h-full text-sjCream">
        <h1 className="text-4xl md:text-6xl font-serif mb-4">
          Go Solo. Together.
        </h1>
        <p className="font-outfit text-lg md:text-2xl mb-8">
          Curated Active Group Travel for Women
        </p>
        <a
          href="#booking"
          className="bg-sjBrightRed hover:bg-sjBrightRed/90 text-sjCream px-4 py-1  text-lg font-outfit text-xl"
        >
          Book your adventure now
        </a>
      </div>
    </section>
  );
};

export default Hero;
