import { Link } from "react-router-dom";

const SubAdmin4 = () => {
  const data = [
    {
      id: 2366,
      agent: "মাষ্টার",
      app: "https://i.ibb.co.com/k0b36SS/halal-whatsapp.png",
      phone_number: "+85570564720",
      complain: "অভিযোগ",
    },
    {
      id: 2611,
      agent: "মাষ্টার",
      app: "https://i.ibb.co.com/k0b36SS/halal-whatsapp.png",
      phone_number: "+85570953130",
      complain: "অভিযোগ",
    },
    {
      id: 2818,
      agent: "মাষ্টার",
      app: "https://i.ibb.co.com/k0b36SS/halal-whatsapp.png",
      phone_number: "+60173507219",
      complain: "অভিযোগ",
    },
    {
      id: 2155,
      agent: "মাষ্টার",
      app: "https://i.ibb.co.com/k0b36SS/halal-whatsapp.png",
      phone_number: "+85593619511",
      complain: "অভিযোগ",
    },
    {
      id: 2261,
      agent: "মাষ্টার",
      app: "https://i.ibb.co.com/k0b36SS/halal-whatsapp.png",
      phone_number: "+85593255068",
      complain: "অভিযোগ",
    },
    {
      id: 2856,
      agent: "মাষ্টার",
      app: "https://i.ibb.co.com/k0b36SS/halal-whatsapp.png",
      phone_number: "+855967287831",
      complain: "অভিযোগ",
    },
    {
      id: 2172,
      agent: "মাষ্টার",
      app: "https://i.ibb.co.com/k0b36SS/halal-whatsapp.png",
      phone_number: "+85593619433",
      complain: "অভিযোগ",
    },
    {
      id: 2860,
      agent: "মাষ্টার",
      app: "https://i.ibb.co.com/k0b36SS/halal-whatsapp.png",
      phone_number: "+85570578542",
      complain: "অভিযোগ",
    },
  ];

  return (
    <div className="mt-10">
      <div>
        <h1 className="text-xl font-bold text-center">
          সাব এডমিন 14 এর অধীনে সুপার এজেন্ট 287 এর অধীনে সর্বমোট মাস্টার এজেন্ট
          আছে 8 জন
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

export default SubAdmin4;
