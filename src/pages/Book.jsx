// book.jsx

import React, { useState, useEffect } from "react";
import Aos from "aos";
import "aos/dist/aos.css";
import { AiOutlineUpload } from "react-icons/ai";

// Import SVGs as static assets
import Gradient1 from "../../public/svgs/gradient1.svg";
import Gradient2 from "../../public/svgs/gradient2.svg";
import rightGradient from "../../public/svgs/right.svg";

// Functional component for the job application form
const Book = () => {
  const [fullName, setFullName] = useState("");
  const [email, setEmail] = useState("");
  const [phoneNumber, setPhoneNumber] = useState("");
  const [country, setCountry] = useState("");
  const [projectType, setProjectType] = useState("");
  const [technology, setTechnology] = useState("");
  const [cost, setCost] = useState("");
  const [projectDescription, setProjectDescription] = useState("");
  const [selectedFile, setSelectedFile] = useState(null);
  const [formErrors, setFormErrors] = useState({});
  const [isUploading, setIsUploading] = useState(false);

  useEffect(() => {
    Aos.init();
  }, []);

  const projects = [
    { name: "Select Your Project Type" },
    { name: "Mobile App" },
    { name: "Website" },
    { name: "Both" },
  ];

  const technologies = [
    { name: "Select Your Technology" },
    { name: "Flutter" },
    { name: "Laravel" },
    { name: "Python" },
  ];

  const handleSubmit = (e) => {
    e.preventDefault();
    // Handle form submission logic
  };

  const handleFileSelect = (e) => {
    setSelectedFile(e.target.files[0]);
  };

  const handleRemoveFile = () => {
    setSelectedFile(null);
  };

  return (
    <>
      {/* Background gradients */}
      <div className="absolute right-0 top-0 -z-10">
        <img className="xl:w-full" alt="gradient2" src={Gradient2} />
      </div>
      <div className="absolute left-0 -z-10">
        <img className="xl:w-full" alt="gradient1" src={Gradient1} />
      </div>
      <div className="absolute right-0 top-96">
        <img className="xl:w-full" alt="rightGradient" src={rightGradient} />
      </div>

      {/* Job Application Form Section */}
      <section className="px-5 lg:px-32 py-16 text-center">
        <div className="lg:px-20">
          {/* Header */}
          <h1
            data-aos="fade-up"
            className="font-varino text-[2rem] xl:text-[4rem] text-center"
            style={{
              background: "linear-gradient(to bottom, white, gray)",
              WebkitBackgroundClip: "text",
              color: "transparent",
            }}
          >
            Book a Free Consultation
          </h1>

          {/* Description */}
          <p
            data-aos="fade-up"
            className="text-white text-[1.25rem] font-monosans font-[300] text-center"
          >
            Tell us about your unique requirements, desired features, and any
            specific design elements you have in mind using the form below. We
            will tailor a quote that suits your needs and sets you on the path
            to online success. Let us transform your ideas into a digital
            masterpiece together!
          </p>
        </div>

        {/* Form Inputs */}
        <div className="my-10">
          <form onSubmit={handleSubmit}>
            {/* Input for Full Name */}
            <div
              className="flex flex-col gap-1 justify-start items-start"
              data-aos="fade-up"
            >
              <label
                htmlFor="fullName"
                className="text-center text-white text-xl ms-4 font-normal font-varino capitalize leading-normal"
                style={{
                  background: "linear-gradient(to bottom, white, gray)",
                  WebkitBackgroundClip: "text",
                  color: "transparent",
                }}
              >
                Full Name
              </label>
              <input
                type="text"
                id="fullName"
                value={fullName}
                onChange={(e) => {
                  setFullName(e.target.value);
                }}
                className={`rounded-3xl border text-white border-white justify-start items-center p-[.8rem] w-full  bg-transparent focus:outline-white  focus:border-white ${
                  formErrors.fullName ? "border-red-500" : ""
                }`}
                placeholder="Full Name"
              />
              {formErrors.fullName && (
                <p className="text-red-500">{formErrors.fullName}</p>
              )}
            </div>

            {/* Inputs for Email and Phone */}
            <div className="grid lg:grid-cols-2 my-7 gap-5" data-aos="fade-up">
              <div className="flex flex-col gap-1 justify-start items-start">
                <label
                  htmlFor="email"
                  className="text-center text-white text-xl ms-4 font-normal font-varino capitalize leading-normal"
                  style={{
                    background: "linear-gradient(to bottom, white, gray)",
                    WebkitBackgroundClip: "text",
                    color: "transparent",
                  }}
                >
                  Email
                </label>
                <input
                  type="email"
                  id="email"
                  value={email}
                  onChange={(e) => {
                    setEmail(e.target.value);
                  }}
                  className={`rounded-3xl border text-white border-white justify-start items-center p-[.8rem] w-full  bg-transparent focus:outline-white  focus:border-white ${
                    formErrors.email ? "border-red-500" : ""
                  }`}
                  placeholder="Email Address"
                />
                {formErrors.email && (
                  <p className="text-red-500">{formErrors.email}</p>
                )}
              </div>
              <div className="flex flex-col gap-1 justify-start items-start">
                <label
                  htmlFor="phoneNumber"
                  className="text-center text-white text-xl ms-4 font-normal font-varino capitalize leading-normal"
                  style={{
                    background: "linear-gradient(to bottom, white, gray)",
                    WebkitBackgroundClip: "text",
                    color: "transparent",
                  }}
                >
                  Phone Number
                </label>
                <input
                  type="phone"
                  id="phoneNumber"
                  value={phoneNumber}
                  onChange={(e) => {
                    setPhoneNumber(e.target.value);
                  }}
                  className={`rounded-3xl border text-white border-white justify-start items-center p-[.8rem] w-full  bg-transparent focus:outline-white  focus:border-white ${
                    formErrors.phoneNumber ? "border-red-500" : ""
                  }`}
                  placeholder="Phone Number"
                />
                {formErrors.phoneNumber && (
                  <p className="text-red-500">{formErrors.phoneNumber}</p>
                )}
              </div>
            </div>

            {/* Inputs for Country and Project type */}
            <div className="grid lg:grid-cols-2 my-7 gap-5" data-aos="fade-up">
              <div className="flex flex-col gap-1 justify-start items-start">
                <label
                  htmlFor="country"
                  className="text-center  text-white text-xl ms-4 font-normal font-varino capitalize leading-normal"
                  style={{
                    background: "linear-gradient(to bottom, white, gray)",
                    WebkitBackgroundClip: "text",
                    color: "transparent",
                  }}
                >
                  Country
                </label>
                <input
                  type="text"
                  id="country"
                  value={country}
                  onChange={(e) => {
                    setCountry(e.target.value);
                  }}
                  className={`rounded-3xl text-white border border-white justify-start items-center p-[.8rem] w-full  bg-transparent focus:outline-white  focus:border-white ${
                    formErrors.country ? "border-red-500" : ""
                  }`}
                  placeholder="Country"
                />
                {formErrors.country && (
                  <p className="text-red-500">{formErrors.country}</p>
                )}
              </div>
              <div className="flex flex-col gap-1 justify-start items-start">
                <label
                  htmlFor="projectType"
                  className="text-center text-white text-xl ms-4 font-normal font-varino capitalize leading-normal"
                  style={{
                    background: "linear-gradient(to bottom, white, gray)",
                    WebkitBackgroundClip: "text",
                    color: "transparent",
                  }}
                >
                  Project Type
                </label>
                <select
                  id="projectType"
                  value={projectType}
                  onChange={(e) => {
                    setProjectType(e.target.value);
                  }}
                  className={`rounded-3xl text-white border border-white justify-start items-center p-[.8rem] w-full bg-transparent focus:outline-white  focus:border-white ${
                    formErrors.projectType ? "border-red-500" : ""
                  }`}
                >
                  {projects.map((project) => (
                    <option key={project.name} value={project.name}>
                      {project.name}
                    </option>
                  ))}
                </select>
                {formErrors.projectType && (
                  <p className="text-red-500">{formErrors.projectType}</p>
                )}
              </div>
            </div>

            {/* Inputs for Technology and Cost */}
            <div className="grid lg:grid-cols-2 my-7 gap-5" data-aos="fade-up">
              <div className="flex flex-col gap-1 justify-start items-start">
                <label
                  htmlFor="technology"
                  className="text-center text-white text-xl ms-4 font-normal font-varino capitalize leading-normal"
                  style={{
                    background: "linear-gradient(to bottom, white, gray)",
                    WebkitBackgroundClip: "text",
                    color: "transparent",
                  }}
                >
                  Technology
                </label>
                <select
                  id="technology"
                  value={technology}
                  onChange={(e) => {
                    setTechnology(e.target.value);
                  }}
                  className={`rounded-3xl text-white border border-white justify-start items-center p-[.8rem] w-full bg-transparent focus:outline-white  focus:border-white ${
                    formErrors.technology ? "border-red-500" : ""
                  }`}
                >
                  {technologies.map((tech) => (
                    <option key={tech.name} value={tech.name}>
                      {tech.name}
                    </option>
                  ))}
                </select>
                {formErrors.technology && (
                  <p className="text-red-500">{formErrors.technology}</p>
                )}
              </div>
              <div className="flex flex-col gap-1 justify-start items-start">
                <label
                  htmlFor="cost"
                  className="text-center text-white text-xl ms-4 font-normal font-varino capitalize leading-normal"
                  style={{
                    background: "linear-gradient(to bottom, white, gray)",
                    WebkitBackgroundClip: "text",
                    color: "transparent",
                  }}
                >
                  Cost
                </label>
                <input
                  type="text"
                  id="cost"
                  value={cost}
                  onChange={(e) => {
                    setCost(e.target.value);
                  }}
                  className={`rounded-3xl border text-white border-white justify-start items-center p-[.8rem] w-full  bg-transparent focus:outline-white  focus:border-white ${
                    formErrors.cost ? "border-red-500" : ""
                  }`}
                  placeholder="Estimated Cost"
                />
                {formErrors.cost && (
                  <p className="text-red-500">{formErrors.cost}</p>
                )}
              </div>
            </div>

            {/* Project Description Input */}
            <div className="flex flex-col gap-1 justify-start items-start my-7">
              <label
                htmlFor="projectDescription"
                className="text-center text-white text-xl ms-4 font-normal font-varino capitalize leading-normal"
                style={{
                  background: "linear-gradient(to bottom, white, gray)",
                  WebkitBackgroundClip: "text",
                  color: "transparent",
                }}
              >
                Project Description
              </label>
              <textarea
                id="projectDescription"
                value={projectDescription}
                onChange={(e) => {
                  setProjectDescription(e.target.value);
                }}
                className={`rounded-3xl border text-white border-white justify-start items-center p-[.8rem] w-full  bg-transparent focus:outline-white  focus:border-white ${
                  formErrors.projectDescription ? "border-red-500" : ""
                }`}
                placeholder="Describe your project..."
              />
              {formErrors.projectDescription && (
                <p className="text-red-500">{formErrors.projectDescription}</p>
              )}
            </div>

            {/* File Upload Section */}
            <div className="border-2 border-white border-dashed rounded-xl p-5 text-center cursor-pointer flex flex-col items-center justify-center">
              <p className="text-white mb-2">
                Drag and drop your file here or click the icon to select
              </p>
              <AiOutlineUpload
                size={40}
                className="text-white cursor-pointer"
                onClick={() => document.getElementById("fileInput").click()}
              />
              <input
                type="file"
                id="fileInput"
                onChange={handleFileSelect}
                className="hidden"
              />
              {selectedFile && (
                <div className="relative mt-2">
                  <p className="text-white">{selectedFile.name}</p>
                  <button
                    type="button"
                    className="absolute top-2 right-2"
                    onClick={handleRemoveFile}
                  >
                    <AiOutlineClose className="text-white" size={24} />
                  </button>
                </div>
              )}
            </div>

            {/* Submit Button */}
            <button
              type="submit"
              className="bg-blue-600 text-white py-2 px-4 rounded-xl mt-5 hover:bg-blue-700"
              disabled={isUploading}
            >
              {isUploading ? "Submitting..." : "Submit Application"}
            </button>
          </form>
        </div>
      </section>
    </>
  );
};

export default Book;
