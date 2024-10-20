import React, { useState, useEffect } from "react";
import Aos from "aos";
import "aos/dist/aos.css";
import toast from "react-hot-toast";
import emailjs from "emailjs-com";
import globe from "../../public/images/globe.png";
import Map from "../../public/images/map.png";
import { Toaster } from "react-hot-toast";
import linkedIn from "../../public/svgs/linkedin.svg";
import facebook from "../../public/svgs/facebook.svg";
import whatsapp from "../../public/svgs/whatsapp.svg";
import instagram from "../../public/svgs/insta.svg";

const Contact = () => {
  useEffect(() => {
    Aos.init();
  }, []);

  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");
  const [loading, setLoading] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    setLoading(true);

    const templateParams = {
      from_name: name,
      from_email: email,
      message: message,
    };

    emailjs
      .send(
        "service_rxad6bo",
        "template_7k05gwl",
        templateParams,
        "oeHGqrk9dD181rbnU"
      )
      .then(() => {
        toast.success("Message sent successfully!");
        setName("");
        setEmail("");
        setMessage("");
      })
      .catch(() => {
        toast.error("Failed to send message.");
      })
      .finally(() => {
        setLoading(false);
      });
  };

  return (
    <>
      <Toaster position="top-center" reverseOrder={false} />

      <h1
        className="font-varino mt-10 mb-5 text-[22px] sm:text-[28px] lg:text-[50px] xl:text-[55px] text-center text-white leading-tight"
        data-aos="fade-up"
      >
        CONTACT US
      </h1>

      <section className="relative flex flex-col lg:flex-row items-start pt-16 pb-20 bg-gray-50 text-black w-full">
        {/* Left Section: Email, Phone, and Globe */}
        <div className="flex flex-col items-center lg:items-start lg:w-1/3 px-5 space-y-6 text-center lg:text-left">
          <div className="mt-5">
            <p className="mt-10 ms-8">
              <strong>Contact With Email</strong>
              <br />
              brain.ai@gmail.com
            </p>
            <p className="mt-4 ms-5">
              <strong>Contact On Phone/Whatsapp</strong>
              <br />
              +92 346 3164772
            </p>
          </div>
          <div className="mt-8">
            <img
              src={globe}
              alt="Globe"
              className="w-64 h-64 opacity-70 mt-10"
              style={{
                marginTop: "230px",
                marginLeft: "50px",
              }}
              data-aos="fade-left"
            />
          </div>
        </div>

        {/* Right Section: Map, Social Media, and Form */}
        <div className="flex flex-col items-center lg:w-2/3 px-5 space-y-10 lg:space-y-0 lg:pl-10">
          {/* Map and Address */}
          <div className="flex flex-col items-center lg:items-start space-y-4 text-center lg:text-left">
            <img
              src={Map}
              alt="Map"
              className="w-32 h-32 mb-4"
              style={{ marginLeft: "130px" }}
              data-aos="fade-left"
            />
            <p className="mb-4">
              1st Floor, Brain AI Private Limited, Sarfraz Business & Technology
              <br />
              Park, near Arid University & Shamsabad Metro Station, Shamsabad,
              <br />
              Rawalpindi
            </p>
            <div className="flex items-center space-x-6 mt-10 mb-10 ms-5"
            data-aos="fade-left">
              {/* Social Media Icons */}
              <a href="#" aria-label="LinkedIn">
                <img
                  src={linkedIn}
                  alt="LinkedIn"
                  className="w-10 h-10 ms-10"
                  style={{ filter: "grayscale(100%) brightness(50%)" }}
                />
              </a>
              <a href="#" aria-label="Facebook">
                <img
                  src={facebook}
                  alt="Facebook"
                  className="w-10 h-10"
                  style={{ filter: "grayscale(100%) brightness(50%)" }}
                />
              </a>
              <a href="#" aria-label="WhatsApp">
                <img
                  src={whatsapp}
                  alt="WhatsApp"
                  className="w-10 h-10"
                  style={{ filter: "grayscale(100%) brightness(50%)" }}
                />
              </a>
              <a href="#" aria-label="Instagram">
                <img
                  src={instagram}
                  alt="Instagram"
                  className="w-10 h-10"
                  style={{ filter: "grayscale(100%) brightness(50%)" }}
                />
              </a>
            </div>
          </div>

          {/* Contact Form */}
          <div
            className="bg-white text-black rounded-lg p-8 w-full lg:w-2/3 shadow-md mt-10 border-2 border-black"
            data-aos="fade-left"
            style={{
              marginTop: "40px",
            }}
          >
            <form onSubmit={handleSubmit} className="mt-5">
              <div className="mb-5 ">
                <label htmlFor="name" className="block mb-2 font-semibold">
                  Name
                </label>
                <input
                  id="name"
                  name="name"
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                  type="text"
                  className="w-full p-3 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                  placeholder="Your Name"
                  required
                />
              </div>
              <div className="mb-5">
                <label htmlFor="email" className="block mb-2 font-semibold">
                  Email
                </label>
                <input
                  id="email"
                  name="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  type="email"
                  className="w-full p-3 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                  placeholder="Email Address"
                  required
                />
              </div>
              <div className="mb-5">
                <label htmlFor="message" className="block mb-2 font-semibold">
                  Type Message
                </label>
                <textarea
                  id="message"
                  name="message"
                  value={message}
                  onChange={(e) => setMessage(e.target.value)}
                  rows="4"
                  className="w-full p-3 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                  placeholder="Message"
                  required
                />
              </div>
              <button
                type="submit"
                className={`w-full p-3 rounded-lg text-white font-semibold ${loading ? "bg-gray-400" : "bg-black"} transition duration-300 ease-in-out hover:bg-blue-600`}
                disabled={loading}
              >
                {loading ? "Sending..." : "Submit Message"}
              </button>
            </form>
          </div>
        </div>
      </section>
    </>
  );
};

export default Contact;
