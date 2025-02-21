import React, { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faPhone,
  faEnvelope,
  faLocationDot,
  faGlobe,
  faShare,
} from "@fortawesome/free-solid-svg-icons";
import { faWhatsapp, faInstagram } from "@fortawesome/free-brands-svg-icons";

const DigitalMarketingLanding = () => {
  const [showQR, setShowQR] = useState(false);

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
            {/* <button
              onClick={handleEmail}
              className="bg-[#fff6d6] p-4 rounded-full hover:bg-opacity-90 w-12 h-12 flex items-center justify-center"
            >
              <FontAwesomeIcon
                icon={faEnvelope}
                className="w-5 h-5 text-[#5d545e]"
              />
            </button> */}
            <button
              onClick={handleMap}
              className="bg-[#d6e6ff] p-4 rounded-full hover:bg-opacity-90 w-12 h-12 flex items-center justify-center"
            >
              <FontAwesomeIcon
                icon={faLocationDot}
                className="w-5 h-5 text-[#5d545e]"
              />
            </button>
            {/* <button
              onClick={handleWebsite}
              className="bg-[#f5d6ff] p-4 rounded-full hover:bg-opacity-90 w-12 h-12 flex items-center justify-center"
            >
              <FontAwesomeIcon
                icon={faGlobe}
                className="w-5 h-5 text-[#5d545e]"
              />
            </button> */}
          </div>

          <div className="text-center mt-8">
            {/* <button
              onClick={() => setShowQR(!showQR)}
              className="bg-[#ffe461] px-6 py-3 rounded-lg hover:bg-opacity-90 text-[#5d545e]"
              style={{ fontFamily: "Satoshi-Medium" }}
            >
              Scan QR Code
            </button> */}
            {/* {showQR && (
              <div className="mt-4">
                <img
                  src="/qr.png"
                  alt="QR Code"
                  className="mx-auto w-48 h-48"
                />
              </div>
            )} */}
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

      {/* Key Projects Section */}
      <div className="bg-[#5d545e] py-6">
        <div className="container mx-auto px-4 text-center">
          <p
            className="text-lg text-white"
            style={{ fontFamily: "Satoshi-Black" }}
          >
            Photo Gallery
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
            className="w-auto h-80 object-contain rounded-lg "
          />
        </div>
        <div className="container mx-auto px-4 text-center">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-6xl mx-auto">
            {[
              "a.jpg",
              "b.jpg",
              "c.jpg",
              // "1.jpg",
            ].map((img, index) => (
              <img
                key={index}
                src={`/${img}`}
                alt={`Project ${index + 1}`}
                className="w-full h-64 object-cover rounded-lg shadow-lg"
              />
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
                title: "Digital Marketing Agency",
                url: window.location.href,
              });
            }
          }}
          className="flex items-center gap-2 bg-[#c4ccff] px-6 py-3 rounded-full shadow-lg hover:bg-opacity-90 text-[#5d545e]"
          style={{ fontFamily: "Satoshi-Medium" }}
        >
          <FontAwesomeIcon icon={faShare} className="w-5 h-5" /> Share this card
        </button>
      </div>
    </div>
  );
};

export default DigitalMarketingLanding;
