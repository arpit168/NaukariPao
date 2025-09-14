import React from "react";
import anokha from "../assets/anokha.png";
import { MdInput } from "react-icons/md";
import { FaUserAstronaut } from "react-icons/fa";
import { LuComputer } from "react-icons/lu";
import { SiCoinmarketcap } from "react-icons/si";
import { TbDeviceMobileCog } from "react-icons/tb";
import { LuConstruction } from "react-icons/lu";
import { GiProcessor } from "react-icons/gi";
import { MdOutlineMapsHomeWork } from "react-icons/md";
import { SlNote } from "react-icons/sl";
import ak from "../assets/Ricr.webp";
import aa from "../assets/elisa.png";
import ab from "../assets/rostel.png";
import ac from "../assets/veolia.png";
import ad from "../assets/zggo.png";
import { IoLocationSharp } from "react-icons/io5";
import { MdOutlineContentPasteSearch } from "react-icons/md";
import { PiUserCirclePlusBold } from "react-icons/pi";
import { GrUserWorker } from "react-icons/gr";
import za from "../assets/snap.jpg";
import bb from "../assets/snap.jpg";
import img1 from "../assets/view.jpg";
import img2 from "../assets/view1.jpg";
import { FaChevronRight } from "react-icons/fa";
import { BsFillSendExclamationFill } from "react-icons/bs";
import pic from "../assets/naukari.webp";
import { FaHeart } from "react-icons/fa6";
import { FaFacebookF } from "react-icons/fa";
import { FaTwitter } from "react-icons/fa";
import { AiOutlineGlobal } from "react-icons/ai";
import { FaBehance } from "react-icons/fa";

