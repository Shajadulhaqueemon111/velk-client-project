import { RiEqualLine } from "react-icons/ri";
import { Link } from "react-router-dom";
import "./Banner.css";
const Banner = () => {
  return (
    <div className="mt-10 bordedr-style">
      <div className="gap-3  flex flex-col lg:flex-row justify-around">
        <div className="gap-4">
          <div className="bg-slate-400 p-4 bordedr-style1">
            <h1>In The Spotlight</h1>
          </div>
          <div className="border-style-3">
            <Link to="/master-agent-list">
              <button className="px-2 py-2 mt-3 bg-white text-black border rounded hover:bg-red-500 hover:text-white transition">
                AGENT
              </button>
            </Link>
            <Link to="/master-agent-list">
              <h1 className="text-3xl font-bold mt-3 mb-3">
                ভেল্কি অটো ডিপোজিট এজেন্ট
              </h1>
            </Link>
            <Link to="/master-agent-list">
              <h1 className="text-2xl mt-3 mb-3 text-red-500">
                ভেল্কি তে কিভাবে অটো ডিপোজিট করবেন তা জানতে <br />
                আপনি এই লিঙ্ক এ ক্লিক করে দয়া করে ভিডিও টি দেখে নিন
              </h1>
            </Link>
            <Link>
              <button className=" p-2 mt-3 mb-3 w-full  text-black border rounded hover:bg-slate-300 hover:text-black transition">
                Read More...ভেল্কি অটো ডিপোজিট এজেন্ট
              </button>
            </Link>
          </div>
          {/* card section */}
          <div className="flex flex-col lg:flex-row  gap-4 ">
            {/* Card 1 */}
            <div className="max-w-xs bg-white border rounded shadow-lg p-4 relative">
              <div className="relative">
                {/* Agent Button */}
                <Link to="/master-agent-list">
                  <button className="absolute top-20 left-0 p-1 bg-white text-black border rounded hover:bg-red-500 hover:text-white transition z-10">
                    AGENT
                  </button>
                </Link>
                {/* Image */}
                <img
                  src="https://i.ibb.co.com/P1Jtw28/800x300customerservice3.jpg"
                  alt="Customer Service"
                  className="rounded-t"
                />
              </div>

              {/* Text Content */}
              <Link to="/master-agent-list">
                <h1 className="mt-4 text-lg font-semibold hover:text-red-500">
                  কাস্টমার সার্ভিস লিষ্ট
                </h1>
              </Link>
              <h1 className="text-center text-2xl font-bold mt-8">
                VELKI CUSTOMER <br /> SERVICE LIST
              </h1>
              <Link to="/master-agent-list">
                <button className="mt-6 p-2 w-full text-black border rounded hover:bg-slate-300 hover:text-black transition">
                  Read More ....কাস্টমার সার্ভিস লিষ্ট
                </button>
              </Link>
            </div>

            {/* Card 2 */}
            <div className="max-w-xs bg-white border rounded shadow-lg p-4  relative">
              <div className="relative">
                {/* Agent Button */}
                <Link to="/master-agent-list">
                  <button className="absolute top-20 left-0 p-1 bg-white text-black border rounded hover:bg-red-500 hover:text-white transition z-10">
                    AGENT
                  </button>
                </Link>
                {/* Image */}
                <img
                  src="https://i.ibb.co.com/P1Jtw28/800x300customerservice3.jpg"
                  alt="Customer Service"
                  className="rounded-t"
                />
              </div>
              <Link to="/master-agent-list">
                <h1 className="mt-4 text-lg font-semibold hover:text-red-500">
                  কাস্টমার সার্ভিস লিষ্ট
                </h1>
              </Link>
              <h1 className="text-center text-sm mt-2">
                এজেন্ট দের সাথে লেনদেন এর আগে ভেল্কির নিয়ম গুলো জেনে নিন!!{" "}
                <br />
                **প্রতারনার হাত থেকে বাচতে সবার আগে ভিজিট করুন ভেল্কি সাইটঃ
                VELKI.COM <br />
                **হোয়াটসঅ্যাপ ব্যাতিত অন্য
              </h1>
              <Link to="/master-agent-list">
                <button className="mt-4 p-2 w-full text-black border rounded hover:bg-slate-300 hover:text-black transition">
                  Read More ....কাস্টমার সার্ভিস লিষ্ট
                </button>
              </Link>
            </div>

            {/* Card 3 */}
            <div className="max-w-xs bg-white border rounded shadow-lg p-4 relative">
              <div className="relative">
                {/* Agent Button */}
                <Link to="/master-agent-list">
                  <button className="absolute top-20 left-0 p-1 bg-white text-black border rounded hover:bg-red-500 hover:text-white transition z-10">
                    AGENT
                  </button>
                </Link>
                {/* Image */}
                <img
                  src="https://i.ibb.co.com/P1Jtw28/800x300customerservice3.jpg"
                  alt="Customer Service"
                  className="rounded-t"
                />
              </div>
              <Link to="/master-agent-list">
                <h1 className="mt-4 text-lg font-semibold hover:text-red-500">
                  কাস্টমার সার্ভিস লিষ্ট
                </h1>
              </Link>
              <h1 className="text-center text-sm mt-2">
                এজেন্ট দের সাথে লেনদেন এর আগে ভেল্কির নিয়ম গুলো জেনে নিন!!{" "}
                <br />
                **প্রতারনার হাত থেকে বাচতে সবার আগে ভিজিট করুন ভেল্কি সাইটঃ
                VELKI.COM <br />
                **হোয়াটসঅ্যাপ ব্যাতিত অন্য
              </h1>
              <Link to="/master-agent-list">
                <button className="mt-4 p-2 w-full text-black border rounded hover:bg-slate-300 hover:text-black transition">
                  Read More ....কাস্টমার সার্ভিস লিষ্ট
                </button>
              </Link>
            </div>
          </div>
        </div>
        <hr />
        <div className="">
          <div className="flex gap-2  text-center mx-auto  banner-style bg-slate-300">
            <RiEqualLine className="mt-2"></RiEqualLine>
            <h1 className="text-xl">More News</h1>
            <RiEqualLine className="mt-2"></RiEqualLine>
          </div>
          {/* first niput-text */}
          <div className="flex text-center mt-3 gap-2">
            <div>
              <img
                className=" w-20"
                src="https://i.ibb.co.com/R28M4L9/800x300subad.jpg"
                alt=""
              />
            </div>
            <div className="text-center">
              <Link to="/master-agent-list">
                <button className="p-2 bg-white text-black border rounded hover:bg-red-500 hover:text-white transition">
                  AGENT
                </button>
              </Link>
              <Link to="/master-agent-list">
                <h1 className="mt-2 font-bold hover:text-red-500 whitespace-nowrap">
                  সাব এডমিন লিষ্টঃ
                </h1>
              </Link>
            </div>

            <p className="mt-2 whitespace-nowrap ">02 January 2024</p>
          </div>
          <hr />
          {/* second niput-text */}
          <div className="flex text-center gap-2 ">
            <div>
              <img
                className=" w-20"
                src="https://i.ibb.co.com/R28M4L9/800x300subad.jpg"
                alt=""
              />
            </div>
            <div>
              <Link to="/master-agent-list">
                <button className="p-2 bg-white text-black border rounded hover:bg-red-500 hover:text-white transition">
                  AGENT
                </button>
              </Link>
              <Link to="/master-agent-list">
                <h1 className="mt-2 font-bold hover:text-red-500 whitespace-nowrap">
                  এজেন্ট কয় প্রকারঃ
                </h1>
              </Link>
            </div>
            <p className="mt-2 whitespace-nowrap">02 January 2024</p>
          </div>
          <hr />
          {/* 3rd niput-text */}
          <div className="flex text-center gap-2">
            <div>
              <img
                className=" w-20"
                src="https://i.ibb.co.com/R28M4L9/800x300subad.jpg"
                alt=""
              />
            </div>
            <div>
              <Link to="/master-agent-list">
                <button className="p-2 bg-white text-black border rounded hover:bg-red-500 hover:text-white transition">
                  AGENT
                </button>
              </Link>
              <Link to="/master-agent-list">
                <h1 className="mt-2  hover:text-red-500 font-bold">
                  এজেন্ট লিস্টঃ
                </h1>
              </Link>
            </div>
            <p className="mt-2">02 January 2024</p>
          </div>
          <hr />
          {/* four niput-text */}
          <div className="flex text-center gap-3">
            <div>
              <img
                className=" w-20"
                src="https://i.ibb.co.com/R28M4L9/800x300subad.jpg"
                alt=""
              />
            </div>
            <div>
              <Link to="/master-agent-list">
                <button className="p-2 bg-white text-black border rounded hover:bg-red-500 hover:text-white transition">
                  AGENT
                </button>
              </Link>
              <Link to="/side-admin-list">
                <h1 className="mt-2 font-bold hover:text-red-500 whitespace-nowrap">
                  সাইট এডমিন লিষ্ট
                </h1>
              </Link>
            </div>
            <p className="mt-2 whitespace-nowrap">02 January 2024</p>
          </div>
          <div className="mt-8">
            <img src="https://i.ibb.co.com/KcPGh43/addaccount.jpg" alt="" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Banner;
