import React, { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import "./styles.css"; // Import styles

// Testimonials Data
const testimonialsData = [
  {
    id: 1,
    username: "John Smith",
    profilePicture: "/images/avatars/Image1.png",
    review:
      "Developing Cross Platform Apps with Flutter & React Native for MAC, windows, Linux, Ipad, iphone, android, watch, tv",
    country: "founder eDEN.ai",
  },
  {
    id: 2,
    username: "John Smith",
    profilePicture: "/images/avatars/Image1.png",
    review:
      "Developing Cross Platform Apps with Flutter & React Native for MAC, windows, Linux, Ipad, iphone, android, watch, tv",
    country: "founder eDEN.ai",
  },
  {
    id: 3,
    username: "John Smith",
    profilePicture: "/images/avatars/Image1.png",
    review:
      "Developing Cross Platform Apps with Flutter & React Native for MAC, windows, Linux, Ipad, iphone, android, watch, tv",
    country: "founder eDEN.ai",
  },
  {
    id: 4,
    username: "John Smith",
    profilePicture: "/images/avatars/Image1.png",
    review:
      "Developing Cross Platform Apps with Flutter & React Native for MAC, windows, Linux, Ipad, iphone, android, watch, tv",
    country: "founder eDEN.ai",
  },
];

// Testimonial Card Component
const TestimonialCard = ({ img, review, username, country }) => {
  return (
    <div className="overflow-hidden scroll-containers flex-none rounded-[40px] bg-gradient-to-b from-white to-gray-600 p-[1.5px] w-[300px] lg:w-[500px] lg:h-[250px] scrollbar-none">
      <div className="h-full flex flex-col justify-around items-center rounded-[38px] p-5 bg-[#111424]">
        <div className="w-full px-2 sm:px-4 xl:px-5">
          <p className="font-monosans text-center text-[14px] sm:text-[16px] text-white">
            {review.substring(0, 80)}
          </p>
        </div>
        <div className="w-full flex justify-center gap-3 items-center mt-4">
          <div>
            <img
              className="w-[60px] h-auto sm:w-[55px] sm:h-[55px] lg:w-[65px] lg:h-[65px] rounded-full mr-3"
              src={img}
              alt={`${username}_profile`}
            />
          </div>
          <div className="flex flex-col justify-center">
            <p
              className="font-monosans text-[14px] sm:text-[18px] xl:text-[18px] text-start capitalize font-light"
              style={{
                background: "linear-gradient(to bottom, white, gray)",
                WebkitBackgroundClip: "text",
                color: "transparent",
              }}
            >
              {username}
            </p>
            <p
              className="font-monosans text-[14px] sm:text-[18px] xl:text-[18px] text-center capitalize font-light"
              style={{
                background: "linear-gradient(to bottom, white, gray)",
                WebkitBackgroundClip: "text",
                color: "transparent",
              }}
            >
              {country}
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

// Testimonial Container Component
const TestimonialContainer = () => {
  return (
    <div className="flex items-center justify-start gap-4 overflow-x-auto w-full mx-auto scrollbar-none">
      {testimonialsData.map((testimonial) => (
        <TestimonialCard
          key={testimonial.id}
          img={testimonial.profilePicture}
          review={testimonial.review}
          username={testimonial.username}
          country={testimonial.country}
        />
      ))}
    </div>
  );
};

// Main Testimonials Component
const Testimonials = () => {
  useEffect(() => {
    AOS.init();
  }, []);

  return (
    <>
      <div className="absolute" style={{ maxWidth: "100%", height: "auto" }}>
        <img
          className="xl:w-full animate-pulse scrollbar-none"
          alt="gradient1"
          src="/svgs/gradient1.svg"
        />
      </div>
      <section className="mb-20 relative flex flex-col items-center space-y-6 pt-[30px] lg:pt-[70px] w-full">
        <div
          className="flex flex-col items-center justify-center space-y-1 mb-6"
          data-aos="fade-up"
        >
          <h1
            data-aos="fade-up"
            className="px-2 sm:px-0 font-varino text-[26px] sm:text-[35px] xl:text-[66px] text-center capitalize"
            style={{
              background: "linear-gradient(to bottom, white, gray)",
              WebkitBackgroundClip: "text",
              color: "transparent",
            }}
          >
            TESTIMONIALS
          </h1>
          <p className="text-[14px] sm:text-[16px] lg:text-[18px] text-center font-monosans text-white font-extralight w-10/12 md:w-8/12 xl:w-8/12">
            Client Voices: See why we are praised for our innovative,
            user-focused technology solutions. Verified testimonies highlight
            our profoundly positive effects.
          </p>
        </div>
        <TestimonialContainer />
      </section>
    </>
  );
};

export default Testimonials;