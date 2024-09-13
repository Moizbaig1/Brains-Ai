import React, { useState, useEffect } from "react";
import Aos from "aos";
import "aos/dist/aos.css";

// Import images
import gradient1 from "../../public/svgs/gradient1.svg";
import linkedIn from "../../public/svgs/linkedin.svg";
import facebook from "../../public/svgs/facebook.svg";
import whatsapp from "../../public/svgs/whatsapp.svg";
import instagram from "../../public/svgs/insta.svg";
import map from "../../public/images/map.png";
import purpleGradient from "../../public/svgs/purpleGradient.svg";
import topRight from "../../public/svgs/topRight.svg";

const Contact = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");

  useEffect(() => {
    Aos.init();
  }, []);

  const handleSubmit = (e) => {
    e.preventDefault();
    alert("Message submitted!");
    // Handle form submission logic here
  };

  return (
    <>
      <div>
        <img
          src={gradient1}
          alt="gradient"
          className="absolute top-[10rem] animate-pulse"
        />
      </div>
      <div>
        <img
          src={topRight}
          alt="gradient"
          className="absolute right-0 top-0 -z-10 animate-pulse"
        />
      </div>
      <section className="relative xl:mx-20 mx-auto my-16 lg:my-20">
        <h1
          data-aos="fade-up"
          className="font-varino text-[35px] xl:text-[66px] text-center"
          style={{
            background: "linear-gradient(to bottom, white, gray)",
            WebkitBackgroundClip: "text",
            color: "transparent",
          }}
        >
          Contact Us
        </h1>

        <div className="grid lg:grid-cols-2 my-10">
          <div className="flex flex-col justify-center p-4 gap-5">
            <div>
              <p
                data-aos="fade-up"
                className="text-gray-300 font-monosans capitalize"
              >
                Contact with email
              </p>
              <p
                data-aos="fade-up"
                className="text-white font-[500] text-[1.5rem] font-monosans"
              >
                info@deep-ai.us
              </p>
            </div>
            <div>
              <p
                data-aos="fade-up"
                className="text-gray-300 font-monosans capitalize"
              >
                Contact on phone/whatsapp
              </p>
              <p
                data-aos="fade-up"
                className="text-white font-[500] text-[1.5rem] font-monosans"
              >
                +92 304 8181449
              </p>
            </div>
          </div>

          <div className="flex flex-col gap-10 justify-center items-center p-3">
            <img src={map} alt="locator" data-aos="fade-up" />

            <p
              data-aos="fade-up"
              className="text-white font-[500] text-[1.125rem] font-monosans text-center"
            >
              1st Floor, Deep Ai Private Limited, Sarfraz Business & Technology
              park, near Arid University & Shamsabad Metro Station, Shamsabad,
              Rawalpindi
            </p>

            <div
              data-aos="fade-up"
              className="justify-start items-start gap-5 flex"
            >
              <a
                href="https://www.linkedin.com/company/alright-tech/"
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 relative bg-sky-500 rounded-[30px]"
              >
                <img src={linkedIn} alt="linkedin" />
              </a>
              <a
                href="https://www.facebook.com/AlrightTech?mibextid=eHce3h"
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 relative bg-sky-500 rounded-[30px]"
              >
                <img src={facebook} alt="facebook" />
              </a>
              <a
                href="https://api.whatsapp.com/send?phone=923463164772"
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 relative bg-sky-500 rounded-[30px]"
              >
                <img src={whatsapp} alt="whatsapp" />
              </a>
              <a
                href="https://www.instagram.com/alrighttech?igsh=ODA1NTc5OTg5Nw=="
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 relative bg-sky-500 rounded-[30px]"
              >
                <img src={instagram} alt="instagram" />
              </a>
            </div>
          </div>
        </div>

        {/* Get Quick Quote Section */}
        <div className="grid lg:grid-cols-2 my-10">
          <div className="flex justify-center items-center">
            <p
              data-aos="fade-up"
              className="font-varino text-[2rem] text-center"
              style={{
                background: "linear-gradient(to bottom, white, gray)",
                WebkitBackgroundClip: "text",
                color: "transparent",
              }}
            >
              Get a quick <br /> quote!
            </p>
          </div>
          <div className="p-5">
            <div className="relative flex flex-col gap-20 py-10 px-5 rounded-3xl border-4 border-pink-400">
              {/* Gradient */}
              <div className="absolute">
                <img
                  data-aos="fade-up"
                  className="xl:w-full -z-10 animate-pulse"
                  alt="purple gradient"
                  src={purpleGradient}
                />
              </div>
              {/* Input fields */}
              <div className="flex flex-col gap-5 z-20">
                {/* Input field for name */}
                <div
                  className="flex flex-col gap-1 justify-start items-start"
                  data-aos="fade-up"
                >
                  <label
                    htmlFor="name"
                    className="text-center text-white text-lg font-normal font-varino capitalize leading-normal"
                    style={{
                      background: "linear-gradient(to bottom, white, gray)",
                      WebkitBackgroundClip: "text",
                      color: "transparent",
                    }}
                  >
                    Name
                  </label>
                  <input
                    id="name"
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                    type="text"
                    className="rounded-3xl border border-white p-[.7rem] w-full bg-transparent text-white focus:border-white focus:outline-none"
                    placeholder="Your Name"
                  />
                </div>
                {/* Input field for Email */}
                <div
                  className="flex flex-col gap-1 justify-start items-start"
                  data-aos="fade-up"
                >
                  <label
                    htmlFor="email"
                    className="text-center text-white text-lg font-normal font-varino capitalize leading-normal"
                    style={{
                      background: "linear-gradient(to bottom, white, gray)",
                      WebkitBackgroundClip: "text",
                      color: "transparent",
                    }}
                  >
                    Email
                  </label>
                  <input
                    id="email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    type="email"
                    className="rounded-3xl border border-white p-[.7rem] w-full bg-transparent focus:border-white focus:outline-none text-white"
                    placeholder="Email Address"
                  />
                </div>
                {/* Input field for Message */}
                <div
                  className="flex flex-col gap-1 justify-start items-start"
                  data-aos="fade-up"
                >
                  <label
                    htmlFor="message"
                    className="text-center text-white text-lg font-normal font-varino capitalize leading-normal"
                    style={{
                      background: "linear-gradient(to bottom, white, gray)",
                      WebkitBackgroundClip: "text",
                      color: "transparent",
                    }}
                  >
                    Message
                  </label>
                  <textarea
                    id="message"
                    value={message}
                    onChange={(e) => setMessage(e.target.value)}
                    rows={5}
                    className="rounded-3xl border border-white p-[.7rem] w-full bg-transparent focus:border-white focus:outline-none text-white"
                    placeholder="Message"
                  />
                </div>
              </div>
              <button
                data-aos="fade-up"
                onClick={handleSubmit}
                className="text-white text-lg font-medium font-monosans capitalize px-6 py-3 bg-sky-500 rounded-[90px] inline-flex cursor-pointer"
              >
                Submit Message
              </button>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Contact;
