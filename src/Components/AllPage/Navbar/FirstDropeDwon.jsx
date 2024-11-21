import { useEffect, useState } from "react";
import { RiArrowDropDownLine } from "react-icons/ri";
import { Link } from "react-router-dom";

const FirstDropeDwon = () => {
  const [isOpen, setIsOpen] = useState(false);

  // Close dropdown when clicking outside
  useEffect(() => {
    const handleOutsideClick = (event) => {
      if (!event.target.closest(".dropdown-container")) {
        setIsOpen(false);
      }
    };
    document.addEventListener("click", handleOutsideClick);
    return () => {
      document.removeEventListener("click", handleOutsideClick);
    };
  }, []);
  return (
    <div>
      <div className="relative dropdown-container">
        {/* Dropdown Toggle Button */}
        <button
          onClick={() => setIsOpen(!isOpen)}
          className="px-4 py-2 flex bg-white text-black border rounded hover:bg-black hover:text-white transition"
        >
          সাধারণ প্রশ্ন উত্তর{" "}
          <RiArrowDropDownLine className="text-2xl font-bold" />
        </button>

        {/* Dropdown Content */}
        {isOpen && (
          <div className="absolute left-0 mt-2 w-48 bg-white border border-gray-300 rounded-lg shadow-lg z-10">
            <a className="block px-4 py-2 text-gray-700 hover:bg-gray-100 hover:text-gray-900">
              <div className="dropdown relative">
                <a className="hover:bg-slate-400 px-4 py-2 block">
                  <div>
                    <Link to="/side-admin-list">ভেল্কি প্রক্সী লিঙ্ক</Link>
                  </div>
                </a>

                <div>
                  <Link to="/side-admin-list">
                    <h1 className="hover:bg-slate-400 px-4 py-2 block">
                      ভেল্কিতে একাউন্ট খুলবেন?
                    </h1>
                  </Link>
                </div>
                <div>
                  <Link to="/side-admin-list">
                    <h1 className="hover:bg-slate-400 px-4 py-2 block">
                      এজেন্ট এর নতুন নাম্বার
                    </h1>
                  </Link>
                </div>
                <div>
                  <Link to="/side-admin-list">
                    <h1 className="hover:bg-slate-400 px-4 py-2 block">
                      ফোন নাম্বার সার্চ করুন
                    </h1>
                  </Link>
                </div>
              </div>
            </a>
          </div>
        )}
      </div>
    </div>
  );
};

export default FirstDropeDwon;
