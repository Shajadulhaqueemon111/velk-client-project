import axios from "axios";
import { useEffect, useState } from "react";
import { Link } from "react-router-dom";

const SubAdmin2 = () => {
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get(
          "https://vlk-server.vercel.app/master-agent2"
        );
        setData(response.data);
      } catch (err) {
        setError(err);
      } finally {
        setLoading(false);
      }
    };

    fetchData();
  }, []);

  if (loading) return <div>Loading...</div>;
  if (error) return <div>Error: {error}</div>;

  return (
    <div className="mt-10 mx-auto ">
      <div>
        <h1 className="text-xl font-bold text-center">
          সাব এডমিন 14 এর অধীনে সুপার এজেন্ট 279 এর অধীনে সর্বমোট মাস্টার এজেন্ট
          আছে 3 জন
        </h1>
      </div>
      <div>
        {/* Table Data */}
        <div className="overflow-x-auto">
          <table className="table table-zebra text-center w-full text-sm sm:text-base">
            {/* Table Head */}
            <thead className="bg-pink-100 text-black">
              <tr className="font-bold md:text-xl lg:text-xl text-sm sm:text-base">
                <th className="px-2 py-3">ID</th>
                <th className="px-2 py-3">Agent</th>
                <th className="px-2 py-3">App</th>
                <th className="px-2 py-3">
                  Phone <br /> Number
                </th>
                <th className="px-2 py-3">Complain</th>
              </tr>
            </thead>
            {/* Table Body */}
            <tbody className="font-bold">
              {data.map((item, index) => (
                <tr key={index} className="hover:bg-gray-100">
                  <td className="px-2 py-2 border">{item.id}</td>
                  <td className="px-2 py-2 border">{item.agent}</td>
                  <td className="px-2 py-2 border">
                    <Link to="https://wa.me/+601112664728">
                      <img
                        className="w-8  mx-auto rounded-full"
                        src={item.app}
                        alt="App Icon"
                      />
                    </Link>
                  </td>
                  <td className="px-2 py-2 border break-all">
                    <Link
                      className="text-red-500"
                      to="https://wa.me/+601112664728"
                    >
                      {item.phone_number}
                    </Link>
                  </td>
                  <td className="px-2 py-2 border">
                    <Link
                      className="text-red-500 truncate"
                      to="https://wa.me/+601112664728"
                    >
                      {item.complain}
                    </Link>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
};

export default SubAdmin2;