const Home = () => {
  return (
    <div className="w-full">
      <div className="rounded-2xl px-4 md:px-20">
        <h1 className="text-white text-4xl md:text-9xl font-bold text-center relative md:top-100">
          <span className="text-pink-800 animate-pulse">WELCOME </span>TO HOME
        </h1>
        <img
          src={ak}
          className="w-full h-64 md:h-screen object-cover opacity-20"
          alt=""
        />
      </div>
      <div className="flex flex-col md:flex-row justify-around m-5  rounded text-2xl h-auto md:h-[38rem] bg-gradient-to-r from-gray-700 to-red-800 text-white">
        <div className="pt-10 md:pt-30 ps-20  flex-1">
          <h1 className="text-4xl md:text-6xl font-bold mb-6 md:mb-15">
            <span className="text-4xl md:text-7xl font-bold text-pink-600 overflow-hidden animate-bounce inline-block border-b-4">
              Find
            </span>{" "}
            the <br /> most exciting <br /> startup Jobs.
          </h1>
          <span className="border p-2 md:p-5 rounded bg-white flex flex-col md:flex-row gap-2 md:gap-0">
            <input
              type="text"
              placeholder="Job title or Keywords"
              className="text-black border-r focus:ring-0 outline-0 flex-1"
            />
            <input
              type="text"
              placeholder="Location BD"
              className="text-black ms-0 md:ms-2 focus:ring-0 outline-0 flex-1"
            />
          </span>
          <button className="bg-pink-700 p-3 md:p-5 rounded font-bold hover:text-gray-400 mt-4 md:mt-0">
            Find Job
          </button>
        </div>
        <div className="flex-1 flex justify-center items-center">
          <img src={anokha} alt="" className=" md:w-90 relative md:top-6" />
        </div>
      </div>
      {/* Categories Section */}
      <div className="bg-gray-900 h-auto w-full md:w-[94rem] mx-2 md:mx-5 border-t rounded">
        <div className="text-center">
          <h3 className="text-red-600 text-xl p-6 md:p-30 font-bold pb-4 md:pb-15">
            FEATURED TOURS PACKAGES
          </h3>
          <h1 className="text-gray-300 text-3xl md:text-7xl">
            <span className="text-pink-500 animate-pulse">Browse</span> Top
            Categories
          </h1>
        </div>
        <div className="mt-8 md:mt-20">
          <div className="gap-4 md:gap-10 text-center justify-center flex flex-wrap text-white">
            <span className="text-xl md:text-2xl p-4 md:p-10 bg-gray-900 hover:bg-gray-950 hover:scale-105 duration-400 hover:text-pink-500 rounded-xl w-40 md:w-auto">
              <FaUserAstronaut className="mx-auto text-3xl md:text-4xl" />
              <h5 className="my-2">Design & Creative</h5>
              <span className="text-pink-600">(653)</span>
            </span>
            <span className="text-xl md:text-2xl p-4 md:p-10 bg-gray-900 hover:bg-gray-950 hover:scale-105 duration-400 hover:text-pink-500 rounded-xl w-40 md:w-auto">
              <LuComputer className="mx-auto text-3xl md:text-4xl" />
              <h5>Design & Developement</h5>
              <span className="text-pink-600">(651)</span>
            </span>
            <span className="text-xl md:text-2xl p-4 md:p-10 bg-gray-900 hover:bg-gray-950 hover:scale-105 duration-400 hover:text-pink-500 rounded-xl w-40 md:w-auto">
              <SiCoinmarketcap className="mx-auto text-3xl md:text-4xl" />
              <h5>Sales and Marketing</h5>
              <span className="text-pink-600">(652)</span>
            </span>
            <span className="text-xl md:text-2xl p-4 md:p-10 bg-gray-900 hover:bg-gray-950 hover:scale-105 duration-400 hover:text-pink-500 rounded-xl w-40 md:w-auto">
              <TbDeviceMobileCog className="mx-auto text-3xl md:text-4xl" />
              <h5>Mobile Application</h5>
              <span className="text-pink-600">(654)</span>
            </span>
          </div>
        </div>
        <div className="mt-8 md:mt-20 pb-10">
          <div className="gap-4 md:gap-10 text-center justify-center flex flex-wrap text-white">
            <span className="text-xl md:text-2xl p-4 md:p-10 px-6 md:px-15 bg-gray-900 hover:scale-105 duration-400 hover:bg-gray-950 hover:text-pink-500 rounded-xl w-40 md:w-auto">
              <LuConstruction className="mx-auto text-3xl md:text-4xl" />
              <h5 className="my-2">Construction</h5>
              <span className="text-pink-600">(653)</span>
            </span>
            <span className="text-xl md:text-2xl p-4 md:p-10 bg-gray-900 hover:bg-gray-950 hover:scale-105 duration-400 hover:text-pink-500 rounded-xl w-40 md:w-auto">
              <GiProcessor className="mx-auto text-3xl md:text-4xl" />
              <h5>Information Technology</h5>
              <span className="text-pink-600">(651)</span>
            </span>
            <span className="text-xl md:text-2xl p-4 md:p-10 px-6 md:px-20 bg-gray-900 hover:scale-105 duration-400  hover:bg-gray-950 hover:text-pink-500 rounded-xl w-40 md:w-auto">
              <MdOutlineMapsHomeWork className="mx-auto text-3xl md:text-4xl" />
              <h5>Real Estate</h5>
              <span className="text-pink-600">(652)</span>
            </span>
            <span className="text-xl md:text-2xl p-4 md:p-10 px-6 md:px-20 bg-gray-900 hover:scale-105 duration-400 hover:bg-gray-950 hover:text-pink-500 rounded-xl w-40 md:w-auto">
              <SlNote className="mx-auto text-3xl md:text-4xl" />
              <h5>Content Writer</h5>
              <span className="text-pink-600">(654)</span>
            </span>
          </div>
          <button className="block mx-auto mt-6 md:ms-150 p-3 mb-6 md:mb-25 font-bold border text-xl md:text-2xl text-gray-500 rounded hover:bg-pink-700 hover:text-white duration-200">
            BROWSE ALL SELECTORS
          </button>
        </div>
      </div>
      {/* Resume Section */}
      <div className="h-auto md:h-100 pt-10 md:my-10  md:pt-30 mx-2 md:mx-5 opacity-50 text-center bg-center bg-cover rounded bg-[url('./inter.avif')]">
        <h3 className="text-xl md:text-2xl pb-4 md:pb-10 text-red-600">
          FEATURED TOURS PACKAGES
        </h3>
        <h1 className="text-3xl md:text-6xl pb-4 md:pb-10 text-indigo-800">
          Make a Difference With Your Online Resume!
        </h1>
        <button className="border p-2 md:p-4 px-4 md:px-8 rounded bg text-red-700 hover:scale-bg-x-0 scale-y hover:text-white hover:border-0 hover:bg-red-700 hover:scale-110 transition-all duration-500">
          UPLODED YOUR CV
        </button>
      </div>
      {/* Featured Jobs Section */}
      <div>
        <div className="text-white bg-gradient-to-r bg-red-800 to-gray-800 h-auto pb-10 pt-10 md:pt-40 mx-2 md:mx-5 rounded">
          <h3 className="text-center text-xl mb-4 md:mb-10">Recent Jobs</h3>
          <h1 className="text-center text-3xl md:text-6xl font-bold">
            Featured Jobs
          </h1>
          {/* Featured Job Cards */}
          {[aa, ab, ac, ad].map((img, idx) => (
            <div
              key={idx}
              className="flex flex-col md:flex-row items-center mt-5 md:mt-25 md:ms-65 rounded-2xl hover:scale-102 duration-200 bg-gray-900 hover:bg-gray-950 w-full md:w-[61rem] py-6 md:py-10 px-3 md:px-5 mb-4"
            >
              <img src={img} width={100} alt="" />
              <div className="m-2 w-full">
                <div className="grid">
                  <div className="flex flex-col md:flex-row gap-4 md:gap-90">
                    <h1 className="text-xl md:text-3xl hover:text-red-500 w-full md:w-75">
                      Digital Marketer
                    </h1>
                    <button className="border px-3 w-full md:w-25 py-2 rounded-4xl text-gray-500 hover:bg-indigo-700 hover:text-black mt-2 md:mt-0">
                      Full TIme
                    </button>
                  </div>
                  <div className="flex flex-col md:flex-row gap-2 md:gap-15 mt-2 text-gray-400">
                    <span>Creative agency</span>
                    <span className="flex">
                      <IoLocationSharp className="mt-1" /> Rewa, Madhya Pradesh
                    </span>
                    <span>₹45k -₹55k</span>
                  </div>
                  <span className="text-white text-right me-0 md:me-10 font-bold mt-2 md:mt-0">
                    7 hours ago
                  </span>
                </div>
              </div>
            </div>
          ))}
        </div>
        {/* How it works Section */}
        <div className="bg-cover bg-center text-center h-auto md:h-screen w-full md:w-[92rem] mt-10 text-white pt-10 md:pt-30 bg-[url('/blue.jpg')] bg-no-repeat object">
          <div className="text-center">
            <h3 className="text-red-600 text-xl md:text-2xl font-bold">
              APPLY PROCESS
            </h3>
            <h1 className="font-bold text-3xl md:text-6xl">How it works</h1>
          </div>
          <div className="flex flex-col md:flex-row justify-around my-8 md:my-20 gap-6 md:gap-0">
            <div className="card w-full md:w-100 h-100 border p-6 md:p-10 rounded-2xl bg-gray-950 hover:scale-103 transition-all duration-700 mb-4 md:mb-0">
              <span className="flex items-center justify-center text-6xl md:text-8xl transition-transform duration-500  hover:[transform:rotateY(180deg)_translateX(20px)]">
                <MdOutlineContentPasteSearch />
              </span>
              <h3 className="text-xl md:text-3xl font-bold m-3">
                1.Search a Job
              </h3>
              <p>
                Lorem, ipsum dolor sit amet consectetur adipisicing elit. Qui
                excepturi possimus eius laborum ipsa veritatis sed obcaecati a!
                Voluptatum, quas.
              </p>
            </div>
            <div className="card w-full md:w-100 h-100 border p-6 md:p-10 rounded-2xl bg-gray-950 hover:scale-103 transition-all duration-700 mb-4 md:mb-0">
              <span className="flex items-center justify-center text-6xl md:text-8xl transition-transform duration-500 hover:[transform:rotateY(180deg)_translateX(20px)]">
                <PiUserCirclePlusBold />
              </span>
              <h3 className="text-xl md:text-3xl font-bold m-3">
                2.Apply for Job
              </h3>
              <p>
                Lorem, ipsum dolor sit amet consectetur adipisicing elit. Qui
                excepturi possimus eius laborum ipsa veritatis sed obcaecati a!
                Voluptatum, quas.
              </p>
            </div>
            <div className="card w-full md:w-100 h-100 border p-6 md:p-10 rounded-2xl bg-gray-950 hover:scale-103 transition-all duration-700">
              <span className="flex items-center justify-center text-6xl md:text-8xl transition-transform duration-500 hover:[transform:rotateY(180deg)_translateX(20px)]">
                <GrUserWorker />
              </span>
              <h3 className="text-xl md:text-3xl font-bold m-3">
                3. Get your Job
              </h3>
              <p>
                Lorem, ipsum dolor sit amet consectetur adipisicing elit. Qui
                excepturi possimus eius laborum ipsa veritatis sed obcaecati a!
                Voluptatum, quas.
              </p>
            </div>
          </div>
        </div>
        {/* Testimonial Section */}
        <div className="w-full md:w-[94rem] pt-10 md:pt-20 h-auto md:h-150 text-center md:ps-115 rounded-2xl bg-gray-700">
          <div className="w-full md:w-150 flex flex-col items-center">
            <img
              src={za}
              className="w-24 md:w-50 h-24 md:h-50 rounded-full object-cover overflow-hidden mb-5 hover:scale-115 transition-transform duration-700"
              alt=""
            />
            <div className="text-white">
              <h3 className="text-2xl md:text-5xl font-bold">Arpit Gupta</h3>
              <h5 className="text-lg md:text-2xl m-5">Creative Designer</h5>
              <p>
                <i>
                  " I am at an age Where I just want to be fit and healthy our
                  bodies are Our responsability! So start caring for your body
                  and it will care for you. Eat clean it eill care for you and
                  workout hard. "
                </i>
              </p>
            </div>
          </div>
        </div>
        {/* What we are doing Section */}
        <div className="w-full md:w-300 h-auto md:h-150 border-2 m-4 md:m-30 rounded inline-flex flex-col md:flex-row bg-gray-800">
          <div className="p-6 md:p-20 flex-1">
            <h4 className="text-red-500">WHAT WE ARE DOING</h4> <br />
            <h1 className="text-2xl md:text-4xl font-bold">
              24k Talanted peoples are getting Jobs
            </h1>
            <br />
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Ex
              similique, labore dolorum ducimus enim eveniet atque molestias
              numquam, reprehenderit eaque nostrum. Distinctio odit temporibus
              dolorum eveniet est quos hic perspiciatis porro reprehenderit!
              Aspernatur voluptate velit ipsa ut odit, quidem excepturi?
            </p>
            <br />
            <p>
              Lorem ipsum dolor sit amet, consectetur adipisicing elit. Deserunt
              nesciunt rerum, enim voluptatum error veniam magni est recusandae,
              fugiat a, qui repellendus ex porro modi nulla possimus ut? Magnam
              quae tempore inventore corrupti dolor accusantium quo aspernatur
              perferendis, laudantium similique non quasi eos cum earum est vel
              sapiente quis. Nihil.
            </p>
            <button className="bg-red-600 font-bold my-2 px-5 py-3 hover:bg-red-900 hover:scale-105 rounded">
              Post a Job
            </button>
            <div className="relative text-center mt-6 md:left-[31vw] md:bottom-[18.5vh] h-[100px] md:h-[150px] w-[120px] md:w-[200px] bg-blue-900 rounded">
              <span className="text-2xl md:text-4xl">Since</span> <br />
              <span className="font-bold text-4xl md:text-7xl">2025</span>
            </div>
          </div>
          <div className="flex-1">
            <img
              src={bb}
              className="w-full md:w-700 h-32 md:h-150 object-cover"
              alt=""
            />
          </div>
        </div>
        {/* Blog Section */}
        <div className="bg-gray-400 w-full md:w-[94rem] h-auto md:h-250 pt-6 md:pt-15 text-white rounded-2xl">
          <div className="text-center">
            <h3 className="text-xl mb-2 md:mb-5 text-red-700 font-bold">
              OUR LATEST BLOG
            </h3>
            <h1 className="text-3xl md:text-6xl font-bold text-gray-900">
              Our recent news
            </h1>
          </div>
          <div className="flex flex-col md:flex-row mt-8 md:mt-20 mx-2 md:mx-30 p-2 md:p-5 gap-4 md:gap-5">
            <div className="bg-white p-4 md:p-5 rounded flex-1 mb-4 md:mb-0">
              <img src={img1} className="w-full md:w-150 rounded" alt="" />
              <h3 className="text-gray-800">!Properties</h3>
              <h3 className="text-gray-600 text-xl md:text-3xl font-bold py-2">
                Footprints in Time is perfect House in Kurashiki
              </h3>
              <h5 className="text-gray-400 flex">
                Read More{" "}
                <span className="mt-1 flex gap-0">
                  <FaChevronRight />
                  <FaChevronRight />
                </span>
              </h5>
            </div>
            <div className="bg-white p-4 md:p-5 rounded flex-1">
              <img src={img2} className="w-full md:w-150 rounded" alt="" />
              <h3 className="text-gray-800">!Properties</h3>
              <h3 className="text-gray-600 text-xl md:text-3xl font-bold py-2">
                Footprints in Time is perfect House in Kurashiki
              </h3>
              <h5 className="text-gray-400 flex">
                Read More{" "}
                <span className="mt-1 flex gap-0">
                  <FaChevronRight />
                  <FaChevronRight />
                </span>
              </h5>
            </div>
          </div>
        </div>
        {/* Footer */}
        <footer className="bg-black py-10 px-4 md:px-30">
          <form>
            <div className="text-white flex flex-col md:flex-row gap-8 md:gap-20">
              <div>
                <h1 className="font-bold text-xl md:text-2xl hover:text-red-600 hover:scale-110 transition-transform duration-200">
                  ABOUT US
                </h1>
                <p className="mt-2 text-gray-300">
                  Heaven’s blessings don’t <br />
                  miss even the smallest days <br />
                  — everything grows in <br /> its time, so look and see.
                </p>
              </div>
              <div>
                <h1 className="font-bold text-xl md:text-2xl hover:text-red-600 hover:scale-110 transition-transform duration-200">
                  CONTACT INFO
                </h1>
                <p className="mt-2 text-gray-300">
                  Address : Fateh road churhat Sidhi (Madhya Pradesh).
                  <br />
                  <span className="hover:text-red-600">
                    Phone : +91 9516****42
                  </span>
                  <br />
                  <span className="hover:text-red-600">
                    Email : arpit****@gmail.com
                  </span>
                </p>
              </div>
              <div>
                <h1 className="font-bold text-xl md:text-2xl hover:text-red-600 hover:scale-110 transition-transform duration-200">
                  IMPORTANT LINK
                </h1>
                <ul className="mt-2 space-y-1">
                  <li className="hover:text-red-600">View Project</li>
                  <li className="hover:text-red-600">Contact Us</li>
                  <li className="hover:text-red-600">Testimonial</li>
                  <li className="hover:text-red-600">Properties</li>
                  <li className="hover:text-red-600">Support</li>
                </ul>
              </div>
              <div>
                <h1 className="font-bold text-xl md:text-2xl hover:text-red-600 hover:scale-110 transition-transform duration-200">
                  NEW SELLER
                </h1>
                <p className="mt-2 text-gray-300">
                  Heaven’s blessings don’t miss <br /> even the smallest days.
                  appear creeping.
                </p>
                <div className="mt-4 flex items-center space-x-2">
                  <input
                    type="email"
                    id="email"
                    placeholder="you@email.com"
                    required
                    className="p-2 rounded w-1/2 bg-white text-black"
                  />
                  <button className="bg-red-500 hover:bg-red-600 text-white px-3 py-2 rounded text-lg">
                    <BsFillSendExclamationFill />
                  </button>
                </div>
              </div>
            </div>
            {/* Footer Stats */}
            <div className="mt-8 md:mt-30 text-white flex flex-col md:flex-row gap-8 md:gap-35 pb-6 md:pb-15 border-b border-gray-700">
              <span className="flex gap-5 items-center">
                <img src={pic} alt="" width={50} className="rounded-4xl" />
                <h3>
                  <span className="text-xl md:text-3xl font-bold">
                    {" "}
                    Naukari-Pao{" "}
                  </span>
                  <br />
                  <span className="text-gray-400 border-b">
                    <i>Pao Sapno ki naukari</i>
                  </span>
                </h3>
              </span>
              <span className="text-lg md:text-xl">
                <span className="text-xl md:text-3xl">5000+</span> Talented
                Hunter
              </span>
              <span className="text-lg md:text-xl">
                <span className="text-xl md:text-3xl"> 451 </span> Talented
                Hunter
              </span>
              <span className="text-lg md:text-xl">
                <span className="text-xl md:text-3xl">568</span> Talented Hunter
              </span>
            </div>
            {/* Footer Bottom */}
            <div className="flex flex-col md:flex-row justify-between text-gray-500">
              <span className="flex gap-2 mt-6 md:mt-10 items-center">
                Copyright © 2025 All rights reserved | This template is made
                With
                <i>Arpit Gupta</i>
              </span>
              <span className="flex gap-5 text-xl md:text-2xl mt-6 md:mt-10">
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
    </div>
  );
};

export default Home;
