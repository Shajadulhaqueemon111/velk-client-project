import { useEffect, useState } from "react";
import { RiArrowDropDownLine } from "react-icons/ri";
import { Link } from "react-router-dom";

const SecondBropeDwon = () => {
  const [isOpens, setIsOpens] = useState(false);

  useEffect(() => {
    const handleOutsideClick = (event) => {
      if (!event.target.closest(".dropdown-container")) {
        setIsOpens(false);
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
          onClick={() => setIsOpens(!isOpens)}
          className="px-4 py-2 flex bg-white border text-black rounded hover:bg-black hover:text-white transition"
        >
          এজেন্ট লিস্ট <RiArrowDropDownLine className="text-2xl font-bold" />
        </button>

        {/* Dropdown Content */}
        {isOpens && (
          <div className="absolute left-0 mt-2 w-48 bg-white border border-gray-300 rounded-lg shadow-lg z-10">
            <a className="block px-4 py-2 text-gray-700 hover:bg-gray-100 hover:text-gray-900">
              <div className="dropdown relative">
                <div>
                  <Link to="/master-agent-list">
                    <h1 className="hover:bg-slate-400 px-4 py-2 block">
                      মাষ্টার এজেন্ট লিষ্ট
                    </h1>
                  </Link>
                </div>
                <div>
                  <Link to="/master-agent-list">
                    <button className="hover:bg-slate-400 px-4 py-2 block">
                      এজেন্ট কে ভেরিফাই করুন
                    </button>
                  </Link>
                </div>

                <div>
                  <Link to="/super-agent-list">
                    <button className="hover:bg-slate-400 px-4 py-2 block">
                      সুপার এজেন্ট লিষ্ট
                    </button>
                  </Link>
                </div>

                <div>
                  <Link to="/sub-admin-list">
                    <button className="hover:bg-slate-400 px-4 py-2 block">
                      সাব এডমিন লিষ্ট
                    </button>
                  </Link>
                </div>
                <div>
                  <Link to="/side-admin-list">
                    <h1 className="hover:bg-slate-400 px-4 py-2 block">
                      সাইট এডমিন লিষ্ট
                    </h1>
                  </Link>
                </div>
                <div>
                  <Link to="/master-agent-list">
                    <button className="hover:bg-slate-400 px-4 py-2 block">
                      কাস্টমার সার্ভিস লিষ্ট
                    </button>
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

export default SecondBropeDwon;
