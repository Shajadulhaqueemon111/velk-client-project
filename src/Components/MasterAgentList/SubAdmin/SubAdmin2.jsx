import { Link } from "react-router-dom";

const SubAdmin2 = () => {
  const data = [
    {
      id: 2378,
      agent: "মাষ্টার",
      app: "https://i.ibb.co.com/k0b36SS/halal-whatsapp.png",
      phone_number: "+85570564782",
      complain: "অভিযোগ",
    },
    {
      id: 2379,
      agent: "মাষ্টার",
      app: "https://i.ibb.co.com/k0b36SS/halal-whatsapp.png",
      phone_number: "+85570564761",
      complain: "অভিযোগ",
    },
    {
      id: 2097,
      agent: "মাষ্টার",
      app: "https://i.ibb.co.com/k0b36SS/halal-whatsapp.png",
      phone_number: "+85581998238",
      complain: "অভিযোগ",
    },
  ];

  return (
    <div className="mt-10">
      <div>
        <h1 className="text-xl font-bold text-center">
          সাব এডমিন 14 এর অধীনে সুপার এজেন্ট 279 এর অধীনে সর্বমোট মাস্টার এজেন্ট
          আছে 3 জন
        </h1>
      </div>
      <div>
        {/* Table Data */}
        <div className="overflow-x-auto">
          <table className="table table-zebra w-full text-sm md:text-base">
            {/* Table Head */}
            <thead className="bg-gray-200">
              <tr>
                <th className="px-2 py-3">ID</th>
                <th className="px-2 py-3">Agent</th>
                <th className="px-2 py-3">App</th>
                <th className="px-2 py-3">Phone Number</th>
                <th className="px-2 py-3">Complain</th>
              </tr>
            </thead>
            {/* Table Body */}
            <tbody>
              {data.map((item, index) => (
                <tr key={index} className="hover:bg-gray-100">
                  <td className="px-2 py-2">{item.id}</td>
                  <td className="px-2 py-2">{item.agent}</td>
                  <td className="px-2 py-2">
                    <Link to="https://wa.me/+85585292543">
                      <img className="w-8 mx-auto" src={item.app} alt="" />
                    </Link>
                  </td>
                  <td className="px-2 py-2">
                    <Link
                      className="hover:text-red-500"
                      to={`https://wa.me/${item.phone_number}`}
                    >
                      {item.phone_number}
                    </Link>
                  </td>
                  <td className="px-2 py-2">
                    <Link
                      className="hover:text-red-500"
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

export default SubAdmin2;
