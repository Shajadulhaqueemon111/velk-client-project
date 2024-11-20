import { useState } from "react";
import { CiCircleList } from "react-icons/ci";
import { FaArrowRightLong } from "react-icons/fa6";
import { IoGridOutline } from "react-icons/io5";
import { Link } from "react-router-dom";

const Faqsection = () => {
  const [activeButton, setActiveButton] = useState("grid");

  const faqCards = [
    {
      title: "ভেল্কি তে কিভাবে লেনদেন করবেন?",
      image: "https://i.ibb.co.com/Z12CxkH/800x300howtolenden.jpg",
    },
    {
      title: "কিভাবে একাউন্ট খুলবেন?",
      image: "https://i.ibb.co.com/Z12CxkH/800x300howtolenden.jpg",
    },
    {
      title: "একাউন্ট খোলার নিয়ম বা শর্ত গুলো কি কি?",
      image: "https://i.ibb.co.com/Z12CxkH/800x300howtolenden.jpg",
    },
    {
      title: "কিভাবে আমি ভেল্কি তে এজেন্ট হতে পারি?",
      image: "https://i.ibb.co.com/Z12CxkH/800x300howtolenden.jpg",
    },
    {
      title: "কিভাবে আমি ভেল্কি তে অনলাইন মাষ্টার এজেন্ট হতে পারি?",
      image: "https://i.ibb.co.com/Z12CxkH/800x300howtolenden.jpg",
    },
    {
      title: "এজেন্ট এর বিরুদ্ধে কিভাবে অভিযোগ করবেন?",
      image: "https://i.ibb.co.com/Z12CxkH/800x300howtolenden.jpg",
    },
  ];

  return (
    <div className="mt-4">
      {/* Header Section */}
      <div className="flex flex-col lg:flex-row justify-between mx-auto text-center w-4/5">
        <div>
          <h1 className="text-xl sm:text-2xl font-semibold">FAQ</h1>
        </div>

        <div className="flex space-x-2">
          {/* Grid Button */}
          <button
            className={`flex items-center px-4 py-2 rounded ${
              activeButton === "grid"
                ? "bg-red-500 text-white"
                : "bg-gray-200 text-black"
            } md:block hidden`}
            onClick={() => setActiveButton("grid")}
          >
            <IoGridOutline className="mr-1" /> Grid
          </button>

          {/* List Button */}
          <button
            className={`flex items-center px-4 py-2 rounded ${
              activeButton === "list"
                ? "bg-red-500 text-white"
                : "bg-gray-200 text-black"
            } md:block hidden`}
            onClick={() => setActiveButton("list")}
          >
            <CiCircleList className="mr-1" /> List
          </button>
        </div>
      </div>

      <div className="bg-slate-300 p-2 mt-4 mb-4">
        <Link to="/">
          <button className="text-xl btn font-bold px-4 py-2 bg-red-600 text-white">
            VELKI FAQ
            <FaArrowRightLong className="text-xl font-bold mt-1" />
          </button>
        </Link>
      </div>

      {/* Card Container */}
      <div
        className={`relative mx-auto w-full ${
          activeButton === "list" ? "flex flex-col" : ""
        }`}
      >
        <div className="relative mb-4">
          {/* Image */}
          <img
            src="https://i.ibb.co.com/nCPfgdq/800x300velkiproxy.jpg"
            alt="Customer Service"
            className={`rounded-t ${
              activeButton === "list" ? "w-full h-auto" : ""
            }`}
          />
        </div>

        {/* Proxy Links */}
        <div className={`${activeButton === "list" ? "ml-4" : ""}`}>
          <Link to="/master-agent-list">
            <h1 className="hover:text-red-500">ভেল্কি প্রক্সি লিঙ্ক</h1>
          </Link>
          <div
            className={`text-center mb-10 ${
              activeButton === "list" ? "text-left" : ""
            }`}
          >
            <Link to="/master-agent-list">
              <h1 className="text-red-600">
                ভেল্কি সাইটের প্রক্সী লিঙ্কঃ www.wickspin24.live
              </h1>
            </Link>
            <Link to="/master-agent-list">
              <h1 className="text-red-600">
                ভেল্কি সাইটের প্রক্সী লিঙ্কঃ www.adhmor365.live
              </h1>
            </Link>
          </div>
        </div>
      </div>

      {/* FAQ Cards */}
      <div
        className={`relative mx-auto w-full mt-6 ${
          activeButton === "grid"
            ? "grid grid-cols-2 gap-4 sm:grid-cols-3 lg:grid-cols-4"
            : "space-y-4"
        }`}
      >
        {faqCards.map((card, index) => (
          <div
            key={index}
            className={`flex ${
              activeButton === "list"
                ? "flex-row gap-2"
                : "flex-col items-center"
            } border rounded p-2 shadow bg-white`}
          >
            <img
              className="w-40 h-24 object-cover rounded"
              src={card.image}
              alt={card.title}
            />
            <div
              className={`text-center ${
                activeButton === "list" ? "flex-1 text-left" : ""
              }`}
            >
              <Link to="/">
                <button className="bg-white text-black border rounded hover:bg-red-500 hover:text-white transition">
                  VELKI FAQ
                </button>
              </Link>
              <Link to="/">
                <h1 className="text-sm sm:text-base font-medium">
                  {card.title}
                </h1>
              </Link>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Faqsection;
