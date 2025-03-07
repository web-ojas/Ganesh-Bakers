import React, { useState, useEffect } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faPhone,
  faEnvelope,
  faLocationDot,
  faGlobe,
  faShare,
  faArrowLeft,
  faArrowRight,
} from "@fortawesome/free-solid-svg-icons";
import { faWhatsapp, faInstagram } from "@fortawesome/free-brands-svg-icons";

const DigitalMarketingLanding = () => {
  const [showQR, setShowQR] = useState(false);
  const [currentSlide, setCurrentSlide] = useState(0);

  // Product images array
  const productImages = Array.from({ length: 11 }, (_, i) => `/p${i + 1}.jpeg`);

  // Number of images to show in one slide (for desktop and mobile)
  const imagesPerSlide = window.innerWidth >= 768 ? 3 : 1;

  // Total number of slides
  const totalSlides = Math.ceil(productImages.length / imagesPerSlide);

  // Auto-scroll functionality
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % totalSlides);
    }, 5000);

    return () => clearInterval(interval);
  }, [totalSlides]);

  const handleCall = () => {
    window.location.href = "tel:+919669143999";
  };

  const handleWhatsApp = () => {
    window.location.href = "https://wa.me/9669143999";
  };

  const handleEmail = () => {
    window.location.href = "mailto:info@parallelpanda.in";
  };

  const handleMap = () => {
    window.location.href = "https://maps.app.goo.gl/cM2BmyXpMEWFvaQ2A";
  };

  const handleWebsite = () => {
    window.location.href = "https://theparallelpanda.com";
  };

  const handleInstagram = () => {
    window.location.href =
      "https://www.instagram.com/shri_ganesh_bakery__/?hl=en";
  };

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % totalSlides);
  };

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev - 1 + totalSlides) % totalSlides);
  };

  // Function to get the current slide's images
  const getCurrentSlideImages = () => {
    const startIdx = currentSlide * imagesPerSlide;
    return productImages.slice(startIdx, startIdx + imagesPerSlide);
  };

  return (
    <div className="min-h-screen bg-white">
      {/* Header Section */}
      <div
        className="w-full px-4 pt-8 pb-8"
        style={{
          backgroundImage: "url(/background1.png)",
          backgroundSize: "cover",
          backgroundPosition: "center",
          width: "100vw",
        }}
      >
        <div className="flex flex-col items-center text-center">
          <img src="/logo.png" alt="Logo" className="w-48 h-auto mb-4" />
          <h1
            className="text-3xl mb-2 text-[#5d545e]"
            style={{ fontFamily: "Satoshi-Black" }}
          ></h1>
          <h2
            className="text-xl mb-8 text-[#5d545e]"
            style={{ fontFamily: "Satoshi-Medium" }}
          >
            <strong>NEW GANESH BAKERS</strong>
            <br />
            GST No. 23ABBPH4681A1ZA
          </h2>
        </div>
      </div>

      {/* Button Instructions */}
      <div className="bg-[#5d545e] py-6">
        <div className="container mx-auto px-4 text-center">
          <p
            className="text-lg text-white"
            style={{ fontFamily: "Satoshi-Medium" }}
          >
            Click on buttons
          </p>
        </div>
      </div>

      {/* Contact Buttons Section */}
      <div
        className="bg-cover bg-center py-8"
        style={{ backgroundImage: "url(/background.png)" }}
      >
        <div className="container mx-auto px-4">
          <div className="flex justify-center gap-4 max-w-2xl mx-auto">
            <button
              onClick={handleCall}
              className="bg-[#ffd6d6] p-4 rounded-full hover:bg-opacity-90 w-12 h-12 flex items-center justify-center"
            >
              <FontAwesomeIcon
                icon={faPhone}
                className="w-5 h-5 text-[#5d545e]"
              />
            </button>
            <button
              onClick={handleWhatsApp}
              className="bg-[#d6ffd6] p-4 rounded-full hover:bg-opacity-90 w-12 h-12 flex items-center justify-center"
            >
              <FontAwesomeIcon
                icon={faWhatsapp}
                className="w-5 h-5 text-[#5d545e]"
              />
            </button>
            <button
              onClick={handleInstagram}
              className="bg-[#f5d6ff] p-4 rounded-full hover:bg-opacity-90 w-12 h-12 flex items-center justify-center"
            >
              <FontAwesomeIcon
                icon={faInstagram}
                className="w-5 h-5 text-[#5d545e]"
              />
            </button>
            <button
              onClick={handleMap}
              className="bg-[#d6e6ff] p-4 rounded-full hover:bg-opacity-90 w-12 h-12 flex items-center justify-center"
            >
              <FontAwesomeIcon
                icon={faLocationDot}
                className="w-5 h-5 text-[#5d545e]"
              />
            </button>
          </div>

          {/* Address added above location/map image */}
          <div className="text-center mt-8">
            <p
              className="text-lg mb-4 text-[#5d545e]"
              style={{ fontFamily: "Satoshi-Medium" }}
            >
              <strong>
                33, Joshi Colony, Navlakha, Indore, Madhya Pradesh 452001, India
              </strong>
            </p>
          </div>
        </div>
      </div>

      {/* Introduction Section */}
      <div
        className="bg-cover bg-center py-12"
        style={{ backgroundImage: "url(/background.png)" }}
      >
        <div className="container mx-auto px-4 text-center max-w-3xl">
          <h2
            className="text-2xl mb-6 text-[#5d545e]"
            style={{ fontFamily: "Satoshi-Black" }}
          >
            Introduction
          </h2>
          <p
            className="text-lg leading-relaxed text-[#5d545e]"
            style={{ fontFamily: "Satoshi-Regular" }}
          >
            A <strong>legacy of excellence</strong> in baking since{" "}
            <strong>1990</strong>. From our signature{" "}
            <em>Tutti Frutti Bread Cake</em> to rich <em>Choco Bread Cake</em>
            and crispy <em>Cake Rusk</em>, we craft each product with unmatched
            quality and passion. Based in{" "}
            <strong>Indore, Madhya Pradesh</strong>, we are a trusted name in
            the industry, supplying in bulk to meet your needs. With a
            commitment to <strong>taste, tradition, and trust</strong>, we
            ensure every bite delivers delight. Let us be your partner in
            bringing the finest baked goods to your customers.
          </p>
        </div>
      </div>

      <div
        className="py-12 w-full"
        style={{
          backgroundImage: "url(/background.png)",
          backgroundSize: "cover",
          backgroundPosition: "center",
          width: "100vw",
        }}
      >
        <div className="py-6 flex justify-center bg-transparent px-4">
          <img
            src="/alpha.jpeg"
            alt="Alpha Image"
            className="w-auto h-80 object-contain rounded-lg"
          />
        </div>
        <div className="bg-[#5d545e] py-6">
          <div className="container mx-auto px-4 text-center">
            <p
              className="text-lg text-white"
              style={{ fontFamily: "Satoshi-Black" }}
            >
              Our Products
            </p>
          </div>
        </div>

        {/* Product Carousel */}
        <div className="container mx-auto px-4 mt-8">
          <div className="relative">
            {/* Carousel container */}
            <div className="overflow-hidden">
              <div
                className="flex transition-transform duration-500 ease-in-out"
                style={{ transform: `translateX(-${currentSlide * 100}%)` }}
              >
                {/* Generate all slides */}
                {Array.from({ length: totalSlides }).map((_, slideIndex) => (
                  <div key={slideIndex} className="w-full flex-shrink-0">
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                      {productImages
                        .slice(
                          slideIndex * imagesPerSlide,
                          (slideIndex + 1) * imagesPerSlide
                        )
                        .map((img, imgIndex) => (
                          <div
                            key={imgIndex}
                            className="bg-white bg-opacity-40 backdrop-blur-md p-4 rounded-lg shadow-md transition-all duration-300 hover:shadow-lg hover:scale-105 hover:bg-opacity-60"
                            style={{
                              backdropFilter: "blur(10px)",
                              WebkitBackdropFilter: "blur(10px)",
                              border: "1px solid rgba(255, 255, 255, 0.2)",
                            }}
                          >
                            <img
                              src={img}
                              alt={`Bakery Product`}
                              className="w-full h-64 object-cover rounded-md"
                            />
                          </div>
                        ))}
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Navigation arrows */}
            <button
              onClick={prevSlide}
              className="absolute left-0 top-1/2 transform -translate-y-1/2 bg-white bg-opacity-50 hover:bg-opacity-75 p-2 rounded-full hover:scale-110 transition-transform duration-200"
            >
              <FontAwesomeIcon
                icon={faArrowLeft}
                className="w-6 h-6 text-[#5d545e]"
              />
            </button>
            <button
              onClick={nextSlide}
              className="absolute right-0 top-1/2 transform -translate-y-1/2 bg-white bg-opacity-50 hover:bg-opacity-75 p-2 rounded-full hover:scale-110 transition-transform duration-200"
            >
              <FontAwesomeIcon
                icon={faArrowRight}
                className="w-6 h-6 text-[#5d545e]"
              />
            </button>

            {/* Dots indicator */}
            <div className="flex justify-center mt-4">
              {Array.from({ length: totalSlides }).map((_, index) => (
                <button
                  key={index}
                  onClick={() => setCurrentSlide(index)}
                  className={`w-3 h-3 rounded-full mx-1 transition-all duration-200 ${
                    currentSlide === index
                      ? "bg-[#5d545e] scale-125"
                      : "bg-gray-300"
                  }`}
                ></button>
              ))}
            </div>
          </div>
        </div>

        {/* Product Grid for larger screens */}
        <div className="container mx-auto px-4 mt-12 hidden lg:block">
          <h3
            className="text-xl mb-6 text-center text-[#5d545e]"
            style={{ fontFamily: "Satoshi-Black" }}
          >
            Browse All Products
          </h3>
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
            {productImages.map((img, index) => (
              <div
                key={index}
                className="bg-white bg-opacity-40 backdrop-blur-md p-4 rounded-lg shadow-md transition-all duration-300 hover:shadow-xl hover:scale-105 hover:bg-opacity-60 cursor-pointer"
                style={{
                  backdropFilter: "blur(10px)",
                  WebkitBackdropFilter: "blur(10px)",
                  border: "1px solid rgba(255, 255, 255, 0.2)",
                }}
              >
                <img
                  src={img}
                  alt={`Bakery Product`}
                  className="w-full h-48 object-cover rounded-md"
                />
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Share Button (Fixed) */}
      <div className="fixed bottom-8 right-8 z-50">
        <button
          onClick={() => {
            if (navigator.share) {
              navigator.share({
                title: "New Ganesh Bakers",
                url: window.location.href,
              });
            }
          }}
          className="flex items-center gap-2 bg-[#c4ccff] backdrop-blur-sm bg-opacity-70 px-6 py-3 rounded-full shadow-lg hover:bg-opacity-90 text-[#5d545e] transition-all duration-300 hover:scale-105"
          style={{
            fontFamily: "Satoshi-Medium",
            backdropFilter: "blur(5px)",
            WebkitBackdropFilter: "blur(5px)",
            border: "1px solid rgba(255, 255, 255, 0.2)",
          }}
        >
          <FontAwesomeIcon icon={faShare} className="w-5 h-5" /> Share this card
        </button>
      </div>
    </div>
  );
};

export default DigitalMarketingLanding;
