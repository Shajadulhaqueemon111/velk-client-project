import { IoGridOutline } from "react-icons/io5";
import { CiCircleList } from "react-icons/ci";

import { useState } from "react";
import { Link } from "react-router-dom";
import { FaArrowRightLong } from "react-icons/fa6";

const RandomMaster = () => {
  const [activeView, setActiveView] = useState("grid");

  const cardData = [
    {
      id: 1,
      title: "মাষ্টার এজেন্ট এর তথ্য ১",
      date: "02 January 2024",
      agentId: "777",
      whatsapp: "+60172561374",
      image: "https://i.ibb.co.com/GcC1Gw9/800x300randommasteragent.jpg",
    },
    {
      id: 1,
      title: "মাষ্টার এজেন্ট এর তথ্য ২",
      date: "02 January 2024",
      agentId: "879",
      whatsapp: "+855966542486",
      image: "https://i.ibb.co.com/GcC1Gw9/800x300randommasteragent.jpg",
    },
    {
      id: 1,
      title: "মাষ্টার এজেন্ট এর তথ্য ৩",
      date: "02 January 2024",
      agentId: "2876",
      whatsapp: "+85593462759",
      image: "https://i.ibb.co.com/GcC1Gw9/800x300randommasteragent.jpg",
    },
    {
      id: 1,
      title: "মাষ্টার এজেন্ট এর তথ্য ৪",
      date: "02 January 2024",
      agentId: " 1479",
      whatsapp: "+855963925813",
      image: "https://i.ibb.co.com/GcC1Gw9/800x300randommasteragent.jpg",
    },
    // Duplicate the above object for more cards
  ];

  return (
    <div>
      {/* Header Section */}
      <div className="flex flex-col lg:flex-row justify-between mx-auto text-center w-4/5">
        <div>
          <h1 className="text-xl font-bold">Random Master Agent</h1>
        </div>

        <div className="flex">
          {/* Grid Button */}
          <button
            className={`flex items-center p-4  rounded ${
              activeView === "grid" ? "bg-red-500 text-white" : "bg-gray-200"
            } md:block hidden`}
            onClick={() => setActiveView("grid")}
          >
            <IoGridOutline className="mr-1" /> Grid
          </button>

          {/* List Button */}
          <button
            className={`flex items-center p-2 rounded ${
              activeView === "list" ? "bg-red-500 text-white" : "bg-gray-200"
            } md:block hidden`}
            onClick={() => setActiveView("list")}
          >
            <CiCircleList className="mr-1" /> List
          </button>
        </div>
      </div>
      <div className="bg-slate-300 p-4 mt-4 mb-4">
        <Link to="/master-agent-list">
          <btn className="text-xl btn font-bold  px-4 py-2 bg-red-600 text-white">
            MASTER AGENT{" "}
            <FaArrowRightLong className="text-xl font-bold mt-1 "></FaArrowRightLong>
          </btn>
        </Link>
      </div>
      {/* Card Container */}
      <div
        className={`${
          activeView === "grid"
            ? "grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4"
            : "flex flex-col gap-4"
        } mt-4`}
      >
        {cardData.map((card) => (
          <div
            key={card.id}
            className={`bg-white border rounded shadow-lg p-4 ${
              activeView === "list" ? "flex items-center" : ""
            }`}
          >
            {/* Image Section */}
            <div
              className={`relative ${
                activeView === "list" ? "w-1/3" : ""
              } flex-shrink-0`}
            >
              <Link to="/master-agent-list">
                <button className="absolute top-20 left-0 p-1 bg-white text-black border rounded hover:bg-red-500 hover:text-white transition z-10">
                  MASTER AGENT
                </button>
              </Link>
              <img
                src={card.image}
                alt="Customer Service"
                className={`rounded-t ${activeView === "list" ? "w-full" : ""}`}
              />
            </div>

            {/* Text Section */}
            <div
              className={`mt-4 ${
                activeView === "list" ? "ml-4 w-2/3" : ""
              } text-center`}
            >
              <Link to="/master-agent-list">
                <h1 className="text-lg font-semibold hover:text-red-500">
                  {card.title}
                </h1>
              </Link>
              <h1>Administrator {card.date}</h1>
              <h1 className="text-xl mt-4">
                মাষ্টার এজেন্ট আইডিঃ {card.agentId} <br />
                হোয়াটসঅ্যাপ নাম্বারঃ{" "}
                <Link to="/master-agent-list" className="hover:text-red-500">
                  {card.whatsapp}
                </Link>
              </h1>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default RandomMaster;
