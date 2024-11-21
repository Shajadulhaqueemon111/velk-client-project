import { useEffect, useState } from "react";
import { Link } from "react-router-dom";

import { LuSquareEqual } from "react-icons/lu";
import "./Navbar.css";
import FirstDropeDwon from "./FirstDropeDwon";
import SecondBropeDwon from "./SecondBropeDwon";

const NavBar = () => {
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);
  const [currentDate, setCurrentDate] = useState("");
  const [currentDay, setCurrentDay] = useState("");

  useEffect(() => {
    const today = new Date();
    const day = today.getDate();
    const month = today.toLocaleString("default", { month: "long" });
    setCurrentDate(`${day} ${month}`);
    const dayName = today.toLocaleString("default", { weekday: "long" });
    setCurrentDay(dayName);
  }, []);

  return (
    <div>
      {/* Main Navbar for larger screens */}
      <div className="hidden md:flex justify-between  items-center p-4 bg-gray-100">
        {/* Left Section */}
        <div className="flex gap-4">
          <Link to="/">
            <button className="px-4 py-2  border rounded hover:bg-black hover:text-white transition">
              ভেল্কি
            </button>
          </Link>
          <Link to="/">
            <button className="px-4 py-2  border rounded hover:bg-black hover:text-white transition">
              ভেল্কি কমিউনিটি
            </button>
          </Link>
          <Link to="/">
            <button className="px-4 py-2  border rounded hover:bg-black hover:text-white transition">
              ভেল্কি ফোরাম
            </button>
          </Link>
        </div>

        {/* Right Section */}
        <div className="">
          <Link to="/master-agent-list">
            <button className="px-4 py-2  border rounded text-red-600 hover:text-red-500 hover:bg-gray-300 transition">
              কাস্টমার সার্ভিস
            </button>
          </Link>
        </div>
      </div>

      {/* Hamburger Icon for small screens */}
      <div className="block md:hidden p-8 bg-gray-100">
        <button onClick={() => setIsSidebarOpen(!isSidebarOpen)}>
          <div className="flex gap-4">
            <LuSquareEqual className="text-3xl font-bold mt-2"></LuSquareEqual>

            <img
              src="https://i.ibb.co.com/7tw3WZc/velki-site-main-logo-mobile.jpg"
              alt="Velki Logo"
            />
            <Link to="/master-agent-list">
              <button className="px-4 py-2  border text-red-500 rounded hover:text-red-500 hover:bg-gray-300 transition">
                কাস্টমার সার্ভিস
              </button>
            </Link>
          </div>
        </button>
      </div>

      {/* Sidebar (for small screens) */}
      {/* Sidebar (for small screens) */}
      <div
        className={`fixed top-0 left-0 h-full w-64 bg-gray-800 text-white transform ${
          isSidebarOpen ? "translate-x-0" : "-translate-x-full"
        } transition-transform duration-300 md:hidden overflow-y-auto`}
      >
        <div className="p-8 flex flex-col space-y-4 ga-4">
          {/* Close Icon */}
          <button
            onClick={() => setIsSidebarOpen(false)}
            className="absolute top-4 right-4 text-white text-2xl"
          >
            &times; {/* Cross icon */}
          </button>
          <div>
            <Link to="/">
              <h1
                onClick={() => setIsSidebarOpen(false)}
                className=" text-white  rounded  hover:text-white transition"
              >
                ভেল্কি
              </h1>
            </Link>
          </div>
          <div>
            <Link to="/master-agent-list">
              <h1
                onClick={() => setIsSidebarOpen(false)}
                className=" text-white   hover:text-white transition"
              >
                ভেল্কি কমিউনিটি
              </h1>
            </Link>
          </div>
          <div>
            <Link to="/master-agent-list">
              <h1
                onClick={() => setIsSidebarOpen(false)}
                className=" text-white  hover:text-white transition"
              >
                ভেল্কি ফোরাম
              </h1>
            </Link>
          </div>
          <div className="mt-4">
            <Link to="/master-agent-list">
              <h1
                onClick={() => setIsSidebarOpen(false)}
                className="text-white transition"
              >
                কাস্টমার সার্ভিস
              </h1>
            </Link>
          </div>
          <div>
            <Link to="/">
              <h1
                onClick={() => setIsSidebarOpen(false)}
                className="hover-show-options text-white  hover:text-white transition"
              >
                ভেল্কি অটো ডিপোজিট এজেন্ট
              </h1>
            </Link>
          </div>
          <div>
            <Link to="/">
              <h1
                onClick={() => setIsSidebarOpen(false)}
                className="hover-show-options text-white hover:text-white transition"
              >
                হোম পেজ
              </h1>
            </Link>
          </div>

          <div>
            <Link to="/">
              <h1
                onClick={() => setIsSidebarOpen(false)}
                className="hover-show-options text-white hover:text-white transition"
              >
                ভেল্কি প্রক্সী লিঙ্ক
              </h1>
            </Link>
          </div>
          <div>
            <Link to="/side-admin-list">
              <h1
                onClick={() => setIsSidebarOpen(false)}
                className="hover-show-options  text-white hover:text-white transition"
              >
                ভেল্কিতে একাউন্ট খুলবেন?
              </h1>
            </Link>
          </div>
          <div>
            <Link to="/side-admin-list">
              <h1
                onClick={() => setIsSidebarOpen(false)}
                className="hover-show-options  text-white hover:text-white transition"
              >
                এজেন্ট এর নতুন নাম্বার
              </h1>
            </Link>
          </div>
          <div>
            <Link to="/side-admin-list">
              <h1
                onClick={() => setIsSidebarOpen(false)}
                className="hover-show-options text-white hover:text-white transition"
              >
                ফোন নাম্বার সার্চ করুন
              </h1>
            </Link>
          </div>
          {/* second nav */}
          <div>
            <div>
              <Link to="/master-agent-list">
                <h1
                  onClick={() => setIsSidebarOpen(false)}
                  className="hover-show-options text-white hover:text-white transition"
                >
                  মাষ্টার এজেন্ট লিষ্ট
                </h1>
              </Link>
            </div>
            <div className="mt-2">
              <Link to="/master-agent-list">
                <h1
                  onClick={() => setIsSidebarOpen(false)}
                  className="hover-show-options text-white hover:text-white transition"
                >
                  এজেন্ট কে ভেরিফাই করুন
                </h1>
              </Link>
            </div>
            <div className="mt-2">
              <Link to="/super-agent-list">
                <h1
                  onClick={() => setIsSidebarOpen(false)}
                  className="hover-show-options text-white hover:text-white transition"
                >
                  সুপার এজেন্ট লিষ্ট
                </h1>
              </Link>
            </div>
            <div className="mt-2">
              <Link to="/sub-admin-list">
                <h1
                  onClick={() => setIsSidebarOpen(false)}
                  className="hover-show-options text-white hover:text-white transition"
                >
                  সাব এডমিন লিষ্ট
                </h1>
              </Link>
            </div>
            <div className="mt-2">
              <Link to="/side-admin-list">
                <h1
                  onClick={() => setIsSidebarOpen(false)}
                  className="hover-show-options text-white hover:text-white transition"
                >
                  সাইট এডমিন লিষ্ট
                </h1>
              </Link>
            </div>
            <div className="mt-2">
              <Link to="/master-agent-list">
                <h1
                  onClick={() => setIsSidebarOpen(false)}
                  className="hover-show-options text-white hover:text-white transition"
                >
                  কাস্টমার সার্ভিস লিষ্ট
                </h1>
              </Link>
            </div>
          </div>
        </div>
      </div>

      {/* Image Section */}
      <div className="flex flex-wrap justify-between mt-5">
        <div className="hidden md:block">
          <img
            src="https://i.ibb.co.com/GR5Ghmf/velki-logo-DQ9-SRObi.jpg"
            alt="Velki Logo"
          />
        </div>
        <div className="hidden md:block">
          <h1 className="bg-slate-300 p-8 text-center font-bold">
            {currentDate} <br />
            {currentDay}
          </h1>
        </div>
      </div>

      {/* Second Navbar */}
      <div className="mt-10 red-line ">
        <div className="mt-10 shadow-xl p-4 hidden md:block ">
          <div className="flex gap-4  flex-wrap">
            <button className="hover-show-options px-4 py-2  border rounded hover:bg-black hover:text-white transition">
              <Link to="/master-agent-list">ভেল্কি অটো ডিপোজিট এজেন্ট</Link>
            </button>
            <Link to="/">
              <button className="hover-show-options px-4 py-2  border rounded hover:bg-black hover:text-white transition">
                হোম পেজ
              </button>
            </Link>

            {/* Dropdown for General FAQ */}

            <FirstDropeDwon></FirstDropeDwon>

            {/* Dropdown for Agent List */}

            <SecondBropeDwon></SecondBropeDwon>
          </div>
        </div>
      </div>

      {/* ? */}
    </div>
  );
};

export default NavBar;
