import axios from "axios";
import { useEffect, useState } from "react";
import { Link } from "react-router-dom";

const SubAdmin5 = () => {
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get(
          "https://vlk-server.vercel.app/master-agent5"
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
    <div className="mt-10">
      <div>
        <h1 className="text-xl font-bold text-center">
          সাব এডমিন 14 এর অধীনে সুপার এজেন্ট 32 এর অধীনে সর্বমোট মাস্টার এজেন্ট
          আছে 26 জন
        </h1>
      </div>
      <div>
        {/* Table Data */}
        <div className="overflow-x-auto">
          <table className="table table-zebra text-center w-full text-sm sm:text-base">
            {/* Table Head */}
            <thead className="bg-pink-100 text-black">
              <tr className="font-bold md:text-xl lg:text-xl text-sm sm:text-base">
                <th className="px-2 py-4">ID</th>
                <th className="px-2 py-4">Agent</th>
                <th className="px-2 py-4">App</th>
                <th className="px-2 py-4">
                  Phone <br /> Number
                </th>
                <th className="px-2 py-4">Complain</th>
              </tr>
            </thead>
            {/* Table Body */}
            <tbody className="font-bold">
              {data.map((item, _id) => (
                <tr key={_id} className="hover:bg-gray-100">
                  <td className="px-2 py-2 border">{item.id}</td>
                  <td className="px-2 py-2 border">{item.agent}</td>
                  <td className="px-2 py-2 border">
                    <Link to="https://wa.me/+601112664728">
                      <img
                        className="w-8 mx-auto rounded-full"
                        src={item.app}
                        alt=""
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
                      className="text-red-500"
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

export default SubAdmin5;
