  import React, { useState } from "react";
  import { FaPhone } from "react-icons/fa6";
  import { FaEnvelope, FaHome, FaInstagram, FaGithub, FaFacebook, FaFacebookF, FaTwitter, FaBehance } from "react-icons/fa";
  import { TiSocialLinkedin } from "react-icons/ti";
  import { BsFillSendExclamationFill } from "react-icons/bs";
  import ak from "../assets/Ricr.webp";
  import an from "../assets/interview.jpg";
  import toast from "react-hot-toast";
  import pic from "../assets/naukari.webp";
  import { FaHeart } from "react-icons/fa6";
  import { AiOutlineGlobal } from "react-icons/ai";

  const Contact = () => {
    const [contactData, setContactData] = useState({
      Fname: "",
      email: "",
      sub: "",
      message: "",
    });

    const [loading, setLoading] = useState(false);
    const [error, setError] = useState({});

    const handleChange = (e) => {
      const { name, value } = e.target;
      setContactData((prev) => ({
        ...prev,
        [name]: value,
      }));
    };

    const Validate = () => {
      let isvalid = true;
      const err = {};

      if (contactData.Fname.length < 3) {
        err.Fname = "Name should be at least 3 Characters";
        isvalid = false;
      }
      if (!/^[A-Za-z ]+$/.test(contactData.Fname)) {
        err.Fname = "Name Should be atleast 3 characters";
        isvalid = false;
      }

      if (
        !/^[A-Za-z0-9._]+@[A-Za-z0-9.-]+\.[A-Za-z]{2,}$/.test(
          contactData.email
        ) ||
        contactData.email.length < 10
      ) {
        err.email = "Enter a valid email like you@gmail.com";
        isvalid = false;
      }

      if (contactData.sub.length < 15) {
        err.sub = "subject should be at least 15 Characters";
        isvalid = false;
      }

      if (contactData.message.length < 25) {
        err.message = "Tell us in brief (at least 25 characters)";
        isvalid = false;
      }

      setError(err);
      return isvalid;
    };

    const handleSubmit = (e) => {
      e.preventDefault();
      setLoading(true);
      setError({});

      if (!Validate()) {
        setLoading(false);
        toast.error(" Please Solve the Errors");
        return;
      }

      setTimeout(() => {
        console.log(contactData);
        setContactData({
          Fname: "",
          email: "",
          sub: "",
          message: "",
        });
        setLoading(false);
        toast.success("We will contact you via mail");
      }, 2000);
    };

    return (
      <form onSubmit={handleSubmit}>
        <div className="bg-gray-900 m-2 md:m-5 rounded-2xl">
          <div className="rounded-xl px-4 md:px-25">
            <h1 className="text-white text-3xl md:text-9xl font-bold text-center relative py-4 md:top-100">
              Contact Us
            </h1>
            <img src={ak} className="w-full h-40 md:h-screen object-cover opacity-20 rounded" alt="" />
          </div>

          <div className="bg-indigo-700 text-white py-6 shadow-md rounded-2xl mx-2 md:mx-0">
            <div className="container mx-auto px-2 md:px-4 text-center hover:scale-105 transition-transform duration-200">
              <h1 className="text-2xl md:text-4xl font-bold rounded-b-3xl hover:text-red-600">
                Get In Touch
              </h1>
              <p className="mt-2 text-base md:text-lg font-bold">
                You can Contact us from here for any diagnosis
              </p>
            </div>
          </div>

          <div className="container mx-auto px-2 md:px-4 py-6 md:py-12 max-w-full md:max-w-4xl">
            <div className="bg-white rounded-lg shadow-lg p-4 md:p-8 flex flex-col md:flex-row md:space-x-10">
              <div className="md:w-1/2 mb-6 md:mb-0 flex flex-col items-center">
                <img src={an} className="w-full max-w-xs md:w-200 rounded mb-4" alt="" />
                <h2 className="text-2xl md:text-3xl font-bold text-indigo-600 mb-6 text-center">
                  Contact Info
                </h2>

                <div className="flex items-center mb-4">
                  <FaHome className="text-xl" />
                  <a
                    href="https://maps.app.goo.gl/Q3ZyDaUuyoyksD8AA"
                    className="ps-2 text-base md:text-lg hover:underline hover:text-red-600"
                  >
                    Fateh Road, Churhat , Distt. Sidhi, <br /> (Madhya Pradesh).
                  </a>
                </div>

                <div className="flex items-center mb-4">
                  <FaEnvelope />
                  <a
                    href="mailto:arpitgupta0406@gmail.com"
                    className="ps-2 text-base md:text-lg hover:underline hover:text-red-600"
                  >
                    arpitgupta0406@gmail.com
                  </a>
                </div>

                <div className="flex items-center mb-8">
                  <FaPhone />
                  <a
                    href="tel:+919516010142"
                    className="ps-1 text-base md:text-lg hover:underline hover:text-red-600"
                  >
                    +91 9516010142
                  </a>
                </div>

                <span className="text-xl md:text-2xl font-semibold">Follow Me</span>
                <div className="flex space-x-4 md:space-x-6 text-2xl md:text-3xl text-indigo-600 mt-5">
                  <a href="https://www.linkedin.com/feed/" target="_blank" rel="noopener noreferrer">
                    <TiSocialLinkedin className="hover:text-red-600" />
                  </a>
                  <a
                    href="https://www.instagram.com/anokha_arpit/?hl=en"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <FaInstagram className="hover:text-red-600" />
                  </a>
                  <a href="https://github.com/arpit168" target="_blank" rel="noopener noreferrer">
                    <FaGithub className="hover:text-red-600" />
                  </a>
                  <a
                    href="https://www.facebook.com/arpit.gupta.170169"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <FaFacebook className="hover:text-red-600" />
                  </a>
                </div>
              </div>

              <div className="md:w-1/2 bg-indigo-50 rounded-lg p-4 md:p-6 shadow-inner mt-6 md:mt-0">
                <h2 className="text-2xl md:text-3xl font-bold text-indigo-600 mb-6">
                  Send Me a Message
                </h2>

                <label
                  htmlFor="Fname"
                  className="block mb-2 font-semibold text-gray-700"
                >
                  Name*
                </label>
                <input
                  type="text"
                  id="Fname"
                  name="Fname"
                  value={contactData.Fname}
                  onChange={handleChange}
                  placeholder="Your Name"
                  required
                  className="w-full mb-4 px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-indigo-400"
                />
                {error.Fname && (
                  <p className="text-center text-red-500 text-sm">
                    {error.Fname}
                  </p>
                )}

                <label
                  htmlFor="email"
                  className="block mb-2 font-semibold text-gray-700"
                >
                  Email*
                </label>
                <input
                  type="email"
                  name="email"
                  id="email"
                  placeholder="You@email.com"
                  required
                  value={contactData.email}
                  onChange={handleChange}
                  className="w-full mb-4 px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-indigo-400"
                />
                {error.email && (
                  <p className="text-center text-red-500 text-sm">
                    {error.email}
                  </p>
                )}

                <label
                  htmlFor="sub"
                  className="block mb-2 font-semibold text-gray-700"
                >
                  Subject
                </label>
                <input
                  type="text"
                  id="sub"
                  name="sub"
                  placeholder="Enter Forwhat You want to Contact Us"
                  required
                  value={contactData.sub}
                  onChange={handleChange}
                  className="w-full mb-4 px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-indigo-400"
                />
                {error.sub && (
                  <p className="text-center text-red-500 text-sm">{error.sub}</p>
                )}

                <label
                  htmlFor="message"
                  className="block mb-2 font-semibold text-gray-700"
                >
                  Message
                </label>
                <textarea
                  id="message"
                  name="message"
                  rows="4"
                  placeholder="Write your message here..."
                  required
                  value={contactData.message}
                  onChange={handleChange}
                  className="w-full mb-6 px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-indigo-400"
                ></textarea>
                {error.message && (
                  <p className="text-center text-red-500 text-sm">
                    {error.message}
                  </p>
                )}

                <button
                  type="submit"
                  className="w-full bg-indigo-700 hover:bg-indigo-800 text-white font-semibold py-3 rounded-md transition"
                >
                  {loading ? "Sending..." : "Send Your Query"}
                </button>
              </div>
            </div>
          </div>

          <footer className="bg-black py-8">
            <form>
              <div className="text-white flex flex-col md:flex-row gap-8 md:gap-25 pt-8 px-4 md:px-25">
                <div className="mb-6 md:mb-0">
                  <h1 className="font-bold text-xl md:text-2xl hover:text-red-600 hover:scale-105 transition-transform duration-200 ">
                    ABOUT US
                  </h1>
                  <br />
                  <span>
                    "Heaven’s blessings don’t <br />
                    miss even the smallest days <br /> — everything grows in its
                    time, <br /> so look and see."
                  </span>
                </div>
                <div className="mb-6 md:mb-0">
                  <h1 className="font-bold text-xl md:text-2xl hover:text-red-600 hover:scale-105 transition-transform duration-200">
                    CONTACT INFO
                  </h1>
                  <br />
                  <span>
                    <span>
                      Address : Fateh road churhat Sidhi (Madhya pradesh).
                    </span>
                    <br />
                    <span className="hover:text-red-600">
                      Phone : +91 9516****42
                    </span>
                    <br />
                    <span className="hover:text-red-600">
                      Email : arpit****@gmail.com
                    </span>
                  </span>
                </div>

                <div className="mb-6 md:mb-0">
                  <h1 className="font-bold text-xl md:text-2xl hover:text-red-600 hover:scale-105 transition-transform duration-200">
                    IMPORTANT LINK
                  </h1>
                  <br />
                  <span>
                    <span className="hover:text-red-600">View Project </span>
                    <br />
                    <span className="hover:text-red-600">Contact Us </span>
                    <br />
                    <span className="hover:text-red-600">Testimonial</span>
                    <br />
                    <span className="hover:text-red-600">Proparties </span>
                    <br />
                    <span className="hover:text-red-600">Support</span>
                  </span>
                </div>

                <div>
                  <h1 className="font-bold text-xl md:text-2xl hover:text-red-600 hover:scale-105 transition-transform duration-200">
                    NEW SELLER
                  </h1>
                  <br />
                  <span>
                    Heaven’s blessings don’t miss <br /> even the smallest days.
                    appear creeping.
                  </span>
                  <br /> <br />
                  <span className="flex flex-col md:flex-row items-center gap-2">
                    <label
                      htmlFor="email"
                      className="block mb-2 font-semibold text-gray-700"
                    >
                      Email*
                    </label>
                    <input
                      type="email"
                      name="email"
                      id="email"
                      placeholder="You@email.com"
                      required
                      value={contactData.email}
                      onChange={handleChange}
                      className="p-1 rounded w-full md:w-50 bg-white text-black"
                    />
                    {error.email && (
                      <p className="text-center text-red-500 text-sm">
                        {error.email}
                      </p>
                    )}
                    <button className="text-2xl text-indigo-950 border-2 bg-white px-2 py-1 rounded">
                      <BsFillSendExclamationFill />
                    </button>
                  </span>
                </div>
              </div>

              <div className="mt-8 md:mt-30 text-white flex flex-col md:flex-row gap-8 md:gap-35 pb-6 md:pb-15 ms-0 md:ms-20 mx-0 md:mx-30 border-b border-gray-700"></div>
                <span className="flex gap-5 items-center">
                  <img src={pic} alt="" className="rounded-4xl h-10" />
                  <h3>
                    <span className="text-xl md:text-2xl font-bold"> Naukari-Pao </span>
                    <br />
                    <span className="text-gray-400 font-extralight border-b">
                      <i>Pao Sapno ki naukari</i>
                    </span>
                  </h3>
                </span>
                <span className="text-lg md:text-xl">
                  <span className="text-xl md:text-3xl">5000+</span> Talented Hunter
                </span>
                <span className="text-lg md:text-xl">
                  <span className="text-xl md:text-3xl">451</span> Talented Hunter
                </span>
                <span className="text-lg md:text-xl">
                  <span className="text-xl md:text-3xl">568</span> Talented Hunter
                </span>
              

              <div className="flex flex-col md:flex-row justify-between text-gray-500 mx-0 md:mx-30 pb-4 md:pb-10">
                <span className="flex gap-2 mt-4 md:mt-10 items-center">
                  Copyright ©2025 All rights reserved | This template is made with{" "}
                  <FaHeart className="text-red-800 mt-1 text-xl" /> by{" "}
                  <i>Arpit Gupta</i>
                </span>
                <span className="flex gap-5 text-xl md:text-2xl mt-4 md:mt-10">
                  <a href="www.facebook.in">
                    <FaFacebookF className="hover:text-red-700" />
                  </a>
                  <a href="">
                    <FaTwitter className="hover:text-red-700" />
                  </a>
                  <a href="">
                    <AiOutlineGlobal className="hover:text-red-700" />
                  </a>
                  <a href="">
                    <FaBehance className="hover:text-red-700" />
                  </a>
                </span>
              </div>
            </form>
          </footer>
        </div>
      </form>
    );
  };

  export default Contact;
