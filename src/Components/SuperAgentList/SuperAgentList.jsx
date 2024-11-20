import { useState } from "react";
import { Link } from "react-router-dom";

import SuperAgent from "./SuperAgent";

const SuperAgentList = () => {
  const [category, setCategory] = useState("");
  const [agentId, setAgentId] = useState("");

  const handleSubmit = (event) => {
    event.preventDefault();
    // Handle form submission logic here, such as sending the data to an API or redirecting
    console.log("Form submitted:", { category, agentId });
  };

  return (
    <div className="mt-10 ">
      <div className="mx-auto w-3/5 p-4 text-center">
        <h1 className="text-center">এজেন্ট এর আইডি নাম্বার দিয়ে খুজুনঃ</h1>
        <form className="gap-3 shadow-2xl" onSubmit={handleSubmit}>
          {/* Dropdown for Agent Type */}
          <label className="text-xl font-bold">Agent Type:</label>
          <div className="mb-2 mt-3">
            <select
              id="category"
              name="category"
              value={category}
              onChange={(e) => setCategory(e.target.value)}
              className="input input-bordered w-full max-w-xs"
            >
              <option value="মাষ্টার এজেন্ট">মাষ্টার এজেন্ট</option>
              <option value="সুপার এজেন্ট">সুপার এজেন্ট</option>
              <option value="সাব এডমিন">সাব এডমিন</option>
            </select>
          </div>

          {/* Input for Agent ID */}
          <label className="text-xl font-bold">Agent ID:</label>
          <div className="mb-2 mt-3">
            <input
              type="text"
              id="agentid"
              name="agentid"
              value={agentId}
              onChange={(e) => setAgentId(e.target.value)}
              placeholder="Agent Id"
              className="input input-bordered w-full max-w-xs"
            />
          </div>

          {/* Submit Button */}
          <div className="mt-4">
            <button
              className="btn bg-[green] text-white btn-start"
              type="submit"
            >
              Submit
            </button>
          </div>
        </form>
      </div>
      {/* second section */}
      <div className="">
        <div className="relative">
          <img
            className="mx-auto w-4/5 text-center"
            src="https://i.ibb.co.com/B66DLjm/800x300super.jpg"
            alt="Agent Image"
          />
          <Link to="/">
            <button className="absolute left-40 top-2 transform -translate-x-1/2 -translate-y-1/2 p-2 bg-white text-black border rounded hover:bg-red-500 hover:text-white transition z-10">
              AGENT
            </button>
          </Link>
        </div>

        {/* policy */}
        <div className="mt-4">
          <p className="text-center">
            <span className="font-bold text-xl">
              {" "}
              এজেন্ট দের সাথে লেনদেন এর আগে ভেল্কির নিয়ম গুলো জেনে নিন!!{" "}
            </span>
            <br />
            **প্রতারনার হাত থেকে বাচতে সবার আগে ভিজিট করুন ভেল্কি সাইটঃ
            VELKI.COM <br />
            **হোয়াটসঅ্যাপ ব্যাতিত অন্য কোন এপ এর মাধ্যমে যোগাযোগ বা লেনদেন করা{" "}
            <br />
            যাবে না এবং করলে তা গ্রহনযোগ্য হবে না। **এজেন্ট পাসোয়ার্ড পরিবর্তন
            করে <br />
            দিলে - আপনি একাউন্টে ঢুকে আবার পাসোয়ার্ড পরিবর্তন করে নিবেন। এজেন্ট{" "}
            <br />
            যাতে কোন ভাবেই আপনার পাসোয়ার্ড না জানে। আপনার পাসোয়ার্ড আপনি কাউকেই{" "}
            <br />
            দিবেন না - সে যেই হউক না কেন। **সকাল ৯ঃ৪৫ এর আগে এবং রাত ৯ঃ৪৫ এর পরে{" "}
            <br />
            কোন ইউজার যদি এজেন্ট কে টাকা পাঠায় – অই টাকার দায়ভার ভেল্কি নিবে
            না। <br />
            **প্রতিবার এজেন্ট এর কাছ থেকে পয়েন্ট নেবার আগে – এজেন্ট এর কাছে{" "}
            <br />
            লেনদেন এর তথ্য জেনে নিতে হবে। যেহেতু এজেন্ট এক এক সময় এক ভাবে
            লেনদেন <br />
            করে সেহেতু এই তথ্য জানা জরুরী। **এজেন্ট এর বিরুদ্ধে কোন অভিযোগ থাকলে{" "}
            <br />
            এজেন্ট এর নামের শেষে অভিযোগ বাটন এ ক্লিক করলে যে হোয়াটসঅ্যাপ
            নাম্বার <br />
            আসবে - তাকে অভিযোগ করতে হবে।
          </p>
        </div>

        {/* velkimaster */}
        <div>
          <SuperAgent></SuperAgent>
        </div>
      </div>
    </div>
  );
};

export default SuperAgentList;
