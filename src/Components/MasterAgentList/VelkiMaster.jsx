import { Link } from "react-router-dom";
import SubAdmin2 from "./SubAdmin/SubAdmin2";
import SubAdmin3 from "./SubAdmin/SubAdmin3";
import SubAdmin4 from "./SubAdmin/SubAdmin4";
import SubAdmin5 from "./SubAdmin/SubAdmin5";
import SuperAdmin6 from "./SubAdmin/SuperAdmin6";
import SubAdmin7 from "./SubAdmin/SubAdmin7";
import SubAdmin8 from "./SubAdmin/SubAdmin8";
import SubAdmin9 from "./SubAdmin/SubAdmin9";
import SubAdmin10 from "./SubAdmin/SubAdmin10";
import SubAdmin11 from "./SubAdmin/SubAdmin11";
import { useEffect, useState } from "react";
import axios from "axios";

const VelkiMaster = () => {
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get(
          "https://vlk-server.vercel.app/master-agent"
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
        <h1 className="text-xl text-center font-bold">
          VELKI MASTER AGENT LIST
        </h1>
        <h1 className="text-xl text-center font-bold">
          সাব এডমিন 14 এর অধীনে সুপার এজেন্ট 251 এর অধীনে সর্বমোট মাস্টার এজেন্ট
          আছে 5 জন
        </h1>
      </div>
      {/* Table Data */}
      <div className="overflow-x-auto">
        <table className="table table-zebra md:font-bold lg:font-bold text-center w-full text-sm sm:text-base md:text-lg lg:text-xl">
          {/* Table Head */}
          <thead className="bg-gray-200 ">
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
                <td className="px-2 py-4 border">
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
      {/* SubAdmin-2 */}
      <SubAdmin2></SubAdmin2>
      {/* SubAdmin-3 */}
      <SubAdmin3></SubAdmin3>
      {/* SubAdmin-4 */}
      <SubAdmin4></SubAdmin4>
      {/* SubAdmin-5 */}
      <SubAdmin5></SubAdmin5>
      {/* SubAdmin-6 */}
      <SuperAdmin6></SuperAdmin6>
      {/* SubAdmin-7 */}
      <SubAdmin7></SubAdmin7>
      {/* SubAdmin-8 */}
      <SubAdmin8></SubAdmin8>
      {/* SubAdmin-9 */}
      <SubAdmin9></SubAdmin9>
      {/* SubAdmin-10 */}
      <SubAdmin10></SubAdmin10>
      {/* SubAdmin-11 */}
      <SubAdmin11></SubAdmin11>
    </div>
  );
};

export default VelkiMaster;
