import axios from "axios";
import { useEffect, useState } from "react";
import { Link } from "react-router-dom";

const SubAdmin3 = () => {
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get(
          "https://vlk-server.vercel.app/master-agent3"
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
          সাব এডমিন 14 এর অধীনে সুপার এজেন্ট 293 এর অধীনে সর্বমোট মাস্টার এজেন্ট
          আছে 10 জন
        </h1>
      </div>
      <div>
        {/* Table Data */}
        <div className="overflow-x-auto">
          <table className="table table-zebra md:font-bold lg:font-bold text-center md:text-lg lg:text-xl w-full text-sm ">
            {/* Table Head */}
            <thead className="bg-gray-200">
              <tr className="font-bold md:text-lg lg:text-xl">
                <th className="px-2 py-3">ID</th>
                <th className="px-2 py-3">Agent</th>
                <th className="px-2 py-3">App</th>
                <th className="px-2 py-3">Phone Number</th>
                <th className="px-2 py-3">Complain</th>
              </tr>
            </thead>
            {/* Table Body */}
            <tbody>
              {data.map((item, _id) => (
                <tr key={_id} className="hover:bg-gray-100">
                  <td className="px-2 py-2 border">{item.id}</td>
                  <td className="px-2 py-2 border">{item.agent}</td>
                  <td className="px-2 py-2 border">
                    <Link to="https://wa.me/+85585292543">
                      <img
                        className="w-8 mx-auto rounded-full"
                        src={item.app}
                        alt=""
                      />
                    </Link>
                  </td>
                  <td className="px-2 py-2 border">
                    <Link
                      className="text-red-500"
                      to={`https://wa.me/${item.phone_number}`}
                    >
                      {item.phone_number}
                    </Link>
                  </td>
                  <td className="px-2 py-2 border">
                    <Link
                      className="text-red-500"
                      to={`https://wa.me/${item.phone_number}`}
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

export default SubAdmin3;
