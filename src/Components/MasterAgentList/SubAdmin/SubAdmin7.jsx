import { Link } from "react-router-dom";

const SubAdmin7 = () => {
  const data = [
    {
      id: 1609,
      agent: "মাষ্টার",
      app: "https://i.ibb.co.com/k0b36SS/halal-whatsapp.png",
      phone_number: "+85586953027",
      complain: "অভিযোগ",
    },
    {
      id: 1851,
      agent: "মাষ্টার",
      app: "https://i.ibb.co.com/k0b36SS/halal-whatsapp.png",
      phone_number: "+85515921786",
      complain: "অভিযোগ",
    },
    {
      id: 1617,
      agent: "মাষ্টার",
      app: "https://i.ibb.co.com/k0b36SS/halal-whatsapp.png",
      phone_number: "+85515517941",
      complain: "অভিযোগ",
    },
    {
      id: 1843,
      agent: "মাষ্টার",
      app: "https://i.ibb.co.com/k0b36SS/halal-whatsapp.png",
      phone_number: "+85515519277",
      complain: "অভিযোগ",
    },
    {
      id: 1611,
      agent: "মাষ্টার",
      app: "https://i.ibb.co.com/k0b36SS/halal-whatsapp.png",
      phone_number: "+855967289735",
      complain: "অভিযোগ",
    },
    {
      id: 1610,
      agent: "মাষ্টার",
      app: "https://i.ibb.co.com/k0b36SS/halal-whatsapp.png",
      phone_number: "+85515517980",
      complain: "অভিযোগ",
    },
    {
      id: 1489,
      agent: "মাষ্টার",
      app: "https://i.ibb.co.com/k0b36SS/halal-whatsapp.png",
      phone_number: "+855963563997",
      complain: "অভিযোগ",
    },
    {
      id: 1795,
      agent: "মাষ্টার",
      app: "https://i.ibb.co.com/k0b36SS/halal-whatsapp.png",
      phone_number: "+85515519605",
      complain: "অভিযোগ",
    },
    {
      id: 2433,
      agent: "মাষ্টার",
      app: "https://i.ibb.co.com/k0b36SS/halal-whatsapp.png",
      phone_number: "+85570565080",
      complain: "অভিযোগ",
    },
    {
      id: 1842,
      agent: "মাষ্টার",
      app: "https://i.ibb.co.com/k0b36SS/halal-whatsapp.png",
      phone_number: "+85515519309",
      complain: "অভিযোগ",
    },
    {
      id: 2487,
      agent: "মাষ্টার",
      app: "https://i.ibb.co.com/k0b36SS/halal-whatsapp.png",
      phone_number: "+85570565100",
      complain: "অভিযোগ",
    },
    {
      id: 1224,
      agent: "মাষ্টার",
      app: "https://i.ibb.co.com/k0b36SS/halal-whatsapp.png",
      phone_number: "+85515519254",
      complain: "অভিযোগ",
    },
    {
      id: 1794,
      agent: "মাষ্টার",
      app: "https://i.ibb.co.com/k0b36SS/halal-whatsapp.png",
      phone_number: "+85515519583",
      complain: "অভিযোগ",
    },
    {
      id: 1672,
      agent: "মাষ্টার",
      app: "https://i.ibb.co.com/k0b36SS/halal-whatsapp.png",
      phone_number: "+85593255386",
      complain: "অভিযোগ",
    },
    {
      id: 2430,
      agent: "মাষ্টার",
      app: "https://i.ibb.co.com/k0b36SS/halal-whatsapp.png",
      phone_number: "+85570565092",
      complain: "অভিযোগ",
    },
    {
      id: 1908,
      agent: "মাষ্টার",
      app: "https://i.ibb.co.com/k0b36SS/halal-whatsapp.png",
      phone_number: "+85515827049",
      complain: "অভিযোগ",
    },
    {
      id: 2241,
      agent: "মাষ্টার",
      app: "https://i.ibb.co.com/k0b36SS/halal-whatsapp.png",
      phone_number: "+85593255387",
      complain: "অভিযোগ",
    },
    {
      id: 2587,
      agent: "মাষ্টার",
      app: "https://i.ibb.co.com/k0b36SS/halal-whatsapp.png",
      phone_number: "+85581997487",
      complain: "অভিযোগ",
    },
    {
      id: 2432,
      agent: "মাষ্টার",
      app: "https://i.ibb.co.com/k0b36SS/halal-whatsapp.png",
      phone_number: "+85570565079",
      complain: "অভিযোগ",
    },
    {
      id: 1430,
      agent: "মাষ্টার",
      app: "https://i.ibb.co.com/k0b36SS/halal-whatsapp.png",
      phone_number: "+855962559313",
      complain: "অভিযোগ",
    },
    {
      id: 1673,
      agent: "মাষ্টার",
      app: "https://i.ibb.co.com/k0b36SS/halal-whatsapp.png",
      phone_number: "+85515519253",
      complain: "অভিযোগ",
    },
  ];

  return (
    <div className="mt-10">
      <div>
        <h1 className="text-xl font-bold text-center">
          সাব এডমিন 14 এর অধীনে সুপার এজেন্ট 287 এর অধীনে সর্বমোট মাস্টার এজেন্ট
          আছে 21 জন
        </h1>
      </div>
      <div>
        {/* Responsive Table Container */}
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

export default SubAdmin7;
