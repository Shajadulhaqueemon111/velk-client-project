import { Link } from "react-router-dom";
import SubAdmins from "./SubAdmins";

const SubAdminList = () => {
  return (
    <div className="mt-10 ">
      <div>
        <div>
          <h1 className="text-center mb-6">
            এজেন্ট এর আইডি নাম্বার দিয়ে খুজুনঃ
          </h1>
          <div className="p-4 bg-gray-100 rounded-lg max-w-md mx-auto shadow-lg">
            <form className="space-y-4">
              {/* Agent Type Dropdown */}
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Agent Type
                </label>
                <select
                  className="block w-full py-2 px-3 border border-gray-300 bg-white rounded-md shadow-sm focus:outline-none focus:ring-green-500 focus:border-green-500 sm:text-sm"
                  name="agentType"
                >
                  <option>Master Agent</option>
                  <option>Super Agent</option>
                  <option>Sub Admin</option>
                </select>
              </div>

              {/* Agent ID Input */}
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Agent ID
                </label>
                <input
                  type="text"
                  placeholder="Enter Agent ID"
                  className="block w-full py-2 px-3 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-green-500 focus:border-green-500 sm:text-sm"
                  name="agentID"
                />
              </div>

              {/* Submit Button */}
              <button
                type="submit"
                className="w-full bg-green-500 hover:bg-green-600 text-white font-semibold py-2 px-4 rounded-md shadow focus:outline-none focus:ring-2 focus:ring-green-500 focus:ring-opacity-50"
              >
                Search
              </button>
            </form>
          </div>
        </div>
      </div>
      {/* second section */}
      <div className="">
        <div className="relative">
          <img
            className="mx-auto w-4/5 text-center"
            src="https://i.ibb.co.com/R28M4L9/800x300subad.jpg"
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
          <SubAdmins></SubAdmins>
        </div>

        {/* velkimaster */}
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
      </div>
    </div>
  );
};

export default SubAdminList;
